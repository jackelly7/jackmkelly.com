export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-2 px-6 md:px-10 py-8 text-sm text-ink-muted">
        <p>&copy; 2026 Jack Kelly</p>
        <p className="italic font-[family-name:var(--font-playfair)]">
          Still bullish on builders.
        </p>
      </div>
    </footer>
  );
}
