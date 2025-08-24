import React from 'react';
import type { CareerPath } from '../types';

interface CareerCardProps {
  career: CareerPath;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, isSelected, onSelect }) => {
  const baseClasses = "rounded-lg p-6 flex flex-col items-start cursor-pointer transition-all duration-300 ease-in-out transform";
  const selectedClasses = "bg-indigo-600 shadow-2xl scale-105";
  const unselectedClasses = "bg-gray-800 hover:bg-gray-700 hover:scale-102";

  const IconComponent = career.icon;

  return (
    <div
      onClick={() => onSelect(career.id)}
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
    >
      <div className={`p-3 rounded-full mb-4 ${isSelected ? 'bg-indigo-500' : 'bg-gray-700'}`}>
        <div className={isSelected ? 'text-white' : 'text-indigo-400'}>
            <IconComponent />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
      <p className={`text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-400'}`}>
        {career.description}
      </p>
    </div>
  );
};

export default CareerCard;
