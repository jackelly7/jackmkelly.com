'use client';

import Link from 'next/link';
import GlassPanel from '@/components/GlassPanel';

export default function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-mono">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Writing about AI, product, and founder life
            </h2>
          </div>
          <Link
            href="/blog"
            className="px-5 py-2 rounded-full border border-white/[0.1] text-sm text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-300"
          >
            View all posts
          </Link>
        </div>

        <GlassPanel className="p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl border border-dashed border-white/[0.08] bg-white/[0.01] flex items-center justify-center"
              >
                <span className="text-sm text-white/15 font-mono">Coming soon</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-white/30 text-sm">
            Thoughts on AI, building products, and founder life — coming soon.
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
