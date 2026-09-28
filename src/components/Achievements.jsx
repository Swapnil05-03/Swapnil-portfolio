import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { achievements } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Milestones & recognition
            </h2>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group bg-bg-card border border-border-subtle rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${item.color}10, transparent 70%)`,
        }}
      />

      <div
        className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-4 border"
        style={{
          background: `${item.color}12`,
          borderColor: `${item.color}25`,
          boxShadow: `0 0 20px ${item.color}15`,
        }}
      >
        {item.icon}
      </div>

      <h3
        className="font-bold text-lg mb-2 relative z-10"
        style={{ color: item.color }}
      >
        {item.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed relative z-10">
        {item.description}
      </p>

      {item.certificate && (
        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold relative z-10 hover:underline"
          style={{ color: item.color }}
        >
          View Certificate
          <FiExternalLink size={12} />
        </a>
      )}
    </motion.div>
  );
}