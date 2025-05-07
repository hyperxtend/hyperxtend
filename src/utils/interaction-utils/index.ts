'use client';
import * as THREE from 'three';

export function handleMouseMove({ event, markers, camera, setIsHovering }) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(markers);
  
  markers.forEach((marker: { material: { color: { set: (arg0: number) => void; }; emissive: { set: (arg0: number) => void; }; }; scale: { set: (arg0: number, arg1: number, arg2: number) => void; }; userData: { isHovered: boolean; }; }) => {
    if (marker instanceof THREE.Mesh) {
      marker.material.color.set(0xff3333); 
      marker.material.emissive.set(0x331111); 
      marker.scale.set(1, 1, 1); 
      marker.userData.isHovered = false;
    }
  });
  
  if (intersects.length > 0) {
    const marker = intersects[0].object;
    document.body.style.cursor = 'pointer';
    if (marker instanceof THREE.Mesh) {
      marker.material.color.set(0xffcc00); 
      marker.material.emissive.set(0x553300); 
      marker.scale.set(1.2, 1.2, 1.2); 
      marker.userData.isHovered = true;
    }
    marker.scale.set(1.2, 1.2, 1.2); 
    marker.userData.isHovered = true;
  } else {
    document.body.style.cursor = 'default';
    setIsHovering(false);
  }
}

export function handleClick({ event, markers, camera, setActiveSection, animateCameraToPosition }) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(markers);
  
  if (intersects.length > 0) {
    const marker = intersects[0].object;
    const sectionId = marker.userData.sectionId;
    
    const markerWorldPos = new THREE.Vector3();
    marker.getWorldPosition(markerWorldPos);
    
    const direction = markerWorldPos.clone().normalize();
    const targetPosition = direction.multiplyScalar(15); 
    
    animateCameraToPosition(camera, camera.userData.controls, targetPosition);
    
    setActiveSection(sectionId);
    marker.userData.activeSection = sectionId;
    
  }
}