import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-blue)]">
        {eyebrow}
      </p>
      <h2
        className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-[var(--text-soft)]">{description}</p>
      )}
    </div>
  );
}
