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
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full" />
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
                  src="public/aboutprifle.jpg"
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
              I'm a passionate <strong className="text-red-500">full-stack developer</strong> with a strong curiosity
              for technology and innovation. My journey began with a fascination for how websites function,
              pushing me to explore deeply into the world of web development.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Currently studying at <span className="text-red-500 font-semibold">Passerelles Numériques Cambodia</span>,
              I thrive on building meaningful digital experiences. I'm committed to transforming ideas into beautiful, functional realities.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I value clean code, elegant design, and the impact of tech. When I'm not coding,
              you'll find me learning new frameworks, watching tech documentaries, or gaming with friends.
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
              {['Creative Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-200 rounded-full text-sm font-medium shadow-sm backdrop-blur-md"
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
