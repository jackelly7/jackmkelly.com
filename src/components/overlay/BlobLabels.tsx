'use client';

import { motion } from 'framer-motion';

import { BLOBS } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

export default function BlobLabels() {
  const scrollProgress = useSiteStore((state) => state.scrollProgress);
  const mode = useSiteStore((state) => state.mode);
  const activeBlob = useSiteStore((state) => state.activeBlob);
  const hoveredBlob = useSiteStore((state) => state.hoveredBlob);
  const isMobile = useSiteStore((state) => state.isMobile);

  const showLabels = mode !== 'loading' && scrollProgress > 0.15;

  return (
    <div className="blob-label-layer" aria-hidden>
      {BLOBS.map((blob) => {
        const pos = isMobile ? blob.mobilePosition : blob.desktopPosition;
        const x = 50 + pos[0] * 11;
        const y = 45 - pos[1] * 10;

        const isActive = activeBlob === blob.id;
        const isHovered = hoveredBlob === blob.id;

        return (
          <motion.span
            key={blob.id}
            className={`blob-label ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: showLabels ? 1 : 0, y: showLabels ? 0 : 12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {blob.label}
          </motion.span>
        );
      })}
    </div>
  );
}
