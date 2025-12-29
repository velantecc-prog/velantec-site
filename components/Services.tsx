'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Target, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Experience',
    description: 'Creating immersive digital experiences that engage and convert',
    color: '#64748b',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Building strong brand identities that resonate with audiences',
    color: '#78716c',
  },
  {
    icon: Target,
    title: 'Digital Products & Services',
    description: 'Developing innovative products that solve real-world problems',
    color: '#6b7280',
  },
  {
    icon: Zap,
    title: 'Strategy & Growth',
    description: 'Driving growth through data-driven strategies and execution',
    color: '#71717a',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  // Split heading into words
  const headingText = "We combine strategy, design, communication and technology to create experiences that connect with people and generate real value for brands.";
  const words = headingText.split(' ');

  return (
    <section 
      ref={ref} 
      id="services" 
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
      <motion.div
        style={{ y, opacity, maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)', maxWidth: '64rem', width: '100%' }}
        >
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-12 tracking-tight leading-tight"
            style={{
              fontSize: 'clamp(2rem, 8vw, 8rem)',
              fontWeight: 700,
              color: '#000000',
              marginBottom: 'clamp(2rem, 3vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              width: '100%'
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 90 }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.25em', transformStyle: 'preserve-3d' }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div 
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '0',
            width: '100%'
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                transition={{ 
                  delay: 0.5 + index * 0.15, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group"
                style={{ width: '100%' }}
                whileHover={{ x: index % 2 === 0 ? 10 : -10, transition: { duration: 0.3 } }}
              >
                <div 
                  className="py-12 border-b-2 border-black transition-all hover:bg-gray-50 relative overflow-hidden"
                  style={{
                    padding: 'clamp(2rem, 3vw, 3rem) 0',
                    borderBottom: '2px solid #000000',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    backgroundColor: 'transparent',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#000000',
                      transition: 'opacity 0.4s ease'
                    }}
                  />
                  <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10" style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(1rem, 2vw, 2rem)', position: 'relative', zIndex: 10 }}>
                    <motion.div 
                      className="mb-6 flex-shrink-0"
                      style={{ marginBottom: 0 }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform"
                        style={{
                          width: 'clamp(3rem, 4vw, 4rem)',
                          height: 'clamp(3rem, 4vw, 4rem)',
                          borderRadius: '0.5rem',
                          backgroundColor: service.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        <Icon 
                          className="w-8 h-8 text-white" 
                          style={{ width: 'clamp(1.5rem, 2vw, 2rem)', height: 'clamp(1.5rem, 2vw, 2rem)', color: '#ffffff' }}
                        />
                      </div>
                    </motion.div>
                    <div className="flex-1" style={{ flex: 1, width: '100%', minWidth: 0 }}>
                      <motion.h3 
                        className="text-3xl font-bold text-black mb-4 tracking-tight"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                          fontWeight: 700,
                          color: '#000000',
                          marginBottom: '1rem',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-gray-600 font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.9 + index * 0.15, duration: 0.6 }}
                        style={{
                          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                          color: '#525252',
                          fontWeight: 300,
                          lineHeight: 1.75,
                          letterSpacing: '0.01em'
                        }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            }
          }
        `
      }} />
    </section>
  );
}
