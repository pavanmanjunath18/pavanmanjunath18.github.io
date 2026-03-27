import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  scrollY: number
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isScrolled = scrollY > 50

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200, restDelta: 0.001 })

  // Active section observer
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (intersecting.length > 0) {
          setActiveSection('#' + intersecting[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/92 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] z-[51]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF8000] to-[#FF6B00] flex items-center justify-center text-white font-bold font-display text-sm glow-sm transition-all duration-300 group-hover:scale-110">
              PM
            </div>
            <span className="font-display font-semibold text-white hidden sm:block group-hover:text-[#FFB347] transition-colors duration-200">
              Pavan Mallipudi
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/8 rounded-lg border border-white/8"
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#FF8000] to-[#FF6B00] text-white hover:opacity-90 transition-all duration-200 glow-sm hover:scale-[1.04]"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-[#080808]/98 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base px-4 py-3 rounded-xl transition-all duration-150 border ${
                    activeSection === link.href
                      ? 'text-white bg-white/8 border-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border-transparent'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#FF8000] to-[#FF6B00] text-white font-semibold"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
