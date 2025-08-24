
import React, { useState } from 'react';
import type { CareerPath } from '../types';

interface SidebarProps {
  careers: CareerPath[];
  currentCareer: CareerPath;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ careers, currentCareer, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-16 md:w-64 bg-gray-800 text-gray-200 flex flex-col flex-shrink-0 transition-all duration-300">
      <div className="h-20 flex items-center justify-center md:justify-start md:px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 hidden md:block">
          Navigator
        </h1>
        {/* Icon for collapsed view */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m-6-5H4m16 0h-2m-1-5l-1.414-1.414M7.414 18.586L6 17.172m12.728 0l-1.414 1.414M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
        </svg>
      </div>

      <div className="hidden md:block p-4 border-b border-gray-700">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <nav className="flex-1 px-2 md:px-4 py-4 overflow-y-auto">
        <ul>
          {filteredCareers.map((career) => {
            const isSelected = career.id === currentCareer.id;
            const IconComponent = career.icon;
            return (
              <li key={career.id} className="mb-2">
                <button
                  onClick={() => onSelect(career.id)}
                  className={`w-full flex items-center justify-center md:justify-start p-3 rounded-lg transition-colors duration-200 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-current={isSelected ? 'page' : undefined}
                  title={career.title} // Tooltip for collapsed view
                >
                  <IconComponent className="w-6 h-6 flex-shrink-0" />
                  <span className="ml-4 font-semibold hidden md:block">{career.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {filteredCareers.length === 0 && searchTerm && (
          <p className="text-center text-gray-500 px-4 mt-4 hidden md:block">
            No results found.
          </p>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
