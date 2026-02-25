'use client';

import { useEffect } from 'react';

import { useSiteStore } from '@/lib/store';

export function useScrollProgress() {
  const setScrollProgress = useSiteStore((state) => state.setScrollProgress);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.documentElement;
      const maxScroll = Math.max(
        root.scrollHeight - root.clientHeight,
        document.body.scrollHeight - window.innerHeight,
        1,
      );
      const currentScroll = window.scrollY || window.pageYOffset || root.scrollTop || 0;
      const raw = currentScroll / maxScroll;
      setScrollProgress(Math.min(1, Math.max(0, raw * 1.1)));
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
