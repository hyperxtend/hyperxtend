/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import * as THREE from 'three';

export function updateLabelPositions(markers: any[], camera: THREE.Camera) {
  markers.forEach((marker: { userData: { labelElement: { style: { opacity: string; left: string; top: string; }; }; isHovered: any; sectionId: any; activeSection: any; }; getWorldPosition: (arg0: THREE.Vector3) => void; }) => {
    if (!marker.userData.labelElement) return;
    
    const markerWorldPos = new THREE.Vector3();
    marker.getWorldPosition(markerWorldPos);
    
    const pinDirection = markerWorldPos.clone().normalize();
    const camDirection = camera.position.clone().normalize();
    const dotProduct = pinDirection.dot(camDirection);
    
    if (dotProduct < 0) {
      marker.userData.labelElement.style.opacity = '0';
      return;
    }
    
    const tempV = markerWorldPos.clone();
    tempV.project(camera);
    
    const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-(tempV.y * 0.5) + 0.5) * window.innerHeight;
    
    marker.userData.labelElement.style.left = `${x}px`;
    marker.userData.labelElement.style.top = `${y - 20}px`; // Position above marker
    
    if (marker.userData.isHovered || marker.userData.sectionId === marker.userData.activeSection) {
      marker.userData.labelElement.style.opacity = '1';
    } else {
      marker.userData.labelElement.style.opacity = '0';
    }
  });
}

export function animateCameraToPosition(camera: { position: { clone: () => any; lerpVectors: (arg0: any, arg1: any, arg2: number) => void; }; }, controls: { target: { set: (arg0: number, arg1: number, arg2: number) => void; }; update: () => void; }, targetPosition: any) {
  const startPosition = camera.position.clone();
  const duration = 1200; // Longer duration for smoother movement (ms)
  const startTime = Date.now();
  
  function updateCamera() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeProgress = easeOutQuart(progress);
    
    camera.position.lerpVectors(startPosition, targetPosition, easeProgress); 
    console.log('controls',controls);
    
    controls.target.set(0, 0, 0);
    
    controls.update();
    
    if (progress < 1) {
      requestAnimationFrame(updateCamera);
    }
  }
  
  updateCamera();
}

export function easeOutQuart(x: number) {
  return 1 - Math.pow(1 - x, 4);
}