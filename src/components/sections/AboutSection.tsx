import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Taller Profile Image Container to adapt to your image shape */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', duration: 0.8 }}
            className="flex justify-center md:col-span-5 w-full"
          >
            {/* Aspect ratio changed to 2/3 and given an increased vertical height to make it stand taller */}
            <div className="relative w-full max-w-sm aspect-[2/3] md:h-[520px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-1">
              
              {/* Profile Image Layer */}
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden">
                <img
                  src="/aboutprifle.png"
                  alt="Chandy Neat"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Custom Frame Corners (Matching the Home Profile card style) */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-indigo-500 rounded-tl-xl z-10" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-rose-400 rounded-br-xl z-10" />
            </div>
          </motion.div>

          {/* Right Column - About Text Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center md:text-left md:col-span-7"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              My software engineering journey originally began with a strong fascination for web development, focusing on building responsive digital experiences. However, during my **professional internship**, I discovered the immense potential of modern mobile frameworks and successfully shifted my path into mobile development.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Today, I work as a **full-time Mobile App Developer** at my current company, specializing in building high-fidelity cross-platform applications using <span className="text-indigo-600 dark:text-indigo-400 font-bold">Flutter & Dart</span>. I actively deliver intelligent, AI-enhanced solutions that combine clean code with exceptional performance.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I excel at bridging the gap between sophisticated backend systems and pixel-perfect user interfaces, thriving in fast-paced environments where I collaborate closely with UI/UX designers and backend teams to turn complex logic into smooth client-side realities.
            </p>

            {/* Traits/Badges - Styled exactly like the premium profile card badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
              {[
                'Flutter & Dart Specialist',
                'Web & Mobile Background',
                'Cross-Functional Team Player',
                'AI Integration & Clean Code',
              ].map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-1.5 bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-800 dark:text-indigo-300 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', delay: 0.4 + index * 0.1 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;