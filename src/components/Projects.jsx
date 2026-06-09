import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Projects</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Things I've built
            </h2>
            <p className="text-text-secondary mt-3 text-sm max-w-md mx-auto">
              A selection of projects that reflect my problem-solving approach and technical range.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-bg-card rounded-2xl border border-border-subtle overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400"
      style={{
        '--accent': project.accent,
        '--accent-light': project.accentLight,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      {/* Card content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
            style={{
              background: project.accentLight,
              borderColor: `${project.accent}30`,
            }}
          >
            {project.icon}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-8 h-8 rounded-lg bg-bg-secondary border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-bright transition-all duration-200"
              aria-label="GitHub repository"
            >
              <FiGithub size={15} />
            </motion.a>
          </div>
        </div>

        {/* Title and description */}
        <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md font-mono font-medium"
              style={{
                background: project.accentLight,
                color: project.accent,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
          style={{ color: project.accent }}
          whileHover={{ x: 4 }}
        >
          View on GitHub
          <FiArrowRight size={13} />
        </motion.a>
      </div>

      {/* Bottom glow effect on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${project.accentLight}, transparent)`,
        }}
      />
    </motion.div>
  );
}
