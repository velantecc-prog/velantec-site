'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@velantec.com', href: 'mailto:hello@velantec.com', color: '#64748b' },
    { icon: Phone, label: 'Phone', value: '+65 9737 1722', href: 'tel:+6597371722', color: '#78716c' },
    { icon: MapPin, label: 'Location', value: 'Singapore', href: null, color: '#6b7280' },
  ];

  // Split heading into words
  const headingText = "And now it's time to talk about your project. Tell us more and let's make it happen.";
  const words = headingText.split(' ');

  return (
    <section 
      ref={ref} 
      id="contact" 
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
      <motion.div
        style={{ y, opacity, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '64rem', width: '100%' }}
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
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(10px)' }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#525252',
              fontWeight: 300,
              lineHeight: 1.6,
              marginBottom: '5rem',
              letterSpacing: '0.01em'
            }}
          >
            Let&apos;s talk?
          </motion.p>

          <div 
            className="contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              gap: '6rem',
              width: '100%'
            }}
          >
            {/* Contact Information */}
            <div 
              className="space-y-10"
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    style={{ width: '100%' }}
                  >
                    <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <motion.div 
                        style={{ 
                          width: '3rem', 
                          height: '3rem', 
                          borderRadius: '0.5rem', 
                          backgroundColor: info.color, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.15,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }} />
                      </motion.div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-widest" style={{ fontSize: '0.875rem', color: '#737373', fontWeight: 500, letterSpacing: '0.1em' }}>{info.label}</p>
                    </div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-xl text-black hover:opacity-70 transition-opacity font-light"
                        style={{ fontSize: '1.25rem', color: '#000000', fontWeight: 300, textDecoration: 'none', letterSpacing: '0.01em' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl text-black font-light" style={{ fontSize: '1.25rem', color: '#000000', fontWeight: 300, letterSpacing: '0.01em' }}>
                        {info.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}
            >
              {[
                { name: 'name', placeholder: 'Name', required: true },
                { name: 'email', placeholder: 'Email', required: true, type: 'email' },
                { name: 'company', placeholder: 'Company', required: false },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                >
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    required={field.required}
                    style={{
                      width: '100%',
                      padding: '1.25rem 0',
                      borderBottom: `2px solid ${focusedField === field.name ? '#000000' : '#e5e7eb'}`,
                      backgroundColor: 'transparent',
                      color: '#000000',
                      fontSize: '1.125rem',
                      fontWeight: 300,
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      outline: 'none',
                      transition: 'border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                      letterSpacing: '0.01em'
                    }}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Message"
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1.25rem 0',
                    borderBottom: `2px solid ${focusedField === 'message' ? '#000000' : '#e5e7eb'}`,
                    backgroundColor: 'transparent',
                    color: '#000000',
                    fontSize: '1.125rem',
                    fontWeight: 300,
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    resize: 'none',
                    outline: 'none',
                    transition: 'border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    letterSpacing: '0.01em'
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 2.5rem',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    borderRadius: '2px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    fontSize: '1.125rem',
                    position: 'relative',
                    alignSelf: 'flex-start'
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', zIndex: 0 }}
                  />
                  <span style={{ position: 'relative', zIndex: 1, color: '#ffffff', mixBlendMode: 'difference' }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && (
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ position: 'relative', zIndex: 1, color: '#ffffff', mixBlendMode: 'difference' }}
                    >
                      <Send className="w-5 h-5" style={{ width: '1.25rem', height: '1.25rem' }} />
                    </motion.span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1024px) {
            .contact-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 8rem !important;
            }
          }
        `
      }} />
    </section>
  );
}
