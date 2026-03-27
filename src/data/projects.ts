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

// TODO: Replace placeholder content with your actual projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Sentiment Analysis & NLP Platform',
    description:
      'A full-stack NLP platform that classifies sentiment in real-time using fine-tuned transformer models, with a REST API and interactive dashboard.',
    longDescription:
      'Built a production-grade sentiment analysis platform leveraging fine-tuned BERT models. The system processes text in real-time through a FastAPI backend, stores results in PostgreSQL, and surfaces insights through a React dashboard.',
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    highlights: [
      '94.2% accuracy on benchmark datasets',
      'Processes 1,000+ requests/minute with async FastAPI',
      'Fine-tuned BERT on domain-specific corpus',
      'Deployed containerized via Docker on AWS EC2',
    ],
    category: 'ml',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: true,
  },
  {
    id: 2,
    title: 'Predictive Analytics Dashboard',
    description:
      'An interactive data analytics platform that ingests multi-source data, runs ML forecasting models, and visualizes KPIs in real time.',
    longDescription:
      'Engineered an end-to-end analytics pipeline that aggregates data from multiple APIs, runs time-series forecasting with Prophet and scikit-learn, and renders interactive Tableau-style dashboards.',
    techStack: ['Python', 'Pandas', 'scikit-learn', 'Prophet', 'Tableau', 'SQL', 'Streamlit'],
    highlights: [
      'Reduced forecasting error by 18% vs. baseline',
      'Automated ETL pipeline refreshing data hourly',
      'Interactive Streamlit dashboard with drill-down filters',
      'Handles 500K+ row datasets efficiently',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: true,
  },
  {
    id: 3,
    title: 'ML Model Serving API',
    description:
      'A scalable microservice for serving machine learning models with version control, A/B testing, and monitoring built in.',
    longDescription:
      'Designed a robust ML model serving infrastructure with FastAPI that supports multiple model versions, traffic splitting for A/B testing, and Prometheus metrics for monitoring.',
    techStack: ['Python', 'FastAPI', 'scikit-learn', 'Redis', 'Prometheus', 'Docker', 'Kubernetes'],
    highlights: [
      'Sub-50ms p99 inference latency',
      'Supports 5+ model versions simultaneously',
      'Built-in A/B testing with traffic splitting',
      'Auto-scales with Kubernetes HPA',
    ],
    category: 'ml',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: true,
  },
  {
    id: 4,
    title: 'Full-Stack Task Management App',
    description:
      'A collaborative task management web application with real-time updates, role-based access, and a clean, intuitive interface.',
    longDescription:
      'Developed a feature-rich project management tool with real-time collaboration, drag-and-drop kanban boards, and team analytics using React and a Node.js backend.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    highlights: [
      'Real-time collaboration via WebSockets',
      'Drag-and-drop kanban with optimistic UI',
      'JWT authentication with role-based permissions',
      '100+ active users during ASU hackathon demo',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/pavanmanjunath18',
    demoUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Data Pipeline Automation Framework',
    description:
      'An automated ETL framework that extracts data from disparate sources, transforms and validates it, and loads it into a central data warehouse.',
    longDescription:
      'Built a modular ETL pipeline using Apache Airflow that orchestrates daily data ingestion from 8+ APIs, validates schema integrity, and loads clean data into Snowflake for downstream analytics.',
    techStack: ['Python', 'Apache Airflow', 'Snowflake', 'dbt', 'SQL', 'AWS S3', 'Pandas'],
    highlights: [
      'Processes 2M+ records daily across 8 data sources',
      'Data quality checks catch 99.7% of anomalies',
      'Reduced manual data prep time by 80%',
      'Modular DAG architecture for easy extension',
    ],
    category: 'data',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: false,
  },
  {
    id: 7,
    title: 'Enterprise Lakehouse ETL Pipeline',
    description:
      'An end-to-end ETL pipeline using Databricks and Spark to consolidate multi-source FMCG retail data into a lakehouse architecture.',
    longDescription:
      'Built a scalable lakehouse ETL pipeline on Databricks using Apache Spark to ingest and consolidate multi-source FMCG retail data. Designed fact and dimension tables with incremental loading strategies to support historical tracking and downstream BI reporting.',
    techStack: ['Databricks', 'Apache Spark', 'Python', 'SQL', 'dbt'],
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
    id: 6,
    title: 'Computer Vision Object Detector',
    description:
      'A real-time object detection system using YOLOv8, optimized for edge deployment with a web interface for live video inference.',
    longDescription:
      'Implemented a custom-trained YOLOv8 model for object detection, optimized it with ONNX for edge deployment, and built a Flask-based web interface for live webcam inference.',
    techStack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'ONNX', 'Flask', 'NumPy'],
    highlights: [
      'Trained on custom dataset of 10K+ labeled images',
      'mAP@0.5 of 0.87 on test set',
      'ONNX optimization reduces inference 3x vs. baseline',
      'Live webcam inference at 30+ FPS',
    ],
    category: 'ml',
    githubUrl: 'https://github.com/pavanmanjunath18',
    featured: false,
  },
]
