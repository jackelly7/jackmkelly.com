import SectionHeading from '@/components/SectionHeading';
import TimelineItem from '@/components/TimelineItem';

export default function Experience() {
  return (
    <div className="space-y-5">
      <SectionHeading eyebrow="Experience" title="Timeline" />
      <div className="space-y-4">
        <TimelineItem role="ML Software Engineer / Founder" company="Vuely" date="May 2025 - Present">
          Building AI mockups for real revenue workflows while leading product and engineering.
        </TimelineItem>
        <TimelineItem role="Software Engineer" company="ATTY X" date="May 2024 - Aug 2025">
          Rebuilt core ERP systems and shipped tools used by 200+ employees.
        </TimelineItem>
        <TimelineItem role="Project Intern" company="Profit Docs" date="Sep 2023 - Dec 2023">
          Delivered product and process improvements in healthcare documentation software.
        </TimelineItem>
        <TimelineItem role="Missionary Leader" company="Boston + Mexico City" date="2020 - 2022">
          Coordinated 150+ representatives and built high-context communication skills.
        </TimelineItem>
        <TimelineItem role="English Immersion Instructor" company="Shanghai" date="2019">
          Taught English and adapted quickly across culture and language.
        </TimelineItem>
      </div>
    </div>
  );
}
