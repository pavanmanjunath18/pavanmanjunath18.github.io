import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
            i < level ? 'bg-[#FF8000]' : 'bg-white/10'
          }`}
        />
      ))}
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
    <section id="skills" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF8000]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF6B00]/4 rounded-full blur-3xl" />
      </div>

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
            What I work with
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347]" />
          <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
            A curated set of tools and technologies I use to build scalable software and intelligent
            systems.
          </p>
        </motion.div>

        {/* Skill category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ translateY: -4 }}
              className="glass rounded-2xl p-6 border border-white/6 group relative overflow-hidden"
            >
              {/* Gradient top accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} opacity-70`}
              />

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg flex-shrink-0`}
                >
                  {category.icon.length <= 2 ? (
                    <span className="text-white font-bold text-sm">{category.icon}</span>
                  ) : (
                    <span>{category.icon}</span>
                  )}
                </div>
                <h3 className="text-white font-display font-semibold text-base">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 group/skill"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1 h-1 rounded-full bg-[#FF8000]/50 flex-shrink-0" />
                      <span className="text-gray-300 text-sm truncate group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <ProficiencyDots level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-6 text-xs text-gray-500"
        >
          <span>Proficiency:</span>
          {[
            { dots: 1, label: 'Beginner' },
            { dots: 2, label: 'Familiar' },
            { dots: 3, label: 'Proficient' },
            { dots: 4, label: 'Advanced' },
            { dots: 5, label: 'Expert' },
          ].map(({ dots, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i < dots ? 'bg-[#FF8000]' : 'bg-white/10'}`}
                  />
                ))}
              </div>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
