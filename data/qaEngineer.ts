import type { CareerPath } from '../types';
import { QAIcon } from '../constants';

export const qaEngineer: CareerPath = {
    id: 'qa',
    title: 'QA Engineer',
    description: 'Champion software quality by finding, reporting, and preventing bugs through a mix of manual and automated testing.',
    icon: QAIcon,
    roadmap: [
        {
            id: 'qa1',
            title: 'Testing Fundamentals',
            description: 'Learn the core concepts of software quality assurance, including different testing types and the bug lifecycle.',
            categories: [
                { name: 'Core Concepts', tools: [{ name: 'Test Plans & Cases', description: 'Learn how to design structured and effective tests.', tags: [] }, { name: 'Bug Tracking', description: 'Understand how to write clear, actionable bug reports.', tags: [] }] },
            ]
        },
        {
            id: 'qa2',
            title: 'Manual & API Testing',
            description: 'Master manual testing techniques to understand the application from a user\'s perspective and learn to test APIs.',
            categories: [
                { name: 'Manual Testing', tools: [{ name: 'Exploratory Testing', description: 'Use creativity and intuition to find bugs.', tags: [] }] },
                { name: 'API Testing Tools', tools: [{ name: 'Postman', description: 'The industry standard for testing APIs without a user interface.', tags: ['Freemium'] }] },
            ]
        },
        {
            id: 'qa3',
            title: 'Test Automation',
            description: 'Learn to write code that tests the application automatically, which is a key skill for a modern QA Engineer.',
            categories: [
                { name: 'Programming', tools: [{ name: 'JavaScript', description: 'A popular language for web test automation.', tags: ['Open Source'] }, { name: 'Python', description: 'Often used for backend and API test automation.', tags: ['Open Source'] }] },
                { name: 'Web Automation', tools: [{ name: 'Cypress', description: 'A modern, developer-friendly framework for E2E testing.', tags: ['Freemium'] }, { name: 'Selenium', description: 'The long-standing standard for browser automation.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'qa4',
            title: 'Performance & Security Testing',
            description: 'Go beyond functionality to test for performance bottlenecks and security vulnerabilities.',
            categories: [
                { name: 'Performance Testing', tools: [{ name: 'JMeter', description: 'An open-source tool for load and performance testing.', tags: ['Open Source'] }] },
                { name: 'Security Testing', tools: [{ name: 'OWASP ZAP', description: 'An open-source tool for finding security vulnerabilities.', tags: ['Open Source'] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-qa1', title: 'Test Planning', description: 'Analyze requirements and create a comprehensive test plan and test cases.', toolNames: [] },
        { id: 'wf-qa2', title: 'Manual Testing', description: 'Execute manual tests on new features to provide quick feedback.', toolNames: ['Exploratory Testing'] },
        { id: 'wf-qa3', title: 'Automation Development', description: 'Write automated test scripts for regression and new features.', toolNames: ['Cypress', 'Python'] },
        { id: 'wf-qa4', title: 'CI/CD Integration', description: 'Integrate automated tests into the CI/CD pipeline to run on every code change.', toolNames: ['GitHub Actions'] },
        { id: 'wf-qa5', 'title': 'Reporting & Analysis', description: 'Analyze test results, report bugs, and provide quality metrics to the team.', toolNames: ['Postman'] }
    ],
    comparison: {
        similarCareers: ['frontend'],
        points: [
            {
                aspect: 'Primary Goal',
                details: {
                    qa: 'To ensure the software meets quality standards and business requirements by identifying and preventing defects.',
                    frontend: 'To build the user-facing part of the application according to design specifications.'
                }
            },
            {
                aspect: 'Mindset',
                details: {
                    qa: 'A critical and investigative mindset, always thinking about "How can I break this?".',
                    frontend: 'A creative and constructive mindset, focused on "How can I build this?".'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Advance in Quality Assurance',
            description: 'From a QA role, you can move into leadership, specialize in automation, or transition into development.',
            paths: [
                {
                    title: 'QA Lead / Manager',
                    description: 'Lead a team of QA engineers, define the overall testing strategy for the organization, and manage resources.'
                },
                {
                    title: 'SDET (Software Dev Engineer in Test)',
                    description: 'Focus heavily on coding and development to build complex test automation frameworks and tools for the team.'
                },
                {
                    title: 'DevOps Engineer',
                    description: 'Shift your focus to the CI/CD pipeline, ensuring that quality gates and automated testing are an integral part of the software delivery process.',
                    careerId: 'devops'
                }
            ]
        }
    ]
};
