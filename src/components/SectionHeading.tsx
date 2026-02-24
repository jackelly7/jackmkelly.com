'use client';

import AnimatedSection from './AnimatedSection';

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <AnimatedSection className="mb-20">
      <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-muted text-lg mt-4 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-8 w-16 h-px bg-border" />
    </AnimatedSection>
  );
}
