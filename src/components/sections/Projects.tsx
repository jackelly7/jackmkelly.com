import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  return (
    <section className="project-grid">
      <ProjectCard
        featured
        title="Vuely"
        description="AI-powered mockup generation for sign companies."
        stack="Next.js · React · Python ML"
        impact="~80% reduction in design time"
        href="https://vuely.co"
      />
      <ProjectCard
        title="ATTY X ERP System"
        description="Rebuilt the ERP from scratch with workflows spanning operations, fulfillment, and installs."
        stack="TypeScript · Next.js · Internal Platform"
        impact="36+ tools adopted by 200+ employees, 250% increase in monthly installs"
      />
      <ProjectCard
        title="More Projects"
        description="I am actively shipping and documenting more full-stack + ML work."
        stack="Product · AI · Systems"
        impact="More coming soon"
      />
    </section>
  );
}
