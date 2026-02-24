import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mb-6 mt-10 text-4xl font-bold tracking-tight" {...props} />,
    h2: (props) => <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight" {...props} />,
    h3: (props) => <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />,
    p: (props) => <p className="mb-5 leading-8 text-[var(--text-soft)]" {...props} />,
    ul: (props) => <ul className="mb-5 list-disc space-y-2 pl-6 text-[var(--text-soft)]" {...props} />,
    ol: (props) => <ol className="mb-5 list-decimal space-y-2 pl-6 text-[var(--text-soft)]" {...props} />,
    a: (props) => (
      <a
        className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-4 transition hover:decoration-[var(--accent)]"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-6 border-l-2 border-[var(--accent)]/50 bg-[var(--panel)] p-4 italic text-[var(--text-soft)]"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded-md bg-[var(--panel)] px-1.5 py-0.5 font-mono text-sm text-[var(--text-primary)]"
        {...props}
      />
    ),
    ...components,
  };
}
