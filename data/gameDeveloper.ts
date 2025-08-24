import type { CareerPath } from '../types';
import { GameIcon } from '../constants';

export const gameDeveloper: CareerPath = {
    id: 'game-dev',
    title: 'Game Developer',
    description: 'Bring virtual worlds to life by designing, programming, and creating interactive games.',
    icon: GameIcon,
    roadmap: [
        {
            id: 'gd1',
            title: 'Programming & CS Fundamentals',
            description: 'Master a performance-oriented language and essential computer science concepts that are critical for game development.',
            categories: [
                { name: 'Languages', tools: [{ name: 'C++', description: 'The industry standard for performance-critical game engines and AAA titles.', tags: ['Open Source'] }, { name: 'C#', description: 'The primary language for the popular Unity game engine.', tags: ['Open Source'] }] },
                { name: 'Concepts', tools: [{ name: 'Linear Algebra', description: 'Essential for understanding 3D graphics, physics, and transformations.', tags: [] }] },
            ]
        },
        {
            id: 'gd2',
            title: 'Choose a Game Engine',
            description: 'A game engine provides the core framework for rendering, physics, audio, and more. Mastering one is essential.',
            categories: [
                { name: 'Engines', tools: [{ name: 'Unreal Engine', description: 'A powerful engine known for high-fidelity graphics, primarily using C++.', tags: ['Freemium'] }, { name: 'Unity', description: 'A versatile and widely-used engine, especially in indie and mobile, using C#.', tags: ['Freemium'] }] },
            ]
        },
        {
            id: 'gd3',
            title: 'Game Mechanics & Physics',
            description: 'Learn to implement core gameplay loops, character controls, and realistic physical interactions.',
            categories: [
                { name: 'Concepts', tools: [{ name: 'Gameplay Loops', description: 'The core cycle of actions a player takes in a game.', tags: [] }] },
                { name: 'Physics', tools: [{ name: 'Collision Detection', description: 'Detecting intersections between objects.', tags: [] }, { name: 'Rigid Body Dynamics', description: 'Simulating the motion of solid objects.', tags: [] }] },
            ]
        },
        {
            id: 'gd4',
            title: 'Graphics & Rendering',
            description: 'Understand the pipeline for creating and displaying 2D and 3D visuals on screen.',
            categories: [
                { name: 'Graphics APIs', tools: [{ name: 'DirectX', description: 'Microsoft\'s API for graphics programming on Windows/Xbox.', tags: ['Open Source'] }, { name: 'Vulkan', description: 'A modern, cross-platform graphics and compute API.', tags: ['Open Source'] }] },
                { name: 'Shaders', tools: [{ name: 'HLSL/GLSL', description: 'Programming languages for the GPU to control rendering effects.', tags: ['Open Source'] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-gd1', title: 'Concept & Prototyping', description: 'Develop the core game idea and build a simple prototype to test mechanics.', toolNames: ['Unity', 'Unreal Engine'] },
        { id: 'wf-gd2', title: 'Production', description: 'Program core features, integrate art and audio assets, and build out levels.', toolNames: ['C++', 'C#'] },
        { id: 'wf-gd3', title: 'Alpha/Beta Testing', description: 'Conduct internal and external playtests to find bugs and gather feedback on gameplay.', toolNames: [] },
        { id: 'wf-gd4', title: 'Polish & Optimization', description: 'Fix bugs, optimize performance for target hardware, and add finishing touches.', toolNames: [] },
        { id: 'wf-gd5', 'title': 'Release & Post-Launch', description: 'Deploy the game to platforms like Steam, consoles, or mobile stores and provide updates.', toolNames: [] }
    ],
    comparison: {
        similarCareers: ['fullstack'],
        points: [
            {
                aspect: 'Primary Goal',
                details: {
                    'game-dev': 'To create an engaging and interactive entertainment experience, focusing on performance, visuals, and gameplay.',
                    fullstack: 'To build a functional and reliable web application to solve a user or business problem.'
                }
            },
            {
                aspect: 'Performance Constraints',
                details: {
                    'game-dev': 'Extremely high. Must maintain a consistent frame rate (e.g., 60 FPS) and manage memory strictly.',
                    fullstack: 'Important, but often less critical than in gaming. Focus is on server response time and page load speed.'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Specialize or Lead',
            description: 'You can advance by becoming a deep expert in a specific area of game development or by moving into leadership.',
            paths: [
                {
                    title: 'Senior/Lead Gameplay Programmer',
                    description: 'Take ownership of core game systems, mentor junior programmers, and lead the technical design of new features.'
                },
                {
                    title: 'Graphics Programmer',
                    description: 'Specialize in rendering, shaders, and performance optimization to create stunning visual effects.'
                },
                {
                    title: 'Game Producer',
                    description: 'Move into a management role, overseeing the project schedule, budget, and team coordination to ensure the game is delivered on time.'
                }
            ]
        }
    ]
};