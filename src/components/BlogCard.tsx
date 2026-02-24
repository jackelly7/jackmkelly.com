import Link from 'next/link';

import type { BlogPostMeta } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPostMeta;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[var(--accent)]/40 hover:bg-white/[0.05]">
      <div className="mb-3 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] transition group-hover:text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
