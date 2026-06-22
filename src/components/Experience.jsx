import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experienceItems = [
  {
    title: 'AI Intern | Support Vectors AI Labs',
    duration: 'Jan 2026 – Present',
    location: 'Remote',
    responsibilities: [
      'Developed production-oriented AI applications using Python, LangChain, transformer models, and vector embeddings, improving semantic retrieval relevance.',
      'Built multimodal machine learning pipelines integrating SigLIP-based image-text embeddings across 250+ indexed image-text pairs.',
      'Developed Retrieval-Augmented Generation (RAG) workflows and optimized inference pipelines, reducing retrieval latency while improving contextual response quality.',
      'Designed modular AI agent workflows integrating prompt orchestration, NLP pipelines, and retrieval systems.',
      'Collaborated in agile Git-based environments to develop scalable AI solutions.',
    ],
    skills: ['Python', 'LangChain', 'RAG', 'Transformers', 'SigLIP', 'Vector Databases', 'LLMs', 'NLP'],
  },
  {
    title: 'Web Developer Intern | Opportive',
    duration: 'Jul 2025 – Aug 2025',
    location: 'Remote',
    responsibilities: [
      'Engineered backend services using Express.js and MongoDB to improve scalability and API performance.',
      'Developed RESTful APIs and optimized database queries, reducing server-side processing time.',
      'Applied debugging, testing, and Git-based version control practices to improve reliability and maintainability.',
      'Worked within agile development teams to identify and resolve performance bottlenecks.',
      'Delivered scalable software solutions that improved overall system efficiency.',
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'Backend Development', 'JavaScript'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Professional Experience
      </motion.h2>

      <div className="relative">
        <div className="hidden md:block absolute left-8 top-10 h-full w-1 bg-gradient-to-b from-netflix-red to-transparent opacity-40 rounded-full" />
        <div className="space-y-10">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative md:pl-20"
            >
              <div className="absolute md:left-4 left-0 top-3 md:top-6 w-10 h-10 rounded-full bg-netflix-red text-black flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-lg" />
              </div>
              <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-netflix-red/10 border border-netflix-red/20 px-4 py-2 text-sm text-netflix-red font-medium">
                    <FaCalendarAlt />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {item.responsibilities.map((responsibility, rIndex) => (
                    <div key={rIndex} className="flex gap-3">
                      <span className="mt-1 text-netflix-red">•</span>
                      <p className="text-gray-300 leading-7">{responsibility}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 text-xs rounded-full bg-netflix-red/20 text-netflix-red border border-netflix-red/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
