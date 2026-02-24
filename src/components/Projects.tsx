'use client';

import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Vuely',
    description:
      'AI-powered mockup generation for sign companies. Generates photorealistic renderings, reducing design time by ~80%. Built with Next.js, React, and Python ML models.',
    tags: ['Next.js', 'React', 'Python', 'ML'],
    href: 'https://vuely.co',
    featured: true,
  },
  {
    title: 'ATTY X ERP System',
    description:
      'Rebuilt an entire ERP system from scratch — 36+ operational tools spanning sales dashboards, finance, and ordering. Customer-facing HVAC site drove 250% increase in monthly installs.',
    tags: ['PHP', 'React', 'SQL', 'TypeScript'],
  },
  {
    title: 'More Coming Soon',
    description: 'Always building. Check back for more projects.',
    tags: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Selected work." />

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
