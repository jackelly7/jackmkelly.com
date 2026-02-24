import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow="Projects"
        title="Products that ship, scale, and create leverage"
        description="I like hard technical problems tied to real outcomes: faster workflows, stronger operations, and better customer experiences."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          featured
          title="Vuely"
          highlight="Featured"
          description="AI-powered mockup generation for sign companies. Built with Next.js, React, and Python ML models. Delivers photorealistic renderings and cuts design time by around 80%."
          stack={['Next.js', 'React', 'Python', 'ML Models']}
          href="https://vuely.co"
        />
        <ProjectCard
          title="ATTY X ERP System"
          description="Rebuilt a full ERP system from scratch with 36+ operational tools across sales, finance, and ordering. Launched a customer HVAC ordering platform that drove a 250% increase in monthly installs and was adopted by 200+ employees."
          stack={['PHP', 'React', 'SQL', 'TypeScript']}
        />
        <ProjectCard
          title="More Projects"
          description="I’m actively building. More experiments and production systems are on the way."
          stack={['AI Agents', 'Infra', 'Product']}
        />
      </div>
    </AnimatedSection>
  );
}
