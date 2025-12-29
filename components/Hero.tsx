'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 30,
          y: (e.clientY / window.innerHeight - 0.5) * 30,
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const letters = 'VELANTEC'.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#ffffff', width: '100%', paddingTop: '4rem' }}>
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div 
        style={{ 
          y, 
          opacity, 
          scale,
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem',
          width: '100%', 
          position: 'relative', 
          zIndex: 10 
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          style={{ width: '100%' }}
        >
          <motion.div
            style={{
              transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h1
              className="font-bold text-black mb-8 tracking-tight leading-none"
              style={{ 
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(3.5rem, 12vw, 12rem)',
                fontWeight: 700,
                color: '#000000',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(0.01em, 0.5vw, 0.02em)',
                flexWrap: 'wrap',
                padding: '0 0.5rem'
              }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 mb-16 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.375rem)',
              color: '#525252',
              fontWeight: 300,
              maxWidth: '42rem',
              margin: '0 auto 3rem',
              lineHeight: 1.75,
              letterSpacing: '0.01em',
              padding: '0 1rem'
            }}
          >
            Building Tomorrow&apos;s Digital Brands with Purpose. For now. For what&apos;s to come.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '0 1rem' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: '100%', maxWidth: '20rem' }}
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 w-full text-base md:text-lg text-black font-medium transition-all relative overflow-hidden"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#000000',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                  padding: '1rem 2rem',
                  border: '2px solid #000000',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '48px',
                  width: '100%'
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-black"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0, backgroundColor: '#000000', zIndex: 0 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300" style={{ color: '#000000' }}>
                  View projects
                </span>
                <motion.span
                  className="relative z-10 group-hover:text-white transition-colors duration-300"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ color: '#000000' }}
                >
                  <ArrowRight className="w-5 h-5" style={{ width: '1.25rem', height: '1.25rem' }} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-gray-400"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', color: '#9ca3af' }}
            >
              <motion.span 
                className="text-xs font-light uppercase tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.1em' }}
              >
                Scroll
              </motion.span>
              <ArrowDown className="w-5 h-5" style={{ width: '1.25rem', height: '1.25rem' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
