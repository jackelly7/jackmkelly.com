export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[var(--bg-primary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-[var(--text-muted)] md:flex-row md:px-12">
        <p>&copy; 2026 Jack Kelly</p>
        <p className="text-[var(--text-muted)]/60">Still bullish on builders.</p>
      </div>
    </footer>
  );
}
