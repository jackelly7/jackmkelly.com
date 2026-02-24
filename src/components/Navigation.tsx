'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(860px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="rounded-full border border-white/15 bg-black/50 px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.08em] text-white">
            JACK KELLY
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-[var(--text-soft)] transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-[var(--text-soft)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {open ? (
          <nav className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-xl px-2 py-1 text-sm text-[var(--text-soft)] transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
