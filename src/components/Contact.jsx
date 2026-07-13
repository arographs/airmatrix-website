import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'HVAC Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const directors = [
    {
      name: "Zaid Shaikh",
      role: "Director",
      phone: "+91 98239 40437",
      phoneRaw: "+919823940437"
    },
    {
      name: "Ameer Khan",
      role: "Director",
      phone: "+91 87933 93842",
      phoneRaw: "+918793393842"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'HVAC Solutions', message: '' });
    }, 800);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: '#ffffff', position: 'relative' }}>
      <div className="container">
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#008DDA',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            display: 'block',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Get In Touch
        </span>
        <h2 className="section-title">Connect With Our Engineers</h2>
        <p className="section-subtitle">
          Request a customized technical quotation, schedule an engineering visit, or contact our directors directly.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginTop: '30px',
            marginBottom: '60px',
          }}
        >
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B192C' }}>
              Direct Contacts
            </h3>

            {/* Directors Profiles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {directors.map((dir, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                  }}
                  className="contact-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0B192C', fontWeight: 700, margin: 0 }}>
                        {dir.name}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#008DDA', fontWeight: 600, margin: 0 }}>
                        {dir.role}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${dir.phoneRaw}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                    }}
                    className="call-link"
                  >
                    <Phone size={16} color="#008DDA" />
                    <span>{dir.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Email & Office Card */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: '14px' }}>
                <Mail size={20} color="#008DDA" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#0B192C', fontWeight: 700, marginBottom: '4px' }}>
                    Email Correspondence
                  </h4>
                  <a
                    href="mailto:airmatrixenterprises@gmail.com"
                    style={{ fontSize: '0.95rem', color: '#475569', textDecoration: 'none' }}
                  >
                    airmatrixenterprises@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '14px' }}>
                <MapPin size={20} color="#008DDA" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#0B192C', fontWeight: 700, marginBottom: '4px' }}>
                    Headquarters Address
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Gat No. 480, Back Side Kailas Bhel, Shiv Road, Jadhavwadi, Moshi, Pune – 412105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '24px',
              padding: '40px 30px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.02)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B192C', marginBottom: '8px' }}>
              Send a Query
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: '24px' }}>
              Fill out this form and our engineering team will respond within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(0, 141, 218, 0.08)',
                  border: '1px solid rgba(0, 141, 218, 0.3)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ color: '#008DDA', fontWeight: 700, marginBottom: '8px' }}>Thank You!</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>
                  Your submission was successfully sent. Our technical sales staff will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                    Required Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#ffffff',
                    }}
                  >
                    <option>Air Conditioning Sales</option>
                    <option>HVAC Solutions</option>
                    <option>Refrigeration Systems</option>
                    <option>Cold Storage Solutions</option>
                    <option>Annual Maintenance Contracts (AMC)</option>
                    <option>Repairs & Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '6px' }}>
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={16} />
                  <span>Send Quotation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map iframe */}
        <div
          style={{
            width: '100%',
            height: '400px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0520697771744!2d73.84478147597148!3d18.661678964848386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c900609385ff%3A0xe21287c6be814e5a!2sKailas%20Bhel!5e0!3m2!1sen!2sin!4v1715424564287!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AirMatrix Enterprises Location"
          />
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919823940437?text=Hi%20AirMatrix%20Enterprises,%20I'd%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          textDecoration: 'none',
        }}
        className="whatsapp-btn"
      >
        <MessageCircle size={32} />
        {/* Pulsating green ring */}
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '2px solid #25D366',
            borderRadius: '50%',
            animation: 'pulse-whatsapp 2s infinite ease-out',
          }}
        />
      </a>

      <style>{`
        .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 141, 218, 0.3);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
        }
        .call-link:hover {
          color: #008DDA !important;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1) rotate(5deg);
        }
        @keyframes pulse-whatsapp {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
