import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Globe, Database, Terminal, Palette, CircuitBoard } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: Globe, color: 'text-gray-600' },
    { name: 'Full-Stack', icon: Code, color: 'text-blue-500' },
    { name: 'Frontend', icon: Palette, color: 'text-green-500' },
    { name: 'Backend', icon: Database, color: 'text-purple-500' },
    { name: 'Design', icon: Palette, color: 'text-pink-500' },
    { name: 'Artificial Intelligence', icon: CircuitBoard, color: 'text-pink-500' },
  ];

  const projects = [
     {
      title: 'OOP  E-commerce Business Logic',
      description: 'OOP structures e-commerce operations into reusable classes like Product, User, Cart, and Order, applying principles like encapsulation and inheritance. It separates business logic (like pricing, checkout, inventory) for better scalability, maintainability, and cleaner code architecture.',
      image: '/project/oop-ecomerce.jpg',
      tech: ['TypeScript', 'OOP Architecture', 'GitHub'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/OOP-Ecomerce.git',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern full-stack portfolio showcasing my skills, projects, and technical experience. Built with user-friendly navigation, interactive design, and sections for about, skills, projects, testimonials, and downloadable CV.',
      image: '/project/portfolio.png',
      tech: ['PHP', 'MVC Architecture', 'MySQL', 'Cloud Hosting (AWS)',"Tailwind"],
      category: 'Full-Stack',
      liveUrl: 'https://chandyneat-student-info.site/',
      githubUrl: 'https://github.com/Dyy-Coding/Portfolio-Website.git',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Inventory Managment System',
      description: 'A team-built Inventory Management System using PHP MVC and MySQL. Developed through sprint-based collaboration with GitHub version control and Jira task tracking. Features include material tracking, stock management, supplier integration, and sales reporting.',
      image: '/project/vc1.jpg',
      tech: ['JavaScript', 'PHP', 'MVC Architecture', 'MySQL','Cloud Hosting (AWS)','Jira','GitHub','Tailwind'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/G2_VC1.git',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Weather App',
      description: 'A modern weather app that fetches real-time weather data using a Weather API, saves recent searches with Local Storage, and is styled with SASS for a clean, responsive interface. Built for great UX with smooth animations and modular, maintainable code.',
      image: '/project/wheather app.png',
      tech: ['Figma', 'HTML', 'CSS', "SASS","GitHub","JavaScript","Local Strorage"],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/G3-JavaScript-project-Wheather-App.git',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'WordPress Deployment',
      description: 'Cloud-deployed WordPress on AWS Ubuntu. Setup LAMP stack and DNS.',
      image: '/project/softwareDeployment.jpg',
      tech: ['WordPress', 'GoDaddy', 'AWS','MobaTerm','Linux(Ubuntu)'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Object Tracking',
      description: 'Used YOLOv8 for tracking objects via webcam. ID labeling and real-time metrics.',
      image: '/project/objectTracking.jpg',
      tech: ['Algorithm(Python)', 'OpenCV', 'Ultralytics YOLOv8', 'PyTorch','collections','random','time'],
      category: 'Artificial Intelligence',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Yolo-Sceen-Object-project-Pyhton.git',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Face Recognition',
      description: 'Developed a face recognition-based attendance system. The system detects faces via webcam, logs attendance automatically in Excel, and provides voice feedback. Responsible for back-end logic, facial recognition integration, and data handling.',
      image: '/project/faceReconition.jpg',
      tech: ['Algorithm(Python)',
              "OpenCV",
              "face_recognition",
              "pandas",
              "uuid",
              "tkinter",
              "customtkinter",
              "PIL",
              "os",
              "openpyxl",
              "numpy",
              "datetime",
              "pyttsx3",
              "GitHub",],
      category: 'Artificial Intelligence',
      liveUrl: '#',
      githubUrl: 'https://github.com/Dyy-Coding/Face_Detection_Project.git',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Music Website Project',
      description: 'Maintained clean, readable code by enforcing HTML, CSS, and SASS standards; resolved bugs through GitHub collaboration; and ensured cross-browser responsiveness and code efficiency through constructive feedback.',
      image: '/project/music band image.png',
      tech: ['Figma', 'HTML','SASS','CSS', 'GitHub'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Brochure Design',
      description: 'I led a small team in using Figma for collaborative design and conducted UX/UI research through browser-based analysis, ensuring efficiency and user-centered innovation.',
      image: '/project/brochure.jpg',
      tech: ['Figma'],
      category: 'Design',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Youtube Interface',
      description: 'I designed a static YouTube interface during my Term 1 web development course using HTML and CSS, focusing on layout, styling, and replicating a familiar UI to strengthen my understanding of responsive design principles.',
      image: '/project/youtube.png',
      tech: ['Figma','HTML','CSS'],
      category: 'Frontend',
      liveUrl: 'https://dyy-coding.github.io/YoutubeInterface/',
      githubUrl: 'https://github.com/Dyy-Coding/YoutubeInterface.git',
      featured: false,
      status: 'Completed'
    }
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my work across different technologies and domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.name
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={`w-5 h-5 ${activeFilter === category.name ? 'text-white' : category.color}`} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              layout
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-white'
                }`}>
                  {project.status}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-red-500 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-red-500 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                    project.category === 'Full-Stack' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                    project.category === 'Frontend' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                    project.category === 'Backend' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                    'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { label: 'Total Projects', value: '10+', icon: Code },
            { label: 'Completed', value: '10', icon: Globe },
            { label: 'In Progress', value: '0', icon: Terminal },
            { label: 'Technologies', value: '10+', icon: Database }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;