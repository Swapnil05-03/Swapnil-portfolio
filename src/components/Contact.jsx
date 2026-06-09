import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { SectionLabel } from './About';

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    description: 'Best for internship inquiries',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/swapnil-dwivedi',
    href: personalInfo.linkedin,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.25)',
    description: 'Professional network & updates',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/swapnil-dwivedi',
    href: personalInfo.github,
    color: '#F0F6FC',
    bg: 'rgba(240,246,252,0.06)',
    border: 'rgba(240,246,252,0.15)',
    description: 'Source code & contributions',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-padding pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Let's connect
            </h2>
            <p className="text-text-secondary mt-3 text-sm max-w-md mx-auto">
              I'm actively seeking SDE internship opportunities. Feel free to reach out for collaboration, referrals, or just to say hi.
            </p>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 relative overflow-hidden rounded-2xl border border-accent-cyan/20 bg-gradient-to-r from-bg-card via-bg-secondary to-bg-card p-8 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-600/5 to-violet-500/5 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
              Available for
            </p>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              SDE Internship Opportunities
            </h3>
            <p className="text-text-secondary text-sm max-w-sm mx-auto mb-5">
              Looking for summer/winter internships in software development. Open to remote and on-site roles.
            </p>
            <motion.a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-glow-cyan hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-all"
            >
              <FiMail size={15} />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.label} contact={contact} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const Icon = contact.icon;

  return (
    <motion.a
      ref={ref}
      href={contact.href}
      target={contact.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-bg-card rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 shadow-card hover:shadow-card-hover"
      style={{ border: `1px solid ${contact.border}` }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: contact.bg, border: `1px solid ${contact.border}` }}
      >
        <Icon size={18} style={{ color: contact.color }} />
      </div>
      <div>
        <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
          {contact.label}
        </p>
        <p className="text-text-primary font-medium text-sm truncate">{contact.value}</p>
        <p className="text-text-muted text-xs mt-1">{contact.description}</p>
      </div>
      <div
        className="flex items-center gap-1 text-xs font-semibold mt-auto group-hover:gap-2 transition-all duration-200"
        style={{ color: contact.color }}
      >
        Connect
        <FiArrowUpRight size={12} />
      </div>
    </motion.a>
  );
}
