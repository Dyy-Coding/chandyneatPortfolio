import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: 'spring', duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
              <motion.div
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/aboutprifle.jpg"
                  alt="Chandy Neat"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My software engineering journey originally began with a strong fascination for web development, focusing on building responsive digital experiences. However, during my **professional internship**, I discovered the immense potential of modern mobile frameworks and successfully shifted my path into mobile development.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Today, I work as a **full-time Mobile App Developer** at my current company, specializing in building high-fidelity cross-platform applications using <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Flutter & Dart</span>. I actively deliver intelligent, AI-enhanced solutions that combine clean code with exceptional performance.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I excel at bridging the gap between sophisticated backend systems and pixel-perfect user interfaces, thriving in fast-paced environments where I collaborate closely with UI/UX designers and backend teams to turn complex logic into smooth client-side realities.
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
              {[
                'Flutter & Dart Specialist',
                'Web & Mobile Background',
                'Cross-Functional Team Player',
                'AI Integration & Clean Code',
              ].map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm backdrop-blur-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', delay: 0.6 + index * 0.1 }}
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