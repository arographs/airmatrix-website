import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Fan, Thermometer, Warehouse, Compass, Wrench, ShieldCheck, Settings2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Snowflake size={36} color="#008DDA" />,
      title: "Air Conditioning Sales",
      desc: "Authorized retail and bulk distribution of premium industrial, variable refrigerant flow (VRF/VRV), and central air conditioning systems from global leading brands."
    },
    {
      icon: <Fan size={36} color="#008DDA" />,
      title: "HVAC Solutions",
      desc: "End-to-end heating, ventilation, and air conditioning systems designed for manufacturing facilities, office spaces, hospitals, and high-occupancy corporate parks."
    },
    {
      icon: <Thermometer size={36} color="#008DDA" />,
      title: "Refrigeration Systems",
      desc: "High-precision commercial refrigeration installations, deep freezers, process chillers, and walk-in coolers matching severe chemical and pharmaceutical standards."
    },
    {
      icon: <Warehouse size={36} color="#008DDA" />,
      title: "Cold Storage Solutions",
      desc: "State-of-the-art cold storage engineering and insulation. Tailored temperatures for agricultural yields, dairy manufacturing units, and biological stockpiles."
    },
    {
      icon: <Compass size={36} color="#008DDA" />,
      title: "HVAC Design & Consult",
      desc: "Expert heat load analysis, duct design, and equipment selection matching ASHRAE, ISHRAE, and ECBC compliance rules to guarantee thermal comfort."
    },
    {
      icon: <Wrench size={36} color="#008DDA" />,
      title: "Installation & Commissioning",
      desc: "Rigorous onsite engineering and system installation. Complete load testing, airflow balancing, and safety calibration prior to operational handover."
    },
    {
      icon: <ShieldCheck size={36} color="#008DDA" />,
      title: "Annual Maintenance (AMC)",
      desc: "Preventative checkups, chemical coil cleaning, electrical checks, filter replacements, and system tune-ups to maximize efficiency and avoid downtime."
    },
    {
      icon: <Settings2 size={36} color="#008DDA" />,
      title: "Repairs & Tech Support",
      desc: "On-call emergency repair dispatch, compressor overhauls, leak detection, gas recharging, and electronic controls diagnostic service 24/7."
    }
  ];

  return (
    <section id="services" style={{ padding: '100px 0', background: '#ffffff' }}>
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
          What We Do
        </span>
        <h2 className="section-title">Our Premium HVAC & Cooling Services</h2>
        <p className="section-subtitle">
          Engineered for high performance, maximum durability, and superior energy efficiency across Pune's industrial sectors.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '20px',
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                background: '#F8FAFC',
                padding: '35px 28px',
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
            >
              <div>
                <div
                  style={{
                    background: 'rgba(0, 141, 218, 0.08)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    transition: 'all 0.3s ease',
                  }}
                  className="icon-box"
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0B192C',
                    marginBottom: '12px',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {service.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0B192C',
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

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          background: #ffffff;
          border-color: rgba(0, 141, 218, 0.4);
          box-shadow: 0 20px 40px rgba(11, 25, 44, 0.08);
        }
        .service-card:hover .icon-box {
          background: var(--primary);
        }
        .service-card:hover .icon-box svg {
          color: #ffffff !important;
        }
        .service-card:hover .learn-more-link {
          color: #008DDA;
        }
        .service-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
