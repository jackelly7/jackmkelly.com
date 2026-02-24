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
  vec3 a = vec3(0.44, 0.2, 0.55);
  vec3 b = vec3(0.46, 0.63, 0.38);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.14, 0.33, 0.72);
  return a + b * cos(6.28318 * (c * x + d));
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDirection);

  float fresnel = pow(1.0 - sat(dot(n, v)), 2.4);
  float highlight = pow(sat(dot(reflect(-v, n), vec3(0.2, 0.9, 0.3))), 8.0);
  float wave = sin(vWorldPosition.y * 6.0 + vWorldPosition.x * 4.5 + uTime * 0.8) * 0.5 + 0.5;
  float chromaShift = fresnel * 1.25 + wave * 0.25 + vPulse * 0.3 + uHover * 0.35;

  vec3 spectrum = spectralPalette(chromaShift + uTime * 0.03);
  vec3 deepBase = vec3(0.035, 0.038, 0.05);
  vec3 liquid = mix(deepBase, spectrum * uColorBias, sat(fresnel * 0.95 + 0.2));

  float dispersion = uIsMobile ? 0.07 : 0.18;
  vec3 rgbShift = vec3(
    sat(chromaShift + dispersion),
    sat(chromaShift),
    sat(chromaShift - dispersion)
  );

  vec3 chromatic = spectralPalette(rgbShift.r) * 0.65 +
    spectralPalette(rgbShift.g) * 0.55 +
    spectralPalette(rgbShift.b) * 0.45;

  vec3 color = liquid + chromatic * (0.14 + fresnel * 0.25);
  color += highlight * vec3(1.3, 1.15, 1.5) * (0.2 + uHover * 0.35);
  color += vec3(0.1, 0.16, 0.22) * uIntensity * 0.08;

  gl_FragColor = vec4(color, 0.92);
}
