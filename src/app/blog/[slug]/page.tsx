import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllPosts, getPostBySlug } from '@/lib/blog';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { Content, meta } = post;

  return (
    <main className="blog-page">
      <article className="blog-post-shell">
        <Link href="/blog" className="inline-link">
          Back to blog
        </Link>
        <p className="meta-row">{meta.date}</p>
        <h1>{meta.title}</h1>
        <p>{meta.excerpt}</p>
        <div className="blog-content">
          <Content />
        </div>
      </article>
    </main>
  );
}
