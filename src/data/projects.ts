export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  techStack: string[]
  highlights: string[]
  category: 'ml' | 'web' | 'data' | 'fullstack'
  githubUrl: string
  demoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 6,
    title: 'CardioScope 3D',
    description:
      'An interactive 3D cardiovascular risk explorer that renders a real clinical cohort as an orbitable point cloud, with PCA, k-means clustering, and a logistic-regression risk model.',
    longDescription:
      'Built an interactive 3D data-analytics app on the UCI Heart Disease (Cleveland) cohort of 297 real patients. Compresses 13 clinical features into navigable 3D space via PCA, surfaces unsupervised k-means clusters, and scores heart-disease risk with an in-browser logistic-regression model (ROC-AUC 0.924). A real-time simulator projects a user-defined patient into the same space, driving a beating 3D heart and an explainable log-odds factor breakdown.',
    techStack: ['React', 'TypeScript', 'Three.js', 'react-three-fiber', 'PCA / k-means', 'Logistic Regression'],
    highlights: [
      'Rendered 297 real patients as a live, orbitable 3D point cloud with WebGL bloom',
      'PCA dimensionality reduction and unsupervised k-means clustering computed in-browser',
      'Logistic-regression risk model (ROC-AUC 0.924) with an explainable factor breakdown',
      'Real-time risk simulator projects a custom patient into the cohort with a beating 3D heart',
    ],
    category: 'ml',
    githubUrl: 'https://github.com/pavanmanjunath18/cardioscope-3d',
    demoUrl: 'https://cardioscope-3d.vercel.app',
    featured: true,
  },
  {
    id: 1,
    title: 'Resolviq',
    description:
      'An AI-powered resolution intelligence platform designed to streamline and automate issue tracking and support workflows.',
    longDescription:
      'Resolviq is an AI-driven platform that automates support and issue resolution workflows. Built to reduce manual triage time and surface actionable insights from support data.',
    techStack: ['Python', 'SQL', 'AI/ML'],
    highlights: [
      'Automated issue resolution workflows to reduce manual triage overhead',
      'AI-driven classification and routing of support requests',
      'Analytics layer for tracking resolution metrics and trends',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/pavanmanjunath18/resolviq',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Job Market Intelligence Dashboard',
    description:
      'An interactive analytics dashboard exploring global AI job market trends, salary patterns, hiring difficulty, and workforce dynamics.',
    longDescription:
      'Built an interactive analytics dashboard exploring global AI job market trends across 90K+ records. Features multi-view visualizations including salary distributions, experience-to-compensation analysis, country-level hiring insights, and parallel coordinates for workforce analysis.',
    techStack: ['Observable', 'JavaScript', 'D3.js', 'Data Visualization'],
    highlights: [
      'Explored 90K+ AI job market records across industries, countries, roles, and specializations',
      'Designed salary distributions, experience-to-compensation, and country-level hiring visualizations',
      'Implemented coordinated filtering and interactive analytical workflows',
      'Multi-view parallel coordinates for cross-dimensional workforce analysis',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18',
    demoUrl: 'https://observablehq.com/d/446b1a5b84c32ce5',
    featured: true,
  },
  {
    id: 3,
    title: 'Enterprise Lakehouse ETL Pipeline',
    description:
      'An end-to-end ETL pipeline using Databricks and Spark to consolidate multi-source FMCG retail data into a lakehouse architecture.',
    longDescription:
      'Built a scalable lakehouse ETL pipeline on Databricks using Apache Spark to ingest and consolidate multi-source FMCG retail data. Designed fact and dimension tables with incremental loading strategies to support historical tracking and downstream BI reporting.',
    techStack: ['Databricks', 'Apache Spark', 'Python', 'SQL', 'Delta Lake'],
    highlights: [
      'Consolidated multi-source FMCG retail data into a unified lakehouse architecture',
      'Designed fact and dimension tables with incremental loading for historical tracking',
      'Implemented data transformations and business logic for analytics-ready datasets',
      'Supports scalable reporting and BI dashboard consumption',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: true,
  },
  {
    id: 4,
    title: 'SaaS Revenue & Churn Intelligence',
    description:
      'A SaaS revenue and churn intelligence platform using Python, PostgreSQL, and Streamlit to analyze MRR, churn, and cohort retention across 50K+ records.',
    longDescription:
      'Built a SaaS revenue and churn intelligence platform to analyze MRR, churn, cohort retention, and customer health across 50K+ simulated B2B SaaS records. Designed analytics-layer SQL models and materialized views for revenue movement tracking, retention analysis, and churn-risk segmentation.',
    techStack: ['Python', 'PostgreSQL', 'SQL', 'Streamlit', 'Plotly'],
    highlights: [
      'Analyzed MRR, churn, cohort retention, and customer health across 50K+ B2B SaaS records',
      'Designed SQL models and materialized views for NRR, GRR, expansion MRR, and cohort metrics',
      'Built interactive executive dashboards with Streamlit and Plotly',
      'Visualized revenue trends, churn drivers, and customer lifecycle behavior',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18/saas-revenue-churn-intelligence',
    featured: true,
  },
  {
    id: 5,
    title: 'Iowa Nitrate Analysis',
    description:
      'An exploratory data analysis of nitrate concentration levels in Iowa water sources, uncovering spatial and temporal patterns in water quality data.',
    longDescription:
      'A comprehensive environmental data analysis project examining nitrate levels across Iowa water sources. Applied exploratory data analysis and visualization techniques to surface spatial and temporal trends in water quality, supporting insights into agricultural runoff and public health implications.',
    techStack: ['Python', 'R', 'Pandas', 'Matplotlib', 'GIS / Spatial Analysis'],
    highlights: [
      'Analyzed nitrate concentration trends across Iowa water monitoring stations',
      'Applied exploratory data analysis to surface spatial and temporal water quality patterns',
      'Visualized agricultural runoff impact on nitrate levels across regions',
      'Generated actionable insights for environmental reporting',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18/iowa-nitrate-analysis',
    featured: false,
  },
]
