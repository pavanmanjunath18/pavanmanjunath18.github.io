export interface Achievement {
  id: number
  title: string
  organization: string
  date: string
  description: string
  type: 'academic' | 'award' | 'certification' | 'leadership' | 'extracurricular'
  icon: string
}

// TODO: Replace placeholder achievements with your actual ones
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Dean's List",
    organization: 'Arizona State University',
    date: 'Fall 2023, Spring 2024, Fall 2024',
    description: "Recognized on the Dean's List for achieving a GPA of 3.5 or higher for three consecutive semesters.",
    type: 'academic',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Google Data Analytics Certificate',
    organization: 'Google / Coursera',
    date: '2024',
    description: 'Completed the Google Data Analytics Professional Certificate covering data cleaning, analysis, visualization, and R programming.',
    type: 'certification',
    icon: '📜',
  },
  {
    id: 3,
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: '2024',
    description: 'Earned AWS Certified Cloud Practitioner certification demonstrating foundational cloud knowledge and AWS service expertise.',
    type: 'certification',
    icon: '☁️',
  },
  {
    id: 4,
    title: '[Club/Organization Name] — [Your Role]',
    organization: 'Arizona State University',
    date: '2023 – Present',
    description: 'TODO: Describe your role, responsibilities, and impact in this student organization.',
    type: 'leadership',
    icon: '👥',
  },
  {
    id: 5,
    title: 'Cricket Team Captain / Player',
    organization: 'ASU Cricket Club',
    date: '2022 – Present',
    description: 'TODO: Describe your involvement, leadership role, tournaments, or any notable achievements.',
    type: 'extracurricular',
    icon: '🏏',
  },
  {
    id: 6,
    title: '[Hackathon or Competition Name]',
    organization: '[Organizing Body]',
    date: '2024',
    description: "TODO: Describe the hackathon project, your team's approach, and the outcome or placement.",
    type: 'award',
    icon: '🥇',
  },
]
