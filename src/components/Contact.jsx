import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Contact
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-400 mb-12"
      >
        Let's build something impactful together.
      </motion.p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-lg"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-netflix-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-netflix-red transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-netflix-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-netflix-red transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-netflix-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-netflix-red transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3 bg-netflix-red hover:bg-red-600 rounded-lg font-semibold transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:shamithajain04@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-netflix-red/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-red/20 flex items-center justify-center group-hover:bg-netflix-red/30 transition-colors">
                  <FaEnvelope className="text-netflix-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">shamithajain04@gmail.com</p>
                </div>
              </a>
              
              <a
                href="tel:+919902799179"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-netflix-red/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-red/20 flex items-center justify-center group-hover:bg-netflix-red/30 transition-colors">
                  <FaPhone className="text-netflix-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+91 99027 99179</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/shamitha-jain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-netflix-red/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-red/20 flex items-center justify-center group-hover:bg-netflix-red/30 transition-colors">
                  <FaLinkedin className="text-netflix-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-semibold">shamitha-jain</p>
                </div>
              </a>
              
              <a
                href="https://github.com/ShamithaJain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-netflix-red/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-red/20 flex items-center justify-center group-hover:bg-netflix-red/30 transition-colors">
                  <FaGithub className="text-netflix-red" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-semibold">ShamithaJain</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
