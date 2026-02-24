import Link from 'next/link';

export default function Contact() {
  return (
    <section className="section-stack">
      <h3>Let&apos;s connect</h3>
      <div className="contact-list">
        <Link href="mailto:johnmcmillankelly@gmail.com">johnmcmillankelly@gmail.com</Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </Link>
        <Link href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </Link>
        <Link href="https://x.com" target="_blank" rel="noreferrer">
          Twitter / X
        </Link>
      </div>
    </section>
  );
}
