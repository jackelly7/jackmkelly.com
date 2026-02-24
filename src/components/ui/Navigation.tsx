'use client';

import { motion } from 'framer-motion';

import { BLOBS } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

export default function Navigation() {
  const mode = useSiteStore((state) => state.mode);
  const activeBlob = useSiteStore((state) => state.activeBlob);
  const setActiveBlob = useSiteStore((state) => state.setActiveBlob);

  if (mode === 'loading' || mode === 'idle') {
    return null;
  }

  return (
    <motion.nav
      className="top-nav"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <span className="brand">Jack Kelly</span>
      <div>
        {BLOBS.map((blob) => (
          <button
            key={blob.id}
            className={activeBlob === blob.id ? 'active' : ''}
            onClick={() => setActiveBlob(blob.id)}
          >
            {blob.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
