'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  featured,
}: ProjectCardProps) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl tracking-tight">
          {title}
        </h3>
        {href && (
          <span className="text-ink-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            &rarr;
          </span>
        )}
      </div>
      <p className="text-ink-light leading-relaxed text-[15px] md:text-base mb-8">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.1em] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const className = `block bg-cream p-8 md:p-10 border border-border hover:border-ink/30 transition-colors duration-500 group ${
    featured ? 'md:col-span-2 md:p-14' : ''
  }`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {inner}
    </motion.div>
  );
}
