import { useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Code2, Brain, BarChart3, Rocket, MapPin, GraduationCap, Calendar } from 'lucide-react'

// ── Animated number counter ───────────────────────────────────
function AnimatedNumber({
  value,
  suffix = '',
  decimals = 0,
}: {
  value: number
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const el = ref.current
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        el.textContent = (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()) + suffix
      },
    })
    return () => controls.stop()
  }, [isInView, value, suffix, decimals])

  return <span ref={ref}>0{suffix}</span>
}

const interests = [
  { label: 'Machine Learning', icon: <Brain size={13} />, color: 'from-[#FF8000]/15 to-[#FF6B00]/15 border-[#FF8000]/25 text-[#FFB347]' },
  { label: 'Data Science', icon: <BarChart3 size={13} />, color: 'from-amber-500/15 to-orange-400/15 border-amber-500/25 text-amber-300' },
  { label: 'Backend Engineering', icon: <Code2 size={13} />, color: 'from-[#FF6B00]/15 to-[#FF8000]/15 border-[#FF6B00]/25 text-orange-300' },
  { label: 'AI / LLMs', icon: <Brain size={13} />, color: 'from-orange-400/15 to-amber-400/15 border-orange-400/25 text-orange-200' },
  { label: 'Full-Stack Dev', icon: <Code2 size={13} />, color: 'from-[#FFB347]/15 to-[#FF8000]/15 border-[#FFB347]/25 text-[#FFB347]' },
  { label: 'MLOps', icon: <Rocket size={13} />, color: 'from-orange-600/15 to-amber-600/15 border-orange-600/25 text-orange-400' },
  { label: 'Data Engineering', icon: <BarChart3 size={13} />, color: 'from-amber-600/15 to-orange-500/15 border-amber-600/25 text-amber-400' },
  { label: 'Computer Vision', icon: <Brain size={13} />, color: 'from-[#FF8000]/20 to-amber-500/15 border-[#FF8000]/30 text-[#FF8000]' },
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
    <section id="about" className="py-20 md:py-28 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF8000]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B00]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-[#FF8000] tracking-[0.2em] uppercase mb-3">
              Get to know me
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              About Me
            </h2>
            <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347]" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* ── Left — bio + interests ── */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="glass rounded-2xl p-8 border border-white/6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000]/50 to-transparent" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8000] to-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-lg leading-tight">
                      B.S. Computer Science
                    </h3>
                    <p className="text-[#FFB347] text-sm mt-0.5">
                      Minor in Data Science · Arizona State University
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={11} /> Tempe, AZ</span>
                      <span className="flex items-center gap-1"><Calendar size={11} /> May 2026</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    I'm a Computer Science student at{' '}
                    <span className="text-white font-medium">Arizona State University</span> with a
                    minor in Data Science, graduating May 2026. Passionate about building intelligent
                    systems at the intersection of software engineering and machine learning.
                  </p>
                  <p>
                    My work spans{' '}
                    <span className="text-[#FFB347] font-medium">full-stack development</span>,{' '}
                    <span className="text-[#FF8000] font-medium">predictive modeling</span>, and{' '}
                    <span className="text-amber-300 font-medium">NLP / computer vision</span>. I love
                    taking ideas from raw data all the way to deployed, production-ready applications.
                  </p>
                  <p>
                    Actively seeking{' '}
                    <span className="text-white font-medium">
                      internships and full-time roles
                    </span>{' '}
                    in software engineering, data science, and ML engineering.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-gray-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <motion.span
                      key={interest.label}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-gradient-to-r ${interest.color} transition-all duration-200`}
                    >
                      {interest.icon}
                      {interest.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right — animated stats + extras ── */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Animated stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { numericValue: 3.8, decimals: 1, suffix: '', label: 'GPA', note: "Dean's List", icon: '🎓', extra: '/4.0' },
                  { numericValue: 10, decimals: 0, suffix: '+', label: 'Projects', note: 'Built & shipped', icon: '🚀', extra: '' },
                  { numericValue: 2, decimals: 0, suffix: '', label: 'Experience', note: 'Professional years', icon: '💼', extra: ' yrs' },
                  { numericValue: 30, decimals: 0, suffix: '+', label: 'Technologies', note: 'Languages & tools', icon: '⚡', extra: '' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03, translateY: -3 }}
                    className="glass rounded-2xl p-6 border border-white/6 text-center relative overflow-hidden group cursor-default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8000]/0 to-[#FF6B00]/0 group-hover:from-[#FF8000]/6 group-hover:to-[#FF6B00]/4 transition-all duration-300" />
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                      <AnimatedNumber value={stat.numericValue} suffix={stat.suffix} decimals={stat.decimals} />
                      {stat.extra && <span className="text-gray-500 text-sm font-normal">{stat.extra}</span>}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{stat.note}</div>
                  </motion.div>
                ))}
              </div>

              {/* Beyond the Code */}
              <div className="glass rounded-2xl p-6 border border-white/6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000]/40 to-transparent" />
                <h4 className="text-white font-display font-semibold mb-3 flex items-center gap-2">
                  Beyond the Code <span className="text-lg">🎯</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    { color: 'text-[#FF8000]', text: 'Cricket player at the ASU Cricket Club' },
                    { color: 'text-[#FFB347]', text: 'Enjoy exploring new ML papers and implementing them from scratch' },
                    { color: 'text-amber-400', text: 'Competitive hackathon participant — solving real-world problems under pressure' },
                    { color: 'text-orange-400', text: 'Open-source contributor and tech community enthusiast' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-2">
                      <span className={`${item.color} mt-0.5`}>▸</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick facts */}
              <div className="glass rounded-2xl p-6 border border-white/6">
                <h4 className="text-gray-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                  Quick Facts
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: '📍', label: 'Location', value: 'Tempe, AZ (open to relocate)' },
                    { icon: '📅', label: 'Availability', value: 'May 2026 (FT) / Now (internship)' },
                    { icon: '🌐', label: 'Work Auth', value: 'OPT / H-1B eligible' },
                    { icon: '🎯', label: 'Focus', value: 'SWE · Data Science · ML Engineering' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-center gap-3 text-sm">
                      <span className="text-base">{fact.icon}</span>
                      <span className="text-gray-500 w-24 flex-shrink-0 text-xs">{fact.label}</span>
                      <span className="text-gray-300 text-xs">{fact.value}</span>
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
