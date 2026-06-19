import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2, Bot, Code2, Coffee, Trophy, Sparkles } from 'lucide-react';

const InterestsSection: React.FC = () => {
  const containerRef = useRef(null);

  const interests = [
    {
      title: 'Gaming',
      icon: Gamepad2,
      emoji: '🎮',
      description: 'Enjoying immersive, strategic, and high-fidelity creative gaming worlds.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'AI Exploration',
      icon: Bot,
      emoji: '🤖',
      description: 'Discovering next-generation AI tools and implementing them in modern builds.',
      image: '/project/ai-exploration.jpg',
    },
    {
      title: 'Learning Frameworks',
      icon: Code2,
      emoji: '⚡',
      description: 'Constantly tracking and adopting high-performance frontend and ecosystem stacks.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Coffee & Code',
      icon: Coffee,
      emoji: '☕',
      description: 'The golden combination for long, high-focus engineering sprints.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sports & Fitness',
      icon: Trophy,
      emoji: '⚽',
      description: 'Staying active with Football, running, and fitness to keep the mind sharp.',
      image: '/sport.jpg',
    },
  ];

  // Duplicate list to achieve a seamless, continuous infinite loop scroll effect
  const doubleInterests = [...interests, ...interests];

  return (
    <section id="interests" ref={containerRef} className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      
      {/* Structural Accent Header */}
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
        
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Beyond The <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Code</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Mask Container set to 70% of screen width on desktop screens */}
      <div className="w-full md:max-w-[70vw] mx-auto relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        
        {/* Infinite Framer Motion Slider X Track */}
        <motion.div 
          className="flex gap-6 w-max px-4 py-4"
          // FIXED: Animating via a direct value instead of mixed percentages inside arrays prevents layout calculation crashes
          animate={{ x: [0, -1700] }} 
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          // Pauses the auto-scroll loop animation layout when client hover locks on card
          whileHover={{ animationPlayState: 'paused' }}
        >
          {doubleInterests.map((interest, index) => (
            <div
              key={`${interest.title}-${index}`}
              // FIXED: Replaced standard fluid unit combinations with clear, predictable layouts
              className="w-[280px] sm:w-[340px] md:w-[380px] h-[400px] rounded-[2rem] overflow-hidden relative group border border-slate-200/60 dark:border-slate-800/60 shadow-md bg-slate-100 dark:bg-slate-950 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex-shrink-0"
            >
              {/* Image Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                {/* Standard Vignette Shading Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10 transition-all duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/70" />
              </div>

              {/* Floating Meta Tags */}
              <div className="absolute top-5 right-5 z-20 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-sm border border-white/10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {interest.emoji}
              </div>

              {/* Push Up Content Box Structure */}
              <div className="p-6 md:p-8 relative z-20 w-full transform translate-y-[52px] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                
                {/* Header Title with Branding Icon Elements */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/90 backdrop-blur-sm text-white flex items-center justify-center shadow-md shadow-indigo-600/20 group-hover:bg-indigo-500 transition-colors">
                    <interest.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                    {interest.title}
                  </h3>
                </div>

                {/* Description Body Layer - Pushed up on hover */}
                <p className="text-slate-300 dark:text-slate-200 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100 max-w-xl">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;