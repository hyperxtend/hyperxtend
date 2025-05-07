'use client';
import * as THREE from 'three';

export function useStarryBackground(scene: { add: (arg0: THREE.Points<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.PointsMaterial, THREE.Object3DEventMap>) => void; }) {
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true
  });
  
  const starsVertices = [];
  const starsCount = 2000;  
  
  for (let i = 0; i < starsCount; i++) {
    const radius = Math.random() * 90 + 30; 
    const theta = Math.random() * Math.PI * 2; 
    const phi = Math.random() * Math.PI;  
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    starsVertices.push(x, y, z);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  const twinklingStarsGeometry = new THREE.BufferGeometry();
  const twinklingStarsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.2,
    transparent: true
  });
  
  const twinklingStarsVertices = [];
  const twinklingStarsCount = 100;
  
  for (let i = 0; i < twinklingStarsCount; i++) {
    const radius = Math.random() * 80 + 40;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    twinklingStarsVertices.push(x, y, z);
  }
  
  twinklingStarsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(twinklingStarsVertices, 3));
  const twinklingStars = new THREE.Points(twinklingStarsGeometry, twinklingStarsMaterial);
  twinklingStars.userData = { twinkling: true };
  scene.add(twinklingStars);
  
  return { stars, twinklingStars };
}