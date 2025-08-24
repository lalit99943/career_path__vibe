
import type { CareerPath } from '../types';
import { CodeIcon } from '../constants';

export const frontendDeveloper: CareerPath = {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Build beautiful and interactive user interfaces for web applications using modern technologies.',
    icon: CodeIcon,
    roadmap: [
      { 
        id: 'fe1', 
        title: 'HTML, CSS, & JavaScript', 
        description: 'Master the fundamental building blocks of the web. Learn semantic HTML for structure, responsive CSS with Flexbox/Grid for styling, and core JavaScript concepts (ES6+) for interactivity.',
        categories: [
          {
            name: 'Core Languages',
            tools: [
              { name: 'HTML5', description: 'The standard for structuring web content.', tags: ['Open Source'] },
              { name: 'CSS3', description: 'Used for styling, layout, and animations.', tags: ['Open Source'] },
              { name: 'JavaScript (ES6+)', description: 'The programming language of the web.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'fe2', 
        title: 'Choose a Framework', 
        description: 'Learn a modern JavaScript framework to build complex, scalable applications efficiently. These provide structure and reusable components.',
        categories: [
          {
            name: 'UI Frameworks',
            tools: [
              { name: 'React', description: 'A popular library for building user interfaces, maintained by Meta.', tags: ['Open Source'] },
              { name: 'Vue.js', description: 'A progressive framework that is approachable and versatile.', tags: ['Open Source'] },
              { name: 'Svelte', description: 'A radical new approach that compiles your code to tiny, framework-less vanilla JS.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'fe3', 
        title: 'State Management', 
        description: 'Understand how to manage application state as your app grows. This is crucial for maintaining a predictable and debuggable application.',
        categories: [
          {
            name: 'State Management Libraries',
            tools: [
              { name: 'Zustand', description: 'A small, fast, and scalable state-management solution for React.', tags: ['Open Source'] },
              { name: 'Redux Toolkit', description: 'The official, opinionated toolset for efficient Redux development.', tags: ['Open Source'] },
              { name: 'Pinia', description: 'The official state management library for Vue.', tags: ['Open Source'] },
            ]
          }
        ]
      },
      { 
        id: 'fe4', 
        title: 'Build Tools, VC, & IDEs', 
        description: 'Get comfortable with tools that bundle your code, manage versions, and provide an efficient coding environment.',
        categories: [
          {
            name: 'Build Tools',
            tools: [
              { name: 'Vite', description: 'A modern frontend build tool that provides an extremely fast development experience.', tags: ['Open Source'] },
              { name: 'Webpack', description: 'A powerful and highly configurable module bundler for JavaScript applications.', tags: ['Open Source'] },
            ]
          },
          {
            name: 'Version Control',
            tools: [
              { name: 'Git', description: 'The industry-standard distributed version control system.', tags: ['Open Source'] },
              { name: 'GitHub', description: 'A platform for hosting and collaborating on Git repositories.', tags: ['Freemium', 'Cloud'] },
            ]
          },
          {
            name: 'IDEs',
            tools: [
              { name: 'VS Code', description: 'A lightweight but powerful source code editor from Microsoft.', tags: ['Open Source', 'IDE'] }
            ]
          }
        ]
      },
      { 
        id: 'fe5', 
        title: 'Testing & Deployment', 
        description: 'Learn to write tests to ensure your application is reliable, and deploy it to the web.',
        categories: [
          {
            name: 'Testing Frameworks',
            tools: [
              { name: 'Jest', description: 'A delightful JavaScript Testing Framework with a focus on simplicity.', tags: ['Open Source'] },
              { name: 'React Testing Library', description: 'A lightweight solution for testing React components.', tags: ['Open Source'] },
              { name: 'Cypress', description: 'Fast, easy, and reliable testing for anything that runs in a browser.', tags: ['Freemium'] },
            ]
          },
          {
            name: 'Deployment Platforms',
            tools: [
              { name: 'Vercel', description: 'A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, and databases.', tags: ['Cloud', 'Freemium'] },
            ]
          }
        ]
      },
    ],
    workflow: [
      { id: 'wf-fe1', title: 'Plan & Design', description: 'Collaborate on UI/UX, create mockups, and define project specs.', toolNames: ['Figma'] },
      { id: 'wf-fe2', title: 'Develop', description: 'Write code, build components, and manage application state.', toolNames: ['VS Code', 'Git', 'GitHub', 'React', 'Zustand'] },
      { id: 'wf-fe3', title: 'Build & Bundle', description: 'Optimize and package assets for production.', toolNames: ['Vite'] },
      { id: 'wf-fe4', title: 'Test', description: 'Run automated tests to ensure code quality and prevent regressions.', toolNames: ['Jest', 'Cypress'] },
      { id: 'wf-fe5', title: 'Deploy', description: 'Push code to a hosting platform to make it live.', toolNames: ['Vercel', 'GitHub'] },
    ],
    comparison: {
      similarCareers: ['backend', 'uiux'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            frontend: 'Building the visual, client-side part of a web application that users interact with directly.',
            backend: 'Building the server-side logic, databases, and APIs that power the application from behind the scenes.',
            uiux: 'Researching, designing, and prototyping user-friendly interfaces to solve user problems, focusing on experience and aesthetics.',
          },
        },
        {
          aspect: 'Key Skills',
          details: {
            frontend: 'HTML, CSS, JavaScript, UI Frameworks (React, Vue), State Management, API Consumption.',
            backend: 'Server-side Languages (Node.js, Python, Go), Database Management (SQL, NoSQL), API Design (REST, GraphQL), Authentication.',
            uiux: 'User Research, Wireframing, Prototyping, Usability Testing, Visual Design Principles, Interaction Design.',
          },
        },
        {
          aspect: 'Common Tools',
          details: {
            frontend: 'VS Code, React, Vite, Jest, GitHub.',
            backend: 'Docker, PostgreSQL, MongoDB, Node.js, AWS.',
            uiux: 'Figma, Sketch, Adobe XD, Maze.',
          },
        },
        {
          aspect: 'Primary Goal',
          details: {
            frontend: 'To create a responsive, performant, and accessible user interface from the designs provided.',
            backend: 'To ensure data is stored securely, the application is scalable, and the server responds to requests efficiently.',
            uiux: 'To understand user needs and create a product that is intuitive, effective, and enjoyable to use.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Specialize & Deepen',
        description: 'The first step is often to become a senior-level expert in your current field, taking on more complex projects and leadership roles.',
        paths: [
          {
            title: 'Senior Frontend Developer',
            description: 'Deepen your expertise in your chosen framework, focus on performance optimization, architecture, and mentor junior developers. This is a natural progression that involves technical leadership.',
          },
        ]
      },
      {
        title: 'Broaden Your Horizons',
        description: 'From a senior position, you can branch out into related disciplines, combining your frontend skills with new expertise.',
        paths: [
          {
            title: 'Full-Stack Developer',
            description: 'Expand your skills to the backend by learning technologies like Node.js, databases, and API design. This allows you to build and manage entire applications end-to-end.',
            careerId: 'backend',
          },
          {
            title: 'UI/UX Specialist',
            description: 'Focus more on the design and user experience aspect of development. Collaborate closely with designers, conduct usability tests, and master the art of creating intuitive and beautiful interfaces.',
            careerId: 'uiux',
          },
        ]
      }
    ]
};