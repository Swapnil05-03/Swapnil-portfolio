import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiEye, FiFileText, FiUser, FiCode, FiAward } from 'react-icons/fi';
import { SectionLabel } from './About';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Resume</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              My resume
            </h2>
            <p className="text-text-secondary mt-3 text-sm">
              Internship-ready. Last updated June 2026.
            </p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="bg-bg-card border border-border-subtle rounded-2xl overflow-hidden shadow-card"
          >
            {/* Resume Preview Card */}
            <div className="relative bg-gradient-to-br from-bg-secondary to-bg-card p-8 border-b border-border-subtle">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Mock resume content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white">
                    SD
                  </div>
                  <div>
                    <div className="text-text-primary font-bold text-lg">Swapnil Dwivedi</div>
                    <div className="text-text-secondary text-sm">Aspiring Software Developer · B.Tech IT</div>
                    <div className="text-accent-cyan text-xs font-mono mt-0.5">CGPA: 8.9</div>
                  </div>
                </div>

                <div className="h-px bg-border-subtle" />

                {/* Resume section rows */}
                {[
                  { icon: FiUser, label: 'Education', value: 'GL Bajaj Institute of Technology & Management' },
                  { icon: FiCode, label: 'Skills', value: 'Java · Python · C · DSA · OOP · Web Dev' },
                  { icon: FiFileText, label: 'Projects', value: 'SOS Triggering System · E-Commerce Website' },
                  { icon: FiAward, label: 'Achievements', value: '200+ LeetCode · GSSoC 2026 · 5 Certifications' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-glow border border-accent-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-accent-cyan" />
                    </div>
                    <div>
                      <span className="text-text-muted text-xs uppercase tracking-wider font-mono">{label}</span>
                      <p className="text-text-secondary text-xs mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 flex flex-col sm:flex-row gap-3">
              <motion.a
                href="/resume.pdf"
                download="Swapnil_Dwivedi_Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-glow-cyan hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-all duration-200"
              >
                <FiDownload size={16} />
                Download Resume
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-border-bright text-text-primary font-semibold rounded-xl text-sm hover:border-accent-cyan/40 hover:bg-accent-glow transition-all duration-200"
              >
                <FiEye size={16} />
                Preview
              </motion.a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-text-muted text-xs mt-4 font-mono"
          >
            PDF · 1 page · Internship-ready format
          </motion.p>
        </div>
      </div>
    </section>
  );
}
