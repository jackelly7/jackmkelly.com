import Link from 'next/link';

import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  return (
    <AnimatedSection id="blog" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Blog"
          title="Writing about AI, product, and founder life"
          description="Notes from the arena: what I’m learning while building real systems with AI."
        />
        <Link href="/blog" className="rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--text-soft)] transition hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]">
          View all posts
        </Link>
      </div>

      {latest.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center">
          <p className="text-lg text-[var(--text-soft)]">Coming soon — thoughts on AI, building products, and founder life.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
