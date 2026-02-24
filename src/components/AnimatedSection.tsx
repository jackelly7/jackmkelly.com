'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
