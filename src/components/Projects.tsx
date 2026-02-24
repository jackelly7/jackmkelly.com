'use client';

import GlassPanel from '@/components/GlassPanel';

interface ProjectData {
  title: string;
  highlight?: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
}

const projects: ProjectData[] = [
  {
    title: 'Vuely',
    highlight: 'Featured',
    description: 'AI-powered mockup generation for sign companies. Built with Next.js, React, and Python ML models. Delivers photorealistic renderings and cuts design time by around 80%.',
    stack: ['Next.js', 'React', 'Python', 'ML Models'],
    href: 'https://vuely.co',
    featured: true,
  },
  {
    title: 'ATTY X ERP System',
    description: 'Rebuilt a full ERP system from scratch with 36+ operational tools across sales, finance, and ordering. Launched a customer HVAC ordering platform that drove a 250% increase in monthly installs and was adopted by 200+ employees.',
    stack: ['PHP', 'React', 'SQL', 'TypeScript'],
  },
  {
    title: 'More Projects',
    description: "I'm actively building. More experiments and production systems are on the way.",
    stack: ['AI Agents', 'Infra', 'Product'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-mono">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Products that ship, scale, and create leverage
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <GlassPanel
              key={project.title}
              className={`p-8 group hover:bg-white/[0.05] transition-colors duration-500 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              delay={i * 0.1}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                {project.highlight && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/50 font-mono">
                    {project.highlight}
                  </span>
                )}
              </div>
              <p className="text-white/50 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mt-2"
                >
                  Visit site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
