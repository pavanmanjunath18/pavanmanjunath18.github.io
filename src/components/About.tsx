import { motion } from 'framer-motion'
import { Code2, Brain, BarChart3, Rocket, MapPin, GraduationCap, Calendar } from 'lucide-react'

const stats = [
  { label: 'GPA', value: '3.8 / 4.0', icon: '🎓', note: "Dean's List" },
  { label: 'Projects', value: '10+', icon: '🚀', note: 'Built & shipped' },
  { label: 'Internships', value: '2+', icon: '💼', note: 'Industry experience' },
  { label: 'Technologies', value: '30+', icon: '⚡', note: 'Languages & tools' },
]

const interests = [
  { label: 'Machine Learning', icon: <Brain size={14} />, color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300' },
  { label: 'Data Science', icon: <BarChart3 size={14} />, color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300' },
  { label: 'Backend Engineering', icon: <Code2 size={14} />, color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300' },
  { label: 'AI / LLMs', icon: <Brain size={14} />, color: 'from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/30 text-fuchsia-300' },
  { label: 'Full-Stack Dev', icon: <Code2 size={14} />, color: 'from-teal-500/20 to-sky-500/20 border-teal-500/30 text-teal-300' },
  { label: 'MLOps', icon: <Rocket size={14} />, color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-300' },
  { label: 'Data Engineering', icon: <BarChart3 size={14} />, color: 'from-green-500/20 to-teal-500/20 border-green-500/30 text-green-300' },
  { label: 'Computer Vision', icon: <Brain size={14} />, color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070D1A] relative overflow-hidden">
      {/* Subtle bg orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">
              Get to know me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              About Me
            </h2>
            <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Main card */}
              <div className="glass rounded-2xl p-8 border border-white/6 relative overflow-hidden">
                {/* Animated gradient border accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-lg leading-tight">
                      B.S. Computer Science
                    </h3>
                    <p className="text-indigo-300 text-sm mt-0.5">
                      Minor in Data Science · Arizona State University
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> Tempe, AZ
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> Graduating May 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I'm a Computer Science student at{' '}
                    <span className="text-white font-medium">Arizona State University</span> with a
                    minor in Data Science, graduating in May 2026. I'm passionate about building
                    intelligent systems that sit at the intersection of software engineering and
                    machine learning.
                  </p>
                  <p>
                    My work spans{' '}
                    <span className="text-indigo-300 font-medium">full-stack development</span>,{' '}
                    <span className="text-purple-300 font-medium">predictive modeling</span>, and{' '}
                    <span className="text-sky-300 font-medium">NLP / computer vision</span>. I love
                    taking ideas from raw data all the way to deployed, production-ready applications
                    that create real value.
                  </p>
                  <p>
                    I'm actively seeking{' '}
                    <span className="text-white font-medium">
                      internships and full-time opportunities
                    </span>{' '}
                    in software engineering, data science, and ML engineering where I can contribute
                    to impactful products and continue growing as an engineer.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest.label}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-gradient-to-r ${interest.color} transition-all duration-200 hover:scale-105`}
                    >
                      {interest.icon}
                      {interest.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03, translateY: -2 }}
                    className="glass rounded-2xl p-6 border border-white/6 text-center relative overflow-hidden group cursor-default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{stat.note}</div>
                  </motion.div>
                ))}
              </div>

              {/* Personal note card */}
              <div className="glass rounded-2xl p-6 border border-white/6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />
                <h4 className="text-white font-display font-semibold mb-3 flex items-center gap-2">
                  <span>Beyond the Code</span>
                  <span className="text-lg">🎯</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-0.5">▸</span>
                    Cricket player at the ASU Cricket Club
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    Enjoy exploring new ML papers and implementing them from scratch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">▸</span>
                    Competitive hackathon participant — love solving real-world problems under pressure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">▸</span>
                    Open-source contributor and tech community enthusiast
                  </li>
                </ul>
              </div>

              {/* Quick facts */}
              <div className="glass rounded-2xl p-6 border border-white/6">
                <h4 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Quick Facts
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Location', value: 'Tempe, AZ (open to relocate)', icon: '📍' },
                    { label: 'Availability', value: 'May 2026 (full-time) / Now (internship)', icon: '📅' },
                    { label: 'Work Auth', value: 'OPT / H-1B eligible', icon: '🌐' },
                    { label: 'Focus', value: 'SWE · Data Science · ML Engineering', icon: '🎯' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-center gap-3 text-sm">
                      <span className="text-base">{fact.icon}</span>
                      <span className="text-gray-500 w-24 flex-shrink-0">{fact.label}</span>
                      <span className="text-gray-300">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
