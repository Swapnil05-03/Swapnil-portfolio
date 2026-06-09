import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
              SD
            </div>
            <span className="text-text-secondary text-sm">
              Swapnil Dwivedi
            </span>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs flex items-center gap-1 font-mono">
            Built with <FiHeart size={11} className="text-red-400 mx-0.5" /> by Swapnil · {year}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-8 h-8 rounded-lg border border-border-subtle bg-bg-card hover:border-accent-cyan/30 hover:text-accent-cyan text-text-muted flex items-center justify-center transition-all duration-200"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
