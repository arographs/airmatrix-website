import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Projects Gallery', href: '#projects' },
    { label: 'Locations Map', href: '#locations' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const services = [
    { label: 'Air Conditioning Sales', href: '#services' },
    { label: 'HVAC Solutions', href: '#services' },
    { label: 'Refrigeration Systems', href: '#services' },
    { label: 'Cold Storage Engineering', href: '#services' },
    { label: 'HVAC Duct Design', href: '#services' },
    { label: 'Installation & Commissioning', href: '#services' },
    { label: 'Annual Maintenance (AMC)', href: '#services' },
    { label: 'Repairs & Support', href: '#services' },
  ];

  const projects = [
    { label: 'H Tek Pro – Bhosari', href: '#projects' },
    { label: 'Hyundai Motors – Pune', href: '#projects' },
    { label: 'Kia Motors – Chinchwad', href: '#projects' },
    { label: 'SBI Life – WTC Kharadi', href: '#projects' },
  ];

  return (
    <footer style={{ background: '#020617', color: '#94a3b8', padding: '80px 0 30px 0', textAlign: 'left' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/assets/logo.png"
                alt="AirMatrix Enterprises"
                style={{
                  height: '52px',
                  objectFit: 'contain',
                }}
              />
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8' }}>
              Luxurious industrial and commercial HVAC, refrigeration, and cold storage engineering. Delivering electrical comfort and excellence across Pune since 2006.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" aria-label="Facebook" className="social-icon-btn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon-btn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="social-icon-btn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#94a3b8', transition: 'color 0.2s ease' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Our Offerings
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href={service.href} className="footer-link" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#94a3b8', transition: 'color 0.2s ease' }}>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Contact Info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <Phone size={16} color="#008DDA" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '0.9rem' }}>
                  +91 98239 40437 (Zaid Shaikh)<br />
                  +91 87933 93842 (Ameer Khan)
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <Mail size={16} color="#008DDA" style={{ flexShrink: 0, marginTop: '4px' }} />
                <a href="mailto:airmatrixenterprises@gmail.com" style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  airmatrixenterprises@gmail.com
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'start' }}>
                <MapPin size={16} color="#008DDA" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                  Gat No. 480, Back Side Kailas Bhel, Shiv Road, Jadhavwadi, Moshi, Pune – 412105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>
            © 2026 AirMatrix Enterprises. All Rights Reserved.
          </span>
          <span style={{ fontSize: '0.85rem', display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-link" style={{ textDecoration: 'none', color: '#94a3b8' }}>Privacy Policy</a>
            <a href="#" className="footer-link" style={{ textDecoration: 'none', color: '#94a3b8' }}>Terms of Service</a>
          </span>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #008DDA !important;
        }
        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          alignItems: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          background: #008DDA;
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
