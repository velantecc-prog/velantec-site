'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-white border-t-2 border-black"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '2px solid #000000',
        width: '100%'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20" style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem', width: '100%' }}>
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '4rem',
            marginBottom: '5rem',
            width: '100%'
          }}
        >
          <div className="md:col-span-2" style={{ width: '100%' }}>
            <h3 className="text-3xl font-bold text-black mb-6" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#000000', marginBottom: '1.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase', fontFamily: 'var(--font-inter), sans-serif' }}>VELANTEC</h3>
            <p className="text-base text-gray-600 font-light mb-8 max-w-md leading-relaxed" style={{ fontSize: '1rem', color: '#525252', fontWeight: 300, marginBottom: '2rem', maxWidth: '28rem', lineHeight: 1.75, letterSpacing: '0.01em' }}>
              Building tomorrow&apos;s digital brands with purpose. We create experiences, products and digital services that connect with people and generate real value.
            </p>
            <div className="flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <a
                href="https://linkedin.com/company/velantec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
                style={{ color: '#000000', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
              >
                <Linkedin className="w-6 h-6" style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a
                href="https://twitter.com/velantec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="Twitter"
                style={{ color: '#000000', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
              >
                <Twitter className="w-6 h-6" style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a
                href="https://instagram.com/velantec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="Instagram"
                style={{ color: '#000000', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
              >
                <Instagram className="w-6 h-6" style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <h4 className="text-sm font-bold text-black mb-6 uppercase tracking-widest" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#000000', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Navigate</h4>
            <ul className="space-y-4 text-base text-gray-600 font-light" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ width: '100%' }}>
            <h4 className="text-sm font-bold text-black mb-6 uppercase tracking-widest" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#000000', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Legal</h4>
            <ul className="space-y-4 text-base text-gray-600 font-light" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/privacy" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black transition-colors" style={{ color: '#525252', textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s ease', letterSpacing: '0.01em' }}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <p className="text-sm text-gray-600 font-light mb-4 md:mb-0" style={{ fontSize: '0.875rem', color: '#737373', fontWeight: 300, margin: 0, letterSpacing: '0.01em' }}>
            © {currentYear} VELANTEC. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-black font-light hover:opacity-70 transition-opacity"
            aria-label="Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#000000',
              fontWeight: 300,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'opacity 0.3s ease',
              letterSpacing: '0.01em'
            }}
          >
            Back to top
            <ArrowUp className="w-4 h-4" style={{ width: '1rem', height: '1rem' }} />
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
            .flex {
              flex-direction: row !important;
            }
          }
        `
      }} />
    </footer>
  );
}
