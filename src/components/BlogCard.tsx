import Link from 'next/link';

import type { BlogPostMeta } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPostMeta;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="bento-card block h-full">
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
