'use client';

import { useRef, useEffect, useState, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BlobField from './BlobField';

interface LiquidSceneProps {
  scrollProgress: number;
}

export default function LiquidScene({ scrollProgress }: LiquidSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    // Adjust DPR based on device
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    setDpr(pixelRatio);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize to [-1, 1] range then scale to scene coordinates
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current = { x: x * 4, y: y * 3 };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-3, 2, -4]} intensity={0.4} color="#8080ff" />
        <pointLight position={[0, 3, 2]} intensity={0.6} color="#ff80c0" />
        <Suspense fallback={null}>
          <Environment preset="night" />
          <BlobField scrollProgress={scrollProgress} mouse={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
