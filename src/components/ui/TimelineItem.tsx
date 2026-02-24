type TimelineItemProps = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export default function TimelineItem({ period, role, company, summary }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <span className="period">{period}</span>
      <h3>{role}</h3>
      <p className="company">{company}</p>
      <p>{summary}</p>
    </article>
  );
}
