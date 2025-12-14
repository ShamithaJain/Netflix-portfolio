import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

const ProjectRow = ({ title, projects, onCardClick }) => {
  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 px-4 md:px-8 lg:px-16">{title}</h3>
      <div className="relative group">
        {isMoved && (
          <button
            onClick={() => handleClick('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 h-full w-12 bg-gradient-to-r from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-netflix-red/20"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
        )}
        
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onCardClick={onCardClick} />
          ))}
        </div>
        
        <button
          onClick={() => handleClick('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 h-full w-12 bg-gradient-to-l from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-netflix-red/20"
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default ProjectRow




