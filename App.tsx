
import React, { useState, useRef, useEffect } from 'react';
import { CAREER_PATHS } from './data/careerData';
import RoadmapDiagram from './components/RoadmapDiagram';
import Sidebar from './components/Sidebar';
import type { CareerPath } from './types';
import Tabs from './components/Tabs';
import WorkflowDiagram from './components/WorkflowDiagram';
import ComparisonTable from './components/ComparisonTable';
import AdvancementDiagram from './components/AdvancementDiagram';
import CareerSelectionGrid from './components/CareerSelectionGrid';

type ActiveTab = 'careers' | 'roadmap' | 'workflow' | 'comparison' | 'advancement';

const App: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<CareerPath>(CAREER_PATHS[0]);
  const [activeTab, setActiveTab] = useState<ActiveTab>('careers');
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when the career path or main view changes
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [selectedCareer, activeTab]);

  const handleSelectCareer = (careerId: string) => {
    const career = CAREER_PATHS.find(p => p.id === careerId);
    if (career) {
      const isNavigatingFromGrid = activeTab === 'careers';
      setSelectedCareer(career);
      
      // If user selects a career from the grid, switch to the roadmap view for a better UX.
      // Otherwise, persist the tab when switching via sidebar or comparison table.
      if (isNavigatingFromGrid) {
        setActiveTab('roadmap');
      }
    }
  };
  
  const TABS = [
    { id: 'careers', label: 'All Careers' },
    { id: 'roadmap', label: 'Learning Roadmap' },
    { id: 'workflow', label: 'Development Workflow' },
    { id: 'comparison', label: 'Compare Careers' },
    { id: 'advancement', label: 'Career Advancement' },
  ];

  const subHeading = () => {
    switch (activeTab) {
        case 'careers':
            return 'Explore various roles and find the one that excites you most.';
        case 'roadmap':
            return `A step-by-step guide to becoming a ${selectedCareer.title}.`;
        case 'workflow':
            return `A typical development workflow for a ${selectedCareer.title}.`;
        case 'comparison':
            return `A detailed comparison between a ${selectedCareer.title} and similar roles.`;
        case 'advancement':
            return `Exploring potential career growth paths from a ${selectedCareer.title}.`;
        default:
            return '';
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden">
      <Sidebar 
        careers={CAREER_PATHS}
        currentCareer={selectedCareer}
        onSelect={handleSelectCareer}
      />
      
      <div ref={mainContentRef} className="flex-1 flex flex-col overflow-y-auto">
        <main className="flex-1 p-4 sm:p-6 md:p-8">
            <header className="mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                {activeTab === 'careers' ? 'Choose Your Path' : selectedCareer.title}
              </h1>
              <p className="text-lg text-gray-400 mt-2">
                {subHeading()}
              </p>
            </header>

            <Tabs tabs={TABS} activeTab={activeTab} onTabChange={(id) => setActiveTab(id as ActiveTab)} />
            
            {activeTab === 'careers' && <CareerSelectionGrid careers={CAREER_PATHS} onSelectCareer={handleSelectCareer} currentCareer={selectedCareer} />}
            {activeTab === 'roadmap' && <RoadmapDiagram roadmap={selectedCareer.roadmap} />}
            {activeTab === 'workflow' && <WorkflowDiagram workflow={selectedCareer.workflow} roadmap={selectedCareer.roadmap} />}
            {activeTab === 'comparison' && <ComparisonTable career={selectedCareer} allCareers={CAREER_PATHS} onSelectCareer={handleSelectCareer} />}
            {activeTab === 'advancement' && <AdvancementDiagram career={selectedCareer} allCareers={CAREER_PATHS} onSelectCareer={handleSelectCareer} />}

        </main>
        
        <footer className="text-center py-6 border-t border-gray-700 mt-auto">
            <p className="text-gray-500">Built for learners, by developers.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
