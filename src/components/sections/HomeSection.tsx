import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Send, ArrowUpRight, Sparkles } from 'lucide-react';

const HomeSection: React.FC = () => {
  const techStack = ['Flutter', 'Dart', 'React', 'TypeScript', 'Node.js', 'REST APIs'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Vast, soft, clean background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center"
          >
            {/* Premium Mini Badge Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Available For New Roles
              </span>
            </motion.div>

            {/* Bold Premium Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                Chandy Neat
              </span>
            </motion.h1>

            {/* Structured Subheadings & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 mb-4 font-medium tracking-tight">
                Software Engineer
              </h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0">
                Engineering premium, production-ready interactive mobile and web architectures. Specialized in crafting native-fidelity applications that scale efficiently.
              </p>

              {/* Core Technologies */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-md mx-auto lg:mx-0">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Upgraded CTA Action Buttons & Socials */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-base shadow-xl shadow-slate-900/10 dark:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/chandy-neat-ab1160371"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/chandy_neat"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:text-[#3290ec] dark:hover:text-[#3290ec] hover:border-blue-200 dark:hover:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-sm"
                  title="Telegram"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - New Soft, Minimalist Floating Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center w-full lg:col-span-6 relative"
          >
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] mx-auto">
              
              {/* Soft Ambient Glow Behind Image */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 via-indigo-50 to-purple-100 dark:from-indigo-900/40 dark:via-slate-800 dark:to-purple-900/40 blur-3xl opacity-60 rounded-full" />

              {/* Main Image Container - Smooth Floating Animation */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 group"
              >
                <img
                  src="/homeprofile.jpg"
                  alt="Chandy Neat"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Minimalist Inner Shadow for depth */}
                <div className="absolute inset-0 border border-black/5 dark:border-white/5 rounded-[2rem] pointer-events-none" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;