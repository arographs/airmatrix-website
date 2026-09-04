import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const projectList = [
  {
    id: 1,
    title: "Hyundai Motors Showroom VRF",
    location: "Pune",
    category: "hyundai",
    img: "/assets/projects/hyundai/HYUNDAI 3.jpg",
    desc: "Multi-zone VRF air conditioning and heating system integration."
  },
  {
    id: 2,
    title: "Hyundai Motors Service Center",
    location: "Pune",
    category: "hyundai",
    img: "/assets/projects/hyundai/HYUNDAI 9.jpg",
    desc: "High-volume air extraction and central ventilation unit installation."
  },
  {
    id: 3,
    title: "Hyundai Showroom Indoor Console",
    location: "Pune",
    category: "hyundai",
    img: "/assets/projects/hyundai/HYUNDAI 1.jpg",
    desc: "Ceiling-cassette airflow ductwork and architectural diffuser installation."
  },
  {
    id: 4,
    title: "Kia Motors Showroom VRV",
    location: "Chinchwad, Pune",
    category: "kia",
    img: "/assets/projects/kia/KIA 3.jpg",
    desc: "Luxury console and ceiling-mounted air conditioning installation."
  },
  {
    id: 5,
    title: "Kia Motors Service Bay Ventilation",
    location: "Chinchwad, Pune",
    category: "kia",
    img: "/assets/projects/kia/KIA 1.jpg",
    desc: "Compressors and heavy ventilation exhaust integration."
  },
  {
    id: 6,
    title: "Kia Motors Indoor Duct Grid",
    location: "Chinchwad, Pune",
    category: "kia",
    img: "/assets/projects/kia/KIA 2.jpg",
    desc: "Precision insulation and acoustic ducting for multi-zone climate control."
  },
  {
    id: 7,
    title: "SBI Life Office - WTC Chiller Plant",
    location: "Kharadi, Pune",
    category: "sbi",
    img: "/assets/projects/sbi/SBI 2.jpg",
    desc: "High-volume chiller piping and insulation at the World Trade Center."
  },
  {
    id: 8,
    title: "SBI Life Central VRV Network",
    location: "World Trade Center, Kharadi",
    category: "sbi",
    img: "/assets/projects/sbi/SBI 3.jpg",
    desc: "Acoustic lined ducting and VRV indoor unit grid."
  },
  {
    id: 9,
    title: "SBI Life Executive Floor HVAC",
    location: "WTC Kharadi, Pune",
    category: "sbi",
    img: "/assets/projects/sbi/SBI 1.jpg",
    desc: "Centralized air distribution and concealed ductable AC commissioning."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Hyundai Motors', value: 'hyundai' },
    { label: 'Kia Motors', value: 'kia' },
    { label: 'SBI Life (WTC)', value: 'sbi' },
  ];

  const filteredProjects = filter === 'all'
    ? projectList
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '100px 0', background: '#F8FAFC' }}>
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
          Our Portfolio
        </span>
        <h2 className="section-title">Showcase of Engineering Precision</h2>
        <p className="section-subtitle">
          Explore photographs of our professional indoor HVAC unit, ducting, and chiller installations across Pune.
        </p>

        {/* Categories Tab bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                background: filter === cat.value ? '#0B192C' : '#ffffff',
                color: filter === cat.value ? '#ffffff' : '#64748B',
                boxShadow: filter === cat.value ? '0 4px 10px rgba(11, 25, 44, 0.15)' : '0 2px 5px rgba(0,0,0,0.05)',
                border: filter === cat.value ? '1px solid #0B192C' : '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                if (filter !== cat.value) {
                  e.target.style.color = '#0B192C';
                  e.target.style.borderColor = '#cbd5e1';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== cat.value) {
                  e.target.style.color = '#64748B';
                  e.target.style.borderColor = '#E2E8F0';
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  boxShadow: '0 10px 25px rgba(11, 25, 44, 0.05)',
                }}
                className="gallery-item"
                onClick={() => setActiveImage(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  className="gallery-img"
                />

                {/* Glass Dark Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(11, 25, 44, 0.95) 0%, rgba(11, 25, 44, 0.5) 50%, rgba(11, 25, 44, 0.1) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    padding: '24px',
                    textAlign: 'left',
                  }}
                  className="gallery-overlay"
                >
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      marginBottom: '12px',
                      backdropFilter: 'blur(6px)',
                      alignSelf: 'end',
                    }}
                  >
                    <ZoomIn size={18} />
                  </div>
                  
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {project.location}
                  </span>
                  
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.4, margin: 0 }}>
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 25, 44, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setActiveImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80vh',
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.img}
              alt={activeImage.title}
              style={{
                width: '100%',
                maxHeight: '60vh',
                objectFit: 'contain',
                background: '#020617',
                display: 'block',
              }}
            />
            <div style={{ padding: '24px 30px', textAlign: 'left', background: '#ffffff' }}>
              <span style={{ fontSize: '0.8rem', color: '#008DDA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {activeImage.location}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B192C', margin: '6px 0 10px 0' }}>
                {activeImage.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {activeImage.desc}
              </p>
            </div>
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
