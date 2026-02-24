import fs from 'node:fs/promises';
import path from 'node:path';

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
};

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function parseFrontmatter(fileContent: string): Omit<BlogPostMeta, 'slug'> {
  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    return {
      title: 'Untitled post',
      date: new Date().toISOString().split('T')[0] ?? '1970-01-01',
      excerpt: '',
      readTime: '4 min read',
      tags: [],
    };
  }

  const body = frontmatterMatch[1];
  const entries = body
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((acc, line) => {
      const firstColon = line.indexOf(':');
      if (firstColon === -1) return acc;
      const key = line.slice(0, firstColon).trim();
      const value = line.slice(firstColon + 1).trim();
      acc[key] = value;
      return acc;
    }, {});

  return {
    title: entries.title?.replace(/^"|"$/g, '') ?? 'Untitled post',
    date: entries.date?.replace(/^"|"$/g, '') ?? '1970-01-01',
    excerpt: entries.excerpt?.replace(/^"|"$/g, '') ?? '',
    readTime: entries.readTime?.replace(/^"|"$/g, '') ?? '4 min read',
    tags:
      entries.tags
        ?.replace(/^\[|\]$/g, '')
        .split(',')
        .map((tag) => tag.trim().replace(/^"|"$/g, ''))
        .filter(Boolean) ?? [],
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    const mdxFiles = entries.filter((file) => file.endsWith('.mdx'));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const content = await fs.readFile(path.join(BLOG_DIR, file), 'utf8');
        const meta = parseFrontmatter(content);
        return { slug, ...meta };
      }),
    );

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const mdxModule = await import(`@/content/blog/${slug}.mdx`);
    const posts = await getAllPosts();
    const meta = posts.find((post) => post.slug === slug);

    if (!meta) {
      return null;
    }

    return {
      meta,
      Content: mdxModule.default,
    };
  } catch {
    return null;
  }
}
