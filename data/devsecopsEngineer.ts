
import type { CareerPath } from '../types';
import { ShieldCheckIcon } from '../constants';

export const devsecopsEngineer: CareerPath = {
    id: 'devsecops',
    title: 'DevSecOps Engineer',
    description: 'Integrate security practices into the DevOps process ("shift left") to build secure software.',
    icon: ShieldCheckIcon,
    roadmap: [
      {
        id: 'dso1',
        title: 'DevOps & Security Foundations',
        description: 'Start with a strong DevOps foundation and learn core security principles.',
        categories: [
          { name: 'DevOps Tools', tools: [{ name: 'Kubernetes', description: 'Understand the environment you need to secure.', tags: ['Open Source'] }, { name: 'Jenkins', description: 'The pipeline where you will integrate security tools.', tags: ['Open Source'] }] },
          { name: 'Security Concepts', tools: [{ name: 'OWASP Top 10', description: 'A standard awareness document for web application security.', tags: [] }] }
        ]
      },
      {
        id: 'dso2',
        title: 'Static & Dynamic Testing (SAST/DAST)',
        description: 'Find vulnerabilities in source code and running applications.',
        categories: [
          { name: 'SAST', tools: [{ name: 'SonarQube', description: 'Continuous inspection of code quality and security.', tags: ['Freemium'] }, { name: 'Snyk Code', description: 'AI-powered static analysis that is fast and accurate.', tags: ['Freemium'] }] },
          { name: 'DAST', tools: [{ name: 'OWASP ZAP', description: 'An open-source web application security scanner.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'dso3',
        title: 'Software Composition Analysis (SCA)',
        description: 'Identify and manage vulnerabilities in open-source dependencies.',
        categories: [
          { name: 'SCA Tools', tools: [{ name: 'Snyk Open Source', description: 'Find and fix vulnerabilities in your dependencies.', tags: ['Freemium'] }, { name: 'Dependabot', description: 'Automated dependency updates from GitHub.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'dso4',
        title: 'Container & Cloud Security',
        description: 'Secure container images and cloud infrastructure configurations.',
        categories: [
          { name: 'Container Scanning', tools: [{ name: 'Trivy', description: 'A simple and comprehensive vulnerability scanner for containers.', tags: ['Open Source'] }] },
          { name: 'Cloud Security', tools: [{ name: 'CSPM', description: 'Cloud Security Posture Management tools for identifying misconfigurations.', tags: ['Cloud'] }] }
        ]
      },
      {
        id: 'dso5',
        title: 'Secrets Management',
        description: 'Securely store and manage secrets like API keys and passwords.',
        categories: [
          { name: 'Secrets Management Tools', tools: [{ name: 'HashiCorp Vault', description: 'Secure, store and tightly control access to secrets.', tags: ['Open Source'] }, { name: 'AWS Secrets Manager', description: 'A managed secrets management service on AWS.', tags: ['Cloud', 'Paid'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-dso1', title: 'Secure Code', description: 'Developers get real-time feedback in their IDE and from SAST/SCA scans in pull requests.', toolNames: ['Snyk Code', 'Dependabot'] },
      { id: 'wf-dso2', title: 'Secure Build', description: 'The CI pipeline scans container images for known vulnerabilities.', toolNames: ['Jenkins', 'Trivy'] },
      { id: 'wf-dso3', title: 'Secure Test', description: 'Automated DAST scans run against the application in a staging environment.', toolNames: ['OWASP ZAP'] },
      { id: 'wf-dso4', title: 'Secure Deploy', description: 'Fetch secrets at deploy time and enforce security policies on the cluster.', toolNames: ['HashiCorp Vault', 'Kubernetes'] },
      { id: 'wf-dso5', title: 'Secure Operate', description: 'Continuously monitor for runtime threats and cloud misconfigurations.', toolNames: ['CSPM'] }
    ],
    comparison: {
      similarCareers: ['devops', 'gitops'],
      points: [
        {
          aspect: 'Core Philosophy',
          details: {
            devsecops: 'Integrate security into every phase of the DevOps lifecycle ("shift left"). Security is a shared responsibility.',
            devops: 'Automate the software delivery lifecycle to increase speed and reliability.',
            gitops: 'Use Git as the single source of truth for declarative infrastructure and applications. The desired state is in Git.',
          },
        },
        {
          aspect: 'Primary Focus',
          details: {
            devsecops: 'Automated security testing (SAST, DAST, SCA), secrets management, compliance.',
            devops: 'CI/CD pipelines, infrastructure automation, monitoring.',
            gitops: 'Declarative configuration, state reconciliation, using Git for all operational changes.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Specialize and Lead in Security',
        description: 'From a DevSecOps role, you can advance into positions that require deeper expertise in specific security domains or high-level strategic planning.',
        paths: [
          {
            title: 'Security Architect',
            description: 'Design and oversee the implementation of the overall security strategy for an organization. Make high-level decisions about security standards, tools, and policies.',
          },
          {
            title: 'Cloud Security Engineer',
            description: 'Specialize in securing cloud environments (AWS, GCP, Azure). Become an expert in Identity and Access Management (IAM), network security, and cloud-native security services.',
          },
          {
            title: 'Application Security (AppSec) Specialist',
            description: 'Focus deeply on the security of the software itself. Conduct penetration testing, manual code reviews, and threat modeling to find and fix complex vulnerabilities.',
          },
        ]
      }
    ]
};