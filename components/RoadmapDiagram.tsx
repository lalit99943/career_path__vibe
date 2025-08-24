
import React from 'react';
import type { RoadmapStep, Tool, ToolTag } from '../types';

interface RoadmapDiagramProps {
  roadmap: RoadmapStep[];
}

const getTagColor = (tag: ToolTag): string => {
  switch (tag) {
    case 'Open Source':
      return 'bg-green-200 text-green-800';
    case 'Paid':
      return 'bg-yellow-200 text-yellow-800';
    case 'Cloud':
      return 'bg-blue-200 text-blue-800';
    case 'Freemium':
      return 'bg-purple-200 text-purple-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
    <div className="bg-gray-700/50 p-4 rounded-md border border-gray-600/50">
        <div className="flex justify-between items-start mb-2">
            <h5 className="font-semibold text-gray-200">{tool.name}</h5>
            <div className="flex space-x-2 flex-shrink-0 ml-2">
                {tool.tags.map(tag => (
                    <span key={tag} className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTagColor(tag)}`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <p className="text-gray-400 text-xs">{tool.description}</p>
    </div>
);


const RoadmapNode: React.FC<{ step: RoadmapStep; isLast: boolean, index: number }> = ({ step, isLast, index }) => {
  const stepColor = `hsl(${220 + index * 20}, 70%, 60%)`;

  return (
    <div className="flex items-start">
      {/* Timeline Gutter */}
      <div className="flex flex-col items-center mr-6">
        <div 
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: stepColor }}
        >
          {index + 1}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-700 mt-2"></div>}
      </div>

      {/* Content */}
      <div className="bg-gray-800 rounded-lg p-5 flex-1 transform transition-transform duration-300 hover:scale-101 hover:shadow-xl border border-gray-700 mb-8">
        <h4 
          className="text-lg font-semibold mb-2"
          style={{ color: stepColor }}
        >
            {step.title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 pl-4 border-gray-600 italic">{step.description}</p>
        
        {step.categories.length > 0 && (
            <div className="space-y-6">
                {step.categories.map(category => (
                    <div key={category.name}>
                        <h5 className="text-md font-bold text-gray-300 mb-3 border-b border-gray-700 pb-2">{category.name}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.tools.map(tool => (
                                <ToolCard key={tool.name} tool={tool} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>
    </div>
  );
};


const RoadmapDiagram: React.FC<RoadmapDiagramProps> = ({ roadmap }) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full">
      {roadmap.map((step, index) => (
        <RoadmapNode
          key={step.id}
          step={step}
          index={index}
          isLast={index === roadmap.length - 1}
        />
      ))}
    </div>
  );
};

export default RoadmapDiagram;
