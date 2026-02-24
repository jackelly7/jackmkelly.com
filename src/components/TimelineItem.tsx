import { ReactNode } from 'react';

type TimelineItemProps = {
  role: string;
  company: string;
  date: string;
  children: ReactNode;
};

export default function TimelineItem({ role, company, date, children }: TimelineItemProps) {
  return (
    <article className="relative pl-10">
      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)]" />
      <span className="absolute left-[7px] top-6 h-[calc(100%+2.2rem)] w-px bg-white/15 last:hidden" aria-hidden />

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            {role} <span className="text-[var(--text-muted)]">@ {company}</span>
          </h3>
          <p className="text-sm text-[var(--text-muted)]">{date}</p>
        </div>
        <p className="mt-3 leading-7 text-[var(--text-soft)]">{children}</p>
      </div>
    </article>
  );
}
