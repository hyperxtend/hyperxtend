/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useGlobe } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import GlobeControls from '../global-controls';
import MobileWarning from '../mobile-warning';
import SectionContent from '../section-content';

interface PortfolioSection {
  id: string;
  title: string;
  description?: string;
  content?: any; // The rich content for each section
  lat: number;
  lng: number;
}

interface EarthGlobeProps {
  portfolioSections?: PortfolioSection[];
}

export default function EarthGlobe({ portfolioSections = [] }: EarthGlobeProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);

  // Check for mobile device on component mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGlobe({
    mountRef: mountRef as React.RefObject<HTMLDivElement>,
    portfolioSections,
    isHovering,
    setIsHovering,
    activeSection,
    setActiveSection,
    setShowSections,
    setShowHelp
  });

  const currentSection = portfolioSections.find(s => s.id === activeSection);
  const { gotoPin } = useGlobe({
    mountRef: mountRef as React.RefObject<HTMLDivElement>,
    portfolioSections,
    isHovering,
    setIsHovering,
    activeSection,
    setActiveSection,
    setShowSections,
    setShowHelp
  });

  return (
    <div className="relative">
      <div
        ref={mountRef}
        className="w-full h-screen bg-black"
        style={{ overflow: 'hidden' }}
      />
      {activeSection && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className={`bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-700 max-w-[90%] ${expanded ? 'md:max-w-2xl' : 'md:max-w-sm'
              } transition-all duration-300 max-h-[80vh] overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
              `}>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg md:text-xl font-semibold">
                {currentSection?.title}
              </h2>

            </div>

            {currentSection?.description && (
              <p className="text-sm md:text-base text-gray-300 mb-4 border-l-2 border-blue-500 pl-3">
                {currentSection.description}
              </p>
            )}

            {currentSection?.content && (
              <div className="mt-4 border-t border-gray-700 pt-4">
                <SectionContent
                  sectionId={currentSection.id}
                  content={currentSection.content}
                />
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm transition-colors"
                onClick={() => {
                  setActiveSection(null);
                  setExpanded(false);
                }}
              >
                Back to Globe
              </button>
            </div>
          </div>
        </div>
      )}
      <GlobeControls
        isMobile={isMobile}
        showHelp={showHelp}
        showSections={showSections}
        setShowHelp={setShowHelp}
        setShowSections={setShowSections}
        portfolioSections={portfolioSections}
        gotoPin={gotoPin}
      />
      {isMobile && <MobileWarning />}
    </div>
  );
}