import Link from 'next/link';

import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" className="py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on AI, building products, and founder life."
          />
          {latest.length > 0 && (
            <AnimatedSection>
              <Link
                href="/blog"
                className="text-sm text-ink-muted border-b border-border hover:border-ink hover:text-ink transition-colors duration-300 pb-0.5"
              >
                View all posts
              </Link>
            </AnimatedSection>
          )}
        </div>

        {latest.length === 0 ? (
          <AnimatedSection>
            <div className="border border-dashed border-border py-16 px-8 text-center">
              <p className="text-ink-muted text-lg italic font-[family-name:var(--font-playfair)]">
                Coming soon — notes from the arena.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
