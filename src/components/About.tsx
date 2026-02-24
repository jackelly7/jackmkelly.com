import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <AnimatedSection id="about" className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow="About"
        title="I build products where optimism meets execution."
        description="I care about what AI can unlock for real businesses, and I like shipping practical systems that people rely on every day."
      />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-start">
        <div className="space-y-5 text-lg leading-8 text-[var(--text-soft)]">
          <p>
            I&apos;m the founder of Vuely, where we&apos;re building smart mockups for sign companies and quickly expanding toward every industry that needs visual sales workflows.
            I&apos;m deeply positive on AI and where this is heading.
          </p>
          <p>
            My view is simple: <span className="font-semibold text-[var(--text-primary)]">we need more engineers, not less.</span> At Vuely, we&apos;re on the front lines of AI,
            buying servers to host AI agents, and we&apos;re still hiring more engineers to push what&apos;s possible.
          </p>
          <p>
            I&apos;ve lived in Shanghai teaching English, served in Boston and Mexico City (I&apos;m fluent in Spanish), and learned to adapt quickly across cultures.
            I&apos;m married, and being a husband, friend, and future father matters more to me than any title.
          </p>
          <p>
            I&apos;m finishing Information Systems at BYU, graduating in April 2026. Quiet side notes: Eagle Scout and Arizona state volleyball champion.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/0 p-2 shadow-[0_0_60px_-18px_rgba(38,127,255,0.55)]">
            <div className="grid aspect-[4/5] place-items-center rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_35%_20%,rgba(72,195,255,0.22),transparent_48%),#0a0f19]">
              <p className="px-6 text-center text-sm text-[var(--text-muted)]">Photo placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
