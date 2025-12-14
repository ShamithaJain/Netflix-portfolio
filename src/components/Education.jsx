import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      institution: 'SDM College of Engineering & Technology, Dharwad',
      degree: 'B.E in AIML',
      score: 'CGPA: 8.63',
    },
    {
      institution: 'Excel P U College, Guruvayanakere',
      degree: '2nd PUC',
      score: 'Percentage: 84.5%',
    },
    {
      institution: 'SDM English Medium School, Dharmasthala',
      degree: 'School',
      score: 'Percentage: 90.56%',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Education
      </motion.h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="glass-card p-6 rounded-lg flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-netflix-red/20 flex items-center justify-center">
                <FaGraduationCap className="text-netflix-red text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-netflix-red font-semibold">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education




