'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      <div className="grid min-h-screen md:grid-cols-2">
        {/* Left panel — dark text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col justify-center px-6 py-24 md:px-16 lg:px-24"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-amber)]">
            About
          </p>
          <h2
            className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Optimism meets
            <br />
            execution.
          </h2>

          <div className="space-y-5 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              I&apos;m the founder of{' '}
              <span className="font-semibold text-[var(--accent-blue)]">Vuely</span>, where we&apos;re
              building smart mockups for sign companies and quickly expanding toward every industry that
              needs visual sales workflows.
            </p>
            <p>
              My view is simple:{' '}
              <span className="font-semibold text-white">
                we need more engineers, not less.
              </span>{' '}
              At Vuely, we&apos;re on the front lines of AI, buying servers to host AI agents, and
              we&apos;re still hiring more engineers to push what&apos;s possible.
            </p>
            <p>
              I&apos;ve lived in Shanghai teaching English, served in Boston and Mexico City (I&apos;m
              fluent in Spanish), and learned to adapt quickly across cultures. I&apos;m married, and
              being a husband, friend, and future father matters more to me than any title.
            </p>
            <p className="text-[var(--text-muted)]">
              BYU Information Systems, graduating April 2026. Quiet side notes: Eagle Scout and Arizona
              state volleyball champion.
            </p>
          </div>
        </motion.div>

        {/* Right panel — photo + floating geometric shapes */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative flex items-center justify-center bg-[var(--bg-secondary)] px-6 py-24 md:px-16"
        >
          {/* Floating accent geometric shapes */}
          <div
            className="absolute left-[10%] top-[15%] h-32 w-32 rounded-full opacity-40"
            style={{ background: 'var(--accent-blue)', filter: 'blur(60px)' }}
            aria-hidden
          />
          <div
            className="absolute bottom-[20%] right-[12%] h-24 w-24 rounded-full opacity-30"
            style={{ background: 'var(--accent-amber)', filter: 'blur(50px)' }}
            aria-hidden
          />
          <div
            className="absolute right-[30%] top-[60%] h-16 w-16 rotate-45 rounded-lg border border-white/10 opacity-20"
            aria-hidden
          />
          <div
            className="absolute left-[25%] top-[35%] h-12 w-12 rounded-full border border-[var(--accent-blue)]/20 opacity-30"
            aria-hidden
          />

          {/* Photo placeholder */}
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_-20px_rgba(0,168,255,0.3)]">
              <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-[#0a1628] to-[#0a0a0a]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <span className="text-3xl text-[var(--text-muted)]">JK</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">Photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
