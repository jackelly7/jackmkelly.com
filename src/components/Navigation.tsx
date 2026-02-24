'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'nav-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent-blue)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          JK
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-white transition-all duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px bg-white transition-all duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-white/8 bg-[#050505]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="border-b border-white/5 py-4 text-lg font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-blue)]"
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
