
import type { CareerPath } from '../types';
import { DesignIcon } from '../constants';

export const uiuxDesigner: CareerPath = {
    id: 'uiux',
    title: 'UI/UX Designer',
    description: 'Craft user-centric and visually appealing digital products through research, strategy, and design.',
    icon: DesignIcon,
    roadmap: [
      { 
        id: 'ux1', 
        title: 'Design Fundamentals', 
        description: 'Learn the core principles of design: color theory, typography, layout, hierarchy, and visual balance. These are the building blocks of any great design.',
        categories: []
      },
      { 
        id: 'ux2', 
        title: 'User Research', 
        description: 'Understand your users through techniques like interviews, surveys, and persona creation to design effective solutions that solve real problems.',
        categories: [
          {
            name: 'Research Tools & Methods',
            tools: [
               { name: 'User Interviews', description: 'Directly engage with users to gather qualitative insights.', tags: [] },
               { name: 'Surveys', description: 'Collect quantitative data from a large user base.', tags: [] },
               { name: 'Dovetail', description: 'A platform for analyzing user research data.', tags: ['Paid', 'Cloud'] },
            ]
          }
        ]
      },
      { 
        id: 'ux3', 
        title: 'Wireframing & Prototyping', 
        description: 'Master industry-standard tools to create everything from low-fidelity wireframes to interactive high-fidelity prototypes.',
        categories: [
          {
            name: 'Design & Prototyping Tools',
            tools: [
              { name: 'Figma', description: 'The leading collaborative interface design tool.', tags: ['Freemium', 'Cloud'] },
              { name: 'Sketch', description: 'A powerful design toolkit for macOS.', tags: ['Paid'] },
              { name: 'Adobe XD', description: 'Design, prototype, and share user experiences.', tags: ['Paid'] },
            ]
          }
        ]
      },
      { 
        id: 'ux4', 
        title: 'User Interface (UI) Design', 
        description: 'Focus on creating aesthetically pleasing and consistent visual interfaces, including creating design systems and component libraries.',
        categories: []
      },
      { 
        id: 'ux5', 
        title: 'Usability Testing', 
        description: 'Learn how to conduct tests with real users to gather feedback and iterate on your designs for a better user experience.',
        categories: [
          {
            name: 'User Testing Platforms',
            tools: [
              { name: 'Maze', description: 'Rapid, remote testing platform for prototypes, concepts, and copy.', tags: ['Freemium', 'Cloud'] },
              { name: 'UserTesting', description: 'Get real-time feedback from real users.', tags: ['Paid', 'Cloud'] },
            ]
          }
        ]
      },
    ],
    workflow: [
        { id: 'wf-ux1', title: 'Research & Discover', description: 'Conduct user interviews, analyze competitors, and create user personas.', toolNames: ['Dovetail'] },
        { id: 'wf-ux2', title: 'Ideate & Wireframe', description: 'Brainstorm solutions and create low-fidelity layouts and user flows.', toolNames: ['Figma'] },
        { id: 'wf-ux3', title: 'Design & Prototype', description: 'Develop high-fidelity mockups and create interactive prototypes.', toolNames: ['Figma', 'Sketch', 'Adobe XD'] },
        { id: 'wf-ux4', title: 'Test & Iterate', description: 'Gather user feedback on prototypes and refine the designs.', toolNames: ['Maze', 'UserTesting'] },
        { id: 'wf-ux5', title: 'Handoff', description: 'Prepare design specifications and assets for the development team.', toolNames: ['Figma'] },
    ],
    comparison: {
      similarCareers: ['frontend'],
      points: [
        {
          aspect: 'Core Focus',
          details: {
            uiux: 'Researching user needs and designing the product\'s structure, flow, and visual appearance before any code is written.',
            frontend: 'Implementing the visual design created by a UI/UX designer into functional, interactive code that runs in a web browser.',
          },
        },
        {
          aspect: 'Primary Output',
          details: {
            uiux: 'User research reports, personas, wireframes, interactive prototypes, and high-fidelity mockups.',
            frontend: 'A live, working web application or website that users can interact with.',
          },
        },
         {
          aspect: 'Key Skills',
          details: {
            uiux: 'User Research, Prototyping, Usability Testing, Visual Design, Empathy.',
            frontend: 'HTML, CSS, JavaScript, UI Frameworks (React, Vue), Problem Solving.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Choose Your Path',
        description: 'From a UI/UX role, you can advance into leadership, strategy, or deeper specialization. Each path leverages your core understanding of user needs in a different way.',
        paths: [
          {
            title: 'Senior/Lead Designer',
            description: 'Take ownership of complex design projects, mentor junior designers, and contribute to the overall design strategy of the organization.',
          },
          {
            title: 'Product Manager',
            description: 'Leverage your deep user understanding to transition into a product management role, where you define the product vision, strategy, and roadmap.',
          },
          {
            title: 'UX Researcher',
            description: 'Specialize in the research aspect of UX. Conduct in-depth qualitative and quantitative studies to inform product strategy and design decisions.',
          },
        ]
      }
    ],
};