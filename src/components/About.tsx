'use client';

import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About" />

        <div className="grid md:grid-cols-5 gap-16 lg:gap-24 items-start">
          <AnimatedSection className="md:col-span-3 space-y-7" delay={0.1}>
            <p className="text-lg md:text-xl leading-[1.8] text-ink-light">
              I&apos;m an AI founder building{' '}
              <a
                href="https://vuely.co"
                className="text-ink border-b border-border hover:border-ink transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vuely
              </a>{' '}
              — smart mockup generation for sign companies, and soon every
              industry. We generate photorealistic renderings that cut design
              time by ~80%.
            </p>
            <p className="text-lg md:text-xl leading-[1.8] text-ink-light">
              I&apos;m extremely optimistic about AI. We need more engineers,
              not less. At Vuely, we&apos;re on the front lines — buying
              servers to host AI agents — and we&apos;re still hiring more
              engineers.
            </p>
            <p className="text-lg md:text-xl leading-[1.8] text-ink-light">
              I&apos;ve lived in Shanghai teaching English, served a mission in
              Boston and Mexico City (fluent in Spanish), and I&apos;m finishing
              my BYU Information Systems degree in April 2026. I&apos;m a
              husband first, builder second.
            </p>
            <p className="text-sm text-ink-muted pt-4 tracking-wide">
              Eagle Scout &middot; Arizona state volleyball champion
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="md:col-span-2 flex justify-center"
            delay={0.3}
          >
            <div className="w-full aspect-[3/4] max-w-xs bg-cream-dark border border-border flex items-center justify-center">
              <span className="text-xs text-ink-muted uppercase tracking-[0.2em]">
                Photo
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
