import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import ParticleBackground from './ParticleBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-hero-glow opacity-60" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-glow text-accent-cyan text-xs font-medium tracking-wide mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-slow" />
            Open to SDE Internship Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <span className="text-lg sm:text-xl font-semibold text-text-primary">
              {personalInfo.title}
            </span>
            <span className="w-1 h-1 rounded-full bg-text-muted hidden sm:block" />
            <span className="text-sm sm:text-base text-text-secondary font-medium px-3 py-1 rounded-full bg-bg-card border border-border-subtle">
              {personalInfo.subtitle}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="max-w-xl text-text-secondary text-base sm:text-lg leading-relaxed mb-10 font-mono text-sm"
          >
            <span className="text-accent-cyan/60 font-mono text-xs">&gt; </span>
            {personalInfo.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-glow-cyan hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-200 text-sm"
            >
              View Projects
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7 py-3 border border-border-bright text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 hover:bg-accent-glow transition-all duration-200 flex items-center gap-2 text-sm"
            >
              <FiDownload size={15} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="flex items-center gap-4"
          >
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.93 }}
                className="w-10 h-10 rounded-xl border border-border-subtle bg-bg-card hover:border-accent-cyan/40 hover:bg-accent-glow hover:text-accent-cyan text-text-secondary flex items-center justify-center transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            {[
              { value: '200+', label: 'LeetCode Problems' },
              { value: '8.9', label: 'CGPA' },
              { value: 'GSSoC', label: '2026 Contributor' },
              { value: '5+', label: 'Certifications' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient leading-none mb-1">
                  {value}
                </div>
                <div className="text-xs text-text-muted font-medium tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-cyan transition-colors cursor-pointer flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
