import type { Metadata } from 'next';
import Link from 'next/link';

import BlogCard from '@/components/BlogCard';
import Navigation from '@/components/Navigation';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on AI, building products, and founder life.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--bg-primary)] px-6 pb-20 pt-28 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-soft)]">Thoughts on AI, building products, and founder life.</p>

          {posts.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-10 text-center">
              <p className="text-lg text-[var(--text-soft)]">Coming soon — thoughts on AI, building products, and founder life.</p>
              <Link
                href="/"
                className="mt-6 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-[var(--text-soft)] transition hover:text-white"
              >
                Back home
              </Link>
            </div>
          ) : (
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
