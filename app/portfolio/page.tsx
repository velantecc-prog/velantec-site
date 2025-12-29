import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Portfolio | VELANTEC Brands',
  description: 'Explore the innovative digital brands under VELANTEC: mrassistant.ai, buzzzbuzzz.com, growthlab.sg, and onestopsg.com.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ minHeight: '100vh', width: '100%' }}>
      <Navigation />
      <section 
        className="pt-32 pb-24 bg-white border-b-2 border-black"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #000000',
          width: '100%'
        }}
      >
        <div 
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
          style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}
        >
          <div 
            className="text-center mb-16"
            style={{ textAlign: 'left', marginBottom: '4rem', width: '100%' }}
          >
            <h1 
              className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                width: '100%',
                textAlign: 'left'
              }}
            >
              Our Portfolio
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl"
              style={{
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                color: '#525252',
                fontWeight: 300,
                maxWidth: '48rem',
                lineHeight: 1.75,
                letterSpacing: '0.01em',
                textAlign: 'left'
              }}
            >
              A collection of innovative digital brands, each transforming their industry 
              through purpose-driven technology and exceptional design.
            </p>
          </div>
        </div>
      </section>
      <Portfolio showHeading={false} showButton={false} />
      <Footer />
    </main>
  );
}
