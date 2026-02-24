import Link from 'next/link';

import type { BlogPostMeta } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPostMeta;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-cream p-8 border border-border hover:border-ink/30 transition-colors duration-500"
    >
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-ink-muted mb-4">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-light">
        {post.excerpt}
      </p>
      {post.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-[0.12em] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
