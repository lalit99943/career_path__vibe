
import type React from 'react';

export type ToolTag = 'Open Source' | 'Paid' | 'Cloud' | 'Freemium' | 'IDE';

export interface Tool {
  name: string;
  description: string;
  tags: ToolTag[];
}

export interface Category {
  name: string;
  tools: Tool[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  categories: Category[];
}

export interface WorkflowStage {
  id: string;
  title: string;
  description: string;
  toolNames: string[];
}

export interface ComparisonPoint {
  aspect: string;
  // The key is the career ID (e.g., 'frontend', 'backend')
  details: Record<string, string>;
}

export interface CareerComparison {
  // Array of career IDs to compare against
  similarCareers: string[];
  points: ComparisonPoint[];
}

export interface AdvancementPath {
  title: string;
  description: string;
  careerId?: string; // ID of an existing career path to link to
}

export interface AdvancementLevel {
  title: string;
  description: string;
  paths: AdvancementPath[];
}

export type CareerAdvancement = AdvancementLevel[];

export interface CareerPath {
  id:string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  roadmap: RoadmapStep[];
  workflow: WorkflowStage[];
  comparison?: CareerComparison;
  advancement?: CareerAdvancement;
}