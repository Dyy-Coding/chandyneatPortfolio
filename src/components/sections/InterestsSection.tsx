import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Gamepad2, Bot, Code2, Coffee, Music } from 'lucide-react';

const InterestsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const interests = [
    {
      title: 'Tech Documentaries',
      icon: Monitor,
      emoji: '📺',
      description: 'Exploring the latest tech trends and innovations through documentaries'
    },
    {
      title: 'Gaming',
      icon: Gamepad2,
      emoji: '🎮',
      description: 'Enjoying strategic and creative games in my free time'
    },
    {
      title: 'AI Exploration',
      icon: Bot,
      emoji: '🤖',
      description: 'Discovering new AI tools and their practical applications'
    },
    {
      title: 'Learning Frameworks',
      icon: Code2,
      emoji: '⚡',
      description: 'Always excited to learn new web development frameworks'
    },
    {
      title: 'Coffee & Code',
      icon: Coffee,
      emoji: '☕',
      description: 'Perfect combination for productive coding sessions'
    },
    {
      title: 'Music Production',
      icon: Music,
      emoji: '🎵',
      description: 'Creating beats and melodies as a creative outlet'
    }
  ];

  return (
    <section id="interests" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-red-500">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {interest.emoji}
              </motion.div>
              
              <interest.icon className="w-8 h-8 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {interest.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;