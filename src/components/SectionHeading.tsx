import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-[var(--text-soft)]">{description}</p> : null}
    </div>
  );
}
