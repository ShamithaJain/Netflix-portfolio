import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaGraduationCap, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa'

const Row = ({ title, items, id }) => {
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

  const sectionId = id || title.toLowerCase().replace(/\s+/g, '-')

  const renderItem = (item, index) => {
    switch (item.type) {
      case 'text':
        return (
          <div
            key={index}
            className={`min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw] p-8 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 ${
              item.isLarge ? 'h-auto' : 'h-64'
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        )

      case 'skill':
        return (
          <div
            key={index}
            className="min-w-[200px] h-32 p-6 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 card-hover cursor-pointer"
          >
            <div className="flex flex-col h-full justify-between">
              <FaCode className="text-2xl text-netflix-red mb-2" />
              <div>
                <p className="text-sm text-gray-400">{item.category}</p>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        )

      case 'education':
        return (
          <div
            key={index}
            className="min-w-[300px] h-48 p-6 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 card-hover"
          >
            <FaGraduationCap className="text-3xl text-netflix-red mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
            <p className="text-netflix-red font-semibold">{item.score}</p>
          </div>
        )

      case 'experience':
        return (
          <div
            key={index}
            className="min-w-[350px] h-auto p-6 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 card-hover"
          >
            <FaBriefcase className="text-3xl text-netflix-red mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 mb-1">{item.company}</p>
            <p className="text-sm text-netflix-red mb-3">{item.period}</p>
            <p className="text-gray-300 text-sm mb-3">{item.description}</p>
            {item.projects && (
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {item.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            )}
          </div>
        )

      case 'project':
        return (
          <div
            key={index}
            className="min-w-[350px] h-auto p-6 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 card-hover"
          >
            <FaCode className="text-3xl text-netflix-red mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{item.description}</p>
            <p className="text-xs text-gray-500 mb-4">{item.tech}</p>
            <div className="flex space-x-4">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-netflix-red hover:text-red-600 transition-colors"
                >
                  <FaGithub />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-netflix-red hover:text-red-600 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )

      case 'achievement':
        return (
          <div
            key={index}
            className="min-w-[350px] h-auto p-6 rounded-lg bg-gradient-to-br from-gray-900 to-netflix-black border border-gray-800 card-hover"
          >
            <FaTrophy className="text-3xl text-netflix-red mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id={sectionId} className="relative mb-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
      
      <div className="relative group">
        {isMoved && (
          <button
            onClick={() => handleClick('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 h-full w-12 bg-gradient-to-r from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
        )}
        
        <div
          ref={rowRef}
          className="row-container flex space-x-4 overflow-x-scroll scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => renderItem(item, index))}
        </div>
        
        <button
          onClick={() => handleClick('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 h-full w-12 bg-gradient-to-l from-netflix-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>
    </section>
  )
}

export default Row

