import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-x-hidden bg-[var(--bg-primary)]">
        {/* Floating blurred orb decorations */}
        <div className="floating-orb floating-orb-blue" style={{ width: 500, height: 500, top: '15%', left: '-8%' }} aria-hidden />
        <div className="floating-orb floating-orb-amber" style={{ width: 400, height: 400, top: '40%', right: '-6%', animationDelay: '5s' }} aria-hidden />
        <div className="floating-orb floating-orb-blue" style={{ width: 350, height: 350, top: '65%', left: '10%', animationDelay: '10s' }} aria-hidden />
        <div className="floating-orb floating-orb-amber" style={{ width: 300, height: 300, top: '85%', right: '15%', animationDelay: '15s' }} aria-hidden />

        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
