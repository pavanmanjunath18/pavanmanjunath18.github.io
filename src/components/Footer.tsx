import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'

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

const socials = [
  {
    label: 'GitHub',
    icon: <Github size={18} />,
    href: 'https://github.com/pavanmanjunath18',
  },
  {
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
    href: 'https://linkedin.com/in/pavanmallipudi',
  },
  {
    label: 'Email',
    icon: <Mail size={18} />,
    href: 'mailto:pavan.mallipudi@asu.edu',
  },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#040812] border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start pb-8 border-b border-white/5">
          {/* Left — branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold font-display text-sm">
                PM
              </div>
              <span className="font-display font-semibold text-white">Pavan Mallipudi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              CS + Data Science student at ASU. Building intelligent systems at the intersection of
              software engineering and ML.
            </p>
            <p className="text-gray-600 text-xs mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities · May 2026
            </p>
          </div>

          {/* Center — nav links */}
          <div className="md:text-center">
            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 md:inline-grid">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200 text-left md:text-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right — socials */}
          <div className="md:text-right">
            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex gap-3 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="p-2.5 rounded-xl glass border border-white/8 text-gray-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed">
              pavan.mallipudi@asu.edu
              <br />
              Tempe, Arizona
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Pavan Venkata Manjunath Mallipudi. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with{' '}
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            &nbsp;using{' '}
            <Code2 size={12} className="text-indigo-400" />
            &nbsp;React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
