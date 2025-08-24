
import type { CareerPath } from '../types';
import { BrainIcon } from '../constants';

export const aiEngineer: CareerPath = {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Develop complex AI systems and applications, often focusing on areas like NLP, computer vision, and LLMs.',
    icon: BrainIcon,
    roadmap: [
      {
        id: 'ai1',
        title: 'Advanced Programming & Algorithms',
        description: 'Build a solid foundation in programming, data structures, and algorithms for performance-critical AI systems.',
        categories: [
          { name: 'Languages', tools: [{ name: 'Python', description: 'The lingua franca of AI.', tags: ['Open Source'] }, { name: 'C++', description: 'For high-performance AI computation.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ai2',
        title: 'Advanced ML & Deep Learning',
        description: 'Go beyond basic models to understand complex architectures for specific AI tasks.',
        categories: [
          { name: 'Specialized Fields', tools: [{ name: 'Computer Vision', description: 'Techniques for image and video analysis (e.g., OpenCV).', tags: ['Open Source'] }, { name: 'NLP', description: 'Techniques for understanding and generating text.', tags: ['Open Source'] }] },
          { name: 'Deep Learning', tools: [{ name: 'PyTorch', description: 'Preferred for its flexibility in research and development.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'ai3',
        title: 'Large Language Models (LLMs)',
        description: 'Work with state-of-the-art foundation models, including fine-tuning and building applications on top of them.',
        categories: [
          { name: 'LLM Libraries', tools: [{ name: 'Hugging Face Transformers', description: 'Access thousands of pretrained models for NLP tasks.', tags: ['Open Source'] }] },
          { name: 'Techniques', tools: [{ name: 'Fine-Tuning', description: 'Adapting a pretrained model to a specific task.', tags: [] }, { name: 'RAG', description: 'Retrieval-Augmented Generation for knowledge-intensive tasks.', tags: [] }] }
        ]
      },
      {
        id: 'ai4',
        title: 'AI Infrastructure',
        description: 'Understand the hardware and software needed to train and serve large-scale AI models efficiently.',
        categories: [
          { name: 'Distributed Computing', tools: [{ name: 'Apache Spark', description: 'For large-scale data processing.', tags: ['Open Source'] }] },
          { name: 'GPU Programming', tools: [{ name: 'NVIDIA CUDA', description: 'Platform for parallel computing on NVIDIA GPUs.', tags: ['Paid'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-ai1', title: 'Problem Formulation & Research', description: 'Define the AI problem and research state-of-the-art approaches.', toolNames: [] },
      { id: 'wf-ai2', title: 'System Design & Architecture', description: 'Design the end-to-end AI system, including data pipelines and model serving.', toolNames: [] },
      { id: 'wf-ai3', title: 'Data Pipeline & Prototyping', description: 'Build data processing pipelines and experiment with different models.', toolNames: ['Python', 'Apache Spark', 'Hugging Face Transformers'] },
      { id: 'wf-ai4', title: 'System Integration & Optimization', description: 'Integrate the AI model into a larger application and optimize for performance.', toolNames: ['C++', 'NVIDIA CUDA'] },
      { id: 'wf-ai5', title: 'Evaluation & Ethics Review', description: 'Rigorously evaluate the system and ensure it aligns with responsible AI principles.', toolNames: [] }
    ],
    comparison: {
      similarCareers: ['ml-engineer', 'datascience'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            'ai-engineer': 'Designing and building complex, end-to-end AI systems, often incorporating advanced areas like NLP, computer vision, and LLMs.',
            'ml-engineer': 'Building, deploying, and maintaining production-grade machine learning models and systems at scale. More focused on software engineering and MLOps.',
            datascience: 'Analyzing data to extract actionable insights and answer business questions. More focused on statistics, analysis, and communication.',
          },
        },
        {
          aspect: 'Scope of Work',
          details: {
            'ai-engineer': 'Broadest scope, building entire applications or intelligent systems from the ground up.',
            'ml-engineer': 'Focused scope, operationalizing a specific ML model into a reliable service.',
            datascience: 'Analytical scope, exploring data and building models to answer questions, not necessarily for production.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Strategic Career Alternatives',
        description: 'As an experienced AI Engineer, you can move into high-level architecture, cutting-edge research, or product leadership roles.',
        paths: [
          {
            title: 'AI Architect',
            description: 'Design the high-level structure of large-scale AI systems. Make critical decisions about frameworks, infrastructure, and data flow to meet business objectives.',
          },
          {
            title: 'Research Scientist',
            description: 'Transition into a more research-focused role, developing novel algorithms and pushing the boundaries of what is possible in a specific AI domain like NLP or Computer Vision.',
          },
          {
            title: 'AI Product Manager',
            description: 'Combine your deep technical knowledge with business strategy to lead the development of AI-powered products, defining features and prioritizing the roadmap.',
          },
        ]
      }
    ]
};