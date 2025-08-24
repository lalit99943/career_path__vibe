import type { CareerPath } from '../types';
import { StackIcon } from '../constants';

export const fullstackDeveloper: CareerPath = {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    description: 'Master both frontend and backend development to build and manage entire web applications end-to-end.',
    icon: StackIcon,
    roadmap: [
        {
            id: 'fs1',
            title: 'Frontend Fundamentals',
            description: 'Start with the client-side. Master HTML, CSS, JavaScript, and a modern frontend framework.',
            categories: [
                { name: 'Core', tools: [{ name: 'HTML/CSS/JS', description: 'The essential trio for any web developer.', tags: ['Open Source'] }] },
                { name: 'Frameworks', tools: [{ name: 'React', description: 'A popular choice for building dynamic UIs.', tags: ['Open Source'] }, { name: 'Vue.js', description: 'An approachable and versatile framework.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'fs2',
            title: 'Backend Fundamentals',
            description: 'Move to the server-side. Learn a language, a framework, and how to design APIs.',
            categories: [
                { name: 'Languages & Frameworks', tools: [{ name: 'Node.js (Express)', description: 'Allows you to use JavaScript on the backend.', tags: ['Open Source'] }, { name: 'Python (Django)', description: 'A high-level framework for rapid development.', tags: ['Open Source'] }] },
                { name: 'API Design', tools: [{ name: 'REST', description: 'A standard for building stateless web services.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'fs3',
            title: 'Databases',
            description: 'Learn how to store and manage your application\'s data effectively.',
            categories: [
                { name: 'Relational', tools: [{ name: 'PostgreSQL', description: 'A powerful, open source object-relational database.', tags: ['Open Source'] }] },
                { name: 'NoSQL', tools: [{ name: 'MongoDB', description: 'A flexible, document-based database.', tags: ['Open Source', 'Cloud'] }] },
            ]
        },
        {
            id: 'fs4',
            title: 'DevOps & Deployment',
            description: 'Understand the basics of deploying and maintaining your application.',
            categories: [
                { name: 'Containerization', tools: [{ name: 'Docker', description: 'Package your entire stack into a portable container.', tags: ['Open Source'] }] },
                { name: 'Cloud Hosting', tools: [{ name: 'Vercel', description: 'Excellent for hosting full-stack JavaScript applications.', tags: ['Cloud', 'Freemium'] }, { name: 'AWS', description: 'Provides a vast array of services for any stack.', tags: ['Cloud', 'Paid'] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-fs1', title: 'Plan & Design', description: 'Define application features, UI/UX, and data models.', toolNames: ['Figma', 'PostgreSQL'] },
        { id: 'wf-fs2', title: 'Backend Development', description: 'Build the server, API endpoints, and database connections.', toolNames: ['Node.js (Express)', 'REST'] },
        { id: 'wf-fs3', title: 'Frontend Development', description: 'Build the user interface and connect it to the backend API.', toolNames: ['React', 'Vite'] },
        { id: 'wf-fs4', title: 'Integration & Testing', description: 'Write tests for both frontend and backend to ensure they work together correctly.', toolNames: ['Jest', 'Cypress'] },
        { id: 'wf-fs5', title: 'Deploy', description: 'Containerize the application and deploy it to a cloud provider.', toolNames: ['Docker', 'Vercel'] }
    ],
    comparison: {
        similarCareers: ['frontend', 'backend'],
        points: [
            {
                aspect: 'Scope of Work',
                details: {
                    fullstack: 'Works on the entire application stack, from the user interface to the database.',
                    frontend: 'Specializes in the client-side of the application—what the user sees and interacts with.',
                    backend: 'Specializes in the server-side—the logic, databases, and APIs that power the application.'
                }
            },
            {
                aspect: 'Depth vs. Breadth',
                details: {
                    fullstack: 'Broad knowledge across multiple domains. A generalist who connects all the pieces.',
                    frontend: 'Deep knowledge of UI/UX, browser performance, and client-side state management.',
                    backend: 'Deep knowledge of data modeling, system architecture, security, and scalability.'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Lead and Architect',
            description: 'Leverage your broad knowledge to take on leadership and high-level design roles.',
            paths: [
                {
                    title: 'Software Architect',
                    description: 'Transition from building features to designing the high-level structure of entire systems, making key technology decisions.'
                },
                {
                    title: 'Tech Lead / Engineering Manager',
                    description: 'Lead a team of developers, providing technical guidance, mentorship, and project management.'
                },
                {
                    title: 'DevOps Engineer',
                    description: 'Focus on the infrastructure and automation that supports the application, leveraging your end-to-end understanding of the stack.',
                    careerId: 'devops'
                }
            ]
        }
    ]
};
