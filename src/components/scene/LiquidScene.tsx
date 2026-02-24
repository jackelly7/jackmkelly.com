'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Group } from 'three';

import Lighting from '@/components/scene/Lighting';
import MetaBalls from '@/components/scene/MetaBalls';

function FloatingRig() {
  const rig = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!rig.current) return;
    const targetX = pointer.y * 0.18;
    const targetY = pointer.x * 0.26;

    rig.current.rotation.x += (targetX - rig.current.rotation.x) * (delta * 1.6);
    rig.current.rotation.y += (targetY - rig.current.rotation.y) * (delta * 1.6);
  });

  return (
    <group ref={rig}>
      <MetaBalls />
    </group>
  );
}

export default function LiquidScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Lighting />
        <FloatingRig />
      </Suspense>
    </Canvas>
  );
}
