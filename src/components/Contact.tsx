import SectionHeading from '@/components/SectionHeading';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
];

export default function Contact() {
  return (
    <div className="space-y-4">
      <SectionHeading eyebrow="Contact" title="Let&apos;s connect" />
      <a href="mailto:johnmcmillankelly@gmail.com" className="block text-lg font-semibold text-white">
        johnmcmillankelly@gmail.com
      </a>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="pill-button text-xs">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
