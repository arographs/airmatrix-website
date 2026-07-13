import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Award, Activity, Leaf, CalendarDays, ThumbsUp, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Award size={28} color="#008DDA" />,
      title: "20+ Years Experience",
      desc: "An established industry track record of high-performance engineering & mechanical cooling systems."
    },
    {
      icon: <HardHat size={28} color="#008DDA" />,
      title: "Expert Engineers",
      desc: "Licensed designers and field technicians ensuring precise installations and diagnostic accuracy."
    },
    {
      icon: <ShieldCheck size={28} color="#008DDA" />,
      title: "Premium Quality",
      desc: "Partnerships with global industry giants (Daikin, Carrier, Blue Star) guaranteeing grade-A machinery."
    },
    {
      icon: <Activity size={28} color="#008DDA" />,
      title: "Reliable Service",
      desc: "Consistent service cycles, emergency repair hotlines, and quick turnaround times when you need us."
    },
    {
      icon: <Leaf size={28} color="#008DDA" />,
      title: "Energy Efficient Systems",
      desc: "Systems configured specifically to achieve maximum COP ratings, cutting your monthly power costs."
    },
    {
      icon: <CalendarDays size={28} color="#008DDA" />,
      title: "Timely Delivery",
      desc: "Strict project scheduling from site preparation to final system commissioning without delays."
    },
    {
      icon: <ThumbsUp size={28} color="#008DDA" />,
      title: "Customer Satisfaction",
      desc: "Long-standing relationships with industrial corporations, corporate offices, and showrooms in Pune."
    },
    {
      icon: <Headphones size={28} color="#008DDA" />,
      title: "Professional Support",
      desc: "Dedicated account managers and immediate response lines to address issues or scheduled maintenance."
    }
  ];

  return (
    <section id="why-us" style={{ padding: '100px 0', background: '#0B192C', color: '#ffffff' }}>
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
          Why Choose Us
        </span>
        <h2 className="section-title" style={{ color: '#ffffff' }}>Uncompromised Standards in Air Engineering</h2>
        <p className="section-subtitle" style={{ color: '#94A3B8' }}>
          We blend state-of-the-art technology with decades of technical expertise to deliver maximum thermal stability.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginTop: '20px',
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                background: 'rgba(30, 62, 98, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '30px 24px',
                textAlign: 'left',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              className="why-card"
            >
              <div
                style={{
                  background: 'rgba(0, 141, 218, 0.15)',
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(0, 141, 218, 0.3)',
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#94A3B8',
                  lineHeight: 1.5,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-5px);
          background: rgba(30, 62, 98, 0.55);
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}
