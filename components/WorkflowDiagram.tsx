import React from 'react';
import type { WorkflowStage, RoadmapStep, Tool, ToolTag } from '../types';

interface WorkflowDiagramProps {
  workflow: WorkflowStage[];
  roadmap: RoadmapStep[];
}

const getTagColor = (tag: ToolTag): string => {
  switch (tag) {
    case 'Open Source': return 'bg-green-200 text-green-800';
    case 'Paid': return 'bg-yellow-200 text-yellow-800';
    case 'Cloud': return 'bg-blue-200 text-blue-800';
    case 'Freemium': return 'bg-purple-200 text-purple-800';
    case 'IDE': return 'bg-pink-200 text-pink-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};

const MiniToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="flex items-center space-x-2 bg-gray-700/60 p-2 rounded-md border border-gray-600/50">
        <span className="font-semibold text-gray-300 text-xs">{tool.name}</span>
        <div className="flex space-x-1">
            {tool.tags.map(tag => (
                <span key={tag} className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${getTagColor(tag)}`}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
);


const WorkflowNode: React.FC<{
  stage: WorkflowStage;
  allTools: Map<string, Tool>;
}> = ({ stage, allTools }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 w-full flex-1 border border-gray-700 min-h-[180px] flex flex-col">
      <h4 className="text-md font-semibold text-indigo-400 mb-2">{stage.title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{stage.description}</p>
      {stage.toolNames.length > 0 && (
        <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tools</h5>
            <div className="flex flex-wrap gap-2">
                {stage.toolNames.map(toolName => {
                    const tool = allTools.get(toolName);
                    return tool ? <MiniToolCard key={tool.name} tool={tool} /> : null;
                })}
            </div>
        </div>
      )}
    </div>
  );
};

const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ workflow, roadmap }) => {
  const allTools = React.useMemo(() => {
    const toolMap = new Map<string, Tool>();
    roadmap.forEach(step => {
      step.categories.forEach(category => {
        category.tools.forEach(tool => {
          toolMap.set(tool.name, tool);
        });
      });
    });
    // Add Figma if it's in a workflow but not in the roadmap for a given career
    if (!toolMap.has('Figma')) {
        toolMap.set('Figma', { name: 'Figma', description: 'Collaborative interface design tool.', tags: ['Freemium', 'Cloud'] });
    }
    return toolMap;
  }, [roadmap]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4 space-y-8 lg:space-y-0">
      {workflow.map((stage, index) => (
        <React.Fragment key={stage.id}>
          <div className="flex flex-col items-center w-full lg:w-auto">
            <WorkflowNode stage={stage} allTools={allTools} />
          </div>
          {index < workflow.length - 1 && (
            <div className="w-full lg:w-auto flex justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 transform lg:-rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkflowDiagram;