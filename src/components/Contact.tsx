import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect"
        description="If you’re building, hiring, or exploring AI product ideas, I’m always up for a great conversation."
      />

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] p-8">
        <a
          href="mailto:johnmcmillankelly@gmail.com"
          className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] transition hover:text-[var(--accent)]"
        >
          johnmcmillankelly@gmail.com
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--text-soft)] transition hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
