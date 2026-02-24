'use client';

import { motion } from 'framer-motion';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassPanel({ children, className = '', delay = 0 }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
