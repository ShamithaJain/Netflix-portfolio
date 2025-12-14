import { motion } from 'framer-motion'

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'HTML', category: 'Languages' },
    { name: 'CSS', category: 'Languages' },
    { name: 'OOPS', category: 'Languages' },
    { name: 'Express.js', category: 'Tech' },
    { name: 'MongoDB', category: 'Tech' },
    { name: 'Django', category: 'Tech' },
    { name: 'React (Vite)', category: 'Tech' },
    { name: 'TypeScript', category: 'Tech' },
    { name: 'Tailwind CSS', category: 'Tech' },
    { name: 'Socket.IO', category: 'Tech' },
  ]

  const softSkills = [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Presentation Skills',
    'Generative AI Awareness',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Skills
      </motion.h2>
      
      <div className="space-y-12">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-netflix-red">Technical Skills</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card px-6 py-3 rounded-full hover:border-netflix-red hover:shadow-glow transition-all cursor-pointer"
              >
                <span className="text-sm text-gray-400">{skill.category}: </span>
                <span className="font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-netflix-red">Soft Skills</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card px-6 py-3 rounded-full hover:border-netflix-red hover:shadow-glow transition-all cursor-pointer"
              >
                <span className="font-semibold">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills




