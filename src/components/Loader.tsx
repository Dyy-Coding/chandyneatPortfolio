import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, delay: progress === 100 ? 0.3 : 0 }}
    >
      <div className="text-center relative">
        {/* Floating Animated Circles */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Profile Image with animated ring */}
        <motion.div
          initial={{ scale: 0.7, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto relative">
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="public/loadprofile.jpg"
                alt="Chandy Neat"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-5xl"
            >
              👋
            </motion.span>
            <motion.span
              className="mt-2 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              Welcome to My Portfolio
            </motion.span>
          </h1>

          <motion.p
            className="text-white/90 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Chandy Neat - Web Developer
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden border border-white/30 backdrop-blur-sm mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-white via-red-200 to-white rounded-full relative shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Dots Animation */}
        <motion.div
          className="mt-6 flex items-center justify-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 0.2, 0.4].map((delay, idx) => (
            <motion.div
              key={idx}
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay }}
            />
          ))}
        </motion.div>

        {/* Percentage Counter */}
        <motion.p
          className="text-white/80 mt-4 text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {Math.floor(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
