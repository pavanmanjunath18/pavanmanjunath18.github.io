import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, ChevronRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'

type FilterCategory = 'all' | 'ml' | 'data' | 'web' | 'fullstack'

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'ML / AI', value: 'ml' },
  { label: 'Data', value: 'data' },
  { label: 'Web', value: 'web' },
  { label: 'Full-Stack', value: 'fullstack' },
]

const categoryColors: Record<string, string> = {
  ml: 'from-[#FF8000]/15 to-[#FF6B00]/15 border-[#FF8000]/25 text-[#FFB347]',
  data: 'from-amber-500/15 to-orange-400/15 border-amber-500/25 text-amber-300',
  web: 'from-orange-400/15 to-[#FFB347]/15 border-orange-400/25 text-orange-300',
  fullstack: 'from-[#FF6B00]/15 to-[#FF8000]/15 border-[#FF6B00]/25 text-orange-200',
}

const categoryLabels: Record<string, string> = {
  ml: 'ML / AI',
  data: 'Data',
  web: 'Web',
  fullstack: 'Full-Stack',
}

const categoryAccents: Record<string, string> = {
  ml: 'from-[#FF8000] to-[#FF6B00]',
  data: 'from-amber-500 to-orange-500',
  web: 'from-orange-400 to-[#FFB347]',
  fullstack: 'from-[#FF6B00] to-[#FF8000]',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ translateY: -4 }}
      className={`glass rounded-2xl border border-white/6 overflow-hidden group relative flex flex-col ${
        project.featured ? 'ring-1 ring-[#FF8000]/20' : ''
      }`}
    >
      {/* Top gradient accent bar */}
      <div
        className={`h-0.5 bg-gradient-to-r ${categoryAccents[project.category]}`}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF8000]/15 border border-[#FF8000]/25 text-[#FFB347] text-xs font-medium">
          <Star size={10} className="fill-[#FF8000]" />
          Featured
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gradient-to-r ${categoryColors[project.category]}`}
          >
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-display font-semibold text-lg leading-tight mb-2 group-hover:text-[#FFB347] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
              <ChevronRight
                size={14}
                className="text-[#FF8000] mt-0.5 flex-shrink-0"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-gray-400 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group/link"
          >
            <Github size={15} className="group-hover/link:text-[#FF8000] transition-colors" />
            Source Code
          </a>
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors group/link ml-auto"
            >
              Live Demo
              <ExternalLink size={13} className="group-hover/link:text-[#FFB347] transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Bg orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF8000]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-[#FF8000] tracking-widest uppercase mb-3">
            What I've built
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Projects
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            A selection of projects spanning machine learning, data engineering, and full-stack
            development.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-gradient-to-r from-[#FF8000] to-[#FF6B00] text-white shadow-lg shadow-[#FF8000]/20'
                  : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-[#FF8000]/25'
              }`}
            >
              {f.label}
              <span
                className={`ml-1.5 text-xs ${
                  activeFilter === f.value ? 'text-orange-200' : 'text-gray-600'
                }`}
              >
                {f.value === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === f.value).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/pavanmanjunath18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:border-[#FF8000]/25 transition-all duration-200"
          >
            <Github size={18} />
            View all projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
