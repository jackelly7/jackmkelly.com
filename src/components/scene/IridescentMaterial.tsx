'use client';

import { shaderMaterial } from '@react-three/drei';
import { extend, type ThreeElement } from '@react-three/fiber';
import { Color, Vector3 } from 'three';

import fragmentShader from '@/shaders/iridescent.frag';
import vertexShader from '@/shaders/iridescent.vert';

const IridescentShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uHover: 0,
    uIntensity: 1,
    uIsMobile: false,
    uColorBias: new Vector3(1, 1, 1),
    uBase: new Color('#050505'),
  },
  vertexShader,
  fragmentShader,
);

extend({ IridescentShaderMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    iridescentShaderMaterial: ThreeElement<typeof IridescentShaderMaterial>;
  }
}

export default IridescentShaderMaterial;
