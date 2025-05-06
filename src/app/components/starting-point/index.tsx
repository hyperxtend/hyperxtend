'use client';
import { PROJECTS } from '@/constants';
import { useState } from 'react';
import About from '../about';
import Clouds from '../clouds';
import Mountains from '../mountains';

export default function StartingPoint() {
  const [currentView, setCurrentView] = useState('trailhead');
 
  const [animationState, setAnimationState] = useState({
    aboutPath: false,
    projectsPath: false,
    content: false
  });

  const navigateTo = (view: string) => {
    if (view === 'about') {
      setAnimationState({ aboutPath: true, projectsPath: false, content: false });
      setTimeout(() => {
        setCurrentView(view);
        setTimeout(() => {
          setAnimationState({ aboutPath: true, projectsPath: false, content: true });
        }, 300);
      }, 600);
    } else if (view === 'projects') {
      setAnimationState({ aboutPath: false, projectsPath: true, content: false });
      setTimeout(() => {
        setCurrentView(view);
        setTimeout(() => {
          setAnimationState({ aboutPath: false, projectsPath: true, content: true });
        }, 300);
      }, 600);
    } else {
      setAnimationState({ aboutPath: false, projectsPath: false, content: false });
      setCurrentView(view);
    }
  };


  const distantTrees: {
    id: number; left: number;
    bottom: number;
    width: number; 
    height: number; 
    color: string; 
    zIndex: number;
  }[] = [];
  
  const treePositions = [
    // Left side trees - varied heights and sizes
    {left: 10, bottom: 28, scale: 1.8}, {left: 15, bottom: 30, scale: 2.0}, {left: 20, bottom: 26, scale: 1.9},
    {left: 8, bottom: 24, scale: 2.2}, {left: 13, bottom: 22, scale: 1.7}, {left: 18, bottom: 20, scale: 1.6},
    {left: 22, bottom: 23, scale: 2.1}, {left: 25, bottom: 21, scale: 1.5}, {left: 30, bottom: 25, scale: 2.3},
    {left: 5, bottom: 26, scale: 2.4}, {left: 12, bottom: 25, scale: 1.8}, {left: 16, bottom: 27, scale: 2.0},
    
    // Right side trees - varied heights and sizes
    {left: 70, bottom: 28, scale: 2.2}, {left: 75, bottom: 30, scale: 1.9}, {left: 80, bottom: 26, scale: 2.1},
    {left: 68, bottom: 24, scale: 1.8}, {left: 73, bottom: 22, scale: 2.3}, {left: 78, bottom: 20, scale: 2.0},
    {left: 82, bottom: 23, scale: 1.7}, {left: 85, bottom: 21, scale: 2.2}, {left: 90, bottom: 25, scale: 1.8},
    {left: 88, bottom: 26, scale: 2.4}, {left: 72, bottom: 25, scale: 2.1}, {left: 76, bottom: 27, scale: 1.9},
  ];
  
  treePositions.forEach((pos, i) => {
    const sizeModifier = (pos.bottom / 5) * pos.scale; 
    
    distantTrees.push({
      id: i,
      left: pos.left,
      bottom: pos.bottom,
      width: 12 * sizeModifier,
      height: 18 * sizeModifier,
      color: i % 3 === 0 ? 'bg-green-800' : (i % 3 === 1 ? 'bg-green-700' : 'bg-green-900'),
      zIndex: 1.5
    });
  });

  return (
    // Sky with blue gradient
    <div className="w-full h-screen overflow-hidden bg-blue-500 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600"></div>
      {/* Clouds */}
      <Clouds />
      
      {/* Sun */}
      <div className="absolute right-16 top-12 w-16 h-16 bg-yellow-300 rounded-full shadow-lg"></div>
      
     <Mountains />
      
      {distantTrees.map(tree => (
        <div 
          key={tree.id} 
          className="absolute z-5"
          style={{
            position: 'absolute',
            left: `${tree.left}%`,
            bottom: `${tree.bottom}%`,
            width: `${tree.width}px`,
            height: `${tree.height}px`,
          }}
        >
          <div className={`${tree.color} w-full h-3/4 rounded-sm `} style={{
            clipPath: 'polygon(50% 0%, 20% 100%, 80% 100%)'
          }}></div>
          <div className="bg-yellow-900 w-3 h-1/4 mx-auto rounded-sm " style={{marginTop: '-1px'}}></div>
        </div>
      ))}
      
      <svg
        width="100%"
        height="50vh"
        viewBox="0 0 100 180"
        preserveAspectRatio="none"
        className="absolute bottom-0 z-0"
      >
        <path
          d="M50 200
         C 50 100, 50 90, 50 60
         M50 60
         C 40 75, 25 50, 10 60
         M50 60
         C 60 75, 75 50, 90 60"
          stroke="#8B5A2B"
          strokeWidth="5"
          fill="none"
        />
      </svg>
   
      
      {/* Render the appropriate view based on state */}
      {currentView === 'trailhead' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-7">
          {/* Trail Sign - Moved down to the split point */}
          <div className="relative w-64 h-48 mb-8 mt-40"> {/* Moved down with mt-40 */}
            {/* Sign Post */}
            <div className="absolute left-1/2 bottom-0 w-6 h-48 bg-yellow-900 transform -translate-x-1/2 shadow-md"></div>
            
            {/* Left Sign (About) */}
            <div 
              className="absolute left-0 top-8 w-32 h-12 bg-yellow-800 flex items-center justify-center cursor-pointer transform -rotate-12 hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-md border border-yellow-900"
              onClick={() => navigateTo('about')}
            >
              <div className="text-white font-bold text-lg">← ABOUT</div>
            </div>
            
            {/* Right Sign (Projects) */}
            <div 
              className="absolute right-0 top-12 w-32 h-12 bg-yellow-800 flex items-center justify-center cursor-pointer transform rotate-12 hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-md border border-yellow-900"
              onClick={() => navigateTo('projects')}
            >
              <div className="text-white font-bold text-lg">PROJECTS →</div>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'about' && (
        <About
        animationState={animationState}
        navigateTo={navigateTo}
        />
      )}
      
      {currentView === 'projects' && (
        <div className={`absolute z-10 inset-0 flex flex-col items-center justify-center p-8 overflow-y-auto transition-opacity duration-500 ${animationState.content ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-white bg-opacity-80 p-6 rounded-lg max-w-2xl transition-all duration-500 ${animationState.content ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
             {PROJECTS.map((project, index) => (
                <div key={project.title} className={`bg-blue-400 p-4 rounded-lg transition-all flex flex-col duration-500 ${animationState.content ? 'opacity-100 translate-y-0' : 'translate-y-4'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                 <p>{project.desc}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-yellow-800 text-white px-4 py-2 rounded shadow-md border border-yellow-900 hover:bg-yellow-700 transition-all duration-300 hover:scale-105 mt-4 justify-end">
                    View Project
                  </a>
                </div>
              ))}
            </div>
            <button 
              className="bg-yellow-800 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-md"
              onClick={() => navigateTo('trailhead')}
            >
              Back to Trail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}