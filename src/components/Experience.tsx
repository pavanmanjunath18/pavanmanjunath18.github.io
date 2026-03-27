import { motion } from 'framer-motion'
import { Briefcase, FlaskConical, Users, Clock } from 'lucide-react'
import { experiences } from '../data/experience'

const typeConfig = {
  internship: {
    label: 'Internship',
    icon: <Briefcase size={13} />,
    color: 'from-[#FF8000]/15 to-[#FF6B00]/15 border-[#FF8000]/25 text-[#FFB347]',
    dot: 'from-[#FF8000] to-[#FF6B00]',
  },
  'part-time': {
    label: 'Part-Time',
    icon: <Clock size={13} />,
    color: 'from-amber-500/15 to-orange-400/15 border-amber-500/25 text-amber-300',
    dot: 'from-amber-500 to-orange-400',
  },
  research: {
    label: 'Research',
    icon: <FlaskConical size={13} />,
    color: 'from-orange-400/15 to-[#FFB347]/15 border-orange-400/25 text-orange-300',
    dot: 'from-orange-400 to-[#FFB347]',
  },
  leadership: {
    label: 'Leadership',
    icon: <Users size={13} />,
    color: 'from-[#FF6B00]/15 to-amber-600/15 border-[#FF6B00]/25 text-orange-200',
    dot: 'from-[#FF6B00] to-amber-600',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#FF8000]/4 rounded-full blur-3xl pointer-events-none" />

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
            Work history
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Experience
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            My professional journey — internships, research, and leadership roles that have shaped
            my engineering mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF8000]/50 via-[#FF6B00]/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type]
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 sm:left-5.5 top-5 w-4 h-4 rounded-full bg-gradient-to-br ${config.dot} shadow-lg flex items-center justify-center`}
                    style={{ left: '14px' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ translateX: 4 }}
                    className="glass rounded-2xl border border-white/6 p-6 relative overflow-hidden group"
                  >
                    {/* Accent line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${config.dot} opacity-60`}
                    />

                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h3 className="text-white font-display font-semibold text-lg">
                            {exp.role}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border bg-gradient-to-r ${config.color}`}
                          >
                            {config.icon}
                            {config.label}
                          </span>
                        </div>
                        <p className="text-[#FFB347] font-medium text-sm">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs font-medium whitespace-nowrap">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[#FF8000] mt-1 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-gray-400 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
