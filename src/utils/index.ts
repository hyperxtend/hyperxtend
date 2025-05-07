
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
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 1000;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.2,
    transparent: true,
    opacity: 0.8
  });
  starMaterial.userData = { twinkling: true };
  const stars = new THREE.Points(starGeometry, starMaterial);
  stars.userData = { twinkling: true };
  scene.add(stars);
}