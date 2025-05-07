'use client';
import { SectionType } from '@/types';
import { latLngToVector3 } from '@/utils';
import * as THREE from 'three';

export function useMarkers({ scene, earthGroup, portfolioSections, mountRef }) {
  const markers: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial, THREE.Object3DEventMap>[] = [];
  const EARTH_RADIUS = 5;
  
  const locationCoordinates = [
    { name: "About Me", lat: 40.7128, lng: -74.006 },      // New York
    { name: "Skills", lat: 51.5074, lng: -0.1278 },        // London
    { name: "Experience", lat: 35.6762, lng: 139.6503 },   // Tokyo
    { name: "Projects", lat: -33.8688, lng: 151.2093 },    // Sydney
    { name: "Contact", lat: 48.8566, lng: 2.3522 }         // Paris
  ];
  
  portfolioSections.forEach((section:SectionType, index: number) => {
    const location = locationCoordinates[index] || {
      lat: 0,
      lng: 360 * (index / portfolioSections.length)
    };
    
    const markerPosition = latLngToVector3(location.lat, location.lng, EARTH_RADIUS + 0.05);
    
    const markerGroup = new THREE.Group();
    
    const pinStemGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.3, 8);
    const pinStemMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const pinStem = new THREE.Mesh(pinStemGeometry, pinStemMaterial);
    
    const pinHeadGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const pinHeadMaterial = new THREE.MeshPhongMaterial({ 
      emissive: 0x331111,
      shininess: 60
    });
    const pinHead = new THREE.Mesh(pinHeadGeometry, pinHeadMaterial);
    
    markerGroup.add(pinStem);
    markerGroup.add(pinHead);
    
    markerGroup.position.copy(markerPosition);
    
    const pinDirection = markerPosition.clone().normalize();
    markerGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pinDirection);
    
    earthGroup.add(markerGroup);
    
    pinHead.userData = {
      sectionId: section.id,
      title: section.title,
      position: markerPosition.clone(),
      isPin: true
    };
    
    markers.push(pinHead);
    
    const labelHolder = new THREE.Group();
    labelHolder.position.copy(markerPosition.clone().multiplyScalar(1.12)); // Position slightly above pin
    labelHolder.userData = { type: 'labelHolder', title: section.title };
    earthGroup.add(labelHolder);
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'absolute px-3 py-2 text-sm bg-black bg-opacity-80 text-white rounded-md pointer-events-none opacity-0 transform -translate-x-1/2 -translate-y-full';
    labelDiv.innerHTML = `
      <div class="relative">
        <div class="font-bold">${section.title}</div>
        <div class="absolute left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[95%] border-solid border-8 border-transparent border-t-black border-opacity-80"></div>
      </div>
    `;
    labelDiv.style.transition = 'opacity 0.3s';
    labelDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
    labelDiv.style.border = '1px solid rgba(255, 51, 51, 0.6)';
    labelDiv.style.zIndex = '1000';
    mountRef.current.appendChild(labelDiv);
    
    pinHead.userData.labelElement = labelDiv;
    labelHolder.userData.labelElement = labelDiv;
  });
  
  return markers;
}