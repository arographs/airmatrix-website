import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const heroImages = [
  '/assets/projects/sbi/SBI 2.jpg',
  '/assets/projects/hyundai/HYUNDAI 3.jpg',
  '/assets/projects/kia/KIA 3.jpg',
  '/assets/projects/sbi/SBI 1.jpg',
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '650px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#020617',
      }}
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("${heroImages[currentIdx]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* Modern Overlay Gradients */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(11, 25, 44, 0.95) 40%, rgba(11, 25, 44, 0.4) 100%)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to top, #F8FAFC 0%, rgba(248, 250, 252, 0) 100%)',
          zIndex: 2,
        }}
      />

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '680px', textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 141, 218, 0.15)',
              border: '1px solid rgba(0, 141, 218, 0.3)',
              color: '#38BDF8',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}
          >
            <span>7+ Years of Engineering Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: '3.75rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-1px',
            }}
          >
            Mechanical Comfort.
            <br />
            <span style={{ color: '#008DDA' }}>Delivering Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              marginBottom: '35px',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            7+ Years of Excellence in HVAC, Refrigeration, Air Conditioning & Cold Storage Solutions for industrial, commercial, and corporate infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-accent" style={{ padding: '14px 32px' }}>
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff', padding: '14px 32px' }}
               onMouseOver={(e) => { e.target.style.backgroundColor = '#ffffff'; e.target.style.color = '#0B192C'; }}
               onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#ffffff'; }}
            >
              <span>Learn More</span>
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating indicators/mini-labels */}
      <div
        className="hero-indicator"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '5%',
          zIndex: 3,
          display: 'flex',
          gap: '12px',
        }}
      >
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            style={{
              width: currentIdx === idx ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              background: currentIdx === idx ? '#008DDA' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home h1 {
            font-size: 2.5rem !important;
          }
          #home p {
            font-size: 1.05rem !important;
          }
          .hero-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
