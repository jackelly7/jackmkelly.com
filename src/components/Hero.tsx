'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="mesh-background" aria-hidden />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,transparent,#050505)]" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-amber)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Founder &middot; Engineer &middot; Optimist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-glow text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Jack Kelly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--text-soft)] md:text-2xl"
        >
          Builder. Optimist. AI founder who thinks we need{' '}
          <span className="font-semibold text-[var(--accent-blue)]">more engineers</span>, not less.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-4 text-base text-[var(--text-muted)] md:text-lg"
        >
          Founder of Vuely &middot; BYU &middot; Full-Stack + ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#projects"
            className="rounded-full bg-[var(--accent-blue)] px-8 py-3.5 text-sm font-semibold text-[#050505] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,255,0.4)] hover:brightness-110"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)]"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" aria-hidden />
    </section>
  );
}
