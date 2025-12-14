import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-gray-800 mt-20 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <FaHeart className="text-netflix-red" />
            <span>by Shamitha Jain</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/shamitha-jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-netflix-red transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ShamithaJain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-netflix-red transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:shamithajain04@gmail.com"
              className="text-2xl hover:text-netflix-red transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Shamitha Jain. All rights reserved. Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

