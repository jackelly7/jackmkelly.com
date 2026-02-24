'use client';

import AnimatedSection from './AnimatedSection';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Let&apos;s connect
          </h2>
          <div className="mt-8 w-16 h-px bg-border mx-auto" />

          <a
            href="mailto:johnmcmillankelly@gmail.com"
            className="inline-block mt-12 text-xl md:text-2xl text-ink-light hover:text-ink border-b border-border hover:border-ink transition-colors duration-300 pb-1"
          >
            johnmcmillankelly@gmail.com
          </a>

          <div className="mt-10 flex justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
