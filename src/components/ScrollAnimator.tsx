'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollAnimatorProps {
  children: (scrollProgress: number) => React.ReactNode;
}

export default function ScrollAnimator({ children }: ScrollAnimatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return <>{children(scrollProgress)}</>;
}
