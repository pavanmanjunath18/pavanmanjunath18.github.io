import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react'

const coursework = [
  'Data Structures & Algorithms',
  'Data Visualization',
  'Exploratory & Analysis of Environmental Data',
  'Operating Systems',
  'Database Management',
  'Software Engineering',
  'Foundations of Machine Learning',
  'Applied Linear Algebra',
  'Probability and Statistics',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8000]/4 rounded-full blur-3xl pointer-events-none" />

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
            Academic background
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Education
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main university card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl border border-white/6 overflow-hidden relative"
          >
            {/* Gradient top bar */}
            <div className="h-1 bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347]" />

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* ASU logo area */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8C1D40] to-[#FFC627] flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-white font-display font-black text-lg leading-none">
                        ASU
                      </div>
                      <div className="text-yellow-200 text-[8px] font-bold tracking-wider mt-0.5">
                        ARIZONA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-white font-display font-bold text-2xl mb-1">
                        Arizona State University
                      </h3>
                      <p className="text-[#FFB347] font-semibold text-base">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-orange-300 text-sm mt-1 font-medium">
                        Minor: Data Science
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          Tempe, Arizona
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          Aug 2022 – May 2026
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:items-end">
                      <div className="glass rounded-xl px-4 py-3 border border-white/8 text-center">
                        <div className="text-2xl font-display font-bold text-white mb-0.5">
                          3.8
                          <span className="text-gray-500 text-sm font-normal"> / 4.0</span>
                        </div>
                        <div className="text-gray-400 text-xs">
                          GPA
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Expected May 2026
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-3 gap-3 mt-6">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5">
                      <GraduationCap size={16} className="text-[#FF8000] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white text-xs font-semibold">Dean's List</div>
                        <div className="text-gray-500 text-xs">Multiple semesters</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5">
                      <BookOpen size={16} className="text-[#FFB347] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white text-xs font-semibold">Research</div>
                        <div className="text-gray-500 text-xs">Undergraduate RA</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5">
                      <Award size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white text-xs font-semibold">Activities</div>
                        <div className="text-gray-500 text-xs">Cricket Club &amp; more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Relevant coursework */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl border border-white/6 p-8"
          >
            <h4 className="text-white font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-[#FF8000]" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {coursework.map((course) => (
                <motion.div
                  key={course}
                  whileHover={{ scale: 1.03 }}
                  className="px-3 py-2 rounded-lg bg-white/3 border border-white/6 text-gray-300 text-sm text-center hover:border-[#FF8000]/25 hover:text-white transition-all duration-200 cursor-default"
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications teaser */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl border border-white/6 p-6"
          >
            <h4 className="text-white font-display font-semibold text-base mb-4 flex items-center gap-2">
              <Award size={18} className="text-yellow-400" />
              Certifications &amp; Online Learning
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: 'Google Data Analytics Certificate', org: 'Google / Coursera', status: 'Completed', color: 'text-green-400 bg-green-500/10 border-green-500/20' },
                { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', status: 'Completed', color: 'text-green-400 bg-green-500/10 border-green-500/20' },
                { name: 'Deep Learning Specialization', org: 'DeepLearning.AI / Coursera', status: 'In Progress', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
                { name: 'TensorFlow Developer Certificate', org: 'Google / TensorFlow', status: 'In Progress', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                >
                  <div>
                    <div className="text-white text-sm font-medium">{cert.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{cert.org}</div>
                  </div>
                  <span
                    className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium border ${cert.color}`}
                  >
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
