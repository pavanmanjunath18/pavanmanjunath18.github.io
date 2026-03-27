export interface Experience {
  id: number
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  type: 'internship' | 'part-time' | 'research' | 'leadership'
  description: string[]
  techStack: string[]
  logo?: string
}

// TODO: Replace all placeholder content with your actual work experience
export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: '[Company Name]',
    location: '[City, State / Remote]',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    type: 'internship',
    description: [
      'TODO: Describe your main project or contribution (quantify impact where possible)',
      'TODO: Describe a technical challenge you solved',
      'TODO: Describe collaboration, agile process, or cross-team work',
      'TODO: Describe a tool or system you built or improved',
    ],
    techStack: ['Python', 'React', 'AWS', 'SQL'],
  },
  {
    id: 2,
    role: 'Undergraduate Research Assistant',
    company: 'Arizona State University',
    location: 'Tempe, AZ',
    startDate: 'Jan 2025',
    endDate: 'Present',
    type: 'research',
    description: [
      'TODO: Describe the research area / lab you work in',
      'TODO: Describe your specific contribution to the research',
      'TODO: Describe datasets, models, or experiments you worked on',
      'TODO: Mention any publications, posters, or conference submissions',
    ],
    techStack: ['Python', 'PyTorch', 'scikit-learn', 'Pandas'],
  },
  {
    id: 3,
    role: 'Data Analyst Intern',
    company: '[Company Name]',
    location: '[City, State / Remote]',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    type: 'internship',
    description: [
      'TODO: Describe the analytics work you did (dashboards, reports, models)',
      'TODO: Describe data sources and scale you worked with',
      'TODO: Describe the business impact of your analysis',
      'TODO: Describe tools and processes you improved or introduced',
    ],
    techStack: ['Python', 'Pandas', 'Tableau', 'SQL', 'Excel'],
  },
]
