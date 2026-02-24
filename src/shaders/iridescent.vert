uniform float uTime;
uniform float uHover;
uniform float uIntensity;
uniform bool uIsMobile;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying float vPulse;

float hash31(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3d(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

  float n00 = mix(n000, n100, f.x);
  float n10 = mix(n010, n110, f.x);
  float n01 = mix(n001, n101, f.x);
  float n11 = mix(n011, n111, f.x);

  float n0 = mix(n00, n10, f.y);
  float n1 = mix(n01, n11, f.y);

  return mix(n0, n1, f.z);
}

void main() {
  vec3 transformed = position;

  float octaves = uIsMobile ? 2.0 : 4.0;
  float noiseA = noise3d(transformed * 2.2 + uTime * 0.55);
  float noiseB = noise3d(transformed * 4.0 - uTime * 0.8);
  float detailMix = uIsMobile ? 0.3 : 0.55;
  float wobble = mix(noiseA, noiseB, detailMix);

  float breathing = sin(uTime * 0.9 + transformed.y * 2.1) * 0.025;
  float hoverPulse = sin(uTime * 3.8 + transformed.x * 9.0) * 0.015 * uHover;
  float displacement = (wobble - 0.5) * 0.13 * uIntensity + breathing + hoverPulse;

  transformed += normal * displacement;

  vec4 world = modelMatrix * vec4(transformed, 1.0);
  vec4 view = viewMatrix * world;

  vNormal = normalize(normalMatrix * normal);
  vWorldPosition = world.xyz;
  vViewDirection = normalize(cameraPosition - world.xyz);
  vPulse = wobble;

  gl_Position = projectionMatrix * view;
}
