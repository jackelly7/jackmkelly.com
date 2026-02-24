'use client';

import GlassPanel from '@/components/GlassPanel';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-mono">Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Let&apos;s connect
        </h2>
        <p className="text-white/40 mb-10 text-lg">
          If you&apos;re building, hiring, or exploring AI product ideas, I&apos;m always up for a great conversation.
        </p>

        <GlassPanel className="p-8 md:p-10 inline-block">
          <a
            href="mailto:johnmcmillankelly@gmail.com"
            className="text-xl md:text-2xl font-semibold text-white/80 hover:text-white transition-colors duration-300"
          >
            johnmcmillankelly@gmail.com
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full border border-white/[0.1] text-sm text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
