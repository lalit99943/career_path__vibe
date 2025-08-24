
import type { CareerPath } from '../types';
import { DataScienceIcon } from '../constants';

export const mlEngineer: CareerPath = {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    description: 'Design, build, and deploy machine learning models into production systems at scale.',
    icon: DataScienceIcon,
    roadmap: [
      {
        id: 'ml1',
        title: 'Programming & CS Foundations',
        description: 'Master Python for ML, understand data structures, and use Git for version control.',
        categories: [
          { name: 'Languages', tools: [{ name: 'Python', description: 'The primary language for ML.', tags: ['Open Source'] }] },
          { name: 'Version Control', tools: [{ name: 'Git', description: 'Essential for code collaboration and versioning.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ml2',
        title: 'Data Processing & Feature Engineering',
        description: 'Learn to manipulate large datasets, prepare data for modeling, and engineer effective features.',
        categories: [
          { name: 'Data Libraries', tools: [{ name: 'Pandas', description: 'For data manipulation and analysis.', tags: ['Open Source'] }, { name: 'NumPy', description: 'For numerical computation.', tags: ['Open Source'] }] },
          { name: 'Databases', tools: [{ name: 'SQL', description: 'For querying relational databases.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ml3',
        title: 'ML & Deep Learning Frameworks',
        description: 'Build and train models using industry-standard libraries and deep learning frameworks.',
        categories: [
          { name: 'ML Libraries', tools: [{ name: 'Scikit-learn', description: 'For classical ML algorithms.', tags: ['Open Source'] }] },
          { name: 'Deep Learning', tools: [{ name: 'TensorFlow', description: 'Google\'s end-to-end ML platform.', tags: ['Open Source'] }, { name: 'PyTorch', description: 'A popular framework for research and production.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ml4',
        title: 'MLOps',
        description: 'Understand the principles and tools for deploying, monitoring, and maintaining ML models in production.',
        categories: [
          { name: 'Containerization', tools: [{ name: 'Docker', description: 'Package models and dependencies into containers.', tags: ['Open Source'] }] },
          { name: 'Experiment Tracking', tools: [{ name: 'MLflow', description: 'Manage the ML lifecycle, including experimentation and deployment.', tags: ['Open Source'] }] },
          { name: 'Orchestration', tools: [{ name: 'Kubeflow', description: 'The Machine Learning Toolkit for Kubernetes.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ml5',
        title: 'Cloud Platforms & Deployment',
        description: 'Deploy models as scalable services on major cloud platforms.',
        categories: [
          { name: 'API Frameworks', tools: [{ name: 'FastAPI', description: 'A modern, fast web framework for building APIs with Python.', tags: ['Open Source'] }] },
          { name: 'Cloud ML Platforms', tools: [{ name: 'AWS SageMaker', description: 'A fully managed service for the ML lifecycle on AWS.', tags: ['Cloud', 'Paid'] }, { name: 'Google AI Platform', description: 'Google Cloud\'s suite of ML services.', tags: ['Cloud', 'Paid'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-ml1', title: 'Data Ingestion & Validation', description: 'Set up pipelines to acquire and validate data for training.', toolNames: ['Python', 'SQL'] },
      { id: 'wf-ml2', title: 'Model Training & Experimentation', description: 'Train various models and track experiments to find the best performer.', toolNames: ['PyTorch', 'MLflow', 'Scikit-learn'] },
      { id: 'wf-ml3', title: 'Model Packaging', description: 'Containerize the trained model and its dependencies for deployment.', toolNames: ['Docker'] },
      { id: 'wf-ml4', title: 'Model Deployment', description: 'Deploy the model as a REST API endpoint for inference.', toolNames: ['FastAPI', 'AWS SageMaker'] },
      { id: 'wf-ml5', title: 'Monitoring & Retraining', description: 'Monitor model performance, detect drift, and establish retraining pipelines.', toolNames: ['Kubeflow'] }
    ],
    comparison: {
      similarCareers: ['datascience', 'ai-engineer'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            'ml-engineer': 'Building, deploying, and maintaining production-grade machine learning models and systems at scale. More focused on software engineering and MLOps.',
            datascience: 'Analyzing data to extract actionable insights and answer business questions. More focused on statistics, analysis, and communication.',
            'ai-engineer': 'Designing and building complex, end-to-end AI systems, often incorporating advanced areas like NLP, computer vision, and LLMs.',
          },
        },
        {
          aspect: 'Analogy',
          details: {
            'ml-engineer': 'The "Factory Builder" who creates a robust, automated assembly line to produce consistent models.',
            datascience: 'The "Detective" who investigates data to find clues and solve a specific business mystery.',
            'ai-engineer': 'The "Architect" who designs a complex, intelligent system like a self-driving car, integrating many components.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Specialize in MLOps',
        description: 'Deepen your expertise in building robust, automated infrastructure for the entire machine learning lifecycle.',
        paths: [
          {
            title: 'Senior ML Engineer / MLOps Specialist',
            description: 'Deepen your expertise in MLOps, focusing on building scalable, automated, and robust ML infrastructure. Lead the design of ML systems and CI/CD/CT pipelines.',
          },
        ]
      },
      {
        title: 'Broaden Your Scope',
        description: 'Expand your focus from operationalizing models to designing entire AI systems or the platforms they run on.',
        paths: [
          {
            title: 'AI Engineer',
            description: 'Broaden your scope to build more complex, end-to-end AI systems. Work with cutting-edge models like LLMs and apply them to create novel applications.',
            careerId: 'ai-engineer',
          },
          {
            title: 'ML Platform Lead',
            description: 'Move into a leadership role focused on building the internal platforms and tools that enable data scientists and other ML engineers to work more efficiently.',
          },
        ]
      }
    ]
};