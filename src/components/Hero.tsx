'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-10">
      <div className="mesh-background" aria-hidden />
      <div className="mesh-noise" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
        >
          Founder · Engineer · Optimist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-7xl"
        >
          Jack Kelly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-6 max-w-3xl text-balance text-xl text-[var(--text-soft)] md:text-2xl"
        >
          Builder. Optimist. AI founder who thinks we need more engineers, not less.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-4 text-base text-[var(--text-muted)] md:text-lg"
        >
          Founder of Vuely · BYU · Full-Stack + ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
