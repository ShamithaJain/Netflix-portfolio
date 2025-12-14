import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden vignette spotlight">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-netflix-black via-gray-900 to-netflix-black"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Hi, I'm{' '}
          </span>
          <span className="bg-gradient-to-r from-netflix-red to-red-600 bg-clip-text text-transparent">
            Shamitha Jain
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
        >
          Artificial Intelligence and Machine Learning Student
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-12 text-sm md:text-base"
        >
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-netflix-red" />
            <span>Dharwad, India</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-netflix-red" />
            <a href="mailto:shamithajain04@gmail.com" className="hover:text-white transition-colors">
              shamithajain04@gmail.com
            </a>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-netflix-red" />
            <span>+91 99027 99179</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-netflix-red hover:bg-red-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-glow flex items-center space-x-2"
          >
            <span>View My Work</span>
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/Shamitha_J.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white/30 hover:border-white rounded-lg font-semibold transition-all flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/shamitha-jain/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full glass-card hover:border-netflix-red transition-all flex items-center space-x-2"
          >
            <FaLinkedin className="text-netflix-red" />
            <span className="text-sm">LinkedIn</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/ShamithaJain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full glass-card hover:border-netflix-red transition-all flex items-center space-x-2"
          >
            <FaGithub className="text-netflix-red" />
            <span className="text-sm">GitHub</span>
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="mt-16"
        >
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

