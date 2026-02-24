import type { ReactNode } from 'react';

type TimelineItemProps = {
  role: string;
  company: string;
  date: string;
  children: ReactNode;
};

export default function TimelineItem({ role, company, date, children }: TimelineItemProps) {
  return (
    <article className="relative border-l border-white/15 pl-4">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent-cyan)]" />
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{date}</p>
      <h3 className="mt-1 text-sm font-semibold text-white">
        {role} <span className="text-[var(--text-soft)]">@ {company}</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{children}</p>
    </article>
  );
}
