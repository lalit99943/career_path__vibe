
import React from 'react';
import type { CareerPath } from '../types';
import CareerCard from './CareerCard';

interface CareerSelectionGridProps {
  careers: CareerPath[];
  onSelectCareer: (id: string) => void;
  currentCareer: CareerPath;
}

const CareerSelectionGrid: React.FC<CareerSelectionGridProps> = ({ careers, onSelectCareer, currentCareer }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {careers.map(career => (
        <CareerCard
          key={career.id}
          career={career}
          isSelected={currentCareer.id === career.id}
          onSelectCareer={onSelectCareer}
        />
      ))}
    </div>
  );
};

// Simple fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.append(style);

export default CareerSelectionGrid;
