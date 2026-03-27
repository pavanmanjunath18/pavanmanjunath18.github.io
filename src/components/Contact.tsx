import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.'
  if (!data.message.trim()) {
    errors.message = 'Message is required.'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
  }
  return errors
}

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'pavan.mallipudi@asu.edu',
    href: 'mailto:pavan.mallipudi@asu.edu',
    color: 'from-[#FF8000] to-[#FF6B00]',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pavanmallipudi',
    href: 'https://linkedin.com/in/pavanmallipudi',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/pavanmanjunath18',
    href: 'https://github.com/pavanmanjunath18',
    color: 'from-gray-600 to-gray-500',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Tempe, AZ (Open to relocation)',
    href: null,
    color: 'from-orange-400 to-[#FFB347]',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setSubmitState('submitting')

    console.log('Contact form submission:', form)
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setSubmitState('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTouched({})
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/4 rounded-full blur-3xl pointer-events-none" />

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
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Whether you have an opportunity, a question, or just want to say hi — my inbox is
            always open.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {/* Left — contact info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="glass rounded-2xl border border-white/6 p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000]/40 to-transparent" />
              <h3 className="text-white font-display font-semibold text-lg mb-2">
                Let's work together
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm actively looking for internships and full-time roles in software engineering,
                data science, and ML engineering. If you have an opportunity or just want to
                connect, feel free to reach out.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>
            </div>

            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                whileHover={{ translateX: 4 }}
                className="glass rounded-xl border border-white/6 p-4 flex items-center gap-4 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 text-white`}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 text-sm font-medium hover:text-white group-hover:text-[#FFB347] transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm font-medium truncate block">
                      {info.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — contact form */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl border border-white/6 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8000]/35 to-transparent" />

              {submitState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible — usually
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="mt-6 px-5 py-2 rounded-lg glass border border-white/10 text-gray-400 text-sm hover:text-white hover:border-[#FF8000]/25 transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-white font-display font-semibold text-lg mb-6">
                    Send a Message
                  </h3>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Name <span className="text-[#FF8000]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF8000] transition-all ${
                          errors.name && touched.name
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/10 focus:border-[#FF8000]/40'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Email <span className="text-[#FF8000]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF8000] transition-all ${
                          errors.email && touched.email
                            ? 'border-red-500/50 focus:ring-red-500'
                            : 'border-white/10 focus:border-[#FF8000]/40'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Subject <span className="text-[#FF8000]">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Internship opportunity / Collaboration / Just saying hi"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF8000] transition-all ${
                        errors.subject && touched.subject
                          ? 'border-red-500/50 focus:ring-red-500'
                          : 'border-white/10 focus:border-[#FF8000]/40'
                      }`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-[#FF8000]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about the opportunity, project, or just say hello..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF8000] transition-all resize-none ${
                        errors.message && touched.message
                          ? 'border-red-500/50 focus:ring-red-500'
                          : 'border-white/10 focus:border-[#FF8000]/40'
                      }`}
                    />
                    <div className="flex items-start justify-between mt-1">
                      {errors.message && touched.message ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-gray-600 ml-auto">
                        {form.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8000] via-[#FF6B00] to-[#FFB347] text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#FF8000]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitState === 'error' && (
                    <p className="text-center text-red-400 text-sm flex items-center justify-center gap-1.5">
                      <AlertCircle size={14} />
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
