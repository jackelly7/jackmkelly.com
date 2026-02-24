import Link from 'next/link';

export default function Blog() {
  return (
    <section className="section-stack">
      <p>Coming soon - thoughts on AI, building products, and founder life.</p>
      <Link href="/blog" className="inline-link">
        Visit blog archive
      </Link>
    </section>
  );
}
