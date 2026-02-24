uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uFresnelPower;
uniform float uIridescentStrength;
uniform float uChromaticAberration;
uniform float uEnvMapIntensity;
uniform samplerCube uEnvMap;
uniform bool uHasEnvMap;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying float vDisplacement;

vec3 iridescentColor(float angle, float t) {
  // Thin-film interference inspired color mapping
  float phase = angle * 6.2831853 + t * 0.5;
  vec3 c1 = vec3(0.15, 0.35, 0.95); // Blue
  vec3 c2 = vec3(0.65, 0.15, 0.85); // Purple
  vec3 c3 = vec3(0.95, 0.25, 0.55); // Pink
  vec3 c4 = vec3(0.15, 0.85, 0.75); // Teal
  vec3 c5 = vec3(0.35, 0.55, 0.95); // Light blue

  float s = sin(phase) * 0.5 + 0.5;
  float s2 = sin(phase * 1.3 + 1.0) * 0.5 + 0.5;
  float s3 = sin(phase * 0.7 + 2.0) * 0.5 + 0.5;

  vec3 color = mix(c1, c2, s);
  color = mix(color, c3, s2 * 0.6);
  color = mix(color, c4, s3 * 0.4);
  color = mix(color, c5, sin(phase * 2.0) * 0.3 + 0.3);

  return color;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);

  // Fresnel
  float fresnel = 1.0 - abs(dot(viewDir, normal));
  fresnel = pow(fresnel, uFresnelPower);

  // Iridescence based on view angle and displacement
  float iriAngle = dot(viewDir, normal) * 0.5 + 0.5;
  iriAngle += vDisplacement * 0.5; // Displacement affects color
  vec3 iridescence = iridescentColor(iriAngle, uTime);

  // Base color - dark metallic
  vec3 baseColor = vec3(0.02, 0.02, 0.04);

  // Environment reflection with chromatic aberration
  vec3 envColor = vec3(0.0);
  if (uHasEnvMap) {
    vec3 reflectDir = reflect(-viewDir, normal);
    // Convert from view space reflect to world space
    vec3 worldReflect = reflectDir;

    float aberration = uChromaticAberration;
    vec3 refractR = worldReflect + normal * aberration;
    vec3 refractG = worldReflect;
    vec3 refractB = worldReflect - normal * aberration;

    envColor.r = textureCube(uEnvMap, refractR).r;
    envColor.g = textureCube(uEnvMap, refractG).g;
    envColor.b = textureCube(uEnvMap, refractB).b;
    envColor *= uEnvMapIntensity;
  } else {
    // Fake environment reflection
    vec3 reflectDir = reflect(-viewDir, normal);
    float envAngle = atan(reflectDir.z, reflectDir.x) / 6.2831853 + 0.5;
    float envHeight = reflectDir.y * 0.5 + 0.5;

    envColor = mix(
      vec3(0.05, 0.05, 0.15),
      vec3(0.1, 0.15, 0.3),
      envHeight
    );

    // Add chromatic aberration to fake env
    float aberration = uChromaticAberration;
    envColor.r += sin(envAngle * 12.0 + uTime) * aberration * 0.5;
    envColor.b += cos(envAngle * 12.0 + uTime * 1.3) * aberration * 0.5;
  }

  // Combine
  vec3 color = baseColor;

  // Add iridescence - strongest at edges (fresnel)
  color = mix(color, iridescence, fresnel * uIridescentStrength);

  // Add environment reflection
  color += envColor * fresnel * 0.8;

  // Rim light
  float rim = pow(fresnel, 3.0);
  color += iridescence * rim * 0.5;

  // Specular highlight
  vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
  vec3 halfDir = normalize(viewDir + lightDir);
  float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);
  color += vec3(1.0, 0.95, 0.9) * spec * 0.6;

  // Secondary light
  vec3 lightDir2 = normalize(vec3(-1.0, 0.5, -1.0));
  vec3 halfDir2 = normalize(viewDir + lightDir2);
  float spec2 = pow(max(dot(normal, halfDir2), 0.0), 32.0);
  color += iridescence * spec2 * 0.3;

  // Subtle ambient
  color += baseColor * 0.1;

  // Tone mapping
  color = color / (color + vec3(1.0));

  // Slight gamma
  color = pow(color, vec3(0.95));

  gl_FragColor = vec4(color, 0.95);
}
