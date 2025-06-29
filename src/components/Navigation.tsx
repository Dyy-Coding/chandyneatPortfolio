import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

interface NavItemProps {
  section: {
    id: string;
    label: string;
  };
  active: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ section, active, onClick }) => {
  const commonStyles = `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap`;

  if (section.id === 'download') {
    return (
      <li className="flex items-center">
        <motion.a
          href="/ChandyNeat_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 shadow-md rounded-full transition-all duration-300 flex items-center justify-center h-full"
        >
          📄 {section.label}
        </motion.a>
      </li>
    );
  }

  return (
    <li className="flex items-center">
      <button
        onClick={() => onClick(section.id)}
        className={`${commonStyles} ${
          active
            ? 'bg-red-500 text-white shadow-lg'
            : 'text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
        }`}
      >
        {section.label}
      </button>
    </li>
  );
};

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

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
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-4 py-2 sm:px-5 sm:py-2 shadow-lg border border-red-200 dark:border-red-800 w-[95%] sm:w-auto max-w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Desktop Nav */}
      <ul className="hidden md:flex flex-wrap items-center justify-center gap-2">
        {sections.map((section) => (
          <NavItem
            key={section.id}
            section={section}
            active={activeSection === section.id}
            onClick={scrollToSection}
          />
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden justify-between items-center w-full">
        <span className="text-sm font-semibold px-2 text-red-600">Menu</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex flex-col mt-3 gap-2 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {sections.map((section) => (
              <NavItem
                key={section.id}
                section={section}
                active={activeSection === section.id}
                onClick={scrollToSection}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
