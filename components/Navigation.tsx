'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: '100%',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          borderBottom: isScrolled ? '1px solid #000000' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
        }}
      >
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem',
          width: '100%' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '4rem',
            width: '100%' 
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                style={{
                  fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '-0.02em',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontFamily: 'var(--font-inter), sans-serif',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                VELANTEC
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div 
              className="desktop-nav"
              style={{
                display: isDesktop ? 'flex' : 'none',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 3vw, 2.5rem)'
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="group relative"
                    style={{
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                      fontWeight: 300,
                      color: '#000000',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      padding: '0.5rem 0'
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-black"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '1px',
                        backgroundColor: '#000000'
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="mobile-menu-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: isDesktop ? 'none' : 'flex',
                color: '#000000',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                lineHeight: 0,
                minWidth: '44px',
                minHeight: '44px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} style={{ width: '1.5rem', height: '1.5rem', display: 'block' }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} style={{ width: '1.5rem', height: '1.5rem', display: 'block' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '4rem',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              zIndex: 40,
              borderBottom: '2px solid #000000',
              width: '100%',
              overflow: 'hidden',
              maxHeight: 'calc(100vh - 4rem)',
              overflowY: 'auto'
            }}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              padding: '1.5rem 1rem', 
              gap: '1rem' 
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 300,
                      color: '#000000',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem 0',
                      minHeight: '44px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            nav > div > div > div[class*="desktop-nav"] {
              display: flex !important;
            }
            nav > div > div > button[class*="mobile-menu-btn"] {
              display: none !important;
            }
          }
          @media (max-width: 767px) {
            nav > div > div > div[class*="desktop-nav"] {
              display: none !important;
            }
            nav > div > div > button[class*="mobile-menu-btn"] {
              display: flex !important;
            }
          }
        `
      }} />
    </>
  );
}
