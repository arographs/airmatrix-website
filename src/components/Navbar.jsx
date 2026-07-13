import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Projects', href: '#projects' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(11, 25, 44, 0.95)' : 'rgba(11, 25, 44, 0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/assets/logo.png"
            alt="AirMatrix Enterprises"
            style={{
              height: '48px',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
            }}
            className="navbar-logo"
          />
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '28px', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#008DDA')}
                  onMouseOut={(e) => (e.target.style.color = '#e2e8f0')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-accent" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            <PhoneCall size={14} />
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none', // Shown in CSS responsive query
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(11, 25, 44, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px 30px 24px',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    display: 'block',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-accent"
            style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
          >
            <PhoneCall size={16} />
            <span>Get a Quote</span>
          </a>
        </div>
      )}

      {/* Add custom media styles using an inline style tag for responsive behaviors */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        .navbar-logo:hover {
          transform: scale(1.05);
        }
      `}</style>
    </nav>
  );
}
