
import React from 'react';
import type { CareerPath, AdvancementPath } from '../types';

interface AdvancementDiagramProps {
  career: CareerPath;
  allCareers: CareerPath[];
  onSelectCareer: (id: string) => void;
}

const ArrowDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
    </svg>
);

const AdvancementNode: React.FC<{ 
    path: AdvancementPath; 
    isLink: boolean;
    onClick?: () => void;
}> = ({ path, isLink, onClick }) => {
    const commonClasses = "bg-gray-800 rounded-lg p-5 w-full sm:max-w-xs border border-gray-700 transform transition-all duration-300 h-full flex flex-col";
    const linkClasses = "hover:scale-105 hover:shadow-xl hover:border-indigo-500 cursor-pointer";

    const NodeContent = () => (
        <>
            <h4 className={`text-lg font-semibold mb-2 ${isLink ? 'text-indigo-400' : 'text-gray-200'}`}>
                {path.title}
                {isLink && (
                    <span className="ml-2 text-xs font-normal text-indigo-400/70">(View Path)</span>
                )}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">{path.description}</p>
        </>
    );

    if (isLink) {
        return (
            <button onClick={onClick} className={`${commonClasses} ${linkClasses} text-left`}>
                <NodeContent />
            </button>
        );
    }
    
    return (
        <div className={commonClasses}>
            <NodeContent />
        </div>
    );
};


const AdvancementDiagram: React.FC<AdvancementDiagramProps> = ({ career, allCareers, onSelectCareer }) => {
    const advancementLevels = career.advancement;

    if (!advancementLevels || advancementLevels.length === 0) {
        return (
            <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
                <h3 className="text-xl font-semibold text-gray-300">No Advancement Paths Available</h3>
                <p className="text-gray-500 mt-2">Career advancement data has not been defined for this path yet.</p>
            </div>
        );
    }

    const careerMap = new Map(allCareers.map(c => [c.id, c]));

    return (
        <div className="flex flex-col items-center w-full space-y-10">
            {advancementLevels.map((level, index) => (
                <div key={index} className="flex flex-col items-center w-full max-w-7xl">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                            {level.title}
                        </h3>
                        <p className="text-gray-400 mt-1 max-w-2xl mx-auto">{level.description}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {level.paths.map((path, pathIndex) => (
                             <AdvancementNode 
                                key={pathIndex}
                                path={path}
                                isLink={!!(path.careerId && careerMap.has(path.careerId))}
                                onClick={path.careerId ? () => onSelectCareer(path.careerId!) : undefined}
                            />
                        ))}
                    </div>

                    {index < advancementLevels.length - 1 && (
                        <div className="mt-10">
                            <ArrowDownIcon />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AdvancementDiagram;
