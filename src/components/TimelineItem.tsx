import { ReactNode } from 'react';

type TimelineItemProps = {
  role: string;
  company: string;
  date: string;
  accent?: 'blue' | 'amber';
  children: ReactNode;
};

export default function TimelineItem({ role, company, date, accent = 'blue', children }: TimelineItemProps) {
  const accentColor = accent === 'blue' ? 'var(--accent-blue)' : 'var(--accent-amber)';

  return (
    <article className="exp-card w-full pl-5 pr-6 py-6 md:pl-7 md:pr-8 md:py-7" style={{ '--accent-blue': '#00a8ff', '--accent-amber': '#ff8c00' } as React.CSSProperties}>
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
        style={{ background: `linear-gradient(180deg, ${accentColor}, transparent)` }}
        aria-hidden
      />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          {role}{' '}
          <span className="text-[var(--text-muted)]">@ {company}</span>
        </h3>
        <p className="shrink-0 text-sm text-[var(--text-muted)]">{date}</p>
      </div>
      <p className="mt-3 leading-7 text-[var(--text-soft)]">{children}</p>
    </article>
  );
}
