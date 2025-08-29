import type { CareerPath } from '../types';
import { CoffeeIcon } from '../constants';

export const javaDeveloper: CareerPath = {
    id: 'java-developer',
    title: 'Java Developer',
    description: 'Build robust, scalable, and high-performance applications using the Java programming language.',
    icon: CoffeeIcon,
    roadmap: [
      {
        id: 'jd1',
        title: 'Java Core & Build Tools',
        description: 'Master the fundamentals of the Java language, OOP, and standard build tools.',
        categories: [
          { name: 'Language', tools: [{ name: 'Java', description: 'Core syntax, collections, concurrency, and JVM internals.', tags: ['Open Source'] }] },
          { name: 'Build Tools', tools: [{ name: 'Maven', description: 'A powerful project management and comprehension tool.', tags: ['Open Source'] }, { name: 'Gradle', description: 'An advanced build toolkit for performance and versatility.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'jd2',
        title: 'Frameworks',
        description: 'Learn the Spring Framework, the dominant ecosystem for building modern Java applications.',
        categories: [
          { name: 'Core Framework', tools: [{ name: 'Spring Boot', description: 'Simplifies the creation of stand-alone, production-grade Spring applications.', tags: ['Open Source'] }] },
          { name: 'Modules', tools: [{ name: 'Spring MVC', description: 'A key module of the Spring Framework for building web applications and RESTful APIs, following the Model-View-Controller design pattern.', tags: ['Open Source'] }, { name: 'Spring Data', description: 'A high-level Spring project that radically simplifies data access from relational and NoSQL databases, reducing boilerplate code.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'jd3',
        title: 'Databases & APIs',
        description: 'Learn to interact with databases and build web services.',
        categories: [
          { name: 'Databases', tools: [{ name: 'PostgreSQL', description: 'A popular open-source relational database.', tags: ['Open Source'] }, { name: 'JPA/Hibernate', description: 'Standard API for object-relational mapping.', tags: ['Open Source'] }] },
          { name: 'APIs', tools: [{ name: 'REST', description: 'Architectural style for creating web services.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'jd4',
        title: 'Testing',
        description: 'Write unit and integration tests to ensure code quality and reliability.',
        categories: [
          { name: 'Testing Libraries', tools: [{ name: 'JUnit 5', description: 'The standard, modern framework for writing and running repeatable unit tests in Java applications.', tags: ['Open Source'] }, { name: 'Mockito', description: 'A popular mocking framework used to create test doubles (mocks, stubs) for isolating and testing components in unit tests.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'jd5',
        title: 'Containerization & Cloud',
        description: 'Package and deploy Java applications using modern cloud-native practices.',
        categories: [
          { name: 'Containerization', tools: [{ name: 'Docker', description: 'Package applications into portable containers.', tags: ['Open Source'] }] },
          { name: 'Cloud', tools: [{ name: 'AWS', description: 'A leading cloud platform for hosting applications.', tags: ['Cloud', 'Paid'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-jd1', title: 'Design & Setup', description: 'Design application architecture and set up the project structure.', toolNames: ['Maven', 'Spring Boot'] },
      { id: 'wf-jd2', title: 'Development & Unit Testing', description: 'Implement business logic and write unit tests.', toolNames: ['Java', 'JUnit 5', 'Mockito'] },
      { id: 'wf-jd3', title: 'Data & API Implementation', description: 'Develop REST endpoints and integrate with the database.', toolNames: ['Spring MVC', 'Spring Data', 'PostgreSQL'] },
      { id: 'wf-jd4', title: 'Build & Integration', description: 'Package the application into a JAR/WAR file and run integration tests.', toolNames: ['Maven', 'Git'] },
      { id: 'wf-jd5', title: 'Deploy & Operate', description: 'Containerize the application and deploy it to a cloud environment.', toolNames: ['Docker', 'AWS'] }
    ],
    comparison: {
      similarCareers: ['backend'],
      points: [
        {
          aspect: 'Ecosystem & Use Case',
          details: {
            'java-developer': 'Dominant in large-scale enterprise systems, finance, and Android development. Known for its stability, performance, and mature ecosystem (Spring).',
            backend: 'Often refers to developers using languages like Python or Node.js. Strong in startups, web applications, data science, and scripting. Known for rapid development.',
          },
        },
        {
          aspect: 'Language Paradigm',
          details: {
            'java-developer': 'Statically-typed and object-oriented. Code is generally more verbose, but errors are often caught at compile-time.',
            backend: 'Languages like Python and JavaScript are dynamically-typed, allowing for more concise code and faster iteration, but with more potential for runtime errors.',
          },
        },
        {
          aspect: 'Performance',
          details: {
            'java-developer': 'Excellent performance due to the JVM (Java Virtual Machine) and Just-In-Time (JIT) compilation. Well-suited for high-concurrency applications.',
            backend: 'Performance varies. Node.js is fast for I/O-bound tasks. Python can be slower but has extensive C libraries for performance-critical work.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Technical Leadership',
        description: 'Grow within the Java ecosystem by taking on more responsibility for technical design and team mentorship.',
        paths: [
          {
            title: 'Senior Java Developer / Tech Lead',
            description: 'Deepen your expertise in the Java ecosystem, lead development teams, and take ownership of the technical design and architecture of complex systems.',
          },
        ]
      },
      {
        title: 'Architectural & Platform Pivots',
        description: 'Leverage your Java expertise to move into high-level system design or a different platform like mobile development.',
        paths: [
          {
            title: 'Software Architect',
            description: 'Move beyond a single application to design the high-level structure of multiple systems. Make critical decisions about technology stacks, microservices, and integration patterns.',
          },
          {
            title: 'Android Developer',
            description: 'Leverage your Java skills to build native applications for the Android platform. This is a common and powerful career transition for Java developers.',
          },
        ]
      }
    ]
};