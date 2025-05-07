'use client';

import { useEffect, useState } from 'react';

function Clouds() {
   const [cloudPositions, setCloudPositions] = useState([
      { id: 1, left: -100, top: 30, width: 100, height: 50, speed: 0.5 },
      { id: 2, left: 200, top: 100, width: 120, height: 60, speed: 0.3 },
      { id: 3, left: 500, top: 50, width: 140, height: 70, speed: 0.7 },
      { id: 4, left: 800, top: 130, width: 110, height: 55, speed: 0.4 },
      { id: 5, left: 1100, top: 70, width: 130, height: 65, speed: 0.6 },
   ]);
  
  
  // Animate clouds
  useEffect(() => {
    const animateClouds = () => {
      setCloudPositions(prevClouds => 
        prevClouds.map(cloud => {
          let newLeft = cloud.left + cloud.speed;
          // Reset cloud position when it goes off-screen
          if (newLeft > window.innerWidth) {
            newLeft = -cloud.width;
          }
          return { ...cloud, left: newLeft };
        })
      );
    };

    const animationId = setInterval(animateClouds, 50);
    return () => clearInterval(animationId);
  }, []);
  
  return (
    <div> {cloudPositions.map(cloud => (
      <div 
        key={cloud.id}
        className="absolute bg-white rounded-full"
        style={{
          left: `${cloud.left}px`,
          top: `${cloud.top}px`,
          width: `${cloud.width}px`,
          height: `${cloud.height}px`,
          boxShadow: `
            ${cloud.width * 0.25}px ${cloud.height * 0.1}px 0 ${cloud.width * 0.1}px rgba(255, 255, 255, 0.9),
            ${cloud.width * 0.5}px ${cloud.height * 0.1}px 0 ${cloud.width * 0.2}px rgba(255, 255, 255, 0.9),
            ${cloud.width * 0.75}px ${cloud.height * 0.1}px 0 ${cloud.width * 0.1}px rgba(255, 255, 255, 0.9)
          `,
          opacity: 0.9
        }}
      />
    ))}</div>
  )
}

export default Clouds