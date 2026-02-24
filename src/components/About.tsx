'use client';

import GlassPanel from '@/components/GlassPanel';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-start">
          <GlassPanel className="p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-mono">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              I build products where optimism meets execution.
            </h2>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/60">
              <p>
                I&apos;m the founder of Vuely, where we&apos;re building smart mockups for sign companies and quickly expanding toward every industry that needs visual sales workflows. I&apos;m deeply positive on AI and where this is heading.
              </p>
              <p>
                My view is simple: <span className="font-semibold text-white/90">we need more engineers, not less.</span> At Vuely, we&apos;re on the front lines of AI, buying servers to host AI agents, and we&apos;re still hiring more engineers to push what&apos;s possible.
              </p>
              <p>
                I&apos;ve lived in Shanghai teaching English, served in Boston and Mexico City (I&apos;m fluent in Spanish), and learned to adapt quickly across cultures. I&apos;m married, and being a husband, friend, and future father matters more to me than any title.
              </p>
              <p className="text-white/40 text-sm">
                BYU Information Systems, graduating April 2026. Eagle Scout. Arizona state volleyball champion.
              </p>
            </div>
          </GlassPanel>

          {/* Photo placeholder — positioned for blob to sit behind on desktop */}
          <div className="relative flex items-start justify-center pt-8">
            <GlassPanel className="w-full max-w-sm p-2" delay={0.2}>
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent flex items-center justify-center border border-white/[0.05]">
                <p className="text-sm text-white/20 font-mono">Photo</p>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
