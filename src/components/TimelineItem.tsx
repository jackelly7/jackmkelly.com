'use client';

import AnimatedSection from './AnimatedSection';

interface TimelineItemProps {
  date: string;
  role: string;
  company: string;
  children: React.ReactNode;
}

export default function TimelineItem({
  date,
  role,
  company,
  children,
}: TimelineItemProps) {
  return (
    <AnimatedSection>
      <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-10 border-t border-border">
        <span className="font-[family-name:var(--font-playfair)] text-ink-muted text-sm md:text-[15px] italic">
          {date}
        </span>
        <div>
          <h3 className="text-lg font-medium tracking-tight">{role}</h3>
          <p className="text-ink-muted text-sm mt-1">{company}</p>
          <p className="text-ink-light mt-3 leading-relaxed text-[15px]">
            {children}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
