import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
      <SectionHeading
        eyebrow="Projects"
        title="Products that ship, scale, and create leverage"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
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
          description="I'm actively building. More experiments and production systems are on the way."
          stack={['AI Agents', 'Infra', 'Product']}
        />
      </div>
    </AnimatedSection>
  );
}
