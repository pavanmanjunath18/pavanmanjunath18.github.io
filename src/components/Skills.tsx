import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/skills'

// ── Animated progress bar ─────────────────────────────────────
function AnimatedBar({
  level,
  color,
  delay = 0,
}: {
  level: number
  color: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const pct = level * 20

  return (
    <div ref={ref} className="h-1 w-24 bg-white/8 rounded-full overflow-hidden flex-shrink-0">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 + delay }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF8000]/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF6B00]/4 rounded-full blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#FF8000] tracking-[0.2em] uppercase mb-3">
            What I work with
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347]" />
          <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
            Tools and technologies I use to build scalable software and intelligent systems.
          </p>
        </motion.div>

        {/* Skill grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ translateY: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/6 group relative overflow-hidden"
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.color}`} />

              {/* Hover fill */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  {category.icon.length <= 2 ? (
                    <span className="text-white font-bold text-xs">{category.icon}</span>
                  ) : (
                    <span className="text-base">{category.icon}</span>
                  )}
                </div>
                <h3 className="text-white font-display font-semibold text-base">{category.title}</h3>
              </div>

              {/* Skills list with animated bars */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="flex items-center justify-between gap-3 group/skill">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1 h-1 rounded-full bg-[#FF8000]/50 flex-shrink-0" />
                      <span className="text-gray-300 text-sm truncate group-hover/skill:text-white transition-colors duration-150">
                        {skill.name}
                      </span>
                    </div>
                    <AnimatedBar level={skill.level} color={category.color} delay={skillIdx * 0.04} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
        >
          <span className="font-medium text-gray-600">Proficiency:</span>
          {['Beginner', 'Familiar', 'Proficient', 'Advanced', 'Expert'].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-14 h-1 bg-white/8 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF8000] to-[#FFB347]"
                  style={{ width: `${(i + 1) * 20}%` }}
                />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
