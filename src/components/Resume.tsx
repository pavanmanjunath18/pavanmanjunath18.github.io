import { motion } from 'framer-motion'
import { Download, FileText, Eye, CheckCircle } from 'lucide-react'

const highlights = [
  'B.S. Computer Science + Data Science Minor at ASU (May 2026)',
  'Internship experience in software engineering and data analytics',
  'Projects in ML, NLP, computer vision, and full-stack development',
  '30+ technologies across Python, TypeScript, cloud platforms, and ML frameworks',
  'Undergraduate research experience',
  'Certifications: Google Data Analytics, AWS Cloud Practitioner',
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28 bg-[#070D1A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/6 rounded-full blur-3xl" />
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
          <span className="inline-block text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">
            My resume
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Resume
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl border border-white/6 overflow-hidden relative"
          >
            {/* Gradient top accent */}
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400" />

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                  <FileText size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-1">
                    Pavan Venkata Manjunath Mallipudi
                  </h3>
                  <p className="text-gray-400 text-sm">
                    CS + Data Science · Arizona State University · May 2026
                  </p>
                  <p className="text-indigo-300 text-xs mt-1 font-medium">
                    Resume last updated: March 2026
                  </p>
                </div>
              </div>

              {/* What's covered */}
              <div className="mb-8">
                <h4 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  What's covered
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle
                        size={15}
                        className="text-indigo-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  download="Pavan_Mallipudi_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg shadow-indigo-500/25 glow"
                >
                  <Download size={18} />
                  Download Resume (PDF)
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass border border-white/10 text-gray-300 font-semibold text-sm hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                >
                  <Eye size={18} />
                  View in Browser
                </a>
              </div>

              {/* Availability note */}
              <div className="mt-6 flex items-center gap-2 p-4 rounded-xl bg-indigo-500/8 border border-indigo-500/15">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Open to opportunities</span> — actively
                  seeking internships and full-time roles in software engineering, data science, and
                  ML engineering. Available immediately for internships; full-time from May 2026.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 text-sm mt-6"
          >
            Can't view the PDF?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              Contact me directly
            </a>{' '}
            and I'll send it over.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
