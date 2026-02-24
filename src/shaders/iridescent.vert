uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uDisplacementStrength;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying float vDisplacement;

// Simplex-style 3D noise
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  vUv = uv;

  // Multi-octave noise for organic displacement
  float t = uTime * uNoiseSpeed;
  vec3 noisePos = position * uNoiseScale + t;

  float noise1 = snoise(noisePos) * 0.6;
  float noise2 = snoise(noisePos * 2.0 + 100.0) * 0.3;
  float noise3 = snoise(noisePos * 4.0 + 200.0) * 0.1;
  float displacement = (noise1 + noise2 + noise3) * uDisplacementStrength;

  // Mouse influence — push geometry toward/away from mouse
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  float mouseDist = length(worldPos.xy - uMouse);
  float mouseEffect = smoothstep(2.0, 0.0, mouseDist) * uMouseInfluence;
  displacement += mouseEffect * 0.15;

  vDisplacement = displacement;

  // Displace along normal
  vec3 newPosition = position + normal * displacement;

  // Recompute normal via finite differences
  float eps = 0.01;
  vec3 tangent1 = normalize(cross(normal, vec3(0.0, 1.0, 0.0)));
  if (length(cross(normal, vec3(0.0, 1.0, 0.0))) < 0.01) {
    tangent1 = normalize(cross(normal, vec3(1.0, 0.0, 0.0)));
  }
  vec3 tangent2 = normalize(cross(normal, tangent1));

  vec3 neighbour1 = position + tangent1 * eps;
  vec3 neighbour2 = position + tangent2 * eps;

  vec3 nPos1 = neighbour1 * uNoiseScale + t;
  float d1 = (snoise(nPos1) * 0.6 + snoise(nPos1 * 2.0 + 100.0) * 0.3 + snoise(nPos1 * 4.0 + 200.0) * 0.1) * uDisplacementStrength;

  vec3 nPos2 = neighbour2 * uNoiseScale + t;
  float d2 = (snoise(nPos2) * 0.6 + snoise(nPos2 * 2.0 + 100.0) * 0.3 + snoise(nPos2 * 4.0 + 200.0) * 0.1) * uDisplacementStrength;

  vec3 displacedNeighbour1 = neighbour1 + normal * d1;
  vec3 displacedNeighbour2 = neighbour2 + normal * d2;

  vec3 displacedNormal = normalize(cross(
    displacedNeighbour1 - newPosition,
    displacedNeighbour2 - newPosition
  ));

  vNormal = normalize(normalMatrix * displacedNormal);

  vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
  vViewPosition = -mvPosition.xyz;
  vWorldPosition = (modelMatrix * vec4(newPosition, 1.0)).xyz;

  gl_Position = projectionMatrix * mvPosition;
}
