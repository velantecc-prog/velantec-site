'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
              About VELANTEC
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl">
                VELANTEC is the strategic home for innovative digital ventures, 
                bringing together forward-thinking brands under one corporate umbrella.
              </p>
              
              <p>
                Founded with a vision to transform industries through purpose-driven 
                technology, VELANTEC operates as a parent company that nurtures and 
                scales digital brands. We specialize in building products and services 
                that solve real-world problems with exceptional design and cutting-edge 
                innovation.
              </p>
              
              <p>
                Our approach combines strategic thinking, creative excellence, and 
                technological expertise to create brands that make a meaningful impact. 
                Each brand in our portfolio operates independently while benefiting from 
                shared resources, knowledge, and a unified vision for growth.
              </p>
              
              <h2 className="text-3xl font-bold text-black mt-12 mb-6">Our Mission</h2>
              <p>
                To build and nurture digital brands that transform industries, enrich 
                lives, and create lasting value. We believe in the power of innovation, 
                integrity, and excellence to drive sustainable growth and positive change.
              </p>
              
              <h2 className="text-3xl font-bold text-black mt-12 mb-6">What We Do</h2>
              <p>
                VELANTEC provides strategic oversight, shared resources, and operational 
                support to our portfolio of brands. We focus on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Strategic brand development and positioning</li>
                <li>Technology infrastructure and innovation</li>
                <li>Operational excellence and scalability</li>
                <li>Market expansion and growth strategies</li>
                <li>Cross-brand collaboration and synergies</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
