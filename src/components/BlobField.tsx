'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import IridescentBlob from './IridescentBlob';

interface BlobConfig {
  id: string;
  position: [number, number, number];
  scale: number;
  noiseScale?: number;
  noiseSpeed?: number;
  displacementStrength?: number;
  mouseInfluence?: number;
}

interface BlobFieldProps {
  scrollProgress: number;
  mouse: React.RefObject<{ x: number; y: number }>;
}

// Hero state: single large centered blob
const heroBlobs: BlobConfig[] = [
  { id: 'main', position: [0, 0, 0], scale: 2.2, noiseScale: 1.0, noiseSpeed: 0.25, displacementStrength: 0.3, mouseInfluence: 0.8 },
];

// Split state: blobs distributed for each section
const sectionBlobs: BlobConfig[] = [
  { id: 'about', position: [2.5, 2.0, -1], scale: 1.0, noiseScale: 1.4, noiseSpeed: 0.2, displacementStrength: 0.2, mouseInfluence: 0.4 },
  { id: 'project1', position: [-2.0, 0.0, -0.5], scale: 0.9, noiseScale: 1.2, noiseSpeed: 0.3, displacementStrength: 0.25, mouseInfluence: 0.5 },
  { id: 'project2', position: [1.5, -0.5, -1], scale: 0.7, noiseScale: 1.3, noiseSpeed: 0.35, displacementStrength: 0.2, mouseInfluence: 0.4 },
  { id: 'experience', position: [-2.5, -2.0, -0.5], scale: 0.6, noiseScale: 1.5, noiseSpeed: 0.25, displacementStrength: 0.2, mouseInfluence: 0.3 },
  { id: 'contact', position: [0, -3.5, 0], scale: 1.2, noiseScale: 1.1, noiseSpeed: 0.4, displacementStrength: 0.3, mouseInfluence: 1.0 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpV3(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export default function BlobField({ scrollProgress, mouse }: BlobFieldProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Phase 0-0.1: hero blob visible
  // Phase 0.1-0.25: hero blob splits into section blobs
  // Phase 0.25-1.0: section blobs in their positions

  const splitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.15));

  // During hero phase, render single blob that splits
  // During section phase, render section blobs

  useFrame(() => {
    if (!groupRef.current) return;
    // Gentle float on the whole group
    groupRef.current.rotation.y = Math.sin(Date.now() * 0.0001) * 0.05;
  });

  if (splitProgress < 0.01) {
    // Pure hero state
    return (
      <group ref={groupRef}>
        {heroBlobs.map((blob) => (
          <IridescentBlob
            key={blob.id}
            position={blob.position}
            scale={blob.scale}
            noiseScale={blob.noiseScale}
            noiseSpeed={blob.noiseSpeed}
            displacementStrength={blob.displacementStrength}
            mouseInfluence={blob.mouseInfluence}
            mouse={mouse}
          />
        ))}
      </group>
    );
  }

  // Transitioning or fully split
  const t = Math.min(1, splitProgress);
  const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // easeInOutCubic

  return (
    <group ref={groupRef}>
      {sectionBlobs.map((blob) => {
        const heroPos: [number, number, number] = [0, 0, 0];
        const pos = lerpV3(heroPos, blob.position, eased);
        const s = lerp(0.3, blob.scale, eased);
        return (
          <IridescentBlob
            key={blob.id}
            position={pos}
            scale={s}
            noiseScale={blob.noiseScale}
            noiseSpeed={blob.noiseSpeed}
            displacementStrength={blob.displacementStrength}
            mouseInfluence={blob.mouseInfluence}
            mouse={mouse}
          />
        );
      })}
    </group>
  );
}
