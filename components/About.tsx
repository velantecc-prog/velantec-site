'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  // Split text into words for animation
  const headingText = "We are a parent company based in Singapore with a global vision. We combine strategy, design, communication and technology to create experiences that connect with people and generate real value for brands.";
  const words = headingText.split(' ');

  return (
    <section 
      ref={ref} 
      id="about" 
      className="py-32 md:py-48 bg-white border-t-2 border-black relative overflow-hidden"
      style={{ 
        paddingTop: 'clamp(4rem, 10vw, 10rem)', 
        paddingBottom: 'clamp(4rem, 10vw, 10rem)',
        backgroundColor: '#ffffff',
        borderTop: '2px solid #000000',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Decorative animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '2px',
          backgroundColor: '#000000',
          transformOrigin: 'left',
          width: '100%'
        }}
      />

      <motion.div
        style={{ y, opacity, scale, maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '64rem', width: '100%' }}
        >
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-16 tracking-tight leading-tight"
            style={{
              fontSize: 'clamp(2rem, 8vw, 8rem)',
              fontWeight: 700,
              color: '#000000',
              marginBottom: 'clamp(2rem, 4vw, 4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              width: '100%'
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.div 
            className="mt-16 space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mb-16"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: 'clamp(2rem, 4vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 2rem)',
              fontSize: 'clamp(1rem, 1.5vw, 1.375rem)',
              color: '#525252',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: '48rem',
              marginBottom: 'clamp(2rem, 4vw, 4rem)',
              width: '100%',
              letterSpacing: '0.01em'
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              VELANTEC operates as the strategic home for innovative digital ventures, bringing together forward-thinking brands under one corporate umbrella. Each brand in our portfolio operates independently while benefiting from shared resources, knowledge, and a unified vision for growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We specialize in building and nurturing digital products and services that solve real-world problems with purpose-driven design and cutting-edge technology.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: '2rem' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-10 py-5 text-base md:text-lg font-medium transition-all relative overflow-hidden"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                  padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                  border: '2px solid #000000',
                  backgroundColor: 'transparent',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#000000',
                  borderRadius: '0',
                  minHeight: '48px'
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
                  Learn More
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
