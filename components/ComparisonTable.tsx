
import React from 'react';
import type { CareerPath } from '../types';

interface ComparisonTableProps {
  career: CareerPath;
  allCareers: CareerPath[];
  onSelectCareer: (id: string) => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ career, allCareers, onSelectCareer }) => {
  if (!career.comparison) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
        <h3 className="text-xl font-semibold text-gray-300">No Comparison Available</h3>
        <p className="text-gray-500 mt-2">Comparison data has not been defined for this career path yet.</p>
      </div>
    );
  }

  const careerIdsToCompare = [career.id, ...career.comparison.similarCareers];
  const careersToDisplay = careerIdsToCompare
    .map(id => allCareers.find(c => c.id === id))
    .filter((c): c is CareerPath => !!c);

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold sticky left-0 bg-gray-700/50 z-10 min-w-[150px]">
                Aspect
              </th>
              {careersToDisplay.map(c => (
                <th key={c.id} scope="col" className="px-6 py-4 min-w-[250px]">
                  <button
                    onClick={() => onSelectCareer(c.id)}
                    className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 disabled:text-gray-400 disabled:pointer-events-none"
                    disabled={c.id === career.id}
                    title={`Switch to ${c.title} page`}
                  >
                    <c.icon className="w-5 h-5" />
                    <span className="font-bold">{c.title}</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {career.comparison.points.map((point, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/30">
                <th scope="row" className="px-6 py-4 font-semibold text-gray-200 whitespace-nowrap sticky left-0 bg-gray-800 z-10 group-hover:bg-gray-700/30">
                  {point.aspect}
                </th>
                {careersToDisplay.map(c => (
                  <td key={c.id} className="px-6 py-4 leading-relaxed">
                    {point.details[c.id] || <span className="text-gray-500">N/A</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
