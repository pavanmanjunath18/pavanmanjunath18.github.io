import { motion } from 'framer-motion'
import { achievements, type Achievement } from '../data/achievements'

const typeConfig: Record<
  Achievement['type'],
  { label: string; color: string; glow: string }
> = {
  academic: {
    label: 'Academic',
    color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  award: {
    label: 'Award',
    color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300',
    glow: 'group-hover:shadow-yellow-500/10',
  },
  certification: {
    label: 'Certification',
    color: 'from-green-500/20 to-teal-500/20 border-green-500/30 text-green-300',
    glow: 'group-hover:shadow-green-500/10',
  },
  leadership: {
    label: 'Leadership',
    color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300',
    glow: 'group-hover:shadow-sky-500/10',
  },
  extracurricular: {
    label: 'Extracurricular',
    color: 'from-purple-500/20 to-fuchsia-500/20 border-purple-500/30 text-purple-300',
    glow: 'group-hover:shadow-purple-500/10',
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#0A1020] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">
            Recognition &amp; activities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Awards, certifications, leadership roles, and extracurricular activities that define my
            journey beyond the classroom.
          </p>
        </motion.div>

        {/* Achievement cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => {
            const config = typeConfig[achievement.type]
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                whileHover={{ translateY: -4 }}
                className={`glass rounded-2xl border border-white/6 p-6 relative overflow-hidden group transition-all duration-300 shadow-lg ${config.glow}`}
              >
                {/* Top accent gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    achievement.type === 'academic'
                      ? 'from-indigo-500 to-violet-500'
                      : achievement.type === 'award'
                      ? 'from-yellow-500 to-amber-500'
                      : achievement.type === 'certification'
                      ? 'from-green-500 to-teal-500'
                      : achievement.type === 'leadership'
                      ? 'from-sky-500 to-blue-500'
                      : 'from-purple-500 to-fuchsia-500'
                  } opacity-70`}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/1 transition-all duration-300" />

                {/* Icon */}
                <div className="text-4xl mb-4 filter drop-shadow-sm">{achievement.icon}</div>

                {/* Type badge */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gradient-to-r ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-white font-display font-semibold text-base leading-snug mb-1">
                  {achievement.title}
                </h3>
                <p className="text-indigo-300 text-sm font-medium mb-1">
                  {achievement.organization}
                </p>
                <p className="text-gray-500 text-xs mb-3">{achievement.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
