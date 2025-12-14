import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// Use the correct path to your image
import profileImage from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
        <div className="w-full h-[28rem] rounded-lg glass-card-red overflow-hidden bg-black">
            <img
                src={profileImage}
                alt="Shamitha Jain"
                className="w-full h-full object-cover object-top"
            />

        </div>

        </motion.div>

        {/* Text column — auto height */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-red p-8 rounded-lg"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">SHAMITHA JAIN</h3>
            <p className="text-lg text-gray-300 mb-4">Artificial Intelligence and Machine Learning Student</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span>Dharwad, India</span>
              <span>|</span>
              <a href="mailto:shamithajain04@gmail.com" className="hover:text-netflix-red transition-colors">
                shamithajain04@gmail.com
              </a>
              <span>|</span>
              <span>+91 99027 99179</span>
              <span>|</span>
              <a href="https://www.linkedin.com/in/shamitha-jain/" target="_blank" rel="noopener noreferrer" className="hover:text-netflix-red transition-colors flex items-center space-x-1">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <span>|</span>
              <a href="https://github.com/ShamithaJain" target="_blank" rel="noopener noreferrer" className="hover:text-netflix-red transition-colors flex items-center space-x-1">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-netflix-red">Professional Summary</h4>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer with hands-on experience in system design and full-stack application development. 
              Applies strong problem-solving abilities and technical expertise to deliver scalable applications 
              while ensuring design constraints are met. Committed to continuous improvement and contributing to 
              engineering communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
