import Link from 'next/link';

import { getAllPosts } from '@/lib/blog';

export default async function Blog() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="badge">Blog</span>
        <Link href="/blog" className="pill-button px-3 py-1 text-xs">
          All posts
        </Link>
      </div>
      <h2 className="section-title">Thoughts on AI and founder life</h2>
      {latest.length === 0 ? (
        <p className="section-copy">Coming soon — thoughts on AI, building products, and founder life.</p>
      ) : (
        <ul className="space-y-3">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block rounded-xl border border-white/15 bg-white/5 p-3 transition hover:bg-white/10">
                <p className="text-sm font-semibold text-white">{post.title}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {post.date} · {post.readTime}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
