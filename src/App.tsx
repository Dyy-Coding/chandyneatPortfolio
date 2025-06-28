import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import InterestsSection from './components/sections/InterestsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {loading && <Loader onComplete={handleLoadingComplete} />}
        
        {!loading && (
          <>
            <Navigation />
            <ThemeToggle />
            <main>
              <HomeSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <EducationSection />
              <InterestsSection />
              <TestimonialsSection />
              <ContactSection />
            </main>
            <FooterSection />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;