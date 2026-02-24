'use client';

import { useEffect } from 'react';

import { useSiteStore } from '@/lib/store';

export function useScrollProgress() {
  const setScrollProgress = useSiteStore((state) => state.setScrollProgress);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const raw = window.scrollY / maxScroll;
      setScrollProgress(Math.min(1, Math.max(0, raw * 1.45)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [setScrollProgress]);
}
