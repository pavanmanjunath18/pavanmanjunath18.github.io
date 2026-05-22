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

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Jr. Data Analyst Intern',
    company: 'Food Forest AI',
    location: 'Philadelphia, PA',
    startDate: 'Jun 2025',
    endDate: 'Jul 2025',
    type: 'internship',
    description: [
      'Built Python (Pandas + regex) pipelines to standardize 500+ B2B company records; cut manual cleanup by ~75% and improved downstream match rates.',
      'Implemented SQL checks to surface duplicates, null values, and schema drift, which increased ingestion reliability and reduced cataloging errors.',
      'Authored targeted web-scraping scripts to enrich missing fields (websites, bios, social links), lifting dataset completeness by ~55%.',
    ],
    techStack: ['Python', 'Pandas', 'SQL', 'Regex', 'Web Scraping'],
  },
  {
    id: 2,
    role: 'Database & Analytics Developer',
    company: 'DigiClips (Capstone)',
    location: 'Tempe, AZ',
    startDate: 'Aug 2025',
    endDate: 'May 2026',
    type: 'part-time',
    description: [
      'Developed MySQL-based relational data workflows for high-volume processed media and transcript datasets, enabling scalable search, reporting, and operational analytics.',
      'Improved query performance and data reliability through schema normalization, indexing strategies, validation workflows, and automated cleanup and retention processes.',
      'Provided analytics and reporting support to surface operational insights from transcript and media datasets.',
    ],
    techStack: ['MySQL', 'SQL', 'Data Modeling', 'ETL', 'Analytics'],
  },
  {
    id: 3,
    role: 'Community Engagement Data Input Specialist',
    company: 'ASU Social Embeddedness (Office of University Affairs)',
    location: 'Tempe, AZ',
    startDate: 'Sep 2024',
    endDate: 'May 2026',
    type: 'part-time',
    description: [
      'Administered the Collaboratory platform to manage, validate, and standardize university-community engagement data, improving data accuracy and consistency for reporting across the university.',
      'Automated workflows and delivered Tableau/Power BI dashboards, while leading demos and technical support sessions that increased platform adoption across ASU units.',
    ],
    techStack: ['Tableau', 'Power BI', 'Collaboratory', 'SQL'],
  },
]
