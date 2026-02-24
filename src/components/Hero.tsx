import SectionHeading from '@/components/SectionHeading';

export default function Hero() {
  return (
    <div className="space-y-5">
      <SectionHeading eyebrow="Builder" title="Jack Kelly" description="Builder. Optimist. AI founder." />
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--text-soft)]">
        Founder of Vuely. BYU Information Systems. Full-stack + ML engineer building practical AI products for teams that need leverage.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="pill-button bg-[rgba(163,230,53,0.18)] text-white">
          See my work
        </a>
        <a href="#contact" className="pill-button">
          Get in touch
        </a>
      </div>
    </div>
  );
}
