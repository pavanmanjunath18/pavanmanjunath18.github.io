export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  title: string
  icon: string
  color: string
  skills: Skill[]
}

// TODO: Adjust skill levels and add/remove skills based on your actual experience
export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'Java', level: 4 },
      { name: 'SQL', level: 4 },
      { name: 'R', level: 3 },
      { name: 'C++', level: 3 },
      { name: 'Bash/Shell', level: 3 },
    ],
  },
  {
    title: 'ML & AI',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PyTorch', level: 4 },
      { name: 'TensorFlow', level: 4 },
      { name: 'scikit-learn', level: 5 },
      { name: 'Hugging Face', level: 4 },
      { name: 'XGBoost', level: 4 },
      { name: 'OpenCV', level: 3 },
      { name: 'LangChain', level: 3 },
      { name: 'NLTK / spaCy', level: 4 },
    ],
  },
  {
    title: 'Web & Frameworks',
    icon: '⚡',
    color: 'from-sky-500 to-indigo-500',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Next.js', level: 3 },
      { name: 'FastAPI', level: 4 },
      { name: 'Node.js', level: 4 },
      { name: 'Flask', level: 4 },
      { name: 'Express.js', level: 3 },
      { name: 'Tailwind CSS', level: 4 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    color: 'from-teal-500 to-sky-500',
    skills: [
      { name: 'Pandas', level: 5 },
      { name: 'NumPy', level: 5 },
      { name: 'Tableau', level: 4 },
      { name: 'Apache Spark', level: 3 },
      { name: 'Power BI', level: 3 },
      { name: 'dbt', level: 3 },
      { name: 'Apache Airflow', level: 3 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'PostgreSQL', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Redis', level: 3 },
      { name: 'Snowflake', level: 3 },
      { name: 'Firebase', level: 3 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'AWS', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'Git / GitHub', level: 5 },
      { name: 'Linux', level: 4 },
      { name: 'CI/CD', level: 3 },
      { name: 'Vercel / Netlify', level: 3 },
    ],
  },
]
