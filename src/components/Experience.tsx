'use client';

import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="A timeline of building and leading."
        />

        <AnimatedSection>
          <div>
            <TimelineItem
              role="ML Software Engineer / Founder"
              company="Vuely"
              date="May 2025 — Present"
            >
              Building AI mockup generation for sign companies, scaling toward
              broader industries, and leading product + engineering execution.
            </TimelineItem>
            <TimelineItem
              role="Software Engineer"
              company="ATTY X"
              date="May 2024 — Aug 2025"
            >
              Rebuilt core ERP infrastructure, shipped dozens of internal tools,
              and drove measurable growth through customer-facing product work.
            </TimelineItem>
            <TimelineItem
              role="Project Intern"
              company="Profit Docs"
              date="Sep — Dec 2023"
            >
              Collaborated on product improvements and software delivery
              workflows in a fast-paced healthcare documentation environment.
            </TimelineItem>
            <TimelineItem
              role="Missionary Leader"
              company="LDS Mission — Boston &amp; Mexico City"
              date="2020 — 2022"
            >
              Coordinated 150+ representatives and developed deep cross-cultural
              communication skills. Fluent in Spanish.
            </TimelineItem>
            <TimelineItem
              role="English Immersion Instructor"
              company="Shanghai"
              date="2019"
            >
              Taught English in Shanghai and learned to connect with students
              from very different backgrounds.
            </TimelineItem>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
