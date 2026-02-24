import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string;
  impact: string;
  href?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  stack,
  impact,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="meta">{stack}</p>
      <p className="impact">{impact}</p>
      {href ? (
        <Link href={href} target="_blank" rel="noreferrer" className="inline-link">
          Visit project
        </Link>
      ) : (
        <span className="inline-link muted">More coming soon</span>
      )}
    </article>
  );
}
