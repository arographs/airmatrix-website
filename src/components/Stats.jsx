import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, HeartHandshake, ShieldCheck } from 'lucide-react';

function Counter({ value, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <Award size={32} color="#008DDA" />,
      value: "7",
      suffix: "+",
      label: "Years Experience",
      desc: "Delivering engineering excellence and precision"
    },
    {
      icon: <Briefcase size={32} color="#008DDA" />,
      value: "100",
      suffix: "+",
      label: "Projects Completed",
      desc: "High-quality industrial & commercial systems"
    },
    {
      icon: <HeartHandshake size={32} color="#008DDA" />,
      value: "100",
      suffix: "%",
      label: "Customer Satisfaction",
      desc: "Trusted by top industry leaders in Pune"
    },
    {
      icon: <ShieldCheck size={32} color="#008DDA" />,
      value: "24",
      suffix: "/7",
      label: "Support Availability",
      desc: "Round-the-clock emergency technical team"
    }
  ];

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '80px 0',
        position: 'relative',
        zIndex: 5,
        marginTop: '-50px',
        borderRadius: '24px 24px 0 0',
        boxShadow: '0 -20px 40px rgba(0, 0, 0, 0.03)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '30px',
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: '#F8FAFC',
                padding: '30px 24px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.3s ease',
              }}
              className="stat-card"
            >
              <div
                style={{
                  background: 'rgba(0, 141, 218, 0.08)',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {stat.icon}
              </div>
              <h3
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#0B192C',
                  marginBottom: '8px',
                  lineHeight: 1,
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1E3E62',
                  marginBottom: '6px',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#64748B',
                }}
              >
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(11, 25, 44, 0.06);
          border-color: rgba(0, 141, 218, 0.3);
          background: #ffffff;
        }
      `}</style>
    </section>
  );
}
