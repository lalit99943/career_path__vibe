
import type { CareerPath } from '../types';
import { DatabaseIcon } from '../constants';

export const backendDeveloper: CareerPath = {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Power applications by creating server-side logic, managing databases, and building robust APIs.',
    icon: DatabaseIcon,
    roadmap: [
      { 
        id: 'be1', 
        title: 'Choose a Language & Framework', 
        description: 'Pick a server-side language and a corresponding framework to build the foundation of your application logic.',
        categories: [
          {
            name: 'Languages & Frameworks',
            tools: [
              { name: 'Node.js (Express/NestJS)', description: 'JavaScript runtime for server-side development.', tags: ['Open Source'] },
              { name: 'Python (Django/Flask)', description: 'Versatile language popular in web dev, data science, and more.', tags: ['Open Source'] },
              { name: 'Go (Gin)', description: 'Statically typed language known for high performance.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'be2', 
        title: 'Databases', 
        description: 'Learn to store, retrieve, and manage application data using both relational (SQL) and non-relational (NoSQL) databases.',
        categories: [
          {
            name: 'SQL Databases',
            tools: [
              { name: 'PostgreSQL', description: 'A powerful, open source object-relational database system.', tags: ['Open Source'] },
              { name: 'MySQL', description: 'The world\'s most popular open source database.', tags: ['Open Source'] },
            ]
          },
          {
            name: 'NoSQL Databases',
            tools: [
              { name: 'MongoDB', description: 'A document-oriented NoSQL database used for high volume data storage.', tags: ['Open Source', 'Cloud'] },
              { name: 'Redis', description: 'An in-memory data structure store, used as a database, cache, and message broker.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'be3', 
        title: 'API Design', 
        description: 'Understand how to design, build, and document APIs that allow the frontend and other services to communicate with your backend.',
        categories: [
          {
            name: 'API Paradigms',
            tools: [
              { name: 'REST', description: 'A standard architectural style for creating web services.', tags: ['Open Source'] },
              { name: 'GraphQL', description: 'A query language for APIs that gives clients exactly the data they ask for.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'be4', 
        title: 'Authentication & Security', 
        description: 'Implement user authentication and learn best practices for securing your application against common vulnerabilities.',
        categories: [
          {
            name: 'Authentication Methods',
            tools: [
              { name: 'JWT (JSON Web Tokens)', description: 'A compact, URL-safe means of representing claims to be transferred between two parties.', tags: ['Open Source'] },
              { name: 'OAuth 2.0', description: 'An authorization framework that enables applications to obtain limited access to user accounts.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      {
        id: 'be5',
        title: 'Testing',
        description: 'Learn to write unit, integration, and end-to-end tests to ensure the reliability and correctness of your server-side logic.',
        categories: [
          {
            name: 'Testing Libraries',
            tools: [
              { name: 'Jest', description: 'A popular testing framework for Node.js applications.', tags: ['Open Source'] },
              { name: 'Pytest', description: 'A mature, feature-rich testing framework for Python.', tags: ['Open Source'] },
              { name: 'Postman', description: 'A collaboration platform for API development, useful for end-to-end API testing.', tags: ['Freemium'] },
            ]
          }
        ]
      },
      { 
        id: 'be6', 
        title: 'Deployment & DevOps', 
        description: 'Learn how to containerize your application with Docker and deploy it to cloud services. Understand CI/CD pipelines for automation.',
        categories: [
          {
            name: 'Containerization',
            tools: [
              { name: 'Docker', description: 'A platform for developing, shipping, and running applications in containers.', tags: ['Open Source'] },
            ]
          },
          {
            name: 'Cloud Providers',
            tools: [
              { name: 'AWS', description: 'Amazon Web Services offers a broad set of global cloud-based products.', tags: ['Cloud', 'Paid'] },
              { name: 'Google Cloud', description: 'A suite of cloud computing services offered by Google.', tags: ['Cloud', 'Paid'] },
              { name: 'Vercel', description: 'A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, and databases.', tags: ['Cloud', 'Freemium'] },
            ]
          }
        ]
      },
    ],
    workflow: [
        { id: 'wf-be1', title: 'API & Database Design', description: 'Plan endpoints, define data schemas, and choose the right database.', toolNames: ['PostgreSQL', 'MongoDB', 'REST'] },
        { id: 'wf-be2', title: 'Develop', description: 'Write business logic, implement authentication, and connect to the database.', toolNames: ['Node.js (Express/NestJS)', 'JWT (JSON Web Tokens)'] },
        { id: 'wf-be3', title: 'Test', description: 'Write unit and integration tests for API endpoints and business logic.', toolNames: ['Jest', 'Postman'] },
        { id: 'wf-be4', title: 'Containerize', description: 'Package the application and its dependencies into a Docker container for consistency.', toolNames: ['Docker'] },
        { id: 'wf-be5', title: 'Deploy & Host', description: 'Deploy the containerized application to a cloud provider.', toolNames: ['AWS', 'Google Cloud'] },
    ],
    comparison: {
      similarCareers: ['frontend', 'devops'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            backend: 'Building the server-side logic, databases, and APIs that power the application from behind the scenes.',
            frontend: 'Building the visual, client-side part of a web application that users interact with directly.',
            devops: 'Automating the infrastructure and processes required to build, test, deploy, and monitor applications.',
          },
        },
        {
          aspect: 'Key Skills',
          details: {
            backend: 'Server-side Languages (Node.js, Python), Database Management (SQL, NoSQL), API Design, Authentication.',
            frontend: 'HTML, CSS, JavaScript, UI Frameworks (React, Vue), State Management, API Consumption.',
            devops: 'CI/CD Pipelines, Infrastructure as Code (Terraform), Containerization (Docker, Kubernetes), Cloud Platforms.',
          },
        },
        {
          aspect: 'Primary Goal',
          details: {
            backend: 'To ensure data is stored securely, the application is scalable, and the server responds efficiently.',
            frontend: 'To create a responsive, performant, and accessible user interface from the designs provided.',
            devops: 'To increase the speed and reliability of software delivery through automation and improved collaboration.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Specialize in Architecture',
        description: 'Focus on high-level system design, scalability, and technical leadership.',
        paths: [
          {
            title: 'Senior Backend Developer / Architect',
            description: 'Take on more complex system design challenges, focusing on scalability, resilience, and microservices architecture. Lead technical design discussions and mentor other engineers.',
          },
        ]
      },
      {
        title: 'Branch into New Roles',
        description: 'Leverage your backend expertise to transition into adjacent, high-impact roles.',
        paths: [
          {
            title: 'DevOps Engineer',
            description: 'Shift your focus to infrastructure, automation, and deployment pipelines. Master tools for CI/CD, containerization, and cloud infrastructure to improve the entire software delivery lifecycle.',
            careerId: 'devops',
          },
          {
            title: 'Full-Stack Developer',
            description: 'Learn frontend technologies like React or Vue to build complete web applications. This path combines your backend expertise with user interface development skills.',
            careerId: 'frontend',
          }
        ]
      }
    ]
};