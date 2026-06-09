import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { SectionLabel } from './About';
import { FiCheckCircle } from 'react-icons/fi';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Certifications</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Credentials & learning
            </h2>
            <p className="text-text-secondary mt-3 text-sm max-w-md mx-auto">
              Verified certifications from globally recognized technology leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={`${cert.name}-${cert.topic}`} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-bg-card border border-border-subtle rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex gap-4"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 border"
        style={{
          background: `${cert.color}12`,
          borderColor: `${cert.color}25`,
        }}
      >
        {cert.icon}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-start gap-1.5 mb-1">
          <FiCheckCircle size={12} className="mt-0.5 flex-shrink-0" style={{ color: cert.color }} />
          <p className="text-text-primary font-semibold text-sm leading-snug">{cert.name}</p>
        </div>
        <p className="text-text-muted text-xs mb-1">{cert.issuer}</p>
        <span
          className="inline-block text-xs px-2 py-0.5 rounded-md font-medium"
          style={{ background: `${cert.color}12`, color: cert.color }}
        >
          {cert.topic}
        </span>
      </div>
    </motion.div>
  );
}
