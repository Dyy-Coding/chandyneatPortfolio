import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HomeSection: React.FC = () => {
  const techLogos = [
    { name: 'HTML', image: '/tech/html.jpg', alt: 'HTML', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { name: 'CSS', image: '/tech/css.jpg', alt: 'CSS', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'JavaScript', image: '/tech/vscode.jpg', alt: 'JavaScript', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'Vue.js', image: '/tech/php.jpg', alt: 'Vue.js', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Laravel', image: '/tech/github.jpg', alt: 'Laravel', bg: 'bg-red-100 dark:bg-red-900/30' },
    { name: 'Node.js', image: '/tech/python.jpg', alt: 'Node.js', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <motion.span
                className="inline-block text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Chandy Neat
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-4 font-light">
                A Passionate{' '}
                <motion.span
                  className="text-red-500 font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Web Developer
                </motion.span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                Crafting Interactive & Meaningful Experiences for the Modern Web
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-red-500 text-red-500 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                className="w-full h-full relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-400 to-red-600 p-2">
                  <img
                    src="public/homeprofile.jpg"
                    alt="Chandy Neat"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {techLogos.map((tech, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    className={`absolute w-16 h-16 ${tech.bg} rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: [0, Math.cos(angle + 0.5) * 20, 0],
                      y: [0, Math.sin(angle + 0.5) * 20, 0],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                      x: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                      y: { duration: 4, repeat: Infinity, delay: index * 0.5 },
                    }}
                    whileHover={{ scale: 1.2, z: 20 }}
                  >
                    <img
                      src={tech.image}
                      alt={tech.alt}
                      className="w-8 h-8 object-contain rounded-sm"
                    />
                  </motion.div>
                );
              })}

              {/* Orbiting Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-red-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-red-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
