'use client';

import type { PropsWithChildren } from 'react';

import type { SectionId } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

type BlobInteractionProps = PropsWithChildren<{
  section: SectionId;
}>;

export default function BlobInteraction({ section, children }: BlobInteractionProps) {
  const isMobile = useSiteStore((state) => state.isMobile);
  const hoveredBlob = useSiteStore((state) => state.hoveredBlob);
  const setHoveredBlob = useSiteStore((state) => state.setHoveredBlob);
  const setActiveBlob = useSiteStore((state) => state.setActiveBlob);

  return (
    <group
      onPointerOver={(event) => {
        event.stopPropagation();
        setHoveredBlob(section);
      }}
      onPointerOut={() => setHoveredBlob(null)}
      onClick={(event) => {
        event.stopPropagation();

        if (isMobile) {
          if (hoveredBlob === section) {
            setActiveBlob(section);
          } else {
            setHoveredBlob(section);
          }
          return;
        }

        setActiveBlob(section);
      }}
    >
      {children}
    </group>
  );
}
