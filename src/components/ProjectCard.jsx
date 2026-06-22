import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="min-w-[320px] md:min-w-[380px] h-[500px] rounded-lg overflow-hidden glass-card cursor-pointer group/card relative"
      onClick={() => onCardClick(project)}
    >
      <div className="relative w-full overflow-hidden rounded-t-lg bg-netflix-black ring-1 ring-white/10 aspect-[16/9]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-contain object-center bg-netflix-black filter brightness-110 contrast-125 transition-opacity duration-300"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-netflix-red/20 via-purple-900/20 to-netflix-red/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-netflix-red/30 flex items-center justify-center text-3xl font-bold">
                {project.name.charAt(0)}
              </div>
              <p className="text-xs text-gray-400">Project Preview</p>
            </div>
          </div>
        )}
      </div>

      
      {/* Content */}
      <div className="p-6 h-[calc(100%-12rem)] flex flex-col">
        <div className="flex items-center justify-between mb-3 gap-3">
          <h3 className="text-xl font-bold">{project.name}</h3>
          {project.date && (
            <span className="text-xs px-3 py-1 rounded-full bg-netflix-red/10 text-netflix-red border border-netflix-red/30">
              {project.date}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded bg-netflix-red/20 text-netflix-red border border-netflix-red/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-2 text-netflix-red hover:text-red-600 transition-colors"
            >
              <FaGithub />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-2 text-netflix-red hover:text-red-600 transition-colors"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-netflix-black/80 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-netflix-red rounded-lg font-semibold"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProjectCard
