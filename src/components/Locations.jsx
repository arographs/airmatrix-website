import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: "Bhosari Industrial Zone",
    type: "Industrial Facility & Central Air",
    image: "/assets/projects/hyundai/HYUNDAI 9.jpg",
    coordinates: { x: '25%', y: '25%' },
    description: "Ventilation duct grids, process cooling, and high-capacity exhaust systems in Bhosari."
  },
  {
    id: 2,
    name: "Kia Motors – Chinchwad",
    type: "Automobile Showroom & Bay",
    image: "/assets/projects/kia/KIA 2.jpg",
    coordinates: { x: '20%', y: '45%' },
    description: "Acoustic VRF climate controls and high-capacity showroom chilling."
  },
  {
    id: 3,
    name: "Hyundai Motors – Pune Central",
    type: "Automobile Showroom",
    image: "/assets/projects/hyundai/HYUNDAI 1.jpg",
    coordinates: { x: '50%', y: '65%' },
    description: "Complete central air conditioning, ventilation duct grids, and testing bays."
  },
  {
    id: 4,
    name: "SBI Life – WTC Kharadi",
    type: "Corporate Headquarters",
    image: "/assets/projects/sbi/SBI 1.jpg",
    coordinates: { x: '80%', y: '50%' },
    description: "Corporate office multi-level refrigeration layout and custom chiller piping at WTC."
  }
];

export default function Locations() {
  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <section id="locations" style={{ padding: '100px 0', background: '#0B192C', color: '#ffffff' }}>
      <div className="container">
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#38BDF8',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            display: 'block',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Service Coverage
        </span>
        <h2 className="section-title" style={{ color: '#ffffff' }}>Where We Provide Our Services</h2>
        <p className="section-subtitle" style={{ color: '#94A3B8', maxWidth: '800px' }}>
          AirMatrix Enterprises proudly delivers HVAC, refrigeration, and cold storage solutions across commercial buildings, industrial facilities, automobile showrooms, corporate offices, and manufacturing units throughout Pune and surrounding regions.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          {/* Map Side */}
          <div
            style={{
              background: 'rgba(30, 62, 98, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '30px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              overflow: 'hidden',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px', textAlign: 'left' }}>
              Interactive Pune Network Map
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '24px', textAlign: 'left' }}>
              Click on glowing markers to preview our operations in major industrial/commercial zones.
            </p>

            {/* SVG MAP CONTAINER */}
            <div
              style={{
                width: '100%',
                height: '350px',
                position: 'relative',
                background: 'radial-gradient(circle, rgba(30, 62, 98, 0.3) 0%, rgba(11, 25, 44, 0.9) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <svg
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: 0.15,
                }}
              >
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                <path
                  d="M 120 87.5 L 96 157.5 L 240 227.5 L 384 175 L 120 87.5"
                  fill="none"
                  stroke="#008DDA"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  style={{ animation: 'dash 15s linear infinite' }}
                />
              </svg>

              {/* Glowing Location Markers */}
              {locations.map((loc) => {
                const isActive = activeLoc.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLoc(loc)}
                    style={{
                      position: 'absolute',
                      left: loc.coordinates.x,
                      top: loc.coordinates.y,
                      transform: 'translate(-50%, -50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: isActive ? '20px' : '14px',
                        height: isActive ? '20px' : '14px',
                        backgroundColor: isActive ? '#38BDF8' : '#008DDA',
                        borderRadius: '50%',
                        position: 'relative',
                        boxShadow: isActive ? '0 0 15px #38BDF8' : '0 0 10px #008DDA',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          left: '-6px',
                          right: '-6px',
                          bottom: '-6px',
                          border: `2px solid ${isActive ? '#38BDF8' : '#008DDA'}`,
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite ease-out',
                          opacity: isActive ? 1 : 0.6,
                        }}
                      />
                    </div>
                    
                    <span
                      style={{
                        marginTop: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: isActive ? '#38BDF8' : '#94A3B8',
                        background: 'rgba(11, 25, 44, 0.8)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {loc.name.split(' – ')[1] || loc.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Card Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff' }}>
              Active Project Features
            </h3>
            
            <div
              style={{
                background: 'rgba(30, 62, 98, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.4s ease',
              }}
            >
              <img
                src={activeLoc.image}
                alt={activeLoc.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <MapPin size={18} color="#38BDF8" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {activeLoc.type}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 700, marginBottom: '8px' }}>
                  {activeLoc.name}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  {activeLoc.description}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {locations.map((loc) => {
                const isActive = activeLoc.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLoc(loc)}
                    style={{
                      background: isActive ? 'rgba(0, 141, 218, 0.12)' : 'transparent',
                      border: `1px solid ${isActive ? 'rgba(0, 141, 218, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
                      borderRadius: '12px',
                      padding: '12px 18px',
                      color: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Navigation size={16} color={isActive ? '#38BDF8' : '#94A3B8'} style={{ transform: 'rotate(45deg)' }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{loc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0.6);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
