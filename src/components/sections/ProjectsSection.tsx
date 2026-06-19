import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Globe, Database, Terminal, Palette, CircuitBoard, Smartphone, Sparkles, ChevronDown, User, Briefcase, Building2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [activeTrack, setActiveTrack] = useState<'personal' | 'working'>('personal');
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayLimit, setDisplayLimit] = useState(6);

  const categories = [
    { name: 'All', icon: Globe, color: 'text-gray-500' },
    { name: 'Mobile Developer', icon: Smartphone, color: 'text-rose-500' },
    { name: 'Full-Stack', icon: Code, color: 'text-blue-500' },
    { name: 'Frontend', icon: Palette, color: 'text-indigo-500' },
    { name: 'Backend', icon: Database, color: 'text-emerald-500' },
    { name: 'Design', icon: Palette, color: 'text-amber-500' },
    { name: 'Software', icon: CircuitBoard, color: 'text-purple-500' },
  ];

  const projects = [
    // ==========================================
    // WORKING PROJECTS (Production Corporate Assets)
    // ==========================================
    {
      title: 'Umami App',
      company: 'Dojology Tech & Ventures',
      companyUrl: 'https://www.dojology.com/', 
      companyLogo: 'data:image/png;base64,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', // Replace with your company logo URL
      description: 'Programmed responsive Flutter UI layouts by accurately translating high-fidelity Figma designs into clean code. Work closely with UX/UI designer and backend peers to troubleshoot complex technical roadblocks, conduct rigorous testing, and manage Google Play Store distribution and policy compliance.',
      image: '/umami.jpeg',
      tech: ['Flutter', 'Dart', 'Hive', 'Firebase', 'GetX', 'Google Maps API','Google Play Store'],
      category: 'Mobile Developer',
      track: 'working',
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'CashGrow 68 Pawnshop App',
      company: 'Dojology Tech & Ventures',
      companyUrl: 'https://www.dojology.com/', 
      companyLogo: 'data:image/png;base64,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', // Replace with your company logo URL
      description: 'Developed and optimized secure mobile application features, specifically addressing deployment guidelines to implement a smoother, highly secure user experience. Handled full-lifecycle preparation for both the Apple App Store and Google Play Console compliance while ensuring secure backend API integration.',
      image: '/cashgrow68.png',
      tech: ['Flutter', 'Dart', 'Hive', 'Firebase', 'GetX', 'Google Maps API','Google Play Store','App Store'],
      category: 'Mobile Developer',
      track: 'working',
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },

    // ==========================================
    // PERSONAL PROJECTS
    // ==========================================
    {
      title: 'Security Authentication',
      description: 'This project uses Java Spring Boot to build secure and scalable backend APIs, handling authentication, data management, and business logic. The frontend is developed with Next.js, providing a fast, responsive, and modern user experience.',
      image: 'https://www.thesslstore.com/blog/wp-content/uploads/2021/05/client-authentication-certificate-feature.jpg',
      tech: ['Java', 'Next.js', 'GitHub', 'Spring Boot'],
      category: 'Full-Stack',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Java_Library_System.git',
      status: 'In Progress'
    },
    {
      title: 'Library Web App',
      description: 'I developed a Library App using Laravel, MySQL, HTML, and Tailwind CSS, organizing features like book management and borrowing through Laravel’s MVC structure.',
      image: '/project/libraryApp.jpg',
      tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Tailwind', 'GitHub'],
      category: 'Full-Stack',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/A5-Assignment-Monday.git',
      status: 'Completed'
    },
    {
      title: 'OOP E-commerce Business Logic',
      description: 'OOP structures e-commerce operations into reusable classes like Product, User, Cart, and Order, applying principles like encapsulation and inheritance. It separates business logic (like pricing, checkout, inventory) for better scalability, maintainability, and cleaner code architecture.',
      image: '/project/oop-ecomerce.jpg',
      tech: ['TypeScript', 'OOP Architecture', 'GitHub'],
      category: 'Backend',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/OOP-Ecomerce.git',
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern full-stack portfolio showcasing my skills, projects, and technical experience. Built with user-friendly navigation, interactive design, and sections for about, skills, projects, testimonials, and downloadable CV.',
      image: '/project/portfolio.png',
      tech: ['PHP', 'MVC Architecture', 'MySQL', 'Cloud Hosting (AWS)', 'Tailwind'],
      category: 'Full-Stack',
      track: 'personal',
      liveUrl: 'https://chandyneat-student-info.site/',
      githubUrl: 'https://github.com/Dyy-Coding/Portfolio-Website.git',
      status: 'Completed'
    },
    {
      title: 'Weather App',
      description: 'A modern weather app that fetches real-time weather data using a Weather API, saves recent searches with Local Storage, and is styled with SASS for a clean, responsive interface. Built for great UX with smooth animations and modular, maintainable code.',
      image: '/project/wheather app.png',
      tech: ['Figma', 'HTML', 'CSS', 'SASS', 'GitHub', 'JavaScript', 'Local Storage'],
      category: 'Backend',
      track: 'personal',
      liveUrl: 'https://dyy-coding.github.io/G3-JavaScript-project-Wheather-App/',
      githubUrl: 'https://github.com/Dyy-Coding/G3-JavaScript-project-Wheather-App.git',
      status: 'Completed'
    },
    {
      title: 'Object Tracking',
      description: 'Used YOLOv8 for tracking objects via webcam. ID labeling and real-time metrics.',
      image: '/project/objectTracking.jpg',
      tech: ['Algorithm(Python)', 'OpenCV', 'Ultralytics YOLOv8', 'PyTorch'],
      category: 'Software',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Yolo-Sceen-Object-project-Pyhton.git',
      status: 'Completed'
    },
    {
      title: 'Face Recognition',
      description: 'Developed a face recognition-based attendance system. The system detects faces via webcam, logs attendance automatically in Excel, and provides voice feedback. Responsible for back-end logic, facial recognition integration, and data handling.',
      image: '/project/faceReconition.jpg',
      tech: ['Algorithm(Python)', 'OpenCV', 'face_recognition', 'pandas', 'tkinter', 'GitHub'],
      category: 'Software',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Face_Detection_Project.git',
      status: 'Completed'
    },
    {
      title: 'Music Website Project',
      description: 'Maintained clean, readable code by enforcing HTML, CSS, and SASS standards; resolved bugs through GitHub collaboration; and ensured cross-browser responsiveness and code efficiency through constructive feedback.',
      image: '/project/music band image.png',
      tech: ['Figma', 'HTML', 'SASS', 'CSS', 'GitHub'],
      category: 'Frontend',
      track: 'personal',
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'Youtube Interface',
      description: 'I designed a static YouTube interface during my Term 1 web development course using HTML and CSS, focusing on layout, styling, and replicating a familiar UI to strengthen my understanding of responsive design principles.',
      image: '/project/youtube.png',
      tech: ['Figma', 'HTML', 'CSS'],
      category: 'Frontend',
      track: 'personal',
      liveUrl: 'https://dyy-coding.github.io/YoutubeInterface/',
      githubUrl: 'https://github.com/Dyy-Coding/YoutubeInterface.git',
      status: 'Completed'
    },
    {
      title: 'Movie Tracking App',
      description: 'A mobile app to track and rate movies, with user authentication and a curated watchlist.',
      image: '/project/movie_tracking_app.jpg',
      tech: ['Flutter', 'GetX', 'Social Authentication', 'Git'],
      category: 'Mobile Developer',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Movie_series_tracking.git',
      status: 'Completed'
    },
    {
      title: 'Library Mobile App',
      description: 'A mobile library management app for browsing, borrowing, and returning books.',
      image: '/project/libraryapp_benner.jpg',
      tech: ['Flutter', 'Social Authentication', 'GetX', 'Git'],
      category: 'Mobile Developer',
      track: 'personal',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/library_mobile_app.git',
      status: 'Completed'
    }
  ];

  const trackProjects = projects.filter(project => project.track === activeTrack);

  const filteredProjects = activeFilter === 'All'
    ? trackProjects
    : trackProjects.filter(project => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, displayLimit);

  const handleTrackChange = (track: 'personal' | 'working') => {
    setActiveTrack(track);
    setActiveFilter('All');
    setDisplayLimit(6);
  };

  const handleFilterChange = (categoryName: string) => {
    setActiveFilter(categoryName);
    setDisplayLimit(6); 
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
         
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Track Toggle Control System */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200/40 dark:border-slate-700/40 relative">
            <button
              onClick={() => handleTrackChange('personal')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black tracking-wide uppercase transition-all duration-300 relative z-10 ${
                activeTrack === 'personal' ? 'text-indigo-600 dark:text-white bg-white dark:bg-slate-900 shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <User className="w-4 h-4" />
              Personal Project
            </button>
            <button
              onClick={() => handleTrackChange('working')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black tracking-wide uppercase transition-all duration-300 relative z-10 ${
                activeTrack === 'working' ? 'text-indigo-600 dark:text-white bg-white dark:bg-slate-900 shadow-md' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Working Project
            </button>
          </div>
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => handleFilterChange(category.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === category.name
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10'
                  : 'bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <category.icon className={`w-4 h-4 ${activeFilter === category.name ? 'text-white' : category.color}`} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid List */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[400px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group relative backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                layout
              >
                {/* Media Media Image Wrapper */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase shadow-sm ${
                    project.status === 'Completed' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-amber-500 text-white'
                  }`}>
                    {project.status}
                  </div>

                  {/* Hover Icons Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 bg-white rounded-full text-slate-900 flex items-center justify-center shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubUrl !== '#' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 bg-white rounded-full text-slate-900 flex items-center justify-center shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content Core Body Details */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Clickable Corporate Identity Link & Logo Badge */}
                  {project.track === 'working' && project.company && (
                    <a 
                      href={project.companyUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 pl-1.5 pr-3 py-1 rounded-full text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-300 w-fit group/link shadow-sm"
                    >
                      {project.companyLogo ? (
                        <img 
                          src={project.companyLogo} 
                          alt={`${project.company} logo`}
                          className="w-5 h-5 rounded-full object-cover border border-indigo-200/40 dark:border-indigo-800/40 flex-shrink-0 shadow-xs"
                        />
                      ) : (
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      <span className="text-[11px] font-black uppercase tracking-wider">
                        {project.company}
                      </span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover/link:opacity-100 transition-opacity ml-0.5" />
                    </a>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-[10px] font-extrabold tracking-wider uppercase flex-shrink-0">
                      {project.category.replace(' Developer', '')}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech stack mapping loops */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100/40 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded-lg text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Layout Fallback Warnings */}
        {visibleProjects.length === 0 && (
          <motion.div 
            className="text-center py-16 text-slate-400 dark:text-slate-600 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No entries found matching this stack configuration framework filter.
          </motion.div>
        )}

        {/* Load More Trigger Array Container */}
        {filteredProjects.length > displayLimit && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.button 
              onClick={() => setDisplayLimit(prev => prev + 6)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white/80 dark:bg-slate-900/80 hover:bg-indigo-600 dark:hover:bg-indigo-600 border border-slate-200/80 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-600/10 backdrop-blur-md group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore More Builds</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300" />
              <span className="ml-1 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-700 group-hover:text-white text-slate-500 dark:text-slate-400 rounded-md text-[10px]">
                {filteredProjects.length - displayLimit}
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;