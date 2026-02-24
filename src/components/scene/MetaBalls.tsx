'use client';

import { MarchingCube, MarchingCubes } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color, Group, MathUtils, Vector3 } from 'three';

import BlobInteraction from '@/components/scene/BlobInteraction';
import '@/components/scene/IridescentMaterial';
import { BLOBS } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

function smoothstep(edge0: number, edge1: number, value: number) {
  const x = MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return x * x * (3 - 2 * x);
}

export default function MetaBalls() {
  const groupRefs = useRef<Array<Group | null>>([]);
  const materialRefs = useRef<Array<{ uTime: number; uHover: number; uIntensity: number; uIsMobile: boolean; uColorBias: Vector3 } | null>>([]);
  const mobileFrameAccumulator = useRef(0);

  const mode = useSiteStore((state) => state.mode);
  const hoveredBlob = useSiteStore((state) => state.hoveredBlob);
  const activeBlob = useSiteStore((state) => state.activeBlob);
  const scrollProgress = useSiteStore((state) => state.scrollProgress);
  const isMobile = useSiteStore((state) => state.isMobile);

  const clusterPositions = useMemo<Array<[number, number, number]>>(
    () => [
      [-0.2, 0.25, 0],
      [0.4, 0.2, 0.1],
      [0.1, -0.2, -0.05],
      [-0.35, -0.2, 0.05],
      [0.25, -0.4, -0.1],
    ],
    [],
  );

  useFrame(({ clock, pointer }, delta) => {
    if (isMobile) {
      mobileFrameAccumulator.current += delta;
      if (mobileFrameAccumulator.current < 1 / 30) {
        return;
      }
      mobileFrameAccumulator.current = 0;
    }

    const elapsed = clock.getElapsedTime();
    const landingProgress = smoothstep(0.08, 2, elapsed);
    const loadDropOffset = (1 - landingProgress) * 6.2;
    const breathe = Math.sin(elapsed * 1.1) * 0.05;
    const separation = smoothstep(0.14, 0.6, scrollProgress);

    groupRefs.current.forEach((group, index) => {
      if (!group) {
        return;
      }

      const config = BLOBS[index];
      const cluster = clusterPositions[index] ?? [0, 0, 0];
      const separated = isMobile ? config.mobilePosition : config.desktopPosition;

      const target = new Vector3(
        MathUtils.lerp(cluster[0], separated[0], separation),
        MathUtils.lerp(cluster[1], separated[1], separation),
        MathUtils.lerp(cluster[2], separated[2], separation),
      );

      if (mode === 'loading') {
        target.y += loadDropOffset;
      }

      const isActive = activeBlob === config.id;
      const isHovered = hoveredBlob === config.id;

      if (activeBlob) {
        if (isActive) {
          target.set(0, isMobile ? -0.15 : -0.05, 0);
        } else {
          const edgeX = index % 2 === 0 ? -4.2 : 4.2;
          const edgeY = 1.8 - index * 0.95;
          target.set(edgeX, edgeY, -1.2);
        }
      }

      target.x += pointer.x * 0.15;
      target.y += pointer.y * 0.1;

      group.position.lerp(target, 0.07);

      const idleScale = 0.9 + config.size * 0.5 + breathe;
      const hoverScale = isHovered ? 1.12 : 1;
      const activeScale = activeBlob ? (isActive ? (isMobile ? 2.25 : 2.65) : 0.6) : 1;
      const loadScale = mode === 'loading' ? 0.7 + landingProgress * 0.45 : 1;
      const finalScale = idleScale * hoverScale * activeScale * loadScale;

      group.scale.lerp(new Vector3(finalScale, finalScale, finalScale), 0.09);

      const material = materialRefs.current[index];
      if (material) {
        material.uTime = elapsed;
        material.uHover = MathUtils.lerp(material.uHover, isHovered ? 1 : 0, 0.12);
        material.uIntensity = activeBlob ? (isActive ? 1.3 : 0.8) : 1 + separation * 0.4;
        material.uIsMobile = isMobile;
      }
    });
  });

  return (
    <group>
      {BLOBS.map((blob, index) => (
        <BlobInteraction key={blob.id} section={blob.id}>
          <group ref={(node) => (groupRefs.current[index] = node)}>
            <MarchingCubes
              resolution={isMobile ? 30 : 48}
              maxPolyCount={isMobile ? 18000 : 42000}
              enableUvs={false}
              enableColors={false}
              scale={1.08}
            >
              <MarchingCube strength={0.95 * blob.size} subtract={0.95} color={new Color(0xffffff)} position={[0, 0, 0]} />
              <MarchingCube strength={0.65 * blob.size} subtract={0.95} color={new Color(0xffffff)} position={[0.28, 0.11, -0.08]} />
              <MarchingCube strength={0.5 * blob.size} subtract={0.95} color={new Color(0xffffff)} position={[-0.24, -0.22, 0.06]} />
              <iridescentShaderMaterial
                ref={(node) => {
                  materialRefs.current[index] = node as (typeof materialRefs.current)[number];
                }}
                transparent
                depthWrite={false}
                uColorBias={new Vector3(...blob.colorBias)}
              />
            </MarchingCubes>
          </group>
        </BlobInteraction>
      ))}
    </group>
  );
}
