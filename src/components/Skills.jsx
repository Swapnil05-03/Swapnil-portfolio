import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionLabel } from './About';

const categoryIcons = {
  'Programming Languages': '{ }',
  'Core Concepts': '⚙',
  'Web Development': '</>',
  'Tools & Platforms': '🔧',
};

const categoryColors = {
  'Programming Languages': { from: '#22D3EE', to: '#3B82F6' },
  'Core Concepts': { from: '#A78BFA', to: '#EC4899' },
  'Web Development': { from: '#34D399', to: '#22D3EE' },
  'Tools & Platforms': { from: '#FB923C', to: '#F59E0B' },
};

function SkillBar({ name, level, delay, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden border border-border-subtle">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color.from}, ${color.to})` }}
        />
      </div>
    </div>
  );
}

function SkillChip({ name }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary text-xs font-medium font-mono hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-accent-glow transition-all duration-200 cursor-default"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const allSkills = Object.values(skills).flat().map((s) => s.name);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <SectionLabel>Technical Skills</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Tools I work with
            </h2>
          </div>

          {/* Category cards with progress bars */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {Object.entries(skills).map(([category, items], catIdx) => {
              const color = categoryColors[category];
              const icon = categoryIcons[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: catIdx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-bg-card border border-border-subtle rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-border-bright transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-lg font-mono font-bold"
                      style={{ color: color.from }}
                    >
                      {icon}
                    </span>
                    <h3 className="text-text-primary font-semibold text-sm">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={catIdx * 0.1 + i * 0.08}
                        color={color}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skill chips summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-bg-card border border-border-subtle rounded-2xl p-6"
          >
            <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-4">
              Full skill set
            </p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <SkillChip key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
