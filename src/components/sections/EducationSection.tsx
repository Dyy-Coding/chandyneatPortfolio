import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      title: 'Web Development Program',
      institution: 'Passerelles Numériques Cambodia',
      period: '2024 - Present',
      description: 'Intensive full-stack web development program focusing on modern technologies and industry best practices.',
      icon: GraduationCap,
      achievements: ['Full-Stack Development', 'Team Collaboration', 'Project Management']
    },
    {
      title: 'High School Diploma',
      institution: 'Hun Sen Peam Chikang High School, New Generation School (NGS PCK)',
      period: '2020 - 2023',
      description: 'Completed secondary education with focus on mathematics and General Knowledge fundamentals.',
      icon: BookOpen,
      achievements: ['Mathematics Excellence', 'Baccalauréat Certificate', 'General Knowledge']
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-red-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-500"></div>
            
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className="ml-20 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg w-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-8 h-8 text-red-500" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-red-500 font-semibold">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;