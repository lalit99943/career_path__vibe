import type { CareerPath } from '../types';
import { CloudIcon } from '../constants';

export const cloudEngineer: CareerPath = {
    id: 'cloud',
    title: 'Cloud Engineer',
    description: 'Design, build, and maintain an organization\'s cloud infrastructure and services on platforms like AWS, GCP, or Azure.',
    icon: CloudIcon,
    roadmap: [
        {
            id: 'ce1',
            title: 'Cloud & Networking Fundamentals',
            description: 'Understand the basics of cloud computing models (IaaS, PaaS, SaaS) and core networking concepts.',
            categories: [
                { name: 'Core Concepts', tools: [{ name: 'Networking', description: 'Learn about VPCs, subnets, DNS, and load balancing.', tags: [] }, { name: 'Linux', description: 'The most common OS for cloud servers.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'ce2',
            title: 'Choose a Cloud Provider',
            description: 'Pick one of the major cloud providers and get certified. The skills are often transferable.',
            categories: [
                { name: 'Major Platforms', tools: [{ name: 'AWS', description: 'The market leader with the most extensive service portfolio.', tags: ['Cloud', 'Paid'] }, { name: 'Google Cloud (GCP)', description: 'Strong in containers, data analytics, and machine learning.', tags: ['Cloud', 'Paid'] }, { name: 'Microsoft Azure', description: 'Popular in enterprises, especially those with a Windows footprint.', tags: ['Cloud', 'Paid'] }] },
            ]
        },
        {
            id: 'ce3',
            title: 'Infrastructure as Code (IaC)',
            description: 'Automate the provisioning and management of your cloud infrastructure using code.',
            categories: [
                { name: 'IaC Tools', tools: [{ name: 'Terraform', description: 'The cloud-agnostic standard for infrastructure provisioning.', tags: ['Open Source'] }, { name: 'CloudFormation', description: 'The native IaC service for AWS.', tags: ['Cloud', 'Open Source'] }] },
            ]
        },
        {
            id: 'ce4',
            title: 'Containers & Orchestration',
            description: 'Learn how to package applications and manage them at scale in the cloud.',
            categories: [
                { name: 'Containerization', tools: [{ name: 'Docker', description: 'The standard for building and running containers.', tags: ['Open Source'] }] },
                { name: 'Orchestration', tools: [{ name: 'Kubernetes', description: 'The leading platform for container orchestration.', tags: ['Open Source'] }, { name: 'AWS EKS', description: 'Managed Kubernetes service on AWS.', tags: ['Cloud', 'Paid'] }] },
            ]
        },
        {
            id: 'ce5',
            title: 'Security & Monitoring',
            description: 'Ensure your cloud environment is secure, compliant, and observable.',
            categories: [
                { name: 'Security', tools: [{ name: 'IAM', description: 'Identity and Access Management to control who can do what.', tags: ['Cloud'] }] },
                { name: 'Monitoring', tools: [{ name: 'Prometheus', description: 'A powerful open-source monitoring system.', tags: ['Open Source'] }, { name: 'AWS CloudWatch', description: 'Native monitoring and observability service for AWS.', tags: ['Cloud', 'Paid'] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-ce1', title: 'Architect & Design', description: 'Design a scalable, secure, and cost-effective cloud architecture based on requirements.', toolNames: ['AWS'] },
        { id: 'wf-ce2', title: 'Provision Infrastructure', description: 'Write and apply IaC scripts to create the necessary cloud resources.', toolNames: ['Terraform'] },
        { id: 'wf-ce3', title: 'Deploy Applications', description: 'Work with developers to deploy applications onto the provisioned infrastructure.', toolNames: ['Docker', 'Kubernetes'] },
        { id: 'wf-ce4', title: 'Monitor & Optimize', description: 'Monitor system health, performance, and costs, making adjustments as needed.', toolNames: ['Prometheus', 'AWS CloudWatch'] },
        { id: 'wf-ce5', 'title': 'Secure & Maintain', description: 'Implement security best practices, manage access, and perform routine maintenance.', toolNames: ['IAM'] }
    ],
    comparison: {
        similarCareers: ['devops'],
        points: [
            {
                aspect: 'Core Focus',
                details: {
                    cloud: 'Focuses on the underlying infrastructure of a specific cloud platform (AWS, GCP, Azure). They are experts in that platform\'s services.',
                    devops: 'Focuses on the processes and tools that enable rapid software delivery (CI/CD pipelines, automation). The cloud is a tool, not the primary focus.'
                }
            },
            {
                aspect: 'Analogy',
                details: {
                    cloud: 'The "Civil Engineer" who designs and builds the roads and bridges (the cloud infrastructure).',
                    devops: 'The "Logistics Manager" who creates an automated system for moving goods quickly and reliably along those roads (the CI/CD pipeline).'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Specialize and Architect',
            description: 'From a Cloud Engineer role, you can advance by deepening your expertise or taking on a high-level design role.',
            paths: [
                {
                    title: 'Cloud Architect',
                    description: 'Move from implementation to high-level design. You will be responsible for the overall cloud strategy and architecture for the entire organization.'
                },
                {
                    title: 'Senior Cloud Engineer',
                    description: 'Specialize in a specific area like cloud security, networking, or data platforms, becoming the go-to expert in that domain.'
                },
                {
                    title: 'DevSecOps Engineer',
                    description: 'Combine your infrastructure knowledge with a deep focus on security, automating security controls and defending the cloud environment.',
                    careerId: 'devsecops'
                }
            ]
        }
    ]
};
