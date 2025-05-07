'use client';
import { useGlobe } from '@/hooks';
import { useRef, useState } from 'react';
import GlobeControls from '../global-controls';
import MobileWarning from '../mobile-warning';

interface PortfolioSection {
  id: string;
  title: string;
}

interface EarthGlobeProps {
  portfolioSections?: PortfolioSection[];
}

export default function EarthGlobe({ portfolioSections = [] }: EarthGlobeProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const [showSections, setShowSections] = useState(true);
  const mountRef = useRef<HTMLDivElement>(null);

  useGlobe({
    mountRef,
    portfolioSections,
    isHovering,
    setIsHovering,
    activeSection,
    setActiveSection
  });

  return (
    <div className="relative">
      <div
        ref={mountRef}
        className="w-full h-screen bg-black"
        style={{ overflow: 'hidden' }}
      />
      {activeSection && (
        <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-cyan-300 p-3 md:p-4 rounded-md shadow-lg border border-cyan-500 max-w-[90%] md:max-w-xs">
          <h2 className="text-lg md:text-xl font-bold">{portfolioSections.find(s => s.id === activeSection)?.title || 'Section'}</h2>
          <button
            className="mt-2 px-3 py-1 bg-cyan-600 rounded hover:bg-cyan-700 text-white text-sm transition-colors"
            onClick={() => setActiveSection(null)}
          >
            Back to Globe
          </button>
        </div>
      )}
      <GlobeControls
        isMobile={isMobile}
        showHelp={showHelp}
        showSections={showSections}
        setShowHelp={setShowHelp}
        setShowSections={setShowSections}
        portfolioSections={portfolioSections}
      />
      {isMobile && <MobileWarning />}
    </div>
  );
}