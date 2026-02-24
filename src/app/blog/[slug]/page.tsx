import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Navigation from '@/components/Navigation';
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
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--bg-primary)] px-6 pb-24 pt-28 md:px-10">
        <article className="mx-auto w-full max-w-3xl">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent)]">{meta.date}</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">{meta.title}</h1>
          <p className="mt-4 text-[var(--text-soft)]">{meta.excerpt}</p>
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="blog-content max-w-none">
              <Content />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
