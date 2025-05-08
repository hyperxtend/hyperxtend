
import * as THREE from 'three';

export function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export function updateLabelPositions(markers: THREE.Mesh[], camera: THREE.Camera): void {
  markers.forEach(marker => {
    if (marker.userData.labelElement) {
      const pos = marker.userData.position.clone();
      pos.project(camera);
      const widthHalf = window.innerWidth / 2;
      const heightHalf = window.innerHeight / 2;
      marker.userData.labelElement.style.left = `${(pos.x * widthHalf) + widthHalf}px`;
      marker.userData.labelElement.style.top = `${-(pos.y * heightHalf) + heightHalf}px`;
      marker.userData.labelElement.style.opacity = marker.userData.isHovered ? '1' : '0';
    }
  });
}

export function createStarryBackground(scene: THREE.Scene): void {
  // Create stars - responsive count based on device
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true
  });

  const starsVertices = [];
  // Fewer stars on mobile for performance
  const starsCount = window.innerWidth < 768 ? 1000 : 2000;

  for (let i = 0; i < starsCount; i++) {
    // Create stars in a sphere around the scene
    const radius = Math.random() * 90 + 30;  // Between 30 and 120
    const theta = Math.random() * Math.PI * 2;  // 0 to 2π
    const phi = Math.random() * Math.PI;  // 0 to π

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    starsVertices.push(x, y, z);
  }

  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  // Create larger twinkling stars - fewer on mobile
  const twinklingStarsGeometry = new THREE.BufferGeometry();
  const twinklingStarsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.2,
     transparent: true
   });

  const twinklingStarsVertices = [];
  const twinklingStarsCount = window.innerWidth < 768 ? 50 : 100;

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
}