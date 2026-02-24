import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <>
      <ProjectCard
        title="Vuely"
        description="AI-powered mockup generation for sign companies with photorealistic outputs, cutting design time by around 80%."
        stack={['Next.js', 'React', 'Python ML']}
        href="https://vuely.co"
        tone="lime"
      />
      <ProjectCard
        title="ATTY X ERP System"
        description="Rebuilt the ERP from scratch with 36+ tools and shipped a customer ordering flow that increased installs by 250%."
        stack={['PHP', 'React', 'SQL', 'TypeScript']}
        tone="dark"
      />
      <ProjectCard
        title="More Projects"
        description="Building and shipping constantly across AI agents, infra, and product tools."
        stack={['AI Agents', 'Infra', 'Product']}
        tone="purple"
      />
    </>
  );
}
