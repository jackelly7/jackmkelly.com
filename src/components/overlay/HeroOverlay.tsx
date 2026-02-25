'use client';

import { motion } from 'framer-motion';

import { HERO_LINES } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

export default function HeroOverlay() {
  const mode = useSiteStore((state) => state.mode);
  const scrollProgress = useSiteStore((state) => state.scrollProgress);

  const hidden = mode === 'expanded' || mode === 'separated' || scrollProgress > 0.08;

  return (
    <motion.div
      className="hero-overlay"
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -40 : 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {HERO_LINES.name}
      </motion.h1>
      <motion.p
        className="tagline"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {HERO_LINES.tagline}
      </motion.p>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {HERO_LINES.subtitle}
      </motion.p>
      <motion.div className="scroll-hint" animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
        Scroll to explore
      </motion.div>
    </motion.div>
  );
}
