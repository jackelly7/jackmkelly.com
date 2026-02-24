'use client';

import { useMemo } from 'react';

import type { SectionId } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

export function useBlobState(section: SectionId) {
  const hoveredBlob = useSiteStore((state) => state.hoveredBlob);
  const activeBlob = useSiteStore((state) => state.activeBlob);

  return useMemo(
    () => ({
      isHovered: hoveredBlob === section,
      isActive: activeBlob === section,
    }),
    [activeBlob, hoveredBlob, section],
  );
}
