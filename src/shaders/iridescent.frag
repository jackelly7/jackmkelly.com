uniform float uTime;
uniform float uHover;
uniform float uIntensity;
uniform bool uIsMobile;
uniform vec3 uColorBias;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying float vPulse;

float sat(float value) {
  return clamp(value, 0.0, 1.0);
}

vec3 spectralPalette(float x) {
  vec3 a = vec3(0.28, 0.29, 0.34);
  vec3 b = vec3(0.22, 0.24, 0.2);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.09, 0.21, 0.36);
  return a + b * cos(6.28318 * (c * x + d));
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDirection);

  float fresnel = pow(1.0 - sat(dot(n, v)), 2.9);
  float highlight = pow(sat(dot(reflect(-v, n), vec3(0.24, 0.91, 0.32))), 11.0);
  float wave = sin(vWorldPosition.y * 6.0 + vWorldPosition.x * 4.5 + uTime * 0.8) * 0.5 + 0.5;
  float chromaShift = fresnel * 0.68 + wave * 0.16 + vPulse * 0.1 + uHover * 0.15;

  vec3 spectrum = spectralPalette(chromaShift + uTime * 0.02);
  vec3 deepBase = vec3(0.02, 0.022, 0.028);
  vec3 liquid = mix(deepBase, spectrum * uColorBias, sat(fresnel * 0.85 + 0.2));

  float dispersion = uIsMobile ? 0.03 : 0.08;
  vec3 rgbShift = vec3(
    sat(chromaShift + dispersion),
    sat(chromaShift),
    sat(chromaShift - dispersion)
  );

  vec3 chromatic = spectralPalette(rgbShift.r) * 0.32 +
    spectralPalette(rgbShift.g) * 0.26 +
    spectralPalette(rgbShift.b) * 0.22;

  vec3 color = liquid + chromatic * (0.05 + fresnel * 0.08);
  color += highlight * vec3(0.72, 0.74, 0.8) * (0.11 + uHover * 0.1);
  color += vec3(0.08, 0.09, 0.11) * uIntensity * 0.04;

  gl_FragColor = vec4(color, 0.94);
}
