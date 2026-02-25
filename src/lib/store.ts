import { create } from 'zustand';

import type { SectionId } from '@/lib/constants';

type InteractionMode = 'loading' | 'idle' | 'separated' | 'expanded';

type SiteState = {
  mode: InteractionMode;
  scrollProgress: number;
  hoveredBlob: SectionId | null;
  activeBlob: SectionId | null;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  setMode: (mode: InteractionMode) => void;
  setScrollProgress: (progress: number) => void;
  setHoveredBlob: (section: SectionId | null) => void;
  setActiveBlob: (section: SectionId | null) => void;
  setIsMobile: (value: boolean) => void;
  setPrefersReducedMotion: (value: boolean) => void;
};

export const useSiteStore = create<SiteState>((set) => ({
  mode: 'loading',
  scrollProgress: 0,
  hoveredBlob: null,
  activeBlob: null,
  isMobile: false,
  prefersReducedMotion: false,
  setMode: (mode) => set({ mode }),
  setScrollProgress: (scrollProgress) =>
    set((state) => {
      const nextMode =
        state.activeBlob !== null
          ? 'expanded'
          : scrollProgress > 0.24
            ? 'separated'
            : 'idle';

      return { mode: nextMode, scrollProgress };
    }),
  setHoveredBlob: (hoveredBlob) => set({ hoveredBlob }),
  setActiveBlob: (activeBlob) =>
    set((state) => ({
      activeBlob,
      mode: activeBlob ? 'expanded' : state.scrollProgress > 0.24 ? 'separated' : 'idle',
    })),
  setIsMobile: (isMobile) => set({ isMobile }),
  setPrefersReducedMotion: (prefersReducedMotion) => set({ prefersReducedMotion }),
}));
