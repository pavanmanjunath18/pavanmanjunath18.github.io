import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react'

const roles = ['Data Scientist', 'Data Analyst', 'Data Engineer', 'ML Engineer', 'AI Enthusiast']

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

function FloatingParticles() {
  const particles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (!isDeleting && displayed === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const speed = isDeleting ? 60 : 100

    timeoutRef.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      )
    }, speed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayed, isDeleting, roleIndex])

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070D1A]">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Available for Internships &amp; Full-Time Roles
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-lg mb-2 font-display">Hello, I'm</p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-4"
            >
              <span className="text-gradient">Pavan</span>
              <br />
              <span className="text-white">Mallipudi</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gray-300 mb-6 h-10 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-gradient-reverse">{displayed}</span>
              <span className="inline-block w-0.5 h-7 bg-indigo-400 animate-pulse" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              CS student at{' '}
              <span className="text-white font-medium">Arizona State University</span> (Minor: Data
              Science) passionate about building intelligent systems that bridge the gap between
              software engineering and machine learning. Graduating May 2026.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 glow shadow-lg shadow-indigo-500/25"
              >
                View My Work
                <ExternalLink size={16} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-gray-300 font-semibold text-sm hover:text-white hover:border-indigo-500/40 transition-all duration-200"
              >
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/pavanmanjunath18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pavan-venkata-manjunath-mallipudi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pvmmallipudi@gmail.com"
                className="p-2.5 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <span className="text-gray-600 text-sm ml-2">
                pvmmallipudi@gmail.com
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 blur-2xl opacity-30 scale-110" />

              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #6366F1, #8B5CF6, #38BDF8, #6366F1)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              />

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-1 rounded-full bg-[#0A1020] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl sm:text-8xl font-display font-bold text-gradient select-none">
                      PM
                    </div>
                    <div className="text-gray-400 text-sm mt-1 font-medium tracking-wider uppercase">
                      ASU · CS '26
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-indigo-300 shadow-lg"
              >
                🧠 ML Engineer
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-sky-300 shadow-lg"
              >
                📊 Data Science
              </motion.div>
              <motion.div
                animate={{ y: [-4, 8, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-16 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-purple-300 shadow-lg"
              >
                ⚡ React
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
