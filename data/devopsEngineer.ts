
import type { CareerPath } from '../types';
import { ServerCogIcon } from '../constants';

export const devopsEngineer: CareerPath = {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations by automating the software delivery lifecycle.',
    icon: ServerCogIcon,
    roadmap: [
      {
        id: 'do1',
        title: 'OS, Networking & Scripting',
        description: 'Gain a strong foundation in Linux, networking fundamentals, and scripting for automation.',
        categories: [
          { name: 'Operating System', tools: [{ name: 'Linux', description: 'The dominant OS for servers.', tags: ['Open Source'] }] },
          { name: 'Scripting', tools: [{ name: 'Bash', description: 'For shell scripting and automation.', tags: ['Open Source'] }, { name: 'Python', description: 'A versatile language for automation.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'do2',
        title: 'CI/CD Pipelines',
        description: 'Learn to build, test, and deploy code automatically.',
        categories: [
          { name: 'CI/CD Tools', tools: [{ name: 'Jenkins', description: 'A highly extensible open-source automation server.', tags: ['Open Source'] }, { name: 'GitLab CI', description: 'Integrated CI/CD within the GitLab platform.', tags: ['Freemium', 'Cloud'] }, { name: 'GitHub Actions', description: 'Automate workflows directly in your GitHub repository.', tags: ['Freemium', 'Cloud'] }] }
        ]
      },
      {
        id: 'do3',
        title: 'Infrastructure as Code (IaC)',
        description: 'Manage and provision infrastructure through code, ensuring consistency, repeatability, and version control for your environments.',
        categories: [
          { name: 'Provisioning', tools: [{ name: 'Terraform', description: 'Provision and manage infrastructure on any cloud.', tags: ['Open Source'] }] },
          { name: 'Configuration Management', tools: [{ name: 'Ansible', description: 'Automate configuration, and application deployment.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'do4',
        title: 'Containerization & Orchestration',
        description: 'Package applications in containers and manage them at scale.',
        categories: [
          { name: 'Containerization', tools: [{ name: 'Docker', description: 'The standard for creating and running containers.', tags: ['Open Source'] }] },
          { name: 'Orchestration', tools: [{ name: 'Kubernetes', description: 'The leading platform for automating container deployment and scaling.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'do5',
        title: 'Monitoring & Observability',
        description: 'Collect metrics, logs, and traces to understand system health.',
        categories: [
          { name: 'Monitoring', tools: [{ name: 'Prometheus', description: 'A powerful monitoring and alerting toolkit.', tags: ['Open Source'] }, { name: 'Grafana', description: 'Visualize and analyze metrics from various data sources.', tags: ['Open Source'] }] },
          { name: 'Logging', tools: [{ name: 'ELK Stack', description: '(Elasticsearch, Logstash, Kibana) for centralized logging.', tags: ['Open Source'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-do1', title: 'Plan & Code', description: 'Collaborate with developers and define infrastructure as code.', toolNames: ['Terraform', 'Git'] },
      { id: 'wf-do2', title: 'Build & Test', description: 'A CI server automatically builds code, runs tests, and creates artifacts.', toolNames: ['GitHub Actions', 'Docker'] },
      { id: 'wf-do3', title: 'Deploy', description: 'Automated deployment of containers to a staging environment.', toolNames: ['Kubernetes', 'Ansible'] },
      { id: 'wf-do4', title: 'Release to Production', description: 'Promote the verified build to production after successful tests.', toolNames: ['Kubernetes'] },
      { id: 'wf-do5', title: 'Operate & Monitor', description: 'Monitor application and infrastructure health, and feed insights back to the team.', toolNames: ['Prometheus', 'Grafana'] }
    ],
    comparison: {
      similarCareers: ['devsecops', 'gitops'],
      points: [
        {
          aspect: 'Core Philosophy',
          details: {
            devops: 'Automate the software delivery lifecycle to increase speed and reliability.',
            devsecops: 'Integrate security into every phase of the DevOps lifecycle ("shift left"). Security is a shared responsibility.',
            gitops: 'Use Git as the single source of truth for declarative infrastructure and applications. The desired state is in Git.',
          },
        },
        {
          aspect: 'Primary Focus',
          details: {
            devops: 'CI/CD pipelines, infrastructure automation, monitoring.',
            devsecops: 'Automated security testing (SAST, DAST, SCA), secrets management, compliance.',
            gitops: 'Declarative configuration, state reconciliation, using Git for all operational changes.',
          },
        },
        {
          aspect: 'Key Tools',
          details: {
            devops: 'Jenkins, Terraform, Ansible, Kubernetes, Prometheus.',
            devsecops: 'Snyk, SonarQube, OWASP ZAP, Trivy, HashiCorp Vault.',
            gitops: 'Argo CD, Flux, Kustomize, Helm, Bitnami Sealed Secrets.',
          },
        },
        {
          aspect: 'Trigger for Change',
          details: {
            devops: 'A code commit triggers a CI pipeline which may push changes.',
            devsecops: 'Same as DevOps, but the pipeline includes mandatory security gates.',
            gitops: 'A commit to a Git repository is the trigger. An operator in the cluster pulls the change and applies it.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Specialize in Reliability',
        description: 'Deepen your focus on ensuring systems are highly reliable, performant, and scalable.',
        paths: [
          {
            title: 'Senior DevOps / SRE',
            description: 'Specialize in Site Reliability Engineering (SRE), focusing on system reliability, uptime, and performance at massive scale. Implement advanced monitoring and incident response strategies.',
          },
        ]
      },
      {
        title: 'Branch into Specialized Domains',
        description: 'From a strong DevOps foundation, you can pivot into more specialized and strategic roles.',
        paths: [
          {
            title: 'DevSecOps Engineer',
            description: 'Integrate security practices deep into the CI/CD pipeline. Become an expert in automated security testing, vulnerability management, and securing cloud infrastructure.',
            careerId: 'devsecops',
          },
          {
            title: 'GitOps Engineer',
            description: 'Focus on managing infrastructure and applications declaratively using Git as the single source of truth. Master tools like Argo CD or Flux for automated, pull-based deployments.',
            careerId: 'gitops',
          },
          {
            title: 'Cloud Architect',
            description: 'Design and oversee an organization\'s cloud computing strategy. This role involves high-level planning of cloud adoption, application design, and infrastructure management.',
          }
        ]
      }
    ]
};
