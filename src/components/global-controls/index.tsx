import { PortfolioSectionType } from "@/types";


interface GlobeControlsProps {
  isMobile: boolean;
  showHelp: boolean;
  showSections: boolean;
  setShowHelp: (show: boolean) => void;
  setShowSections: (show: boolean) => void;
  portfolioSections: PortfolioSectionType[];
  gotoPin: (lat: number, lng: number, sectionId: string) => void;
}

export default function GlobeControls({
  isMobile,
  showHelp,
  showSections,
  setShowHelp,
  setShowSections,
  portfolioSections,
  gotoPin
}: GlobeControlsProps) {
  return (
    <>
      <div className={`absolute ${isMobile ? 'bottom-24' : 'bottom-4'} right-4 flex flex-col items-end`}>
        {showHelp && (
          <div className="bg-black bg-opacity-80 text-white text-xs md:text-sm p-2 md:p-3 mb-2 rounded-md border border-white-500 shadow-lg">
            <p className="font-bold">Select <span className="text-red-500">PINS</span> to explore more details</p>
            <p>{isMobile ? 'Touch to select • Pinch to zoom' : 'Drag to rotate • Scroll to zoom'}</p>
          </div>
        )}
        <button
          onClick={() => setShowHelp(!showHelp)}
          className={`bg-black bg-opacity-80 text-white p-2 rounded-full border ${showHelp ? 'border-red-500' : 'border-white-500'} shadow-lg`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
          </svg>
        </button>
      </div>
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <button
          onClick={() => setShowSections(!showSections)}
          className={`bg-black bg-opacity-80 text-white p-2 rounded-full border ${showSections ? 'border-red-500' : 'border-white-500'} shadow-lg mb-2`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {showSections && (
          <div
            className="bg-black bg-opacity-80 text-white p-2 md:p-3 rounded-md border border-white-500 max-w-[150px] md:max-w-[200px] max-h-[300px] overflow-y-auto"
          >
            <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2">Pins</h3>
            <ul className="text-xs md:text-sm">
              {portfolioSections.map((section) => (
                !section.isProject && (
                  <li
                    key={section.id}
                    className="mb-1 flex items-center cursor-pointer hover:text-gray-300"
                    onClick={() => gotoPin(section.lat, section.lng, section.id)}
                  >
                    <span className="inline-block w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full mr-1 md:mr-2"></span>
                    {section.title}
                  </li>
                )
              ))}
            </ul>

          </div>
        )}
      </div>
    </>
  );
}