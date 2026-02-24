import About from '@/components/About';
import AnimatedSection from '@/components/AnimatedSection';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import StatsCard from '@/components/StatsCard';
import TerminalCard from '@/components/TerminalCard';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bento-shell">
        <div className="bento-grid">
          <AnimatedSection className="bento-card card-gradient-lime span-6" index={0}>
            <Hero />
          </AnimatedSection>

          <AnimatedSection id="about" className="bento-card span-4" index={1}>
            <About />
          </AnimatedSection>

          <AnimatedSection className="bento-card card-gradient-purple span-2" index={2}>
            <StatsCard />
          </AnimatedSection>

          <AnimatedSection id="projects" className="span-2" index={3}>
            <ProjectCard
              title="Vuely"
              description="AI-powered mockup generation for sign companies with photorealistic outputs, cutting design time by around 80%."
              stack={['Next.js', 'React', 'Python ML']}
              href="https://vuely.co"
              tone="lime"
            />
          </AnimatedSection>

          <AnimatedSection className="span-2" index={4}>
            <ProjectCard
              title="ATTY X ERP System"
              description="Rebuilt the ERP from scratch with 36+ tools and shipped a customer ordering flow that increased installs by 250%."
              stack={['PHP', 'React', 'SQL', 'TypeScript']}
              tone="dark"
            />
          </AnimatedSection>

          <AnimatedSection className="span-2" index={5}>
            <ProjectCard
              title="More Projects"
              description="Building and shipping constantly across AI agents, infra, and product tools."
              stack={['AI Agents', 'Infra', 'Product']}
              tone="purple"
            />
          </AnimatedSection>

          <AnimatedSection id="experience" className="bento-card span-3" index={6}>
            <Experience />
          </AnimatedSection>

          <AnimatedSection className="bento-card span-3" index={7}>
            <TerminalCard />
          </AnimatedSection>

          <AnimatedSection id="blog" className="bento-card span-3" index={8}>
            <Blog />
          </AnimatedSection>

          <AnimatedSection id="contact" className="bento-card card-gradient-lime span-3" index={9}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
