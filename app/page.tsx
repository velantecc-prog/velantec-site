import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Vision from '@/components/Vision';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ minHeight: '100vh', width: '100%' }}>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Vision />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
