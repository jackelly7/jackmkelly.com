import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import TimelineItem from '@/components/TimelineItem';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto w-full max-w-7xl px-6 py-32 md:px-12">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of building and leading"
      />

      <div className="mt-16 space-y-5">
        <TimelineItem role="ML Software Engineer / Founder" company="Vuely" date="May 2025 – Present" accent="blue">
          Building AI mockup generation for sign companies, scaling toward broader industries, and leading product + engineering execution.
        </TimelineItem>
        <TimelineItem role="Software Engineer" company="ATTY X" date="May 2024 – Aug 2025" accent="amber">
          Rebuilt core ERP infrastructure, shipped dozens of internal tools, and drove measurable growth through customer-facing product work.
        </TimelineItem>
        <TimelineItem role="Project Intern" company="Profit Docs" date="Sep 2023 – Dec 2023" accent="blue">
          Collaborated on product improvements and software delivery workflows in a fast-paced healthcare documentation environment.
        </TimelineItem>
        <TimelineItem role="Missionary Leader" company="LDS Mission" date="2020 – 2022" accent="amber">
          Served in Boston and Mexico City, coordinated 150+ representatives, and developed deep cross-cultural communication skills.
        </TimelineItem>
        <TimelineItem role="English Immersion Instructor" company="Shanghai" date="2019" accent="blue">
          Taught English in Shanghai and learned to connect with students from very different backgrounds.
        </TimelineItem>
      </div>
    </AnimatedSection>
  );
}
