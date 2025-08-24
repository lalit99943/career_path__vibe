
import type { CareerPath } from '../types';
import { GitBranchIcon } from '../constants';

export const gitopsEngineer: CareerPath = {
    id: 'gitops',
    title: 'GitOps Engineer',
    description: 'Use Git as the single source of truth to manage infrastructure and applications declaratively.',
    icon: GitBranchIcon,
    roadmap: [
      {
        id: 'go1',
        title: 'Strong Kubernetes & Git Foundation',
        description: 'GitOps is primarily practiced on Kubernetes, so deep knowledge is essential. Advanced Git skills are also required.',
        categories: [
          { name: 'Orchestration', tools: [{ name: 'Kubernetes', description: 'The target environment for GitOps.', tags: ['Open Source'] }] },
          { name: 'Version Control', tools: [{ name: 'Git', description: 'The single source of truth in GitOps.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'go2',
        title: 'GitOps Principles & Tools',
        description: 'Understand the core principles of GitOps and learn the tools that implement them.',
        categories: [
          { name: 'GitOps Operators', tools: [{ name: 'Argo CD', description: 'A declarative, GitOps continuous delivery tool for Kubernetes.', tags: ['Open Source'] }, { name: 'Flux', description: 'A set of continuous and progressive delivery solutions for Kubernetes.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'go3',
        title: 'Kubernetes Manifest Management',
        description: 'Learn tools to template, manage, and customize Kubernetes YAML manifests.',
        categories: [
          { name: 'Templating', tools: [{ name: 'Helm', description: 'The package manager for Kubernetes.', tags: ['Open Source'] }] },
          { name: 'Customization', tools: [{ name: 'Kustomize', description: 'Customize raw, template-free YAML files for multiple purposes.', tags: ['Open Source'] }] }
        ]
      },
      {
        id: 'go4',
        title: 'Structuring Git Repos',
        description: 'Learn best practices for structuring your Git repositories for applications and infrastructure.',
        categories: [
          { name: 'Strategies', tools: [{ name: 'Mono-repo vs. Poly-repo', description: 'Understand the tradeoffs between storing code for multiple services in one or many repositories.', tags: [] }] }
        ]
      },
      {
        id: 'go5',
        title: 'Secrets Management in GitOps',
        description: 'Handle secrets securely in a declarative, Git-based workflow.',
        categories: [
          { name: 'Sealed Secrets', tools: [{ name: 'Bitnami Sealed Secrets', description: 'Encrypt secrets into a new Kubernetes resource that is safe to store in Git.', tags: ['Open Source'] }] }
        ]
      }
    ],
    workflow: [
      { id: 'wf-go1', title: 'Developer Commits Change', description: 'A developer makes a change to application or infrastructure code and creates a pull request.', toolNames: ['Git'] },
      { id: 'wf-go2', title: 'CI Pipeline Runs', description: 'Upon merge, a CI pipeline runs tests and builds a new container image.', toolNames: ['GitHub Actions', 'Docker'] },
      { id: 'wf-go3', title: 'Manifest Update', description: 'The CI pipeline updates a Kubernetes manifest in a configuration repository with the new image tag.', toolNames: ['Kustomize', 'Git'] },
      { id: 'wf-go4', title: 'GitOps Operator Syncs', description: 'The GitOps operator in the cluster detects the change in the manifest repository.', toolNames: ['Argo CD'] },
      { id: 'wf-go5', title: 'Cluster State Reconciled', description: 'The operator pulls the new manifest and applies it to the cluster, reconciling its state with the desired state in Git.', toolNames: ['Kubernetes'] }
    ],
    comparison: {
      similarCareers: ['devops', 'devsecops'],
      points: [
        {
          aspect: 'Trigger for Change',
          details: {
            gitops: 'A commit to a Git repository is the trigger. An operator in the cluster pulls the change and applies it (pull-based).',
            devops: 'A code commit triggers a CI pipeline which may actively push changes to the environment (push-based).',
            devsecops: 'Same as DevOps, but the pipeline includes mandatory security gates before any push can occur.',
          },
        },
        {
          aspect: 'Source of Truth',
          details: {
            gitops: 'The Git repository is the *only* source of truth. The cluster state must match Git.',
            devops: 'The truth can be distributed between pipeline scripts, configuration files, and the running environment itself.',
            devsecops: 'Similar to DevOps, but with an added emphasis on security policies and vulnerability databases as sources of truth.',
          },
        },
      ],
    },
    advancement: [
      {
        title: 'Expand Your Impact',
        description: 'Leverage your GitOps expertise to take on broader roles in platform engineering, cloud architecture, or general DevOps leadership.',
        paths: [
          {
            title: 'Platform Engineer',
            description: 'Expand your focus from applications to building and maintaining the entire internal developer platform (IDP) that your organization uses. This includes managing Kubernetes, CI/CD, and observability tools.',
          },
          {
            title: 'Cloud Native Architect',
            description: 'Design and implement solutions using cloud-native technologies (Kubernetes, Prometheus, etc.). Lead the adoption of GitOps and other CNCF projects at a strategic level.',
          },
          {
            title: 'Senior DevOps Engineer',
            description: 'Broaden your GitOps specialty to include all aspects of DevOps, including advanced CI/CD, monitoring, and infrastructure automation beyond the Kubernetes ecosystem.',
            careerId: 'devops',
          },
        ]
      }
    ]
};