import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Linkedin, Mail } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rady Y',
      role: 'PNC WEP Coordinator',
      company: 'Passerelles Numériques Cambodia',
      image: '/teacher/rady.jpg',
      email: 'rady.y@passerellesnumeriques.org',
      linkedin: 'https://www.linkedin.com/in/rady-y?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      quote: 'Chandy is a technically strong student with excellent problem-solving skills. His passion for coding and attention to detail make him stand out in web development.'
    },
    {
      name: 'Sovanchansreyleap Kheng',
      role: 'PNC English Trainer',
      company: 'Passerelles Numériques Cambodia',
      image: '/teacher/leap.jpg',
      email: 'sovanchansreyleap.kheng@passerellesnumeriques.org',
      linkedin: 'https://www.linkedin.com/in/sovanchansreyleap-kheng?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      quote: 'Chandy is a creative and skilled student who consistently delivers quality work. He’s dedicated, reliable, and always eager to learn.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
      {/* Structural Accent Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block Section Accent */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Trusted By <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Mentors</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Outer Slider Box Framework Container */}
        <div className="max-w-5xl mx-auto relative px-4 md:px-12">
          
          <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 shadow-xl p-8 md:p-14 relative overflow-hidden min-h-[420px] md:min-h-[320px] flex items-center">
            
            <Quote className="absolute top-8 right-10 w-24 h-24 text-slate-100 dark:text-slate-900/60 pointer-events-none stroke-[1.5]" />

            <div className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center"
                >
                  {/* Left Column Profile Brand */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border-2 border-indigo-500/20 mb-4 p-1 bg-slate-50 dark:bg-slate-900">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mt-1 leading-tight">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold mt-1">
                      {testimonials[currentTestimonial].company}
                    </p>

                    {/* Integrated Actionable Contact Channels */}
                    <div className="flex items-center gap-3 mt-4">
                      {testimonials[currentTestimonial].linkedin && (
                        <motion.a
                          href={testimonials[currentTestimonial].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all shadow-sm"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {testimonials[currentTestimonial].email && (
                        <motion.a
                          href={`mailto:${testimonials[currentTestimonial].email}`}
                          className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all shadow-sm"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Right Column Quote Block Content */}
                  <div className="flex flex-col justify-center">
                    <blockquote className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300 italic leading-relaxed tracking-wide">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Left Navigation Arrow Trigger Button */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 z-20 group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Right Navigation Arrow Trigger Button */}
          <motion.button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 z-20 group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Dynamic Navigational Slider Pagination Indicator Dots */}
        <div className="flex justify-center mt-10 space-x-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2.5 rounded-full transition-all duration-500 bg-indigo-600 ${
                index === currentTestimonial ? 'w-8 opacity-100' : 'w-2.5 opacity-30 dark:bg-slate-600 hover:opacity-60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;