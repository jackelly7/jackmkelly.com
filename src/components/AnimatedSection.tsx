'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  index?: number;
};

export default function AnimatedSection({ id, className, children, index = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: index * 0.08, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
