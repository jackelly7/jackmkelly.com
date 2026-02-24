const stats = [
  '3 countries lived in',
  '2 languages spoken',
  '200+ employees using my tools',
  '80% faster with AI',
];

export default function StatsCard() {
  return (
    <div className="h-full space-y-3">
      <span className="badge">Stats</span>
      <h2 className="section-title">By the numbers</h2>
      <ul className="space-y-2">
        {stats.map((stat) => (
          <li key={stat} className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-[var(--text-soft)]">
            {stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
