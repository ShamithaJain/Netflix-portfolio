import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectRow from './ProjectRow'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const webApps = [
    {
      name: 'AI-Powered Cold Email Generator',
      description: 'Generate personalized, portfolio-aware cold emails using LLMs + ChromaDB. Matches job requirements against stored tech stack and enriches emails with relevant portfolio links.',
      tags: ['Python', 'ChromaDB', 'LangChain', 'LLM', 'Vector Embeddings'],
      github: 'https://github.com/ShamithaJain/Cold-email-Generator',
      // image:'../assets/coldemail.jpg',
    },
    {
      name: 'Travel Booking App',
      description: 'Django-based travel booking platform with user authentication and booking management. Uses crispy-bootstrap5 for responsive forms and is deployed on PythonAnywhere.',
      tags: ['Django', 'Python', 'Authentication', 'Responsive UI', 'PythonAnywhere'],
      github: 'https://github.com/ShamithaJain/Travel-Booking',
    },
    {
      name: 'Health Advisor Web App',
      description: 'Frontend for a health advisory platform built using React (Vite), TypeScript, and Tailwind CSS. Provides personalized health insights with an interactive and responsive interface.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/ShamithaJain/Health-Advisor',
    },
  ]

  const internshipProjects = [
    {
      name: 'Feedback App',
      description: 'Full-stack feedback management system with admin dashboard, feedback forms, and automated email alerts.',
      tags: ['Express.js', 'MongoDB', 'Node.js', 'Email Automation'],
      github: 'https://github.com/ShamithaJain/Feedback-app',
      demo: 'https://feedback-app-15pr.onrender.com/',
    },
    {
      name: 'Chat App',
      description: 'Real-time messaging app using Socket.IO for live communication.',
      tags: ['Socket.IO', 'Express.js', 'MongoDB', 'Real-time'],
      github: 'https://github.com/ShamithaJain/RealTimeChatApplication',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Projects
      </motion.h2>
      
      <div>
        <ProjectRow title="Web Apps" projects={webApps} onCardClick={setSelectedProject} />
        <ProjectRow title="Internship Projects - Opportive" projects={internshipProjects} onCardClick={setSelectedProject} />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-red max-w-2xl w-full p-8 rounded-lg"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-2xl hover:text-netflix-red transition-colors"
              >
                <FaTimes />
              </button>
              
              <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded bg-netflix-red/20 text-netflix-red border border-netflix-red/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-netflix-red hover:bg-red-600 rounded-lg font-semibold transition-all"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-white/30 hover:border-white rounded-lg font-semibold transition-all"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
