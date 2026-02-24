type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  tone?: 'dark' | 'lime' | 'purple';
};

const toneClass: Record<NonNullable<ProjectCardProps['tone']>, string> = {
  dark: '',
  lime: 'card-gradient-lime',
  purple: 'card-gradient-purple',
};

export default function ProjectCard({ title, description, stack, href, tone = 'dark' }: ProjectCardProps) {
  const content = (
    <article className={`bento-card h-full ${toneClass[tone]}`}>
      <span className="badge">Project</span>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] text-[var(--text-soft)]">
            {item}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm text-[var(--text-soft)]">{href ? 'Visit project ->' : 'More coming soon'}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
}
