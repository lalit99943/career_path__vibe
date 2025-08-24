import type { CareerPath } from '../types';
import { ProductManagerIcon } from '../constants';

export const productManager: CareerPath = {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Define the "why", "what", and "when" of a product, leading cross-functional teams from concept to launch.',
    icon: ProductManagerIcon,
    roadmap: [
        {
            id: 'pm1',
            title: 'Foundations & Frameworks',
            description: 'Learn the core methodologies for product development and how to understand your users and the market.',
            categories: [
                { name: 'Methodologies', tools: [{ name: 'Agile & Scrum', description: 'The iterative approach to managing product development.', tags: [] }] },
                { name: 'Research', tools: [{ name: 'Market Research', description: 'Analyzing the market to identify opportunities.', tags: [] }, { name: 'User Personas', description: 'Creating fictional characters to represent user types.', tags: [] }] },
            ]
        },
        {
            id: 'pm2',
            title: 'Product Strategy & Roadmapping',
            description: 'Define the high-level vision for your product and create a plan to get there.',
            categories: [
                { name: 'Strategy', tools: [{ name: 'Product Vision', description: 'The long-term goal and purpose of the product.', tags: [] }, { name: 'OKRs', description: 'Objectives and Key Results for setting and tracking goals.', tags: [] }] },
                { name: 'Planning Tools', tools: [{ name: 'Aha!', description: 'A popular tool for creating visual product roadmaps.', tags: ['Paid', 'Cloud'] }] },
            ]
        },
        {
            id: 'pm3',
            title: 'Execution & Requirements',
            description: 'Translate the strategy into actionable tasks for the development team.',
            categories: [
                { name: 'Specification', tools: [{ name: 'User Stories', description: 'Short descriptions of a feature told from the user\'s perspective.', tags: [] }] },
                { name: 'Project Management Tools', tools: [{ name: 'Jira', description: 'The industry standard for tracking tasks and managing backlogs.', tags: ['Freemium', 'Cloud'] }] },
            ]
        },
        {
            id: 'pm4',
            title: 'Data Analysis & Experimentation',
            description: 'Use data to make informed decisions and validate hypotheses.',
            categories: [
                { name: 'Product Analytics', tools: [{ name: 'Mixpanel', description: 'Analyze user behavior to understand engagement.', tags: ['Freemium', 'Cloud'] }, { name: 'Amplitude', description: 'A product intelligence platform for user behavior analysis.', tags: ['Freemium', 'Cloud'] }] },
                { name: 'Experimentation', tools: [{ name: 'A/B Testing', description: 'Comparing two versions of a feature to see which one performs better.', tags: [] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-pm1', title: 'Discover & Research', description: 'Talk to users, analyze market data, and identify problems to solve.', toolNames: ['Mixpanel'] },
        { id: 'wf-pm2', title: 'Plan & Prioritize', description: 'Define the product strategy, create a roadmap, and prioritize features for the next cycle.', toolNames: ['Aha!', 'Jira'] },
        { id: 'wf-pm3', title: 'Specify & Design', description: 'Write user stories and work with designers to create mockups and prototypes.', toolNames: ['Jira', 'Figma'] },
        { id: 'wf-pm4', title: 'Build & Test', description: 'Work with engineering and QA to build the features and ensure they meet requirements.', toolNames: [] },
        { id: 'wf-pm5', 'title': 'Launch & Analyze', description: 'Release the feature, communicate it to users, and analyze its impact using data.', toolNames: ['Amplitude'] }
    ],
    comparison: {
        similarCareers: ['uiux'],
        points: [
            {
                aspect: 'Core Question',
                details: {
                    'product-manager': '"What problem should we solve next, and why is it important for the business?"',
                    uiux: '"How can we solve this problem for the user in the most intuitive and effective way?"'
                }
            },
            {
                aspect: 'Scope',
                details: {
                    'product-manager': 'Broad scope. Owns the entire product lifecycle, including business strategy, pricing, and go-to-market.',
                    uiux: 'Focused scope. Owns the user experience, from research and ideation to the final look and feel.'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Lead Products and People',
            description: 'As a PM, you can advance by taking on more strategic scope or by moving into people management.',
            paths: [
                {
                    title: 'Senior Product Manager',
                    description: 'Take ownership of a larger, more complex product area. Drive strategy and mentor other PMs.'
                },
                {
                    title: 'Group Product Manager / Director',
                    description: 'Move into people management. Lead a team of product managers and oversee a portfolio of related products.'
                },
                {
                    title: 'VP of Product / CPO',
                    description: 'Lead the entire product organization, setting the overall product vision and strategy for the company.'
                }
            ]
        }
    ]
};