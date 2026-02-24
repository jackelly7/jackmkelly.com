'use client';

import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  highlight?: string;
  href?: string;
  featured?: boolean;
};

export default function ProjectCard({ title, description, stack, highlight, href, featured = false }: ProjectCardProps) {
  const card = (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-xl shadow-black/30 ${
        featured ? 'md:col-span-2 md:p-8' : ''
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,148,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        {highlight ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">{highlight}</p> : null}
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{title}</h3>
        <p className="mt-3 text-[var(--text-soft)]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-[var(--text-muted)]">
              {tech}
            </span>
          ))}
        </div>

        {href ? (
          <p className="mt-6 text-sm font-medium text-[var(--accent)] transition group-hover:text-[#85d6ff]">Visit project &rarr;</p>
        ) : (
          <p className="mt-6 text-sm text-[var(--text-muted)]">More coming soon</p>
        )}
      </div>
    </motion.article>
  );

  if (!href) {
    return card;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  );
}
