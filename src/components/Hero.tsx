'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-[family-name:var(--font-playfair)] text-[clamp(4rem,14vw,11rem)] leading-[0.85] tracking-[-0.03em] text-center text-ink"
      >
        Jack Kelly
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 text-[11px] md:text-xs uppercase tracking-[0.35em] text-ink-muted text-center font-medium"
      >
        Builder &middot; Optimist &middot; AI Founder
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-4 text-ink-muted text-center max-w-md text-[15px] leading-relaxed"
      >
        Founder of Vuely &middot; BYU &middot; Full-Stack + ML
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-14 flex gap-8 items-center"
      >
        <a
          href="#projects"
          className="text-sm tracking-wide border-b border-ink pb-1 hover:border-ink-muted transition-colors duration-300"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="text-sm tracking-wide text-ink-muted hover:text-ink transition-colors duration-300"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-border"
        />
      </motion.div>
    </section>
  );
}
