import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    'Over 20 Years of Proven Industry Experience',
    'Certified and Highly Skilled HVAC Engineers',
    'Customized Design & Cost-Effective Commissioning',
    'Strong Presence Across Commercial & Automobile Hubs in Pune',
    'Energy-Efficient Systems Lowering Operational Costs',
    'Reliable 24/7 Technical Support & Maintenance Services',
  ];

  return (
    <section id="about" style={{ padding: '100px 0', background: '#F8FAFC' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'left' }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#008DDA',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Who We Are
            </span>
            <h2
              style={{
                fontSize: '2.5rem',
                color: '#0B192C',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Engineering Comfort, Delivering Precision.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                marginBottom: '16px',
                lineHeight: 1.6,
              }}
            >
              AirMatrix Enterprises is a leading provider of comprehensive industrial & commercial HVAC, Air Conditioning, Refrigeration, and Cold Storage Solutions. With over two decades of engineering experience, we design, install, maintain, and repair systems that power critical infrastructures.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                marginBottom: '24px',
                lineHeight: 1.6,
              }}
            >
              Under the expert leadership of Directors <strong>Zaid Shaikh</strong> and <strong>Ameer Khan</strong>, we have earned the trust of major corporations and manufacturing centers in Bhosari, Kharadi, Chinchwad, and throughout the Pune industrial belt. We focus on durability, safety, and energy efficiency.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '12px',
                marginBottom: '30px',
              }}
            >
              {highlights.map((highlight, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="#008DDA" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#1E293B', fontWeight: 500 }}>{highlight}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              Connect With Our Team
            </a>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '20px',
                bottom: '20px',
                border: '3px solid #008DDA',
                borderRadius: '16px',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(11, 25, 44, 0.15)',
              }}
            >
              <img
                src="/assets/projects/h-tek/H-TEK 1.jpg"
                alt="HVAC Installation at H Tek Pro, Bhosari"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => (e.target.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(11, 25, 44, 0.9) 0%, rgba(11, 25, 44, 0) 100%)',
                  padding: '24px',
                  color: '#ffffff',
                  textAlign: 'left',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  Featured Project Installation
                </p>
                <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>
                  H Tek Pro – Bhosari, Pune
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
