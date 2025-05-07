import { createStarryBackground, latLngToVector3, updateLabelPositions } from '@/utils';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface PortfolioSection {
  id: string;
  title: string;
}

interface UseGlobeProps {
  mountRef: React.RefObject<HTMLDivElement>;
  portfolioSections: PortfolioSection[];
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

export function useGlobe({
  mountRef,
  portfolioSections,
  isHovering,
  setIsHovering,
  activeSection,
  setActiveSection
}: UseGlobeProps) {
  const EARTH_RADIUS = 5;
  const markersRef = useRef<THREE.Mesh[]>([]);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const earthGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const containerWidth = mountRef.current.clientWidth || window.innerWidth;
    const containerHeight = mountRef.current.clientHeight || window.innerHeight;
    const isMobile = window.innerWidth < 768;

    const camera = new THREE.PerspectiveCamera(
      isMobile ? 90 : 75,
      containerWidth / containerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = isMobile ? 14 : 12;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true
    });
    rendererRef.current = renderer;
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = isMobile ? 0.6 : 0.4;
    controls.minDistance = isMobile ? 7 : 6;
    controls.maxDistance = 20;
    controls.enablePan = false;
    controls.zoomSpeed = isMobile ? 0.8 : 0.6;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.2;

    createStarryBackground(scene);

    const earthGroup = new THREE.Group();
    earthGroupRef.current = earthGroup;
    scene.add(earthGroup);

    const earthGeometry = new THREE.SphereGeometry(
      EARTH_RADIUS,
      isMobile ? 48 : 64,
      isMobile ? 48 : 64
    );

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg');
    const bumpMap = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png');
    const specularMap = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png');
    const cloudsTexture = textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/clouds/clouds.png');

    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.anisotropy = isMobile ? 4 : 16;

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

    const cloudsGeometry = new THREE.SphereGeometry(
      EARTH_RADIUS + 0.05,
      isMobile ? 48 : 64,
      isMobile ? 48 : 64
    );
    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.5
    });
    const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    earthGroup.add(clouds);

    const atmosphereGeometry = new THREE.SphereGeometry(
      EARTH_RADIUS + 0.2,
      isMobile ? 48 : 64,
      isMobile ? 48 : 64
    );
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

    const markers: THREE.Mesh[] = [];
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const locationCoordinates = [
      { title: "About Me", lat: 40.7128, lng: -74.006 },
      { name: "Skills", lat: 51.5074, lng: -0.1278 },
      { name: "Experience", lat: 35.6762, lng: 139.6503 },
      { name: "Projects", lat: -33.8688, lng: 151.2093 },
      { name: "Contact", lat: 48.8566, lng: 2.3522 }
    ];

    portfolioSections.forEach((section, index) => {
      const location = locationCoordinates[index] || {
        lat: 0,
        lng: 360 * (index / portfolioSections.length)
      };

      const markerPosition = latLngToVector3(location.lat, location.lng, EARTH_RADIUS + 0.05);
      const markerGroup = new THREE.Group();

      const pinScale = isMobile ? 1.3 : 1.0;
      const pinStemGeometry = new THREE.CylinderGeometry(0.025 * pinScale, 0.025 * pinScale, 0.3 * pinScale, 8);
      const pinStemMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
      const pinStem = new THREE.Mesh(pinStemGeometry, pinStemMaterial);

      const pinHeadGeometry = new THREE.SphereGeometry(0.1 * pinScale, 16, 16);
      const pinHeadMaterial = new THREE.MeshPhongMaterial({
        color: 0xff3333,
        emissive: 0x331111,
        shininess: 60
      });
      const pinHead = new THREE.Mesh(pinHeadGeometry, pinHeadMaterial);
      pinHead.position.y = 0.2 * pinScale;

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
      labelHolder.position.copy(markerPosition.clone().multiplyScalar(1.12));
      labelHolder.userData = { type: 'labelHolder', title: section.title };
      earthGroup.add(labelHolder);

      const labelDiv = document.createElement('div');
      labelDiv.className = 'absolute px-2 py-1 text-xs md:text-sm bg-black bg-opacity-80 text-white rounded-md pointer-events-none opacity-0 transform -translate-x-1/2 -translate-y-full';
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
    markersRef.current = markers;

    const onMouseMove = (event: MouseEvent) => {
      if (!rendererRef.current || !cameraRef.current) return;
      mouse.x = (event.clientX / containerWidth) * 2 - 1;
      mouse.y = -(event.clientY / containerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers);
      markers.forEach(marker => {
        marker.material.color.set(0xff3333);
        marker.material.emissive.set(0x331111);
        marker.scale.set(1, 1, 1);
        marker.userData.isHovered = false;
      });
      if (intersects.length > 0) {
        const marker = intersects[0].object as THREE.Mesh;
        document.body.style.cursor = 'pointer';
        setIsHovering(true);
        marker.material.color.set(0xffcc00);
        marker.material.emissive.set(0x553300);
        marker.scale.set(1.2, 1.2, 1.2);
        marker.userData.isHovered = true;
      } else {
        document.body.style.cursor = 'default';
        setIsHovering(false);
      }
      updateLabelPositions(markers, camera);
    };

    const onTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length !== 1 || !cameraRef.current || !rendererRef.current) return;
      const touch = event.touches[0];
      mouse.x = (touch.clientX / containerWidth) * 2 - 1;
      mouse.y = -(touch.clientY / containerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers);
      if (intersects.length > 0) {
        const marker = intersects[0].object as THREE.Mesh;
        const sectionId = marker.userData.sectionId;
        const markerWorldPos = new THREE.Vector3();
        marker.getWorldPosition(markerWorldPos);
        const direction = markerWorldPos.clone().normalize();
        const targetPosition = direction.multiplyScalar(isMobile ? 18 : 15);
        animateCameraToPosition(targetPosition);
        setActiveSection(sectionId);
      }
    };

    const onClick = (event: MouseEvent) => {
      if (!cameraRef.current || !rendererRef.current) return;
      mouse.x = (event.clientX / containerWidth) * 2 - 1;
      mouse.y = -(event.clientY / containerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers);
      if (intersects.length > 0) {
        const marker = intersects[0].object as THREE.Mesh;
        const sectionId = marker.userData.sectionId;
        const markerWorldPos = new THREE.Vector3();
        marker.getWorldPosition(markerWorldPos);
        const direction = markerWorldPos.clone().normalize();
        const targetPosition = direction.multiplyScalar(isMobile ? 18 : 15);
        animateCameraToPosition(targetPosition);
        setActiveSection(sectionId);
      }
    };

    const animateCameraToPosition = (targetPosition: THREE.Vector3) => {
      if (!cameraRef.current || !controlsRef.current) return;
      const startPosition = cameraRef.current.position.clone();
      const duration = isMobile ? 1000 : 1200;
      const startTime = Date.now();

      const updateCamera = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        cameraRef.current!.position.lerpVectors(startPosition, targetPosition, easeProgress);
        controlsRef.current!.target.set(0, 0, 0);
        controlsRef.current!.update();
        updateLabelPositions(markers, cameraRef.current!);
        if (progress < 1) {
          requestAnimationFrame(updateCamera);
        }
      };
      updateCamera();
    };

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      const newContainerWidth = mountRef.current.clientWidth || window.innerWidth;
      const newContainerHeight = mountRef.current.clientHeight || window.innerHeight;
      cameraRef.current.aspect = newContainerWidth / newContainerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newContainerWidth, newContainerHeight);
      updateLabelPositions(markers, cameraRef.current);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    mountRef.current.addEventListener('touchstart', onTouchStart, { passive: false });

    const rotationSpeed = 0.0003;
    let lastTime = 0;

    const animate = (time: number) => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !controlsRef.current || !earthGroupRef.current) return;
      requestAnimationFrame(animate);
      const delta = lastTime ? (time - lastTime) / 1000 : 0.016;
      lastTime = time;

      if (!isHovering && !controlsRef.current.autoRotate) {
        const smoothDelta = Math.min(delta, 0.05);
        earthGroupRef.current.rotation.y += rotationSpeed * smoothDelta * 60;
      }

      earthGroupRef.current.children.find(c => c instanceof THREE.Mesh && c.geometry instanceof THREE.SphereGeometry && c.material.opacity === 0.5)!.rotation.y += 0.00015 * delta * 60;

      controlsRef.current.update();
      updateLabelPositions(markers, cameraRef.current);

      if (window.innerWidth >= 768 || Math.random() > 0.7) {
        sceneRef.current.traverse((object) => {
          if (object.userData.twinkling && object instanceof THREE.Points) {
            object.material.opacity = 0.5 + Math.sin(time * 0.0005) * 0.3;
            object.material.size = 0.15 + Math.sin(time * 0.0008) * 0.05;
          }
        });
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      if (mountRef.current) {
        mountRef.current.removeEventListener('touchstart', onTouchStart);
      }
      markers.forEach(marker => {
        if (marker.userData.labelElement && mountRef.current) {
          mountRef.current.removeChild(marker.userData.labelElement);
        }
      });
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });
    };
  }, [portfolioSections, isHovering, activeSection, setIsHovering, setActiveSection]);
}