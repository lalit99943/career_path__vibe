
import type { CareerPath } from '../types';
import { DataScienceIcon } from '../constants';

export const dataScientist: CareerPath = {
    id: 'datascience',
    title: 'Data Scientist',
    description: 'Extract insights and knowledge from data using scientific methods, processes, and algorithms.',
    icon: DataScienceIcon,
    roadmap: [
      { 
        id: 'ds1', 
        title: 'Mathematics & Statistics', 
        description: 'Build a strong foundation in linear algebra, calculus, probability, and statistical concepts which are crucial for understanding algorithms.',
        categories: []
      },
      { 
        id: 'ds2', 
        title: 'Programming & Libraries', 
        description: 'Become proficient in Python and its data science libraries for data manipulation, analysis, and visualization.',
        categories: [
          {
            name: 'Core Libraries',
            tools: [
              { name: 'Python', description: 'The dominant programming language for data science.', tags: ['Open Source'] },
              { name: 'NumPy', description: 'Fundamental package for scientific computing with Python.', tags: ['Open Source'] },
              { name: 'Pandas', description: 'Powerful data structures for data analysis, time series, and statistics.', tags: ['Open Source'] },
              { name: 'Matplotlib', description: 'A comprehensive library for creating static, animated, and interactive visualizations.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'ds3', 
        title: 'Data Wrangling & EDA', 
        description: 'Learn to clean, process, and transform raw data. Master Exploratory Data Analysis (EDA) to uncover patterns and insights.',
        categories: []
      },
      { 
        id: 'ds4', 
        title: 'Machine Learning', 
        description: 'Study supervised, unsupervised, and reinforcement learning algorithms. Build predictive models for classification and regression.',
        categories: [
          {
            name: 'ML Libraries',
            tools: [
              { name: 'Scikit-learn', description: 'Simple and efficient tools for predictive data analysis.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'ds5', 
        title: 'Deep Learning', 
        description: 'Dive into neural networks using popular frameworks to solve complex problems in computer vision and Natural Language Processing (NLP).',
        categories: [
          {
            name: 'Deep Learning Frameworks',
            tools: [
              { name: 'TensorFlow', description: 'An end-to-end open source platform for machine learning by Google.', tags: ['Open Source'] },
              { name: 'PyTorch', description: 'An open source machine learning framework by Meta AI.', tags: ['Open Source'] },
            ]
          }
        ]
      },
    ],
    workflow: [
        { id: 'wf-ds1', title: 'Data Collection & Cleaning', description: 'Gather raw data from various sources and prepare it for analysis.', toolNames: ['Python', 'Pandas'] },
        { id: 'wf-ds2', title: 'Exploratory Data Analysis (EDA)', description: 'Analyze datasets to summarize their main characteristics, often with visual methods.', toolNames: ['Pandas', 'Matplotlib'] },
        { id: 'wf-ds3', title: 'Model Building & Training', description: 'Select features, choose a model, and train it on the prepared data.', toolNames: ['Scikit-learn', 'TensorFlow', 'PyTorch'] },
        { id: 'wf-ds4', title: 'Model Evaluation', description: 'Assess the performance of the model to ensure it is effective and reliable.', toolNames: ['Scikit-learn'] },
        { id: 'wf-ds5', title: 'Deployment & Monitoring', description: 'Deploy the trained model into production and monitor its performance over time.', toolNames: ['Docker', 'AWS'] },
    ],
    comparison: {
      similarCareers: ['ml-engineer', 'ai-engineer'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            datascience: 'Analyzing data to extract actionable insights and answer business questions. More focused on statistics, analysis, and communication.',
            'ml-engineer': 'Building, deploying, and maintaining production-grade machine learning models and systems at scale. More focused on software engineering and MLOps.',
            'ai-engineer': 'Designing and building complex, end-to-end AI systems, often incorporating advanced areas like NLP, computer vision, and LLMs.',
          },
        },
        {
          aspect: 'Primary Output',
          details: {
            datascience: 'Reports, dashboards, and presentations that inform strategic decisions. Sometimes a prototype model.',
            'ml-engineer': 'A scalable, reliable ML API or service integrated into a product.',
            'ai-engineer': 'A complete AI-powered feature or application, such as a chatbot or an image recognition system.',
          },
        },
        {
          aspect: 'Key Skills',
          details: {
            datascience: 'Statistics, Data Visualization, EDA, SQL, Predictive Modeling.',
            'ml-engineer': 'Software Engineering, MLOps, Cloud Computing, Containerization (Docker, Kubernetes), CI/CD.',
            'ai-engineer': 'Deep Learning Architectures, LLMs, NLP/CV, Distributed Systems, High-Performance Computing.',
          },
        },
        {
          aspect: 'Common Tools',
          details: {
            datascience: 'Python (Pandas, Matplotlib), Jupyter Notebooks, Scikit-learn, SQL.',
            'ml-engineer': 'PyTorch, TensorFlow, Docker, Kubernetes, AWS SageMaker, MLflow.',
            'ai-engineer': 'Hugging Face, PyTorch, C++, NVIDIA CUDA, Apache Spark.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Deepen Your Expertise',
        description: 'Advance as an individual contributor by tackling more complex analytical problems and providing strategic guidance.',
        paths: [
          {
            title: 'Senior Data Scientist',
            description: 'Lead complex analytical projects, mentor junior scientists, and influence business strategy with data-driven insights. Focus on more advanced statistical modeling and experimentation.',
          },
        ]
      },
      {
        title: 'Transition to a New Role',
        description: 'Leverage your analytical foundation to move into engineering or leadership tracks.',
        paths: [
          {
            title: 'Machine Learning Engineer',
            description: 'Shift from analysis and modeling to engineering and deployment. Focus on building robust, scalable pipelines to put ML models into production.',
            careerId: 'ml-engineer',
          },
          {
            title: 'Data Science Manager',
            description: 'Move into a leadership role, managing a team of data scientists and analysts. Focus on setting the team\'s strategy, project management, and stakeholder communication.',
          },
        ]
      }
    ]
};