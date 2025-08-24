import type { CareerPath } from '../types';
import { CybersecurityIcon } from '../constants';

export const cybersecurityAnalyst: CareerPath = {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    description: 'Protect systems and networks by identifying threats, analyzing vulnerabilities, and responding to incidents.',
    icon: CybersecurityIcon,
    roadmap: [
        {
            id: 'cs1',
            title: 'IT & Networking Foundations',
            description: 'Understand the systems you need to protect. Master networking, operating systems, and scripting.',
            categories: [
                { name: 'Networking', tools: [{ name: 'TCP/IP Model', description: 'The conceptual framework for network communications.', tags: [] }, { name: 'DNS', description: 'The phonebook of the internet.', tags: [] }] },
                { name: 'Operating Systems', tools: [{ name: 'Linux', description: 'The foundation of most servers and security tools.', tags: ['Open Source'] }] },
                { name: 'Scripting', tools: [{ name: 'Python', description: 'For automating security tasks and data analysis.', tags: ['Open Source'] }, { name: 'Bash', description: 'For command-line automation.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'cs2',
            title: 'Security Principles & Cryptography',
            description: 'Learn the fundamental concepts that underpin all of cybersecurity.',
            categories: [
                { name: 'Core Concepts', tools: [{ name: 'CIA Triad', description: 'Confidentiality, Integrity, and Availability.', tags: [] }] },
                { name: 'Cryptography', tools: [{ name: 'Encryption', description: 'Symmetric vs. Asymmetric encryption and hashing.', tags: [] }] },
            ]
        },
        {
            id: 'cs3',
            title: 'Ethical Hacking & Vulnerability Assessment',
            description: 'Learn to think like an attacker to find and fix weaknesses before they can be exploited.',
            categories: [
                { name: 'Toolkits', tools: [{ name: 'Kali Linux', description: 'A Linux distribution pre-packaged with security and forensics tools.', tags: ['Open Source'] }] },
                { name: 'Tools', tools: [{ name: 'Nmap', description: 'A network scanner for discovering hosts and services.', tags: ['Open Source'] }, { name: 'Wireshark', description: 'A network protocol analyzer.', tags: ['Open Source'] }, { name: 'Metasploit', description: 'A penetration testing framework.', tags: ['Open Source'] }] },
            ]
        },
        {
            id: 'cs4',
            title: 'Threat Detection & Incident Response',
            description: 'Learn to detect malicious activity and respond effectively when a security incident occurs.',
            categories: [
                { name: 'Threat Detection', tools: [{ name: 'SIEM (Splunk)', description: 'Security Information and Event Management systems for log analysis.', tags: ['Freemium'] }] },
                { name: 'Incident Response', tools: [{ name: 'IR Playbooks', description: 'Step-by-step guides for responding to specific types of incidents.', tags: [] }] },
            ]
        }
    ],
    workflow: [
        { id: 'wf-cs1', title: 'Monitor & Detect', description: 'Continuously monitor network traffic, server logs, and security alerts for suspicious activity.', toolNames: ['SIEM (Splunk)', 'Wireshark'] },
        { id: 'wf-cs2', title: 'Analyze & Triage', description: 'Investigate alerts to determine if they are false positives or legitimate threats, and prioritize them.', toolNames: [] },
        { id: 'wf-cs3', title: 'Vulnerability Scanning', description: 'Regularly scan systems and applications for known vulnerabilities.', toolNames: ['Nmap'] },
        { id: 'wf-cs4', title: 'Incident Response', description: 'If a threat is confirmed, execute an incident response plan to contain, eradicate, and recover.', toolNames: ['IR Playbooks'] },
        { id: 'wf-cs5', 'title': 'Report & Remediate', description: 'Document the incident and work with other teams to patch vulnerabilities and improve security controls.', toolNames: [] }
    ],
    comparison: {
        similarCareers: ['devsecops'],
        points: [
            {
                aspect: 'Area of Focus',
                details: {
                    cybersecurity: 'Broader scope. Focuses on the overall security posture of the organization, including network defense, threat hunting, and incident response. The "Defense Team".',
                    devsecops: 'Narrower scope. Focuses on integrating security into the software development lifecycle (SDLC). The "Pre-emptive Security Team".'
                }
            },
            {
                aspect: 'When They Act',
                details: {
                    cybersecurity: 'Often acts on live, production systems (monitoring, incident response) and performs periodic assessments (pen testing).',
                    devsecops: 'Acts "left" in the lifecycle, before code is deployed, by embedding security checks in the CI/CD pipeline.'
                }
            }
        ]
    },
    advancement: [
        {
            title: 'Specialize Your Security Expertise',
            description: 'Cybersecurity is a vast field. You can advance by becoming a deep expert in offensive or defensive specialties.',
            paths: [
                {
                    title: 'Penetration Tester',
                    description: 'Specialize in offensive security. Get paid to legally hack into systems to find and report vulnerabilities.'
                },
                {
                    title: 'Security Architect',
                    description: 'Move from hands-on analysis to high-level design, creating the overall security strategy and infrastructure for an organization.'
                },
                {
                    title: 'Incident Responder / Forensics',
                    description: 'Specialize in what happens after a breach, containing threats and investigating the cause and extent of the damage.'
                }
            ]
        }
    ]
};