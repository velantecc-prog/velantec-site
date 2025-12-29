'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <section 
      ref={ref} 
      id="vision" 
      className="py-32 md:py-48 bg-white border-t-2 border-black relative overflow-hidden"
      style={{ 
        paddingTop: '10rem', 
        paddingBottom: '10rem',
        backgroundColor: '#ffffff',
        borderTop: '2px solid #000000',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Animated background pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.015,
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      />

      <motion.div
        style={{ y, opacity, rotate, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '64rem', width: '100%' }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-12 tracking-tight leading-tight"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '3rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              width: '100%'
            }}
          >
            Design and code with concept
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#525252',
              fontWeight: 300,
              lineHeight: 1.6,
              marginBottom: '5rem',
              letterSpacing: '0.01em'
            }}
          >
            Digital by nature
          </motion.p>
          <motion.div 
            className="space-y-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              color: '#525252',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: '48rem',
              marginBottom: '4rem',
              width: '100%',
              letterSpacing: '0.01em'
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              We engage in each project as part of the team, bringing strategic vision, technical knowledge and a way of working that adapts to the pace and needs of each brand.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Our approach combines strategic thinking, creative excellence, and technological expertise to create brands that make a meaningful impact in their respective industries.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-10 py-5 text-base md:text-lg font-medium transition-all relative overflow-hidden"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                  padding: '1.25rem 2.5rem',
                  border: '2px solid #000000',
                  backgroundColor: 'transparent',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#000000',
                  borderRadius: '0'
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
                  Learn More About Us
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
