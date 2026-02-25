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

  const hoveredBlob = useSiteStore((state) => state.hoveredBlob);
  const activeBlob = useSiteStore((state) => state.activeBlob);
  const scrollProgress = useSiteStore((state) => state.scrollProgress);
  const isMobile = useSiteStore((state) => state.isMobile);

  const clusterPositions = useMemo<Array<[number, number, number]>>(
    () => [
      [-0.08, 0.1, 0],
      [0.12, 0.06, -0.05],
      [0.15, -0.1, 0.03],
      [-0.08, -0.15, -0.03],
      [0.03, -0.22, 0],
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

    // Dramatic landing: fast drop (0-0.8s), overshoot, rubber-band settle
    const dropPhase = smoothstep(0.05, 0.8, elapsed); // fast drop
    const settlePhase = smoothstep(0.8, 2.0, elapsed); // settle after overshoot
    const overshoot = Math.sin(dropPhase * Math.PI) * 0.4; // overshoot below center
    const loadDropOffset = (1 - dropPhase) * 8.0 - overshoot * (1 - settlePhase);

    // Squash & stretch on landing
    const squashAmount = Math.sin(dropPhase * Math.PI) * 0.15 * (1 - settlePhase);
    const scaleX = 1 + squashAmount;
    const scaleY = 1 - squashAmount;

    // Scale: start small, overshoot to 1.1, settle at 1.0
    const loadScaleBase = MathUtils.lerp(0.3, 1.1, dropPhase);
    const loadScaleSettle = MathUtils.lerp(loadScaleBase, 1.0, settlePhase);
    const landingDone = elapsed > 2.0;

    const breathe = Math.sin(elapsed * 1.1) * 0.025;
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
        MathUtils.lerp(cluster[2], separated[2] - 0.2, separation),
      );

      if (!landingDone) {
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

      target.x += pointer.x * 0.08;
      target.y += pointer.y * 0.06;

      group.position.lerp(target, 0.07);

      const baseScale = config.size + breathe;
      const separationScale = MathUtils.lerp(1.0, 0.8, separation);
      const hoverScale = isHovered ? 1.18 : 1;
      const activeScale = activeBlob ? (isActive ? (isMobile ? 1.75 : 2.05) : 0.42) : 1;
      const loadScale = landingDone ? 1 : loadScaleSettle;
      const finalScale = baseScale * separationScale * hoverScale * activeScale * loadScale;

      const sx = finalScale * (landingDone ? 1 : scaleX);
      const sy = finalScale * (landingDone ? 1 : scaleY);
      const sz = finalScale;

      group.scale.lerp(new Vector3(sx, sy, sz), 0.09);

      const material = materialRefs.current[index];
      if (material) {
        material.uTime = elapsed;
        material.uHover = MathUtils.lerp(material.uHover, isHovered ? 1 : 0, 0.12);
        material.uIntensity = activeBlob ? (isActive ? 1.15 : 0.78) : 0.88 + separation * 0.22;
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
              resolution={isMobile ? 56 : 120}
              maxPolyCount={isMobile ? 60000 : 240000}
              enableUvs={false}
              enableColors={false}
              scale={2.0}
            >
              <MarchingCube strength={0.72 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[0, 0, 0]} />
              <MarchingCube strength={0.52 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[0.18, 0.08, -0.05]} />
              <MarchingCube strength={0.44 * blob.size} subtract={0.88} color={new Color(0xffffff)} position={[-0.16, -0.14, 0.03]} />
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
