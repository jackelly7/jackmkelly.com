import TimelineItem from '@/components/ui/TimelineItem';

const EXPERIENCE = [
  {
    period: 'May 2025 - Present',
    role: 'ML Software Engineer / Founder',
    company: 'Vuely',
    summary: 'Building AI systems that turn vague requests into production-ready signage mockups.',
  },
  {
    period: 'May 2024 - Aug 2025',
    role: 'Software Engineer',
    company: 'ATTY X',
    summary: 'Owned platform architecture and rebuilt a mission-critical ERP suite used across the company.',
  },
  {
    period: 'Sep - Dec 2023',
    role: 'Project Intern',
    company: 'Profit Docs',
    summary: 'Delivered internal automation features and data-quality tooling for finance workflows.',
  },
  {
    period: '2020 - 2022',
    role: 'Missionary',
    company: 'LDS Mission, Boston & Mexico City',
    summary: 'Learned leadership, service, and communication in high-variation environments.',
  },
  {
    period: '2019',
    role: 'English Immersion Instructor',
    company: 'Shanghai',
    summary: 'Taught English in an immersion setting and adapted quickly across language and culture.',
  },
];

export default function Experience() {
  return (
    <section className="timeline">
      {EXPERIENCE.map((item) => (
        <TimelineItem key={`${item.company}-${item.period}`} {...item} />
      ))}
    </section>
  );
}
