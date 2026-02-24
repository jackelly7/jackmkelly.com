'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import ContentOverlay from '@/components/overlay/ContentOverlay';
import { useSiteStore } from '@/lib/store';

const LiquidScene = dynamic(() => import('@/components/scene/LiquidScene'), {
  ssr: false,
  loading: () => <div className="scene-fallback" aria-hidden />, 
});

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && !!canvas.getContext('webgl');
  } catch {
    return false;
  }
}

export default function HomePage() {
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);

  const setMode = useSiteStore((state) => state.setMode);
  const setIsMobile = useSiteStore((state) => state.setIsMobile);
  const setPrefersReducedMotion = useSiteStore((state) => state.setPrefersReducedMotion);

  useEffect(() => {
    setCanRenderWebGL(supportsWebGL());

    const mediaMobile = window.matchMedia('(max-width: 900px)');
    const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMedia = () => {
      setIsMobile(mediaMobile.matches);
      setPrefersReducedMotion(mediaMotion.matches);
    };

    updateMedia();

    const loadingTimer = window.setTimeout(() => setMode('idle'), 2000);

    mediaMobile.addEventListener('change', updateMedia);
    mediaMotion.addEventListener('change', updateMedia);

    return () => {
      window.clearTimeout(loadingTimer);
      mediaMobile.removeEventListener('change', updateMedia);
      mediaMotion.removeEventListener('change', updateMedia);
    };
  }, [setIsMobile, setMode, setPrefersReducedMotion]);

  return (
    <main className="liquid-page">
      <div className="scene-layer">{canRenderWebGL ? <LiquidScene /> : <div className="scene-fallback" aria-hidden />}</div>
      <ContentOverlay />
      <section className="scroll-space" aria-hidden />
    </main>
  );
}
