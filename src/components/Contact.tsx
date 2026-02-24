'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center md:px-12"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-blue)]">
          Contact
        </p>
        <h2
          className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Let&apos;s connect
        </h2>
        <p className="mb-10 max-w-lg text-lg text-[var(--text-soft)]">
          If you&apos;re building, hiring, or exploring AI product ideas, I&apos;m always up for a great conversation.
        </p>

        <a
          href="mailto:johnmcmillankelly@gmail.com"
          className="mb-10 text-2xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent-blue)] md:text-3xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          johnmcmillankelly@gmail.com
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-[var(--text-soft)] transition-all duration-300 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
