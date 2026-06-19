import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Terminal, Database, Settings, Zap, Sparkles } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Mobile App Development',
      icon: Zap,
      color: 'from-pink-500 via-rose-500 to-amber-500',
      glowColor: 'bg-rose-500/10',
      skills: [
        { name: 'Flutter', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Firebase', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
        { name: 'Android Studio', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'Xcode', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
      ]
    },
    {
      category: 'Frontend & UI Engineering',
      icon: Globe,
      color: 'from-blue-600 via-indigo-600 to-purple-600',
      glowColor: 'bg-indigo-500/10',
      skills: [
        { name: 'HTML5', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ]
    },
    {
      category: 'Backend & Frameworks',
      icon: Terminal,
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      glowColor: 'bg-emerald-500/10',
      skills: [
        { name: 'PHP', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Laravel', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original-wordmark.svg' },
        { name: 'Node.js', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MySQL', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Git', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading Section updated to premium style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
       
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-normal">
            A verified look at my system stacks, deployment technologies, and application development workflows.
          </p>
        </motion.div>

        {/* Upgraded 3-Column Layout with Profile Card Styles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Soft Ambient Background Glow Circles matching layout architecture */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${category.glowColor} rounded-full blur-3xl z-0`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Header Container */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Progress Matrix */}
                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {/* Skill Identity Block */}
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2.5">
                          {/* Circle Photo/Logo container frame */}
                          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 p-1.5 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0">
                            <img 
                              src={skill.logo} 
                              alt={`${skill.name} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback if image fails to render smoothly
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Premium Clean Progress Bar Line */}
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;