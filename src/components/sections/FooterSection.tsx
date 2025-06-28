import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code, Coffee, ArrowUp } from 'lucide-react';

const FooterSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-300',
      description: 'View my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:chandy.neat@example.com',
      color: 'hover:text-red-400',
      description: 'Send me a message'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Chandy Neat
                  </span>
                </h3>
                <p className="text-gray-400 text-lg">Web Developer</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Passionate about creating meaningful digital experiences through clean code, 
                innovative design, and cutting-edge technology. Always learning, always growing.
              </p>

              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-red-400" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-5 h-5 text-red-400" />
                  <span>Fueled by Coffee</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Let's Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-all duration-300 group`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-gray-500">{social.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                © 2025 Chandy Neat. All rights reserved.
              </p>
              <p className="text-gray-500 flex items-center justify-center md:justify-start space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-yellow-500" />
              </p>
            </div>

            <div className="text-center">
              <p className="text-red-400 font-medium mb-2 italic">
                "Code is poetry in motion, creativity in logic."
              </p>
              <p className="text-gray-500 text-sm">
                Building the future, one line at a time.
              </p>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
};

export default FooterSection;