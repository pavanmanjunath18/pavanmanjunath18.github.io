import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react'

const roles = ['Data Scientist', 'ML Engineer', 'Data Analyst', 'AI Enthusiast', 'Data Engineer']

// ── Scramble text effect ──────────────────────────────────────
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!'

function useScramble(target: string, start: boolean) {
  const [output, setOutput] = useState(() => target.replace(/\S/g, SCRAMBLE_CHARS[0]))
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  const DURATION = 1400

  useEffect(() => {
    if (!start) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / DURATION, 1)

      setOutput(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < Math.floor(progress * target.length)) return char
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setOutput(target)
      }
    }

    const timeout = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate)
    }, 300)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameRef.current)
    }
  }, [target, start])

  return output
}

// ── Floating particles ────────────────────────────────────────
interface Particle {
  id: number; x: number; y: number; size: number
  duration: number; delay: number; opacity: number
}

function FloatingParticles() {
  const particles: Particle[] = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.8,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.35 + 0.06,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FF8000]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -35, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [scrambleReady, setScrambleReady] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const blob1X = useTransform(mouseX, [-0.5, 0.5], ['-30px', '30px'])
  const blob1Y = useTransform(mouseY, [-0.5, 0.5], ['-20px', '20px'])
  const blob2X = useTransform(mouseX, [-0.5, 0.5], ['22px', '-22px'])
  const blob2Y = useTransform(mouseY, [-0.5, 0.5], ['16px', '-16px'])
  const blob3X = useTransform(mouseX, [-0.5, 0.5], ['-14px', '14px'])
  const blob3Y = useTransform(mouseY, [-0.5, 0.5], ['24px', '-24px'])

  const springBlob1X = useSpring(blob1X, { damping: 40, stiffness: 80 })
  const springBlob1Y = useSpring(blob1Y, { damping: 40, stiffness: 80 })
  const springBlob2X = useSpring(blob2X, { damping: 50, stiffness: 60 })
  const springBlob2Y = useSpring(blob2Y, { damping: 50, stiffness: 60 })
  const springBlob3X = useSpring(blob3X, { damping: 35, stiffness: 90 })
  const springBlob3Y = useSpring(blob3Y, { damping: 35, stiffness: 90 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [mouseX, mouseY])

  // Scramble starts after stagger completes (~600ms)
  useEffect(() => {
    const t = setTimeout(() => setScrambleReady(true), 600)
    return () => clearTimeout(t)
  }, [])

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex]
    if (!isDeleting && displayed === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
      return
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }
    const speed = isDeleting ? 55 : 95
    timeoutRef.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      )
    }, speed)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, isDeleting, roleIndex])

  const scrambledFirst = useScramble('Pavan', scrambleReady)
  const scrambledLast = useScramble('Mallipudi', scrambleReady)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] noise">
      {/* ── Aurora background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: springBlob1X, y: springBlob1Y }}
          className="aurora-blob aurora-blob-1 absolute top-[10%] left-[10%] w-[55vw] h-[55vw] max-w-[620px] max-h-[620px]"
          aria-hidden="true"
        >
          <div
            className="w-full h-full"
            style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, rgba(255,128,0,0.06) 40%, transparent 70%)' }}
          />
        </motion.div>

        <motion.div
          style={{ x: springBlob2X, y: springBlob2Y }}
          className="aurora-blob aurora-blob-2 absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] max-w-[520px] max-h-[520px]"
          aria-hidden="true"
        >
          <div
            className="w-full h-full"
            style={{ background: 'radial-gradient(circle, rgba(255,179,71,0.09) 0%, rgba(255,107,0,0.05) 45%, transparent 70%)' }}
          />
        </motion.div>

        <motion.div
          style={{ x: springBlob3X, y: springBlob3Y }}
          className="aurora-blob aurora-blob-3 absolute top-[40%] right-[25%] w-[30vw] h-[30vw] max-w-[380px] max-h-[380px]"
          aria-hidden="true"
        >
          <div
            className="w-full h-full"
            style={{ background: 'radial-gradient(circle, rgba(255,160,0,0.07) 0%, transparent 65%)' }}
          />
        </motion.div>
      </div>

      {/* ── Grid pattern ── */}
      <div className="absolute inset-0 pointer-events-none grid-pattern opacity-100" aria-hidden="true" />

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF8000]/10 border border-[#FF8000]/20 text-[#FFB347] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#FF8000] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF8000]" />
                </span>
                Available for Internships &amp; Full-Time Roles
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-500 text-base mb-1 font-display tracking-wide">Hello, I'm</p>
            </motion.div>

            {/* Scramble name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-black leading-[0.95] tracking-tight mb-5"
            >
              <span className="text-gradient font-mono block">
                {scrambledFirst}
              </span>
              <span className="text-white block">
                {scrambledLast}
              </span>
            </motion.h1>

            {/* Typing roles */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl font-display font-semibold text-gray-300 mb-7 h-9 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-gradient-reverse">{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-[#FF8000] animate-pulse rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              CS student at{' '}
              <span className="text-white font-medium">Arizona State University</span> (Minor: Data
              Science) — building intelligent systems at the intersection of software engineering and
              machine learning. Graduating May 2026.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleScrollTo('#projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] text-white font-semibold text-sm overflow-hidden glow transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink size={15} />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 text-gray-300 font-semibold text-sm hover:text-white hover:border-[#FF8000]/30 transition-all duration-200 hover:scale-[1.02]"
              >
                Download Resume
                <Download size={15} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/pavanmanjunath18', icon: <Github size={18} />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/pavan-venkata-manjunath-mallipudi', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: 'mailto:pvmmallipudi@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="p-2.5 rounded-xl glass border border-white/10 text-gray-400 hover:text-white hover:border-[#FF8000]/35 hover:bg-[#FF8000]/8 transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
              <span className="text-gray-600 text-sm ml-1 hidden sm:block">pvmmallipudi@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── Right column — avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-110 opacity-20"
                style={{ background: 'radial-gradient(circle, #FF8000 0%, #FF6B00 50%, transparent 75%)' }}
              />

              {/* Spinning conic gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #FF8000, #FF6B00, transparent, #FFB347, #FF8000)',
                  borderRadius: '50%',
                }}
              />

              {/* Avatar */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-[#111]">
                <img
                  src="/profile.jpg"
                  alt="Pavan Mallipudi"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 glass border border-[#FF8000]/20 rounded-xl px-3 py-2 text-xs font-medium text-[#FFB347] shadow-lg backdrop-blur-sm"
              >
                🧠 ML Engineer
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 glass border border-[#FF6B00]/20 rounded-xl px-3 py-2 text-xs font-medium text-[#FF8000] shadow-lg backdrop-blur-sm"
              >
                📊 Data Science
              </motion.div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-8 sm:-right-12 glass border border-amber-500/20 rounded-xl px-3 py-2 text-xs font-medium text-amber-400 shadow-lg backdrop-blur-sm"
              >
                🎓 ASU '26
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: '3.8', label: "Dean's List GPA", suffix: '/4.0' },
            { value: '10+', label: 'Projects Built', suffix: '' },
            { value: '2', label: 'Years Experience', suffix: 'yrs' },
            { value: '30+', label: 'Technologies', suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                {stat.value}
                {stat.suffix && <span className="text-[#FF8000] text-lg">{stat.suffix}</span>}
              </div>
              <div className="text-gray-500 text-xs mt-0.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
