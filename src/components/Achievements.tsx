import { motion } from 'framer-motion'
import { achievements, type Achievement } from '../data/achievements'

const typeConfig: Record<
  Achievement['type'],
  { label: string; color: string; glow: string; accent: string }
> = {
  academic: {
    label: 'Academic',
    color: 'from-[#FF8000]/15 to-[#FF6B00]/15 border-[#FF8000]/25 text-[#FFB347]',
    glow: 'group-hover:shadow-[#FF8000]/10',
    accent: 'from-[#FF8000] to-[#FF6B00]',
  },
  award: {
    label: 'Award',
    color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300',
    glow: 'group-hover:shadow-yellow-500/10',
    accent: 'from-yellow-500 to-amber-500',
  },
  certification: {
    label: 'Certification',
    color: 'from-green-500/20 to-teal-500/20 border-green-500/30 text-green-300',
    glow: 'group-hover:shadow-green-500/10',
    accent: 'from-green-500 to-teal-500',
  },
  leadership: {
    label: 'Leadership',
    color: 'from-amber-500/15 to-orange-400/15 border-amber-500/25 text-amber-300',
    glow: 'group-hover:shadow-amber-500/10',
    accent: 'from-amber-500 to-orange-400',
  },
  extracurricular: {
    label: 'Extracurricular',
    color: 'from-orange-400/15 to-[#FFB347]/15 border-orange-400/25 text-orange-300',
    glow: 'group-hover:shadow-orange-400/10',
    accent: 'from-orange-400 to-[#FFB347]',
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
    <section id="achievements" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF8000]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF6B00]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#FF8000] tracking-widest uppercase mb-3">
            Recognition &amp; activities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] mb-4" />
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
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.accent} opacity-70`}
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
                <p className="text-[#FFB347] text-sm font-medium mb-1">
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
