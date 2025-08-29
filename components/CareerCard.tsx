import React from 'react';
import type { CareerPath } from '../types';

interface CareerCardProps {
  career: CareerPath;
  isSelected: boolean;
  onSelectCareer: (id: string) => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, isSelected, onSelectCareer }) => {
  // Add 'group' for hover effects on children, border-2 for smooth transitions, and h-full for consistent height
  const baseClasses = "group rounded-lg p-6 flex flex-col items-start cursor-pointer transition-all duration-300 ease-in-out transform border-2 h-full";
  
  // Add border color for selected state and a more prominent hover effect for unselected
  const selectedClasses = "bg-indigo-600 shadow-2xl scale-105 border-indigo-400";
  const unselectedClasses = "bg-gray-800 border-transparent hover:bg-gray-700 hover:scale-102 hover:border-indigo-500/50";

  const IconComponent = career.icon;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCareer(career.id);
    }
  };

  return (
    <div
      onClick={() => onSelectCareer(career.id)}
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
      aria-selected={isSelected}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      {/* Add transitions to the icon's container for scaling effect */}
      <div className={`p-3 rounded-full mb-4 transition-all duration-300 ease-in-out ${isSelected ? 'bg-indigo-500' : 'bg-gray-700 group-hover:bg-gray-600'}`}>
        <div className={`transition-transform duration-300 ease-in-out ${isSelected ? 'text-white' : 'text-indigo-400'} group-hover:scale-110`}>
            <IconComponent />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
      <p className={`text-sm transition-colors duration-300 flex-grow ${isSelected ? 'text-indigo-100' : 'text-gray-400'}`}>
        {career.description}
      </p>
    </div>
  );
};

export default CareerCard;
