import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg-primary)] px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">404</p>
        <h1 className="mt-4 text-4xl font-bold text-[var(--text-primary)]">Page not found</h1>
        <p className="mt-3 text-[var(--text-soft)]">That page doesn&apos;t exist yet.</p>
        <Link href="/" className="mt-6 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-[var(--text-soft)]">
          Return home
        </Link>
      </div>
    </main>
  );
}
