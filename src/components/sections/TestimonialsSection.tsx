import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rady Y',
      role: 'PNC WEP Coordinator',
      company: 'Passerelles Numériques Cambodia',
      image: 'public/teacher/rady.jpg',
      quote: 'Chandy is a technically strong student with excellent problem-solving skills. His passion for coding and attention to detail make him stand out in web development.'
    },
    {
      name: 'Sovanchansreyleap Kheng',
      role: 'PNC English Trainer',
      company: 'Passerelles Numériques Cambodia',
      image: 'public/teacher/leap.jpg',
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
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-red-500">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-12 h-12 text-red-500 mb-6" />
            
            <motion.blockquote
              key={currentTestimonial}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{testimonials[currentTestimonial].quote}"
            </motion.blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-red-500 font-semibold">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <motion.button
                  onClick={prevTestimonial}
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-red-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;