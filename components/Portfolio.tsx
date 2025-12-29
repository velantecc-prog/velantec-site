'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ExternalLink, Mic, Sparkles, Users, ShoppingBag, ArrowRight } from 'lucide-react';

const brands = [
  {
    name: 'mrassistant.ai',
    tagline: 'AI voice agents & IVR automation',
    description: 'Revolutionary AI-powered voice solutions for seamless customer interactions. Transforming how businesses communicate with their customers through intelligent automation.',
    url: 'https://mrassistant.ai',
    icon: Mic,
    category: 'AI & Automation',
    color: '#64748b',
    bgColor: '#fafafa',
  },
  {
    name: 'buzzzbuzzz.com',
    tagline: 'Digital engagement experiences',
    description: 'Social and event engagement platform that connects communities. Creating memorable experiences that bring people together and foster meaningful connections.',
    url: 'https://buzzzbuzzz.com',
    icon: Sparkles,
    category: 'Social & Events',
    color: '#78716c',
    bgColor: '#fafafa',
  },
  {
    name: 'growthlab.sg',
    tagline: 'Startup & founder community',
    description: 'Community for founders, investors, and startup professionals. Building the ecosystem that supports innovation and entrepreneurship in Singapore and beyond.',
    url: 'https://growthlab.sg',
    icon: Users,
    category: 'Community',
    color: '#6b7280',
    bgColor: '#fafafa',
  },
  {
    name: 'onestopsg.com',
    tagline: 'End-to-end ecommerce & services',
    description: 'One-stop platform for e-commerce and comprehensive services. Simplifying commerce and services for businesses and consumers in Singapore.',
    url: 'https://onestopsg.com',
    icon: ShoppingBag,
    category: 'E-commerce',
    color: '#71717a',
    bgColor: '#fafafa',
  },
];

interface PortfolioProps {
  showHeading?: boolean;
  showButton?: boolean;
}

export default function Portfolio({ showHeading = true, showButton = true }: PortfolioProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  // Split heading into words for animation
  const headingText = "In a changing environment, we create digital solutions that help brands move forward, adapt and endure. Each project drives their evolution with vision, focus and results.";
  const words = headingText.split(' ');

  return (
    <section 
      ref={ref} 
      id="portfolio" 
      className="py-32 md:py-48 bg-white border-t-2 border-black relative overflow-hidden"
      style={{ 
        paddingTop: showHeading ? '10rem' : '6rem', 
        paddingBottom: '10rem',
        backgroundColor: '#ffffff',
        borderTop: '2px solid #000000',
        width: '100%',
        position: 'relative'
      }}
    >
      <motion.div
        style={{ y, opacity, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}
      >
        {showHeading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '8rem', maxWidth: '64rem', width: '100%' }}
          >
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-12 tracking-tight leading-tight"
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
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>
        )}

        <div 
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '0',
            width: '100%'
          }}
        >
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                transition={{ 
                  delay: 0.5 + index * 0.2, 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                style={{ width: '100%', transformStyle: 'preserve-3d' }}
                whileHover={{ y: -20, transition: { duration: 0.4 } }}
              >
                <Link
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <div 
                    className="py-16 border-b-2 border-black transition-all hover:bg-gray-50 relative overflow-hidden"
                    style={{
                      backgroundColor: 'transparent',
                      borderBottom: '2px solid #000000',
                      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      width: '100%',
                      padding: '4rem 0',
                      position: 'relative'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-0 group-hover:opacity-5 transition-opacity"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        transition: 'opacity 0.4s ease'
                      }}
                    />
                    <div className="flex items-start gap-8 mb-8 relative z-10" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 10, width: '100%' }}>
                      <motion.div 
                        className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '5rem',
                          height: '5rem',
                          borderRadius: '0.5rem',
                          backgroundColor: brand.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.15,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" style={{ width: '2.5rem', height: '2.5rem', color: '#ffffff' }} />
                      </motion.div>
                      <div className="flex-1" style={{ flex: 1, width: '100%', minWidth: 0 }}>
                        <motion.span 
                          className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-4 block"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                          style={{
                            fontSize: '0.75rem',
                            color: brand.color,
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            display: 'block'
                          }}
                        >
                          {brand.category}
                        </motion.span>
                        <motion.h3 
                          className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                          style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            color: '#000000',
                            marginBottom: '1rem',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            width: '100%'
                          }}
                        >
                          {brand.name}
                        </motion.h3>
                        <motion.p 
                          className="text-xl text-gray-600 mb-6 font-light"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 1.1 + index * 0.2, duration: 0.6 }}
                          style={{
                            fontSize: '1.25rem',
                            color: '#525252',
                            marginBottom: '1.5rem',
                            fontWeight: 300,
                            letterSpacing: '0.01em',
                            width: '100%'
                          }}
                        >
                          {brand.tagline}
                        </motion.p>
                        <motion.p 
                          className="text-base text-gray-500 font-light leading-relaxed mb-8"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 1.3 + index * 0.2, duration: 0.6 }}
                          style={{
                            fontSize: '1rem',
                            color: '#737373',
                            fontWeight: 300,
                            lineHeight: 1.8,
                            marginBottom: '2rem',
                            letterSpacing: '0.01em',
                            width: '100%'
                          }}
                        >
                          {brand.description}
                        </motion.p>
                        <motion.div 
                          className="flex items-center text-black font-medium group-hover:gap-3 transition-all"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                          style={{ width: '100%' }}
                        >
                          <span>Visit Site</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ExternalLink className="w-5 h-5 ml-2" style={{ width: '1.25rem', height: '1.25rem' }} />
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: '6rem', width: '100%' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
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
                  View all projects
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
        )}
      </motion.div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
        `
      }} />
    </section>
  );
}
