'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from '@/shaders/iridescent';

interface IridescentBlobProps {
  position?: [number, number, number];
  scale?: number;
  noiseScale?: number;
  noiseSpeed?: number;
  displacementStrength?: number;
  mouseInfluence?: number;
  fresnelPower?: number;
  mouse: React.RefObject<{ x: number; y: number }>;
}

export default function IridescentBlob({
  position = [0, 0, 0],
  scale = 1,
  noiseScale = 1.2,
  noiseSpeed = 0.3,
  displacementStrength = 0.25,
  mouseInfluence = 0.5,
  fresnelPower = 2.5,
  mouse,
}: IridescentBlobProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uMouseInfluence: { value: mouseInfluence },
      uNoiseScale: { value: noiseScale },
      uNoiseSpeed: { value: noiseSpeed },
      uDisplacementStrength: { value: displacementStrength },
      uColor1: { value: new THREE.Color('#2060ff') },
      uColor2: { value: new THREE.Color('#a020f0') },
      uColor3: { value: new THREE.Color('#ff2080') },
      uFresnelPower: { value: fresnelPower },
      uIridescentStrength: { value: 1.0 },
      uChromaticAberration: { value: 0.08 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = state.clock.elapsedTime;
    if (mouse.current) {
      material.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
