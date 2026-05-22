export interface Achievement {
  id: number
  title: string
  organization: string
  date: string
  description: string
  type: 'academic' | 'award' | 'certification' | 'leadership' | 'extracurricular'
  icon: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Dean's List — 6 Semesters",
    organization: 'Arizona State University',
    date: '2022 – 2026',
    description: "Recognized on the Dean's List for 6 semesters at Arizona State University, maintaining a GPA of 3.5 or higher.",
    type: 'academic',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'IBM Data Analyst Professional Certificate',
    organization: 'IBM / Coursera',
    date: '2024',
    description: 'Completed the IBM Data Analyst Professional Certificate covering data analysis, visualization, Excel, SQL, Python, and Cognos Analytics.',
    type: 'certification',
    icon: '📜',
  },
  {
    id: 3,
    title: 'Cricket',
    organization: 'ASU Cricket Club',
    date: '2022 – 2026',
    description: 'Active cricket player at the ASU Cricket Club throughout university.',
    type: 'extracurricular',
    icon: '🏏',
  },
  {
    id: 4,
    title: 'Hackathon Participant',
    organization: 'Multiple Events',
    date: '2022 – 2026',
    description: 'Participated in multiple hackathons, solving real-world problems under pressure and collaborating with cross-functional teams.',
    type: 'award',
    icon: '💡',
  },
]
