'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '4', label: 'Brands in Portfolio', color: '#64748b' },
  { number: '100+', label: 'Projects Delivered', color: '#78716c' },
  { number: '50+', label: 'Team Members', color: '#6b7280' },
  { number: '10+', label: 'Years of Experience', color: '#71717a' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <section 
      ref={ref} 
      className="py-32 md:py-40 bg-black text-white border-t-2 border-black relative overflow-hidden"
      style={{ 
        paddingTop: '8rem', 
        paddingBottom: '8rem',
        backgroundColor: '#000000',
        color: '#ffffff',
        borderTop: '2px solid #000000',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Animated grid background */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none'
        }}
      />

      <motion.div
        style={{ y, opacity, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 1 }}
      >
        <div 
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '4rem',
            width: '100%'
          }}
        >
          {stats.map((stat, index) => {
            const numberArray = stat.number.split('');
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1],
                  type: 'spring',
                  stiffness: 50
                }}
                style={{ width: '100%' }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 } 
                }}
              >
                <div 
                  className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                  style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: stat.color,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '0.05em'
                  }}
                >
                  {numberArray.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
                      transition={{ 
                        delay: index * 0.2 + 0.3 + i * 0.1, 
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className="text-sm md:text-base text-gray-400 font-light uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  style={{
                    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                    color: '#a3a3a3',
                    fontWeight: 300,
                    letterSpacing: '0.1em'
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
              gap: 3rem !important;
            }
          }
        `
      }} />
    </section>
  );
}
