import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiAward, FiCode } from 'react-icons/fi';
import { personalInfo, education } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-accent-cyan" />
      <span className="text-accent-cyan text-xs font-semibold tracking-[0.2em] uppercase font-mono">
        {children}
      </span>
    </div>
  );
}

export { SectionLabel };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: About text */}
            <div>
              <motion.div variants={fadeUp}>
                <SectionLabel>About Me</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-6 leading-tight">
                  Engineering ideas into{' '}
                  <span className="text-gradient">working software</span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-text-secondary leading-relaxed mb-5 text-[15px]"
              >
                {personalInfo.about}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: FiCode, text: 'Problem Solver' },
                  { icon: FiBookOpen, text: 'Continuous Learner' },
                  { icon: FiAward, text: 'Open Source Contributor' },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-text-secondary text-xs font-medium"
                  >
                    <Icon size={13} className="text-accent-cyan" />
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Education card */}
            <motion.div variants={fadeUp}>
              <SectionLabel>Education</SectionLabel>
              {education.map((edu) => (
                <motion.div
                  key={edu.institution}
                  whileHover={{ y: -4 }}
                  className="border-gradient rounded-2xl p-6 bg-bg-card shadow-card transition-all duration-300 hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <FiBookOpen size={22} className="text-accent-cyan" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-text-primary font-bold text-base leading-snug mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-text-secondary text-sm mb-3">{edu.degree}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="text-text-muted text-xs">Duration</span>
                          <span className="text-text-primary text-xs font-medium bg-bg-secondary px-2 py-0.5 rounded border border-border-subtle">
                            {edu.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-text-muted text-xs">CGPA</span>
                          <span className="text-accent-cyan text-xs font-bold bg-accent-glow px-2 py-0.5 rounded border border-accent-cyan/20">
                            {edu.cgpa} / 10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline decorative element */}
                  <div className="mt-5 pt-4 border-t border-border-subtle">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-slow" />
                      <span className="text-accent-cyan text-xs font-semibold">{edu.status}</span>
                      <span className="text-text-muted text-xs">· Expected Graduation 2028</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick info card */}
              <motion.div
                variants={fadeUp}
                className="mt-4 rounded-2xl p-5 bg-bg-card border border-border-subtle"
              >
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">
                  Currently focused on
                </p>
                <div className="space-y-2">
                  {[
                    'Mastering advanced DSA patterns',
                    'Building full-stack web applications',
                    'Preparing for SDE internship rounds',
                    'Contributing to open-source projects',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-accent-cyan flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
