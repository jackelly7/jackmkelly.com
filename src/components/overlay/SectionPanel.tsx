'use client';

import { AnimatePresence, motion } from 'framer-motion';

import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import { PANEL_TITLES, type SectionId } from '@/lib/constants';
import { useSiteStore } from '@/lib/store';

function ActiveSection({ section }: { section: SectionId }) {
  if (section === 'about') return <About />;
  if (section === 'projects') return <Projects />;
  if (section === 'experience') return <Experience />;
  if (section === 'blog') return <Blog />;
  return <Contact />;
}

export default function SectionPanel() {
  const activeBlob = useSiteStore((state) => state.activeBlob);
  const setActiveBlob = useSiteStore((state) => state.setActiveBlob);

  return (
    <AnimatePresence>
      {activeBlob && (
        <motion.section
          className="section-panel"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.985 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <header>
            <h2>{PANEL_TITLES[activeBlob]}</h2>
            <button onClick={() => setActiveBlob(null)} aria-label="Close section panel">
              Back
            </button>
          </header>
          <div className="panel-scroll">
            <ActiveSection section={activeBlob} />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
