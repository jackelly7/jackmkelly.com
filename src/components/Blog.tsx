import Link from 'next/link';

import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  return (
    <AnimatedSection id="blog" className="mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Blog"
          title="Writing about AI, product, and founder life"
        />
        <Link
          href="/blog"
          className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-[var(--text-soft)] transition-all duration-300 hover:border-[var(--accent-blue)]/40 hover:text-[var(--text-primary)]"
        >
          View all posts
        </Link>
      </div>

      {latest.length === 0 ? (
        <div className="glow-card p-10 text-center">
          <p className="text-lg text-[var(--text-soft)]">
            Coming soon — thoughts on AI, building products, and founder life.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
}
