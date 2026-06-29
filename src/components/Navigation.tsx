import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemProps {
  section: { id: string; label: string };
  active: boolean;
  onClick: (id: string) => void;
  onClose?: () => void;
}

const HamburgerIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
  </svg>
);

const NavItem: React.FC<NavItemProps> = ({ section, active, onClick, onClose }) => {
  if (section.id === 'download') {
    return (
      <li className="shrink-0">
        <a
          href="/ChandyNeat_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onClose?.()}
          className="block px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-center whitespace-nowrap"
        >
          {String.fromCodePoint(0x1F4C4)} {section.label}
        </a>
      </li>
    );
  }

  return (
    <li className="shrink-0">
      <button
        onClick={() => {
          onClick(section.id);
          onClose?.();
        }}
        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
          active
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20'
        }`}
      >
        {section.label}
      </button>
    </li>
  );
};

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'interests', label: 'Interests' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
    { id: 'download', label: 'Download CV' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sectionEls.forEach((section) => {
        const el = section as HTMLElement;
        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(el.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#main-nav')) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      id="main-nav"
      className="fixed top-4 inset-x-4 z-40 mx-auto max-w-4xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* ── Desktop / large tablet — lg and up ── */}
      <div className="hidden lg:block bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-indigo-100 dark:border-indigo-950">
        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {sections.map((section) => (
            <NavItem
              key={section.id}
              section={section}
              active={activeSection === section.id}
              onClick={scrollToSection}
            />
          ))}
        </ul>
      </div>

      {/* ── Mobile / tablet — below lg ── */}
      <div className="lg:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-indigo-100 dark:border-indigo-950 flex items-center justify-between">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          {sections.find((s) => s.id === activeSection)?.label ?? 'Menu'}
        </span>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="p-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-950 overflow-hidden"
          >
            <ul className="p-2 grid grid-cols-2 gap-1">
              {sections.map((section) => (
                <NavItem
                  key={section.id}
                  section={section}
                  active={activeSection === section.id}
                  onClick={scrollToSection}
                  onClose={() => setMenuOpen(false)}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;