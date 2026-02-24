import type { Metadata } from 'next';
import Link from 'next/link';

import BlogCard from '@/components/ui/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on AI, building products, and founder life.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="blog-page">
      <div className="blog-shell">
        <h1>Blog</h1>
        <p>Thoughts on AI, building products, and founder life.</p>

        {posts.length === 0 ? (
          <div className="blog-empty-state">
            <p>Coming soon - thoughts on AI, building products, and founder life.</p>
            <Link href="/" className="inline-link">
              Back to splash
            </Link>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
