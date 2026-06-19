import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Send, ArrowUpRight, Sparkles } from 'lucide-react';

const HomeSection: React.FC = () => {
  // Badges tailored to your engineering background and profile style
  const profileBadges = [
    'Mobile App Developer',
    'Flutter Specialist',
    'Cambodia',
    'ASEAN',
    'Global Market',
  ];

  // Inline tech tags matching the frosted aesthetic to unify both sides
  const techStack = ['Flutter', 'Dart', 'React', 'TypeScript', 'Node.js', 'REST APIs'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-indigo-50/20 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Upgraded to match Right Profile Card Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center"
          >
            {/* Premium Mini Badge Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Available For New Roles
              </span>
            </motion.div>

            {/* Bold Premium Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <br />
              <motion.span
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 dark:from-indigo-400 dark:via-purple-400 dark:to-rose-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Chandy Neat
              </motion.span>
            </motion.h1>

            {/* Structured Subheadings & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-4 font-medium tracking-tight">
                Software Engineer
              </h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-gray-400 max-w-xl leading-relaxed mb-6 font-normal">
                Engineering premium, production-ready interactive mobile and web architectures. Specialized in crafting native-fidelity applications that scale efficiently.
              </p>

              {/* Core Technologies styled exactly like Profile Card Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-md">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Upgraded CTA Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-base shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center w-full lg:col-span-7"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl lg:h-[750px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-1">
              
              {/* Photo Background Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/homeprofile.jpg"
                  alt="Chandy Neat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 via-25% to-transparent dark:from-slate-900 dark:via-slate-900/60" />
              </div>

              {/* Decorative Custom Frame Corners from image_63dd22.jpg[cite: 1] */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-indigo-500 rounded-tl-xl z-10" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-rose-400 rounded-br-xl z-10" />

              {/* Card Text Content Layer[cite: 1] */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  Chandy Neat
                </h2>
                
                <h3 className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-1">
                  Mobile App Developer
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 font-medium text-base mb-5">
                  Software Engineer · Flutter Developer
                </p>

                {/* Styled pill badges matching image_63dd22.jpg layout[cite: 1] */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-1.5 bg-indigo-50/90 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-800 dark:text-indigo-300 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Social Action Link Buttons[cite: 1] */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/chandy-neat-b26423372/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    LinkedIn
                  </a>
                  <a
                    href="https://t.me/chandyneat"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#3290ec] hover:bg-[#287ecf] text-white rounded-xl text-sm font-bold shadow-md shadow-blue-400/20 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    Telegram
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default HomeSection;