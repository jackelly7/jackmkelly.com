'use client';

import GlassPanel from '@/components/GlassPanel';

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'ML Software Engineer / Founder',
    company: 'Vuely',
    date: 'May 2025 - Present',
    description: 'Building AI mockup generation for sign companies, scaling toward broader industries, and leading product + engineering execution.',
  },
  {
    role: 'Software Engineer',
    company: 'ATTY X',
    date: 'May 2024 - Aug 2025',
    description: 'Rebuilt core ERP infrastructure, shipped dozens of internal tools, and drove measurable growth through customer-facing product work.',
  },
  {
    role: 'Project Intern',
    company: 'Profit Docs',
    date: 'Sep 2023 - Dec 2023',
    description: 'Collaborated on product improvements and software delivery workflows in a fast-paced healthcare documentation environment.',
  },
  {
    role: 'Missionary Leader',
    company: 'LDS Mission',
    date: '2020 - 2022',
    description: 'Served in Boston and Mexico City, coordinated 150+ representatives, and developed deep cross-cultural communication skills.',
  },
  {
    role: 'English Immersion Instructor',
    company: 'Shanghai',
    date: '2019',
    description: 'Taught English in Shanghai and learned to connect with students from very different backgrounds.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 font-mono">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            A timeline of building and leading
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={exp.company + exp.date} className="relative flex gap-6 items-start">
                {/* Timeline dot */}
                <div className="relative z-10 mt-6 w-[23px] flex-shrink-0 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10" />
                </div>

                <GlassPanel className="flex-1 p-6 md:p-8" delay={i * 0.08}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-sm text-white/40 font-mono">{exp.company}</p>
                    </div>
                    <span className="text-xs text-white/30 font-mono whitespace-nowrap">{exp.date}</span>
                  </div>
                  <p className="text-white/50 leading-relaxed text-sm md:text-base">{exp.description}</p>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
