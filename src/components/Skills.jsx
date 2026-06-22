import { motion } from 'framer-motion'
import { FaBrain, FaProjectDiagram, FaLayerGroup, FaCode, FaLaptop, FaMagic } from 'react-icons/fa'

const skillCategories = [
  {
    icon: FaBrain,
    title: 'AI Engineering',
    description: 'Designing intelligent retrieval workflows, semantic search, and agent-driven systems.',
    skills: ['Semantic Search', 'Embeddings', 'Vector Databases', 'Prompt Engineering', 'RAG Systems', 'AI Agents', 'Retrieval Systems'],
  },
  {
    icon: FaProjectDiagram,
    title: 'Machine Learning & AI',
    description: 'Building and tuning modern ML systems for NLP, vision, and structured data.',
    skills: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Natural Language Processing', 'Large Language Models (LLMs)', 'Transformer Models'],
  },
  {
    icon: FaLayerGroup,
    title: 'Frameworks & Libraries',
    description: 'Using data, model, and retrieval libraries to accelerate production-ready AI systems.',
    skills: ['Pandas', 'NumPy', 'FAISS', 'Sentence Transformers', 'LangChain', 'ChromaDB'],
  },
  {
    icon: FaCode,
    title: 'Programming & Development',
    description: 'Writing scalable code, APIs, and data pipelines with modern engineering practices.',
    skills: ['Python', 'SQL', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    icon: FaLaptop,
    title: 'Tools & Productivity',
    description: 'Fast experimentation and collaboration using tools trusted by AI teams.',
    skills: ['Jupyter Notebook', 'VS Code', 'Cursor'],
  },
]

const strengths = ['Problem Solving', 'Collaboration', 'Quick Learner', 'Communication', 'Leadership']

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-12"
      >
        <motion.div variants={cardVariants} className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400 mb-4">Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            AI Engineer with strong expertise in NLP, Retrieval Systems, LLMs, Embeddings, and Applied Machine Learning.
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies, frameworks, and AI systems I use to build intelligent applications.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid gap-6 lg:grid-cols-3 xl:grid-cols-3"
      >
        <motion.div variants={cardVariants} className="glass-card p-6 rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-black via-netflix-black to-black">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-400 uppercase tracking-[0.3em]">AI/ML Technologies</p>
                <h3 className="text-3xl font-bold text-white">15+ skills</h3>
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-netflix-red/15 text-netflix-red text-xl">
                <FaMagic />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Deep experience across AI development, applied ML workflows, and research-grade models.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="glass-card p-6 rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-black via-netflix-black to-black">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-400 uppercase tracking-[0.3em]">Development Tools</p>
                <h3 className="text-3xl font-bold text-white">10+ tools</h3>
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-netflix-red/15 text-netflix-red text-xl">
                <FaLaptop />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Production-ready workflows with modern tooling for efficient development and collaboration.
            </p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="glass-card p-6 rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-black via-netflix-black to-black">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-400 uppercase tracking-[0.3em]">Professional Strengths</p>
                <h3 className="text-3xl font-bold text-white">5+ strengths</h3>
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-netflix-red/15 text-netflix-red text-xl">
                <FaCode />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Soft skills that support AI collaboration, decision making, and high-impact execution.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-black via-[#100306] to-black p-6 shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-netflix-red/15 text-netflix-red shadow-lg">
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-sm text-red-400 font-semibold">
                  {category.skills.length}
                </div>
              </div>

              <div className="relative z-10 grid gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition-all duration-300 hover:border-red-400 hover:bg-red-400/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-10 glass-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-black via-netflix-black to-black p-6 shadow-2xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-red-400">Professional Strengths</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">People-first strengths for AI product delivery.</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-200 shadow-inner">
                {strength}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills





