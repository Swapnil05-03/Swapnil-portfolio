import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { codingProfiles } from '../data/portfolio';
import { SectionLabel } from './About';

const iconMap = {
  LeetCode: SiLeetcode,
  GeeksforGeeks: SiGeeksforgeeks,
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
};

export default function CodingProfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="profiles" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Online Presence</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Find me across the web
            </h2>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((profile, i) => {
            const Icon = iconMap[profile.name] || FiExternalLink;
            return (
              <ProfileCard key={profile.name} profile={profile} Icon={Icon} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ profile, Icon, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.a
      ref={ref}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group relative bg-bg-card rounded-2xl p-5 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
      style={{
        border: `1px solid ${profile.border}`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${profile.bg}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
          style={{ background: profile.bg, borderColor: profile.border }}
        >
          <Icon size={22} style={{ color: profile.color }} />
        </div>

        {/* Name */}
        <h3 className="text-text-primary font-bold text-base mb-0.5">{profile.name}</h3>
        <p className="text-text-muted text-xs font-mono mb-3 truncate">@{profile.handle}</p>

        {/* Stat badge */}
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg mb-3"
          style={{ background: profile.bg, color: profile.color, border: `1px solid ${profile.border}` }}
        >
          {profile.stat}
        </span>

        <p className="text-text-secondary text-xs">{profile.description}</p>

        {/* Arrow */}
        <div className="flex items-center gap-1 mt-4 text-xs font-semibold transition-all duration-200 group-hover:gap-2" style={{ color: profile.color }}>
          View Profile
          <FiExternalLink size={11} />
        </div>
      </div>
    </motion.a>
  );
}
