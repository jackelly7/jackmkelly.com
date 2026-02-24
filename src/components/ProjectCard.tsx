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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`glass-card group relative overflow-hidden p-8 ${
        featured ? 'lg:col-span-2 lg:p-10' : ''
      }`}
    >
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(0,168,255,0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {highlight && (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-amber)]">
            {highlight}
          </p>
        )}

        <h3
          className="text-2xl font-bold tracking-tight text-white md:text-3xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[var(--text-soft)]">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {href ? (
          <p className="mt-8 text-sm font-semibold text-[var(--accent-blue)] transition-colors duration-300 group-hover:text-[var(--accent-amber)]">
            Visit project &rarr;
          </p>
        ) : (
          <p className="mt-8 text-sm text-[var(--text-muted)]">More coming soon</p>
        )}
      </div>
    </motion.article>
  );

  if (!href) return card;

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  );
}
