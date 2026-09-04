import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';

export default function Navbar({ onSelectService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

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

  const primaryServices = [
    'Cassette AC Services',
    'Cassette AC-Split AC',
    'Centralised AC Solution',
    'Chiller System Solution',
    'Cold Storage',
    'Cold Storage - Cold Room',
    'Ductable AC Solution',
    'HVAC Contractor',
    'VRF System',
    'Vrf-Vrv System Solution',
    'VRV System'
  ];

  const handleServiceClick = (serviceName) => {
    setServicesDropdown(false);
    setIsOpen(false);
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(11, 25, 44, 0.95)' : 'rgba(11, 25, 44, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
        padding: isScrolled ? '10px 0' : '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo with Icon + Text */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/assets/logo.png"
            alt="AirMatrix Icon"
            style={{
              height: '42px',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
            }}
            className="navbar-logo"
          />
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', lineHeight: 1.1 }}>
              AIRMATRIX
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              ENTERPRISES
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-menu">
          <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '24px', margin: 0, padding: 0 }}>
            <li>
              <a href="#home" className="nav-item-link">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-item-link">About Us</a>
            </li>
            {/* Services Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                className="nav-item-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Services</span>
                <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: servicesDropdown ? 'rotate(180deg)' : 'rotate(0)' }} />
              </a>

              {servicesDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-10px',
                    width: '260px',
                    background: '#0B192C',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '8px 0',
                    zIndex: 1100,
                  }}
                >
                  {primaryServices.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleServiceClick(service)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '8px 18px',
                        color: '#CBD5E1',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'block',
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(0, 141, 218, 0.15)';
                        e.target.style.color = '#38BDF8';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.color = '#CBD5E1';
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="#why-us" className="nav-item-link">Why Us</a>
            </li>
            <li>
              <a href="#projects" className="nav-item-link">Projects</a>
            </li>
            <li>
              <a href="#locations" className="nav-item-link">Locations</a>
            </li>
            <li>
              <a href="#contact" className="nav-item-link">Contact</a>
            </li>
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
            display: 'none',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
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
            gap: '16px',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '16px', margin: 0, padding: 0, textAlign: 'left' }}>
            <li><a href="#home" onClick={() => setIsOpen(false)} className="mobile-nav-link">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="mobile-nav-link">About Us</a></li>
            <li>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginTop: '6px' }}>
                Primary Offerings
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '12px' }}>
                {primaryServices.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleServiceClick(service)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      color: '#E2E8F0',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: '4px 0',
                    }}
                  >
                    • {service}
                  </button>
                ))}
              </div>
            </li>
            <li><a href="#why-us" onClick={() => setIsOpen(false)} className="mobile-nav-link">Why Us</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="mobile-nav-link">Projects</a></li>
            <li><a href="#locations" onClick={() => setIsOpen(false)} className="mobile-nav-link">Locations</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="mobile-nav-link">Contact</a></li>
          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-accent"
            style={{ width: '100%', padding: '12px', justifyContent: 'center', marginTop: '10px' }}
          >
            <PhoneCall size={16} />
            <span>Get a Quote</span>
          </a>
        </div>
      )}

      <style>{`
        .nav-item-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .nav-item-link:hover {
          color: #38BDF8;
        }
        .mobile-nav-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
        }
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
