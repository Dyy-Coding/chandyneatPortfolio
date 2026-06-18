import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Terminal, GitBranch, Settings, Zap, Layers } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'Vue.js', level: 75, icon: '💚' },
        { name: 'Next.js', level: 40, icon: '📦' },
        { name: 'Tailwind CSS', level: 70, icon: '🌀' }, // Swirl for Tailwind
      
      ]
    },
    {
      category: 'Backend Development',
      icon: Terminal,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
                { name: 'PHP', level: 80, icon: '🐘' },          // Elephant mascot
                { name: 'Laravel', level: 75, icon: '🚀' },      // Rocket for speed/framework
                { name: 'Node.js', level: 55, icon: '🌿' },      // Green leaf for JS/eco
                { name: 'TypeScript', level: 55, icon: '🟦' },   // Blue square matches TS color
                { name: 'Java', level: 40, icon: '☕' },           // Coffee cup = Java
                { name: 'Spring Boot', level: 30, icon: '🌱' },    // Seedling = Spring Boot
                { name: 'Python', level: 50, icon: '🐍' }        // Snake mascot
              ]

    },
    {
      category: 'Database Management',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: [
        { name: 'MySQL', level: 85, icon: '🗄️' },
        { name: 'PostgresQL', level: 50, icon: '🐘' },
      ]
    },
    {
      category: 'Development Tools',
      icon: Settings,
      color: 'from-slate-500 to-slate-700',
      bgColor: 'bg-slate-50 dark:bg-slate-900/20',
      borderColor: 'border-slate-200 dark:border-slate-800',
      skills: [
        { name: 'Git', level: 80, icon: '🌿' },
        { name: 'VSCode', level: 90, icon: '💻' },
        { name: 'Postman', level: 75, icon: '📮' },
        { name: 'Jira', level: 50, icon: '📋' },
        { name: 'Power BI', level: 50, icon: '📊' },
        { name: 'AWS Cloud', level: 50, icon: '☁️' },
        { name: 'WordPress', level: 70, icon: '𝗪' },
        { name: 'Xcode', level: 50, icon: '🅧' },
        { name: 'Android Studio', level: 50, icon: '🤖' },
      ]
    },
    {
      category: 'Mobile App Development',
      icon: Zap,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      skills: [
        { name: 'Flutter', level: 70, icon: '🔥' },
        { name: 'GetX', level: 60, icon: '⚡' },
        { name: 'Hive', level: 50, icon: '🍯' },
        { name: 'Firebase', level: 60, icon: '🔥' },
        { name: 'App Store', level: 60, icon: '📱' },
        { name: 'Play Store', level: 70, icon: '📲' },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className={`${category.bgColor} ${category.borderColor} border-2 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                              ease: "easeOut"
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 200] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2 
                              }}
                            />
                          </motion.div>
                        </div>
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