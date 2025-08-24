import type { CareerPath } from '../types';
import { MobileIcon } from '../constants';

export const mobileDeveloper: CareerPath = {
    id: 'mobile',
    title: 'Mobile Developer',
    description: 'Create applications for iOS and Android devices, reaching users on their favorite gadgets.',
    icon: MobileIcon,
    roadmap: [
        {
            id: 'md1',
            title: 'Programming Fundamentals',
            description: 'Start with a solid foundation in a modern programming language and understand mobile UI/UX principles.',
            categories: [
                { name: 'Core Skills', tools: [{ name: 'UI/UX Principles', description: 'Learn about designing for small screens and touch interfaces.', tags: [] }] },
                { name: 'Version Control', tools: [{ name: 'Git', description: 'Essential for any software development workflow.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'md2',
            title: 'Choose Your Path: Native or Cross-Platform',
            description: 'Decide whether you want to specialize in a single platform for maximum performance (Native) or write code once for multiple platforms (Cross-Platform).',
            categories: [
                { name: 'Native Development', tools: [{ name: 'Swift (iOS)', description: 'Apple\'s modern language for building iOS and macOS apps.', tags: ['Open Source'] }, { name: 'Kotlin (Android)', description: 'Google\'s preferred language for Android development.', tags: ['Open Source'] }] },
                { name: 'Cross-Platform', tools: [{ name: 'React Native', description: 'Use JavaScript and React to build native apps.', tags: ['Open Source'] }, { name: 'Flutter', description: 'Google\'s UI toolkit for building natively compiled applications from a single codebase.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'md3',
            title: 'Networking & Data',
            description: 'Learn how to fetch data from APIs and store it locally on the device.',
            categories: [
                { name: 'Networking', tools: [{ name: 'REST APIs', description: 'Consume data from backend services.', tags: ['Open Source'] }] },
                { name: 'Local Storage', tools: [{ name: 'SQLite', description: 'A standard for local relational data storage on mobile.', tags: ['Open Source'] }, { name: 'Realm', description: 'A modern, fast alternative to SQLite.', tags: ['Freemium'] }] },
            ]
        },
        {
            id: 'md4',
            title: 'Publishing to Stores',
            description: 'Understand the process of submitting your app to the Apple App Store and Google Play Store.',
            categories: [
                { name: 'App Stores', tools: [{ name: 'App Store Connect', description: 'The platform for managing and publishing iOS apps.', tags: ['Cloud'] }, { name: 'Google Play Console', description: 'The platform for managing and publishing Android apps.', tags: ['Cloud'] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-md1', title: 'Design & Prototype', description: 'Create mobile-first UI/UX designs and interactive prototypes.', toolNames: ['Figma'] },
        { id: 'wf-md2', title: 'Develop', description: 'Write the application code for the chosen platform (Native or Cross-Platform).', toolNames: ['Swift (iOS)', 'Kotlin (Android)', 'React Native'] },
        { id: 'wf-md3', title: 'Test on Devices', description: 'Test the application on a wide range of physical devices and simulators to ensure compatibility.', toolNames: [] },
        { id: 'wf-md4', title: 'Beta Testing', description: 'Distribute the app to a limited audience for feedback using platforms like TestFlight or Firebase App Distribution.', toolNames: [] },
        { id: 'wf-md5', title: 'Publish & Monitor', description: 'Submit the app to the app stores and monitor its performance and user reviews.', toolNames: ['App Store Connect', 'Google Play Console'] }
    ],
    comparison: {
        similarCareers: ['frontend'],
        points: [
            {
                aspect: 'Platform',
                details: {
                    mobile: 'Runs on mobile operating systems (iOS, Android) and is installed on the device.',
                    frontend: 'Runs in a web browser and is accessed via a URL. No installation required.'
                }
            },
            {
                aspect: 'Key Difference',
                details: {
                    mobile: 'Has deep access to device hardware (camera, GPS, accelerometer). User experience is often richer and more integrated with the OS.',
                    frontend: 'Has limited access to device hardware. The key is universal accessibility across any device with a browser.'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Advance Your Mobile Career',
            description: 'From a mobile developer role, you can deepen your technical expertise or move into leadership.',
            paths: [
                {
                    title: 'Senior Mobile Developer',
                    description: 'Take on complex features, focus on app performance and architecture, and mentor other developers.'
                },
                {
                    title: 'Mobile Architect',
                    description: 'Design the technical foundation for large-scale mobile applications, making key decisions about frameworks, libraries, and infrastructure.'
                },
                {
                    title: 'Mobile Team Lead',
                    description: 'Lead a team of mobile developers, manage project timelines, and ensure the quality of the final product.'
                }
            ]
        }
    ]
};
