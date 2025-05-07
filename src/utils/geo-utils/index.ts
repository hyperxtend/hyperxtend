'use client';
import * as THREE from 'three';

export function latLngToVector3(lat: number, lng: number, radius: number) {
  const latitudeInRadians = (90 - lat) * (Math.PI / 180); 
  const longitudeInRadians = (lng + 180) * (Math.PI / 180); 
  
  const x = -radius * Math.sin(latitudeInRadians) * Math.cos(longitudeInRadians);
  const y = radius * Math.cos(latitudeInRadians);
  const z = radius * Math.sin(latitudeInRadians) * Math.sin(longitudeInRadians);
  
  return new THREE.Vector3(x, y, z);
}