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
