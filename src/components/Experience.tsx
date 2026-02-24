import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import TimelineItem from '@/components/TimelineItem';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of building and leading"
        description="From operations-heavy systems to AI-first products, every role pushed me to build faster and think bigger."
      />

      <div className="space-y-8 border-l border-white/10 pl-4">
        <TimelineItem role="ML Software Engineer / Founder" company="Vuely" date="May 2025 - Present">
          Building AI mockup generation for sign companies, scaling toward broader industries, and leading product + engineering execution.
        </TimelineItem>
        <TimelineItem role="Software Engineer" company="ATTY X" date="May 2024 - Aug 2025">
          Rebuilt core ERP infrastructure, shipped dozens of internal tools, and drove measurable growth through customer-facing product work.
        </TimelineItem>
        <TimelineItem role="Project Intern" company="Profit Docs" date="Sep 2023 - Dec 2023">
          Collaborated on product improvements and software delivery workflows in a fast-paced healthcare documentation environment.
        </TimelineItem>
        <TimelineItem role="Missionary Leader" company="LDS Mission" date="2020 - 2022">
          Served in Boston and Mexico City, coordinated 150+ representatives, and developed deep cross-cultural communication skills.
        </TimelineItem>
        <TimelineItem role="English Immersion Instructor" company="Shanghai" date="2019">
          Taught English in Shanghai and learned to connect with students from very different backgrounds.
        </TimelineItem>
      </div>
    </AnimatedSection>
  );
}
