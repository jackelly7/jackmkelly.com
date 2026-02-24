import Link from 'next/link';

import type { BlogPostMeta } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPostMeta;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="glow-card group block p-6">
      <div className="mb-4 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3
        className="text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent-blue)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
