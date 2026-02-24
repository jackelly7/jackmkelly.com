import Link from 'next/link';

import type { BlogPostMeta } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPostMeta;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <p className="meta-row">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </p>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="inline-link">
        Read post
      </Link>
    </article>
  );
}
