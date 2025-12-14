import { motion } from 'framer-motion'
import { FaTrophy, FaUsers } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'Puncture Sathi (Start-up)',
      description: 'Developed a trolley device to assist punctured two-wheelers, emphasizing ergonomic design and ease of use. Qualified for Manthan, FKCCI, Karnataka Government in 2024.',
    },
    {
      icon: FaUsers,
      title: 'Core Committee Member',
      description: 'Organized and managed flagship college events like FIESTA (intra-college fest) and INSIGNIA (inter-college techno-cultural event).',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Achievements & Leadership
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card-red p-8 rounded-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-netflix-red/20 flex items-center justify-center">
                    <Icon className="text-netflix-red text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Achievements




