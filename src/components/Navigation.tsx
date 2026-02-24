'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
          Jack Kelly
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="relative h-9 w-9 rounded-md border border-white/15 bg-white/5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <span className="absolute left-2 right-2 top-3 h-0.5 bg-white" />
          <span className="absolute left-2 right-2 top-[17px] h-0.5 bg-white" />
          <span className="absolute left-2 right-2 top-[22px] h-0.5 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="fixed right-0 top-0 h-screen w-72 border-l border-white/10 bg-[#05070c]/95 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-[var(--text-soft)]">Navigate</p>
              <button
                className="rounded-md border border-white/15 px-2 py-1 text-xs text-[var(--text-soft)]"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-[var(--text-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
