'use client';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function useEarthScene(mountRef: { current: { appendChild: (arg0: HTMLCanvasElement) => void; }; }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  mountRef?.current?.appendChild(renderer.domElement);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08; 
  controls.rotateSpeed = 0.4; 
  controls.minDistance = 6;
  controls.maxDistance = 20;
  controls.enablePan = false;
  controls.zoomSpeed = 0.6; 
  controls.autoRotate = false; 
  controls.autoRotateSpeed = 0.2; 
  
  const earthGroup = new THREE.Group();
  scene.add(earthGroup);
  
  createEarth(earthGroup);
  
  camera.position.z = 12;
  
  addLighting(scene);
  
  return { scene, camera, renderer, controls, earthGroup };
}

function createEarth(earthGroup: THREE.Group<THREE.Object3DEventMap>) {
  const EARTH_RADIUS = 5;
  const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64);
  
  const textureLoader = new THREE.TextureLoader();
  
  const earthTexture = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg');
  const bumpMap = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png');
  const specularMap = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png');
  const cloudsTexture = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/clouds/clouds.png');
  
  // Enhance earth texture brightness and saturation
  earthTexture.colorSpace = THREE.SRGBColorSpace;
  earthTexture.anisotropy = 16;
  
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: bumpMap,
    bumpScale: 0.1,  
    specularMap: specularMap,
    specular: new THREE.Color('white'), 
    shininess: 25,    
    emissive: new THREE.Color(0x112244),
    emissiveIntensity: 0.2              
  });
  
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  earthGroup.add(earth);
  
  const cloudsGeometry = new THREE.SphereGeometry(EARTH_RADIUS + 0.05, 64, 64);
  const cloudsMaterial = new THREE.MeshPhongMaterial({
    map: cloudsTexture,
    transparent: true,
    opacity: 0.5
  });
  
  const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
  clouds.userData = { isCloud: true };
  earthGroup.add(clouds);
  
  const atmosphereGeometry = new THREE.SphereGeometry(EARTH_RADIUS + 0.2, 64, 64);
  const atmosphereMaterial = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `
      varying vec3 vertexNormal;
      void main() {
        vertexNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vertexNormal;
      void main() {
        float intensity = pow(0.65 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.3, 0.7, 1.0, 1.0) * intensity;
      }
    `,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true
  });
  
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  earthGroup.add(atmosphere);
}

function addLighting(scene: THREE.Scene) {
  // Significantly enhanced lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);  
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xffffff, 2.0);
  pointLight.position.set(15, 5, 15);
  scene.add(pointLight);
  
  const secondaryLight = new THREE.PointLight(0xc2d1f0, 0.8);
  secondaryLight.position.set(-15, -5, -15);
  scene.add(secondaryLight);
  
  const thirdLight = new THREE.PointLight(0xffeedd, 0.5);
  thirdLight.position.set(0, -15, 0);
  scene.add(thirdLight);
}