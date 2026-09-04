import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Snowflake,
  Fan,
  Thermometer,
  Warehouse,
  Compass,
  Wrench,
  ShieldCheck,
  Settings2,
  ArrowRight,
  X,
  Check,
  Layers,
  Cpu,
  Building,
  Zap,
  CheckCircle
} from 'lucide-react';

const servicesData = [
  {
    id: 'cassette-ac-services',
    title: 'Cassette AC Services',
    icon: <Fan size={32} color="#008DDA" />,
    shortDesc: 'Flush ceiling-mounted multi-directional airflow systems ideal for corporate offices, retail stores, and commercial suites.',
    overview: 'Our Cassette AC Services deliver 360-degree uniform cooling through flush-mounted ceiling units. Designed for commercial spaces where floor and wall space must be preserved, cassette units integrate seamlessly into standard drop-ceiling grids.',
    specs: [
      { label: 'Airflow Pattern', value: '360° Multi-directional Vanes' },
      { label: 'Cooling Capacity', value: '1.5 TR to 4.5 TR per unit' },
      { label: 'Refrigerant', value: 'Eco-Friendly R-410A / R-32' },
      { label: 'Noise Level', value: 'Ultra-quiet (28-36 dBA)' },
      { label: 'Drain Pump', value: 'Built-in high-head condensate pump' }
    ],
    applications: ['Corporate Offices', 'Retail Showrooms', 'Restaurants & Cafes', 'Conference Rooms', 'Banks & Financial Hubs'],
    features: [
      'Individual vane angle controls for draft-free comfort',
      'Washable long-life air filters with bio-sterilization',
      'Fresh air intake option for healthier indoor air quality',
      'Slim-body design fitting narrow plenum spaces',
      'Automated restart and emergency self-diagnostics'
    ]
  },
  {
    id: 'cassette-ac-split-ac',
    title: 'Cassette AC-Split AC',
    icon: <Snowflake size={32} color="#008DDA" />,
    shortDesc: 'Hybrid split air conditioning deployment offering whisper-quiet operation and dual wall/ceiling versatility.',
    overview: 'Ideal for multi-room commercial and residential complexes, our Cassette-Split AC solutions pair efficient outdoor inverter condensing units with versatile indoor cassette or wall-mounted split blowers. We ensure optimized pipe sizing and maximum energy savings.',
    specs: [
      { label: 'Compressor Type', value: 'Twin-Rotary Inverter Compressor' },
      { label: 'Efficiency Rating', value: '5-Star BEE Rated / High ISEER' },
      { label: 'Piping Length', value: 'Up to 50m max elevation' },
      { label: 'Filtration', value: 'PM 2.5 Multi-Stage Air Filter' },
      { label: 'Voltage Stabilizer', value: 'Built-in wide voltage operation (140V-280V)' }
    ],
    applications: ['Boutique Offices', 'Healthcare Clinics', 'Executive Cabins', 'Residential Apartments', 'Educational Institutes'],
    features: [
      'Inverter technology reducing electricity consumption by up to 45%',
      'Independent room-by-room temperature regulation',
      'Copper tube heat exchangers with anti-corrosion blue fins',
      'Smart Wi-Fi controls & mobile app scheduling option',
      'Fast cooling Turbo Mode for rapid pull-down'
    ]
  },
  {
    id: 'centralised-ac-solution',
    title: 'Centralised AC Solution',
    icon: <Building size={32} color="#008DDA" />,
    shortDesc: 'Heavy-duty centralized HVAC ducting and Air Handling Unit (AHU) systems for mega facilities and industrial plants.',
    overview: 'Our Centralised AC Solutions provide engineered climate control across expansive multi-story complexes, manufacturing floors, and large public spaces. Utilizing centralized chillers or packaged rooftop units, we design customized GI/PI ductwork, VAV dampers, and plenum systems.',
    specs: [
      { label: 'System Type', value: 'Central AHU + Packaged Ducting' },
      { label: 'Tonnage Range', value: '10 TR up to 500+ TR Central Plant' },
      { label: 'Duct Material', value: 'Galvanized Iron (GI) / Pre-insulated (PID)' },
      { label: 'Air Flow Control', value: 'Variable Air Volume (VAV) & VFD Drives' },
      { label: 'Compliance', value: 'ASHRAE 62.1 & ISHRAE Standards' }
    ],
    applications: ['Manufacturing Plants', 'Shopping Malls', 'Hospitals & Cleanrooms', 'IT Parks & Data Centers', 'Auditoriums'],
    features: [
      'Custom heat-load calculation & CFD airflow modeling',
      'HEPA and MERV-rated air filtration for cleanrooms',
      'Centralized Building Management System (BMS) integration',
      'Acoustic insulation reducing duct vibration and sound transmission',
      'Heat Recovery Wheel (HRW) for pre-cooling intake air'
    ]
  },
  {
    id: 'chiller-system-solution',
    title: 'Chiller System Solution',
    icon: <Thermometer size={32} color="#008DDA" />,
    shortDesc: 'Air-cooled and water-cooled chiller plants delivering high-tonnage chilled water for industrial process cooling.',
    overview: 'AirMatrix Enterprises specializes in turnkey Chiller System Solutions. From air-cooled scroll chillers to heavy-duty water-cooled centrifugal plants, we deliver chilled water networks for critical process cooling, plastic molding, pharmaceutical plants, and HVAC systems.',
    specs: [
      { label: 'Cooler Type', value: 'Air-Cooled & Water-Cooled Chillers' },
      { label: 'Compressor', value: 'Magnetic Bearing Centrifugal / Screw / Scroll' },
      { label: 'Chilled Water Temp', value: '+4°C to +15°C adjustable' },
      { label: 'Refrigerant', value: 'Zero-ODP R-134a / R-1234ze / R-410A' },
      { label: 'Pumping System', value: 'Primary-Secondary Variable Pumping (VFD)' }
    ],
    applications: ['Pharma Manufacturing', 'Chemical Processing', 'Plastic Injection Molding', 'Large Corporate Towers', 'Food Processing'],
    features: [
      'High COP & IPLV energy efficiency metrics',
      'Stainless steel plate heat exchangers & shell-and-tube evaporators',
      'Redundant multi-compressor design preventing single-point failure',
      'Cooling tower integration & chemical water treatment loops',
      'Real-time pressure, flow, and temperature telemetry'
    ]
  },
  {
    id: 'cold-storage',
    title: 'Cold Storage',
    icon: <Warehouse size={32} color="#008DDA" />,
    shortDesc: 'Industrial thermal-insulated cold storage facilities tailored for agricultural produce, dairy, and perishables.',
    overview: 'Engineered for strict thermal envelope preservation, our Cold Storage installations protect perishable inventory across agricultural supply chains. We install high-density PUF panels, heavy-duty refrigeration racks, and automated humidity management systems.',
    specs: [
      { label: 'Temperature Range', value: '-5°C to +15°C (Chilled Storage)' },
      { label: 'Insulation Panel', value: 'High-Density PUF Panels (80mm - 150mm)' },
      { label: 'Thermal Conductivity', value: '0.022 W/mK' },
      { label: 'Evaporator Fan', value: 'High-throw axial fans with auto-defrost' },
      { label: 'Humidity Control', value: '65% to 95% RH Relative Humidity' }
    ],
    applications: ['Agriculture & Produce Warehouses', 'Dairy Processing Units', 'Meat & Poultry Distribution', 'Floriculture', 'Beverage Bottling Plants'],
    features: [
      'Cam-locking tongue-and-groove PUF panel construction',
      'Hot gas or electric automatic defrosting cycles',
      'Microprocessor-controlled digital thermostat units',
      'Strip curtains & insulated sliding/swing doors',
      '24/7 temperature logging with SMS alert notifications'
    ]
  },
  {
    id: 'cold-storage-cold-room',
    title: 'Cold Storage - Cold Room',
    icon: <Snowflake size={32} color="#008DDA" />,
    shortDesc: 'Deep freezing walk-in blast freezers and cold rooms engineered down to -40°C for pharma and biological storage.',
    overview: 'Our specialized Cold Room solutions cater to pharmaceutical vaccine storage, biological samples, and commercial blast freezing. Built with medical-grade stainless steel interiors and dual redundant refrigeration units, we guarantee uninterrupted sub-zero conditions.',
    specs: [
      { label: 'Operating Temp', value: '-15°C down to -40°C (Blast Freezer)' },
      { label: 'Door System', value: 'Heated perimeter gasket sliding doors' },
      { label: 'Refrigeration Unit', value: 'Two-stage semi-hermetic compressor' },
      { label: 'Flooring', value: 'Reinforced anti-skid aluminum check plate' },
      { label: 'Safety Release', value: 'Internal luminescent emergency door release' }
    ],
    applications: ['Pharmaceutical Vaccine Hubs', 'Blood Banks & Labs', 'Frozen Food Packers', 'Commercial Ice Cream Plants', 'Chemical Resins'],
    features: [
      'Dual standby condensing units for 100% fail-safe backup',
      'Pressure relief valves preventing vacuum door locking',
      'Hygienic coving corners meeting USFDA & WHO guidelines',
      'Rapid blast chilling down to target core temperature',
      'Cleanroom-compatible anti-microbial wall cladding'
    ]
  },
  {
    id: 'ductable-ac-solution',
    title: 'Ductable AC Solution',
    icon: <Compass size={32} color="#008DDA" />,
    shortDesc: 'Concealed ductable air conditioners providing seamless interior aesthetics and balanced static pressure distribution.',
    overview: 'Ductable AC solutions combine the aesthetics of hidden ceiling equipment with uniform air distribution across large interior layouts. Ideal for high-end offices, banquet halls, and luxury residences where visible wall units are undesirable.',
    specs: [
      { label: 'Unit Capacity', value: '3.0 TR to 16.5 TR Ductable Units' },
      { label: 'External Static Pressure', value: '50 Pa to 150 Pa adjustable' },
      { label: 'Blower Fan', value: 'Didw forward/backward curved centrifugal fan' },
      { label: 'Diffusers', value: 'Linear slot diffusers & architectural grilles' },
      { label: 'Condensate Management', value: 'Gravity drain / auxiliary lift pump' }
    ],
    applications: ['Banquet Halls & Marriage Lawns', 'Corporate Open Plan Spaces', 'High-End Retail Outlets', 'Multiplexes & Theaters', 'Luxury Villas'],
    features: [
      'Concealed indoor unit preserving interior architectural design',
      'Zoned damper controls allowing room-level temperature adjustment',
      'Low sound levels with internal acoustic duct lining',
      'High ESP motors capable of long duct runs',
      'Flexible return air intake (bottom or rear entry)'
    ]
  },
  {
    id: 'hvac-contractor',
    title: 'HVAC Contractor Services',
    icon: <Wrench size={32} color="#008DDA" />,
    shortDesc: 'Full turnkey MEP/HVAC contracting including site engineering, load audits, duct fabrication, and testing.',
    overview: 'As a premier licensed HVAC Contractor in Pune, AirMatrix Enterprises provides end-to-end turnkey project execution. From initial heat-load engineering audits to equipment procurement, duct installation, electrical paneling, and final TAB (Testing, Adjusting, Balancing).',
    specs: [
      { label: 'Scope', value: 'Turnkey Design, Procurement, Erection, TAB' },
      { label: 'Duct Fabrication', value: 'Automated CNC Plasma Cut Ducting' },
      { label: 'Piping', value: 'Heavy Duty MS / GI / Copper Hydro-tested Piping' },
      { label: 'Safety Certification', value: 'OSHA / ISHRAE Certified Engineers' },
      { label: 'Warranty & AMC', value: 'Comprehensive 1-Year Commissioning Guarantee' }
    ],
    applications: ['Commercial Skyscrapers', 'Industrial Factories', 'Automobile Assembly Lines', 'Hospital Complexes', 'Government Infrastructure'],
    features: [
      'Dedicated project manager & onsite safety supervisors',
      'Computerized heat load calculations using HAP (Hourly Analysis Program)',
      'As-built CAD drawings & BIM coordination modeling',
      'Complete air balancing reports with calibrated anemometers',
      'Post-commissioning operator training & 24/7 hotline'
    ]
  },
  {
    id: 'vrf-system',
    title: 'VRF System',
    icon: <Zap size={32} color="#008DDA" />,
    shortDesc: 'Variable Refrigerant Flow technology adjusting motor speed continuously to match instant cooling load.',
    overview: 'Variable Refrigerant Flow (VRF) systems represent the pinnacle of modern energy-efficient commercial air conditioning. A single outdoor unit can power dozens of independently controlled indoor units, varying refrigerant flow precisely to match dynamic occupancy.',
    specs: [
      { label: 'Outdoor Modular Capacity', value: '8 HP to 96 HP combined bank' },
      { label: 'Indoor Unit Types', value: 'Cassette, Ductable, Wall Split, Floor Standing' },
      { label: 'Compression Technology', value: 'All-Inverter DC Scroll Compressors' },
      { label: 'Refrigerant Line', value: 'Up to 1000m total piping network' },
      { label: 'Part-Load Efficiency', value: 'IEER > 7.5' }
    ],
    applications: ['Multi-Tenant Commercial Offices', 'Hotels & Resorts', 'Educational Campuses', 'Software Tech Parks', 'Showroom Chains'],
    features: [
      'Proportional refrigerant distribution matching precise thermal demand',
      'Simultaneous cooling and heating in heat recovery models',
      'Centralized touch-screen controller & energy metering by tenant',
      'Space-saving compact outdoor unit footprint',
      'Quiet night-mode operation reducing fan noise by 6 dB'
    ]
  },
  {
    id: 'vrf-vrv-system-solution',
    title: 'Vrf-Vrv System Solution',
    icon: <Layers size={32} color="#008DDA" />,
    shortDesc: 'Integrated VRF/VRV climate engineering with intelligent building management and heat recovery loops.',
    overview: 'Our Vrf-Vrv System Solutions combine Daikin, Carrier, Daikin VRV, and Blue Star VRF technology with customized BMS controls. We design copper piping networks, Y-refnet joints, and electrical interface cards for seamless automation.',
    specs: [
      { label: 'Brand Compatibility', value: 'Daikin VRV, Carrier VRF, Blue Star, Voltas' },
      { label: 'Control Protocol', value: 'BACnet / Modbus / LonWorks BMS Interface' },
      { label: 'Oil Return Control', value: 'Automated oil management cycle' },
      { label: 'Ambient Range', value: 'Operation up to 52°C extreme ambient' },
      { label: 'Refrigerant Charge', value: 'Factory pre-charged R-410A / R-32' }
    ],
    applications: ['Corporate Headquarters', 'Automobile Showrooms', 'Luxury Hotels', 'Hospitals & ICUs', 'R&D Laboratories'],
    features: [
      'Auto-addressing indoor units during commissioning',
      'Continuous heating defrost technology uninterrupted by ice accumulation',
      'Long-piping height difference support up to 90m',
      'Individual tenant billing software integration',
      'Low power consumption standby mode under 1W'
    ]
  },
  {
    id: 'vrv-system',
    title: 'VRV System',
    icon: <Cpu size={32} color="#008DDA" />,
    shortDesc: 'Variable Refrigerant Volume technology developed for ultra-precise room temperature stability and longevity.',
    overview: 'VRV (Variable Refrigerant Volume) systems offer unparalleled reliability and comfort control. By continuously modulating the refrigerant volume supplied to individual zones, VRV eliminates temperature swings and minimizes electrical power surge.',
    specs: [
      { label: 'Technology', value: 'Variable Refrigerant Volume (VRV IV / VRV V)' },
      { label: 'Compressor', value: 'DC Inverter VRT (Variable Refrigerant Temp)' },
      { label: 'Sensors', value: 'Floor temperature & humidity dual sensors' },
      { label: 'Coil Treatment', value: 'Acrylic resin anti-corrosion condenser fin' },
      { label: 'Connectable Ratio', value: '50% to 130% indoor unit sizing' }
    ],
    applications: ['Premium Commercial Real Estate', 'High-Rise Office Towers', 'Luxury Retail Outlets', 'Hospitals', 'Co-Working Hubs'],
    features: [
      'Variable Refrigerant Temperature (VRT) preventing cold drafts',
      'Automatic refrigerant leakage detection system',
      'Slim indoor units blending into low-ceiling architectures',
      'High static pressure outdoor fans for duct-exhaust enclosures',
      'Proven 15+ year operational design life'
    ]
  }
];

export default function Services({ selectedService, onSelectServiceForQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  // Open modal if prop passed or selected
  useEffect(() => {
    if (selectedService) {
      const match = servicesData.find(s => s.title.toLowerCase() === selectedService.toLowerCase());
      if (match) {
        setActiveModalService(match);
      }
    }
  }, [selectedService]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeModalService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRequestQuoteForService = (serviceTitle) => {
    setActiveModalService(null);
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" style={{ padding: '100px 0', background: '#ffffff', position: 'relative' }}>
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
          Primary Offerings
        </span>
        <h2 className="section-title">Our Specialized HVAC & Cooling Solutions</h2>
        <p className="section-subtitle">
          Engineered for high performance, maximum durability, and superior energy efficiency across Pune's commercial and industrial facilities.
        </p>

        {/* 11 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
            marginTop: '30px',
          }}
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              style={{
                background: '#F8FAFC',
                padding: '32px 24px',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              className="service-card"
              onClick={() => setActiveModalService(service)}
            >
              <div>
                <div
                  style={{
                    background: 'rgba(0, 141, 218, 0.08)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease',
                  }}
                  className="icon-box"
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0B192C',
                    marginBottom: '10px',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                  }}
                >
                  {service.shortDesc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#008DDA',
                  transition: 'color 0.2s ease',
                }}
                className="learn-more-link"
              >
                <span>Request details</span>
                <ArrowRight size={14} className="arrow-icon" style={{ transition: 'transform 0.2s ease' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Overlay Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(11, 25, 44, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setActiveModalService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
                padding: '36px',
                textAlign: 'left',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#F1F5F9',
                  border: 'none',
                  color: '#0F172A',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                }}
                onMouseOver={(e) => (e.target.style.background = '#E2E8F0')}
                onMouseOut={(e) => (e.target.style.background = '#F1F5F9')}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div
                  style={{
                    background: 'rgba(0, 141, 218, 0.1)',
                    padding: '14px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {activeModalService.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#008DDA', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Technical Specifications & Details
                  </span>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0B192C', margin: 0 }}>
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Overview */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B192C', marginBottom: '8px' }}>
                  Overview & Engineering Scope
                </h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {activeModalService.overview}
                </p>
              </div>

              {/* Key Technical Specs Grid */}
              <div style={{ marginBottom: '24px', background: '#F8FAFC', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B192C', marginBottom: '14px' }}>
                  Technical Parameters
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  {activeModalService.specs.map((spec, sIdx) => (
                    <div key={sIdx} style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', fontWeight: 600 }}>{spec.label}</span>
                      <span style={{ fontSize: '0.9rem', color: '#0B192C', fontWeight: 700 }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & Applications side-by-side */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '28px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B192C', marginBottom: '10px' }}>
                    Engineering Benefits
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeModalService.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.88rem', color: '#334155' }}>
                        <Check size={16} color="#008DDA" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0B192C', marginBottom: '10px' }}>
                    Target Applications
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeModalService.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        style={{
                          background: 'rgba(0, 141, 218, 0.08)',
                          color: '#008DDA',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '6px 12px',
                          borderRadius: '8px',
                          border: '1px solid rgba(0, 141, 218, 0.2)',
                        }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => handleRequestQuoteForService(activeModalService.title)}
                  className="btn btn-accent"
                  style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '0.95rem' }}
                >
                  <span>Request a Quote for {activeModalService.title}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .service-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          border-color: rgba(0, 141, 218, 0.4);
          box-shadow: 0 15px 30px rgba(11, 25, 44, 0.08);
        }
        .service-card:hover .icon-box {
          background: var(--primary);
        }
        .service-card:hover .icon-box svg {
          color: #ffffff !important;
        }
        .service-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
