import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GAME_ZONES } from '../../data/zones';
import { CHARACTERS } from '../../data/characters';
import { ZoneId, CharacterId } from '../../types/game';
import { audioService } from '../../services/audioService';

interface WorldCanvasProps {
  activeZoneId: ZoneId | null;
  onSelectZone: (zoneId: ZoneId) => void;
  onSelectCharacter?: (characterId: CharacterId) => void;
  onOpenMission?: (missionId: number) => void;
  completedMissions: number[];
}

export const WorldCanvas: React.FC<WorldCanvasProps> = ({
  activeZoneId,
  onSelectZone,
  onSelectCharacter,
  onOpenMission,
  completedMissions
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredZone, setHoveredZone] = useState<ZoneId | null>(null);
  const [hoveredCharacter, setHoveredCharacter] = useState<CharacterId | null>(null);
  const [loading, setLoading] = useState(true);

  // Store mutable refs for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(28, 24, 28));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const animatedObjectsRef = useRef<{
    windTurbine?: THREE.Group;
    waterMesh?: THREE.Mesh;
    zoneMarkers: { mesh: THREE.Group; zoneId: ZoneId; initialY: number }[];
    characters: { mesh: THREE.Group; characterId: CharacterId; initialY: number }[];
    clouds: THREE.Group[];
  }>({
    zoneMarkers: [],
    characters: [],
    clouds: []
  });

  // Reusable raycaster vectors
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  // Orbit navigation state
  const isPointerDownRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);
  const orbitAngle = useRef({ theta: Math.PI / 4, phi: Math.PI / 3.2, radius: 42 });

  // Focus camera on zone
  useEffect(() => {
    if (activeZoneId && GAME_ZONES[activeZoneId]) {
      const zone = GAME_ZONES[activeZoneId];
      const [zx, , zz] = zone.position3D;
      targetLookAt.current.set(zx, 1, zz);
      orbitAngle.current.radius = 24;
      const x = zx + orbitAngle.current.radius * Math.sin(orbitAngle.current.phi) * Math.sin(orbitAngle.current.theta);
      const y = 1 + orbitAngle.current.radius * Math.cos(orbitAngle.current.phi);
      const z = zz + orbitAngle.current.radius * Math.sin(orbitAngle.current.phi) * Math.cos(orbitAngle.current.theta);
      targetCameraPos.current.set(x, y, z);
    } else {
      targetLookAt.current.set(0, 0, 0);
      orbitAngle.current.radius = 42;
      const x = orbitAngle.current.radius * Math.sin(orbitAngle.current.phi) * Math.sin(orbitAngle.current.theta);
      const y = orbitAngle.current.radius * Math.cos(orbitAngle.current.phi);
      const z = orbitAngle.current.radius * Math.sin(orbitAngle.current.phi) * Math.cos(orbitAngle.current.theta);
      targetCameraPos.current.set(x, y, z);
    }
  }, [activeZoneId]);

  // Main ThreeJS Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let frameId = 0;
    let isDisposed = false;

    // 1. Software GL detection (Three.js Skill standard)
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    // 2. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xdbeafe); // Soft sky blue
    scene.fog = new THREE.FogExp2(0xdbeafe, 0.015);

    // 3. Camera (Isometric Perspective)
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, aspect, 0.5, 180);
    camera.position.set(28, 24, 28);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 4. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false
    });
    rendererRef.current = renderer;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 5. Lighting Rig (Warm sun, Cool sky fill, Rim light)
    const sunLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    sunLight.position.set(35, 45, 25);
    sunLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      sunLight.shadow.mapSize.width = 1024;
      sunLight.shadow.mapSize.height = 1024;
      sunLight.shadow.camera.near = 10;
      sunLight.shadow.camera.far = 120;
      const d = 36;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      sunLight.shadow.bias = -0.0005;
      sunLight.shadow.normalBias = 0.02;
    }
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(0xbfdbfe, 0xa7f3d0, 1.2);
    hemiLight.position.set(0, 30, 0);
    scene.add(hemiLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // --- PROCEDURAL 3D WORLD ASSETS ---

    // A. Main Terrain Platform
    const terrainGroup = new THREE.Group();
    scene.add(terrainGroup);

    // Ground Island (hexagonal/rounded layered base)
    const islandGeo = new THREE.CylinderGeometry(34, 36, 3, 32);
    const islandMat = new THREE.MeshStandardMaterial({
      color: 0x86efac, // Vibrant pastel grass green
      roughness: 0.8,
      metalness: 0.05
    });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.y = -1.5;
    island.receiveShadow = !isSoftwareGl;
    terrainGroup.add(island);

    // Earth Sub-Layer (rich warm clay brown)
    const earthGeo = new THREE.CylinderGeometry(36, 38, 4, 32);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.9,
      metalness: 0.02
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earth.position.y = -4.5;
    terrainGroup.add(earth);

    // Cobblestone Pathways connecting the zones
    const pathMat = new THREE.MeshStandardMaterial({
      color: 0xfde047, // Golden warm cobblestone
      roughness: 0.7,
      metalness: 0.05
    });

    const createPath = (x1: number, z1: number, x2: number, z2: number, width: number = 1.4) => {
      const length = Math.hypot(x2 - x1, z2 - z1);
      const angle = Math.atan2(z2 - z1, x2 - x1);
      const pathGeo = new THREE.BoxGeometry(length, 0.04, width);
      const pathMesh = new THREE.Mesh(pathGeo, pathMat);
      pathMesh.position.set((x1 + x2) / 2, 0.02, (z1 + z2) / 2);
      pathMesh.rotation.y = -angle;
      pathMesh.receiveShadow = !isSoftwareGl;
      terrainGroup.add(pathMesh);
    };

    // Paths connecting Plaza -> Parque -> Escuela -> Jardin -> Puente -> Ciudad -> Aventura
    createPath(10, 10, 0, -4, 1.8);
    createPath(0, -4, -12, -10, 1.8);
    createPath(0, -4, 12, -12, 1.6);
    createPath(0, -4, 4, 4, 2.0);
    createPath(4, 4, -10, 8, 1.8);
    createPath(10, 10, 4, 4, 1.8);
    createPath(4, 4, 0, 18, 2.0);

    // B. River of Life
    const riverCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-28, 0.03, -16),
      new THREE.Vector3(-14, 0.03, -4),
      new THREE.Vector3(4, 0.03, 4),
      new THREE.Vector3(14, 0.03, 14),
      new THREE.Vector3(26, 0.03, 26)
    ]);
    const riverPoints = riverCurve.getPoints(40);
    const riverShape = new THREE.Shape();
    riverShape.moveTo(-2.2, 0);
    riverShape.lineTo(2.2, 0);
    riverShape.lineTo(2.2, -0.2);
    riverShape.lineTo(-2.2, -0.2);
    riverShape.closePath();

    const riverGeo = new THREE.TubeGeometry(riverCurve, 40, 2.4, 8, false);
    const riverMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.15,
      metalness: 0.3,
      transparent: true,
      opacity: 0.88
    });
    const riverMesh = new THREE.Mesh(riverGeo, riverMat);
    riverMesh.position.y = -0.1;
    terrainGroup.add(riverMesh);
    animatedObjectsRef.current.waterMesh = riverMesh;

    // C. El Puente de la Convivencia (Arch Bridge with Festive Banners)
    const bridgeGroup = new THREE.Group();
    bridgeGroup.position.set(4, 0, 4);
    bridgeGroup.rotation.y = -Math.PI / 4;

    const bridgeArchGeo = new THREE.BoxGeometry(7, 0.5, 3.2);
    const bridgeWoodMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Rich oak wood
      roughness: 0.6,
      metalness: 0.1
    });
    const bridgeArch = new THREE.Mesh(bridgeArchGeo, bridgeWoodMat);
    bridgeArch.position.y = 0.65;
    bridgeArch.castShadow = !isSoftwareGl;
    bridgeGroup.add(bridgeArch);

    // Bridge Railings
    const railingGeo = new THREE.BoxGeometry(7, 0.6, 0.15);
    const railingMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const railingLeft = new THREE.Mesh(railingGeo, railingMat);
    railingLeft.position.set(0, 1.2, 1.5);
    bridgeGroup.add(railingLeft);
    const railingRight = new THREE.Mesh(railingGeo, railingMat);
    railingRight.position.set(0, 1.2, -1.5);
    bridgeGroup.add(railingRight);

    // Festive Mini Banners along bridge
    for (let b = -2.5; b <= 2.5; b += 1.2) {
      const bannerGeo = new THREE.ConeGeometry(0.2, 0.5, 3);
      const bannerColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b, 0x8b5cf6];
      const bannerMat = new THREE.MeshStandardMaterial({
        color: bannerColors[Math.abs(Math.floor(b * 3)) % bannerColors.length],
        roughness: 0.4
      });
      const banner = new THREE.Mesh(bannerGeo, bannerMat);
      banner.position.set(b, 1.6, 1.5);
      bridgeGroup.add(banner);
    }
    terrainGroup.add(bridgeGroup);

    // D. La Escuela del Futuro (Building with Eco Solar Panels & Rotating Wind Turbine)
    const schoolGroup = new THREE.Group();
    schoolGroup.position.set(-12, 0, -10);

    // Main school hall
    const schoolBodyGeo = new THREE.BoxGeometry(6.5, 3.5, 5);
    const schoolBodyMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1
    });
    const schoolBody = new THREE.Mesh(schoolBodyGeo, schoolBodyMat);
    schoolBody.position.y = 1.75;
    schoolBody.castShadow = !isSoftwareGl;
    schoolGroup.add(schoolBody);

    // School roof (angled glass & solar panels)
    const roofGeo = new THREE.BoxGeometry(6.8, 0.4, 5.3);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.4 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 3.7;
    schoolGroup.add(roof);

    // Glass Atrium Dome
    const domeGeo = new THREE.SphereGeometry(1.4, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.75
    });
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.set(0, 3.9, 0);
    schoolGroup.add(dome);

    // Rotating Wind Turbine at school
    const turbineGroup = new THREE.Group();
    turbineGroup.position.set(3.8, 0, 2.5);
    const towerGeo = new THREE.CylinderGeometry(0.12, 0.2, 5, 8);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.y = 2.5;
    turbineGroup.add(tower);

    const bladesGroup = new THREE.Group();
    bladesGroup.position.set(0, 5, 0);
    const hubGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x64748b });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    bladesGroup.add(hub);

    for (let i = 0; i < 3; i++) {
      const bladeGeo = new THREE.BoxGeometry(0.12, 1.8, 0.04);
      const bladeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.y = 0.9;
      const bladePivot = new THREE.Group();
      bladePivot.rotation.z = (i * Math.PI * 2) / 3;
      bladePivot.add(blade);
      bladesGroup.add(bladePivot);
    }
    turbineGroup.add(bladesGroup);
    schoolGroup.add(turbineGroup);
    animatedObjectsRef.current.windTurbine = bladesGroup;
    terrainGroup.add(schoolGroup);

    // E. La Pequeña Ciudad y Casas
    const townGroup = new THREE.Group();
    townGroup.position.set(-10, 0, 8);

    const houseColors = [0xf43f5e, 0x3b82f6, 0xfbbf24, 0x10b981];
    const houseCoords = [
      { x: -2, z: -1, c: houseColors[0], r: 0 },
      { x: 1.5, z: -1.5, c: houseColors[1], r: 0.2 },
      { x: -1.5, z: 2.2, c: houseColors[2], r: -0.1 },
      { x: 2, z: 2, c: houseColors[3], r: 0.3 }
    ];

    houseCoords.forEach((hc) => {
      const hg = new THREE.Group();
      hg.position.set(hc.x, 0, hc.z);
      hg.rotation.y = hc.r;

      const wallsGeo = new THREE.BoxGeometry(2.4, 1.8, 2);
      const wallsMat = new THREE.MeshStandardMaterial({ color: hc.c, roughness: 0.6 });
      const walls = new THREE.Mesh(wallsGeo, wallsMat);
      walls.position.y = 0.9;
      walls.castShadow = !isSoftwareGl;
      hg.add(walls);

      const roofConeGeo = new THREE.ConeGeometry(1.9, 1.2, 4);
      const roofTileMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 });
      const houseRoof = new THREE.Mesh(roofConeGeo, roofTileMat);
      houseRoof.position.y = 2.4;
      houseRoof.rotation.y = Math.PI / 4;
      houseRoof.castShadow = !isSoftwareGl;
      hg.add(houseRoof);

      // Chimney
      const chimGeo = new THREE.BoxGeometry(0.35, 0.8, 0.35);
      const chimMat = new THREE.MeshStandardMaterial({ color: 0x78716c });
      const chim = new THREE.Mesh(chimGeo, chimMat);
      chim.position.set(0.6, 2.5, 0.4);
      hg.add(chim);

      townGroup.add(hg);
    });
    terrainGroup.add(townGroup);

    // F. El Parque de la Convivencia (Playground, Pond, Trees)
    const parkGroup = new THREE.Group();
    parkGroup.position.set(0, 0, -4);

    // Park Pond
    const pondGeo = new THREE.CylinderGeometry(2.8, 2.8, 0.1, 16);
    const pondMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.4 });
    const pond = new THREE.Mesh(pondGeo, pondMat);
    pond.position.set(2, 0.05, -1);
    parkGroup.add(pond);

    // Park Bench
    const benchGroup = new THREE.Group();
    benchGroup.position.set(0, 0, 1.5);
    const benchWoodGeo = new THREE.BoxGeometry(1.5, 0.1, 0.5);
    const benchMat = new THREE.MeshStandardMaterial({ color: 0xb45309 });
    const benchSeat = new THREE.Mesh(benchWoodGeo, benchMat);
    benchSeat.position.y = 0.45;
    benchGroup.add(benchSeat);
    const benchBack = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.4, 0.08), benchMat);
    benchBack.position.set(0, 0.7, -0.22);
    benchGroup.add(benchBack);
    parkGroup.add(benchGroup);

    // Colorful Slide
    const slideGeo = new THREE.BoxGeometry(0.8, 1.6, 2.2);
    const slideMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
    const slide = new THREE.Mesh(slideGeo, slideMat);
    slide.position.set(-2, 0.8, 1);
    slide.rotation.x = 0.4;
    parkGroup.add(slide);

    terrainGroup.add(parkGroup);

    // G. El Jardín de la Calma (Fountain, Flowers, Gentle Pergola)
    const gardenGroup = new THREE.Group();
    gardenGroup.position.set(12, 0, -12);

    // Stone Fountain
    const fountainBaseGeo = new THREE.CylinderGeometry(2.2, 2.4, 0.6, 16);
    const fountainMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4 });
    const fBase = new THREE.Mesh(fountainBaseGeo, fountainMat);
    fBase.position.y = 0.3;
    fBase.castShadow = !isSoftwareGl;
    gardenGroup.add(fBase);

    const fTierGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.4, 16);
    const fTier = new THREE.Mesh(fTierGeo, fountainMat);
    fTier.position.y = 0.7;
    gardenGroup.add(fTier);

    const fWaterGeo = new THREE.SphereGeometry(0.4, 12, 12);
    const fWaterMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.5 });
    const fWater = new THREE.Mesh(fWaterGeo, fWaterMat);
    fWater.position.y = 1.0;
    gardenGroup.add(fWater);

    // Circular concentric flowerbeds
    const flowerColors = [0xf43f5e, 0xa855f7, 0xfacc15, 0x38bdf8];
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
      const fx = Math.cos(angle) * 3.4;
      const fz = Math.sin(angle) * 3.4;
      const flowerGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const flowerMat = new THREE.MeshStandardMaterial({
        color: flowerColors[Math.floor(angle * 2) % flowerColors.length],
        roughness: 0.5
      });
      const fl = new THREE.Mesh(flowerGeo, flowerMat);
      fl.position.set(fx, 0.35, fz);
      gardenGroup.add(fl);
    }
    terrainGroup.add(gardenGroup);

    // H. La Plaza Comunitaria (Central Gazebo / Kiosk & Assembly Tiles)
    const plazaGroup = new THREE.Group();
    plazaGroup.position.set(10, 0, 10);

    // Octagonal Plaza Floor
    const plazaFloorGeo = new THREE.CylinderGeometry(4.5, 4.8, 0.1, 8);
    const plazaFloorMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.7 });
    const plazaFloor = new THREE.Mesh(plazaFloorGeo, plazaFloorMat);
    plazaFloor.position.y = 0.05;
    plazaFloor.receiveShadow = !isSoftwareGl;
    plazaGroup.add(plazaFloor);

    // Central Community Pavilion / Gazebo
    const gazeboGroup = new THREE.Group();
    for (let c = 0; c < 6; c++) {
      const pillarAngle = (c * Math.PI * 2) / 6;
      const px = Math.cos(pillarAngle) * 2.0;
      const pz = Math.sin(pillarAngle) * 2.0;
      const pillarGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.4, 8);
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.3 });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(px, 1.2, pz);
      gazeboGroup.add(pillar);
    }
    const gazeboRoofGeo = new THREE.ConeGeometry(2.6, 1.4, 6);
    const gazeboRoofMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.4 });
    const gazeboRoof = new THREE.Mesh(gazeboRoofGeo, gazeboRoofMat);
    gazeboRoof.position.y = 2.9;
    gazeboRoof.castShadow = !isSoftwareGl;
    gazeboGroup.add(gazeboRoof);
    plazaGroup.add(gazeboGroup);
    terrainGroup.add(plazaGroup);

    // I. Zona de Aventuras y Descubrimientos (Tower, Tents, Forest Outcrops)
    const adventureGroup = new THREE.Group();
    adventureGroup.position.set(0, 0, 18);

    // Observation Tower
    const towerLegsGeo = new THREE.BoxGeometry(0.2, 4.5, 0.2);
    const towerWoodMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.7 });
    [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1]
    ].forEach(([tx, tz]) => {
      const leg = new THREE.Mesh(towerLegsGeo, towerWoodMat);
      leg.position.set(tx * 0.8, 2.25, tz * 0.8);
      adventureGroup.add(leg);
    });

    const platformGeo = new THREE.BoxGeometry(2.2, 0.2, 2.2);
    const platform = new THREE.Mesh(platformGeo, towerWoodMat);
    platform.position.y = 4.5;
    adventureGroup.add(platform);

    const platformRoof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.2, 4), towerWoodMat);
    platformRoof.position.y = 5.8;
    adventureGroup.add(platformRoof);

    // Camping Tents
    const tentGeo = new THREE.ConeGeometry(1.2, 1.5, 4);
    const tentMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.6 });
    const tent1 = new THREE.Mesh(tentGeo, tentMat);
    tent1.position.set(-2.5, 0.75, -1.5);
    tent1.rotation.y = Math.PI / 4;
    adventureGroup.add(tent1);

    const tentMat2 = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.6 });
    const tent2 = new THREE.Mesh(tentGeo, tentMat2);
    tent2.position.set(2.4, 0.75, -1);
    tent2.rotation.y = Math.PI / 4;
    adventureGroup.add(tent2);

    terrainGroup.add(adventureGroup);

    // J. Foliage & Low-Poly Stylized Trees across the Island
    const treeCoords = [
      [-18, -4],
      [-16, 2],
      [-6, -14],
      [-4, -18],
      [4, -16],
      [16, -4],
      [18, 4],
      [14, 16],
      [-8, 16],
      [-16, 12],
      [2, 12],
      [-4, 8],
      [8, -8],
      [-14, -16],
      [18, -14]
    ];

    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.35, 1.4, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
    const foliageGeo = new THREE.ConeGeometry(1.4, 2.2, 6);
    const foliageMat1 = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.7 });
    const foliageMat2 = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7 });

    treeCoords.forEach(([tx, tz], idx) => {
      const tree = new THREE.Group();
      tree.position.set(tx, 0, tz);

      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 0.7;
      trunk.castShadow = !isSoftwareGl;
      tree.add(trunk);

      const fol = new THREE.Mesh(foliageGeo, idx % 2 === 0 ? foliageMat1 : foliageMat2);
      fol.position.y = 2.2;
      fol.castShadow = !isSoftwareGl;
      tree.add(fol);

      const topFol = new THREE.Mesh(new THREE.ConeGeometry(1.0, 1.6, 6), fol.material);
      topFol.position.y = 3.1;
      topFol.castShadow = !isSoftwareGl;
      tree.add(topFol);

      terrainGroup.add(tree);
    });

    // K. Floating Clouds in the Sky
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      transparent: true,
      opacity: 0.9
    });
    const cloudsList: THREE.Group[] = [];

    const cloudPositions = [
      [-16, 16, -12],
      [14, 18, -16],
      [-8, 19, 14],
      [16, 17, 10],
      [0, 20, 0]
    ];

    cloudPositions.forEach(([cx, cy, cz]) => {
      const cloud = new THREE.Group();
      cloud.position.set(cx, cy, cz);
      for (let puff = 0; puff < 4; puff++) {
        const puffGeo = new THREE.SphereGeometry(1.2 + Math.random() * 0.6, 8, 8);
        const puffMesh = new THREE.Mesh(puffGeo, cloudMat);
        puffMesh.position.set((puff - 1.5) * 1.2, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.8);
        cloud.add(puffMesh);
      }
      scene.add(cloud);
      cloudsList.push(cloud);
    });
    animatedObjectsRef.current.clouds = cloudsList;

    // L. Interactive 3D Zone Markers / Pins
    const zoneMarkers: { mesh: THREE.Group; zoneId: ZoneId; initialY: number }[] = [];

    (Object.keys(GAME_ZONES) as ZoneId[]).forEach((zid) => {
      const zone = GAME_ZONES[zid];
      const markerGroup = new THREE.Group();
      const [zx, , zz] = zone.position3D;
      const initialY = 3.6;
      markerGroup.position.set(zx, initialY, zz);
      markerGroup.userData = { isZoneMarker: true, zoneId: zid };

      // Pin Body (Diamond / Octahedron jewel)
      const jewelGeo = new THREE.OctahedronGeometry(0.7, 0);
      const jewelMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(zone.color),
        roughness: 0.2,
        metalness: 0.4,
        emissive: new THREE.Color(zone.color),
        emissiveIntensity: 0.25
      });
      const jewel = new THREE.Mesh(jewelGeo, jewelMat);
      jewel.castShadow = !isSoftwareGl;
      markerGroup.add(jewel);

      // Light beam / base ring
      const ringGeo = new THREE.RingGeometry(0.9, 1.2, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(zone.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -initialY + 0.1;
      markerGroup.add(ring);

      scene.add(markerGroup);
      zoneMarkers.push({ mesh: markerGroup, zoneId: zid, initialY });
    });
    animatedObjectsRef.current.zoneMarkers = zoneMarkers;

    // M. Procedural Stylized Character Avatars in the World
    const charactersList: { mesh: THREE.Group; characterId: CharacterId; initialY: number }[] = [];

    const characterPositions: { id: CharacterId; x: number; z: number; color: number }[] = [
      { id: 'nico', x: -1, z: -2.5, color: 0x0284c7 },
      { id: 'sofia', x: 1, z: -2.5, color: 0xf59e0b },
      { id: 'luna', x: 10, z: -10, color: 0x8b5cf6 },
      { id: 'samuel', x: -10, z: -7, color: 0x10b981 },
      { id: 'guia', x: 8, z: 8, color: 0x0d9488 }
    ];

    characterPositions.forEach((cp) => {
      const charGroup = new THREE.Group();
      charGroup.position.set(cp.x, 0, cp.z);
      charGroup.userData = { isCharacter: true, characterId: cp.id };

      // Body (Coat / Vest)
      const bodyGeo = new THREE.CapsuleGeometry(0.4, 0.8, 4, 8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: cp.color, roughness: 0.5 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.9;
      body.castShadow = !isSoftwareGl;
      charGroup.add(body);

      // Head
      const headGeo = new THREE.SphereGeometry(0.38, 12, 12);
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xffedd5, roughness: 0.6 });
      const head = new THREE.Mesh(headGeo, skinMat);
      head.position.y = 1.75;
      head.castShadow = !isSoftwareGl;
      charGroup.add(head);

      // Character-specific accessories:
      if (cp.id === 'nico') {
        // Cap & backpack
        const capGeo = new THREE.ConeGeometry(0.42, 0.25, 8);
        const capMat = new THREE.MeshStandardMaterial({ color: 0x78350f });
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.y = 2.05;
        charGroup.add(cap);
      } else if (cp.id === 'luna') {
        // Artist beret / starry accessory
        const beretGeo = new THREE.CylinderGeometry(0.45, 0.35, 0.15, 8);
        const beretMat = new THREE.MeshStandardMaterial({ color: 0xc084fc });
        const beret = new THREE.Mesh(beretGeo, beretMat);
        beret.position.set(0.08, 2.08, 0);
        beret.rotation.z = -0.2;
        charGroup.add(beret);
      } else if (cp.id === 'samuel') {
        // Sporty collar
        const collarGeo = new THREE.TorusGeometry(0.32, 0.1, 6, 12);
        const collarMat = new THREE.MeshStandardMaterial({ color: 0x059669 });
        const collar = new THREE.Mesh(collarGeo, collarMat);
        collar.rotation.x = Math.PI / 2;
        collar.position.y = 1.4;
        charGroup.add(collar);
      } else if (cp.id === 'sofia') {
        // Friendship scarf / ribbon
        const scarfGeo = new THREE.TorusGeometry(0.35, 0.12, 6, 12);
        const scarfMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
        const scarf = new THREE.Mesh(scarfGeo, scarfMat);
        scarf.rotation.x = Math.PI / 2;
        scarf.position.y = 1.4;
        charGroup.add(scarf);
      } else if (cp.id === 'guia') {
        // Mentor book in hands
        const bookGeo = new THREE.BoxGeometry(0.4, 0.5, 0.15);
        const bookMat = new THREE.MeshStandardMaterial({ color: 0x0f766e });
        const book = new THREE.Mesh(bookGeo, bookMat);
        book.position.set(0.3, 1.1, 0.35);
        book.rotation.y = -0.3;
        charGroup.add(book);
      }

      scene.add(charGroup);
      charactersList.push({ mesh: charGroup, characterId: cp.id, initialY: 0 });
    });
    animatedObjectsRef.current.characters = charactersList;

    setLoading(false);

    // 6. Animation Loop (Paced for Software GL or rAF for GPU)
    let clock = new THREE.Clock();

    const tick = () => {
      if (isDisposed) return;
      const elapsedTime = clock.getElapsedTime();

      // Camera Damping towards target
      if (cameraRef.current) {
        cameraRef.current.position.lerp(targetCameraPos.current, 0.04);
        currentLookAt.current.lerp(targetLookAt.current, 0.04);
        cameraRef.current.lookAt(currentLookAt.current);
      }

      // Rotate Wind Turbine
      if (animatedObjectsRef.current.windTurbine) {
        animatedObjectsRef.current.windTurbine.rotation.z -= 0.025;
      }

      // Bobbing Zone Markers
      animatedObjectsRef.current.zoneMarkers.forEach((zm, i) => {
        zm.mesh.position.y = zm.initialY + Math.sin(elapsedTime * 2.5 + i) * 0.25;
        zm.mesh.rotation.y += 0.015;
      });

      // Subtle breathing idle on characters
      animatedObjectsRef.current.characters.forEach((ch, i) => {
        ch.mesh.scale.y = 1.0 + Math.sin(elapsedTime * 2.0 + i) * 0.025;
      });

      // Drifting clouds
      animatedObjectsRef.current.clouds.forEach((cl, i) => {
        cl.position.x += 0.008 * (i % 2 === 0 ? 1 : 1.2);
        if (cl.position.x > 32) cl.position.x = -32;
      });

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        // Schedule paced next frame on software gl
        frameId = window.setTimeout(tick, 50);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    // 7. Window Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 8. Cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', handleResize);

      // Dispose ThreeJS resources
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Raycasting for Clicks and Hovers & Drag to Orbit
  const updateCameraFromOrbit = useCallback(() => {
    const r = orbitAngle.current.radius;
    const phi = orbitAngle.current.phi;
    const theta = orbitAngle.current.theta;
    const lx = targetLookAt.current.x;
    const ly = targetLookAt.current.y;
    const lz = targetLookAt.current.z;

    const x = lx + r * Math.sin(phi) * Math.sin(theta);
    const y = ly + r * Math.cos(phi);
    const z = lz + r * Math.sin(phi) * Math.cos(theta);
    targetCameraPos.current.set(x, y, z);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    isPointerDownRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    hasDraggedRef.current = false;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (isPointerDownRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      if (Math.hypot(dx, dy) > 4) {
        hasDraggedRef.current = true;
      }

      orbitAngle.current.theta -= dx * 0.007;
      orbitAngle.current.phi = Math.max(0.35, Math.min(Math.PI / 2.3, orbitAngle.current.phi - dy * 0.005));
      updateCameraFromOrbit();
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.current.setFromCamera(mouse.current, cameraRef.current);
    const intersects = raycaster.current.intersectObjects(sceneRef.current.children, true);

    let foundZone: ZoneId | null = null;
    let foundChar: CharacterId | null = null;

    for (const hit of intersects) {
      let curr: THREE.Object3D | null = hit.object;
      while (curr && curr !== sceneRef.current) {
        if (curr.userData?.isZoneMarker && curr.userData.zoneId) {
          foundZone = curr.userData.zoneId as ZoneId;
          break;
        }
        if (curr.userData?.isCharacter && curr.userData.characterId) {
          foundChar = curr.userData.characterId as CharacterId;
          break;
        }
        curr = curr.parent;
      }
      if (foundZone || foundChar) break;
    }

    setHoveredZone(foundZone);
    setHoveredCharacter(foundChar);
  }, [updateCameraFromOrbit]);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      isPointerDownRef.current = false;

      // Only perform click action if the user didn't drag to orbit
      if (!hasDraggedRef.current) {
        if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;
        const rect = mountRef.current.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.current.setFromCamera(mouse.current, cameraRef.current);
        const intersects = raycaster.current.intersectObjects(sceneRef.current.children, true);

        for (const hit of intersects) {
          let curr: THREE.Object3D | null = hit.object;
          while (curr && curr !== sceneRef.current) {
            if (curr.userData?.isZoneMarker && curr.userData.zoneId) {
              audioService.playClick();
              onSelectZone(curr.userData.zoneId as ZoneId);
              return;
            }
            if (curr.userData?.isCharacter && curr.userData.characterId) {
              audioService.playClick();
              if (onSelectCharacter) onSelectCharacter(curr.userData.characterId as CharacterId);
              return;
            }
            curr = curr.parent;
          }
        }
      }
    },
    [onSelectZone, onSelectCharacter]
  );

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    orbitAngle.current.radius = Math.max(16, Math.min(60, orbitAngle.current.radius + e.deltaY * 0.035));
    updateCameraFromOrbit();
  }, [updateCameraFromOrbit]);

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden select-none bg-sky-100">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Loading state indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-sky-50 text-slate-700">
          <div className="text-center">
            <div className="text-lg font-bold">Cargando El Mundo de las Soluciones...</div>
            <div className="text-sm text-slate-500 mt-1">Construyendo el universo 3D...</div>
          </div>
        </div>
      )}

      {/* Floating Hover Cards for Zones */}
      {hoveredZone && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <div className="bg-slate-900/90 text-white px-5 py-2.5 rounded-xl shadow-lg border border-slate-700 backdrop-blur-sm text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Zona Explorable</div>
            <div className="text-base font-bold text-white">{GAME_ZONES[hoveredZone].name}</div>
            <div className="text-xs text-slate-300 mt-0.5">{GAME_ZONES[hoveredZone].tagline}</div>
          </div>
        </div>
      )}

      {/* Floating Hover Cards for Characters */}
      {hoveredCharacter && !hoveredZone && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <div className="bg-slate-900/90 text-white px-5 py-2.5 rounded-xl shadow-lg border border-slate-700 backdrop-blur-sm text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Personaje Amigo</div>
            <div className="text-base font-bold text-white">{CHARACTERS[hoveredCharacter].name}</div>
            <div className="text-xs text-slate-300 mt-0.5">{CHARACTERS[hoveredCharacter].role}</div>
          </div>
        </div>
      )}

      {/* Interactive Helper Hint */}
      <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-slate-200/80 rounded-lg text-xs text-slate-700 shadow-sm pointer-events-none">
        <span className="font-semibold text-slate-900">Interacción 3D:</span> Haz clic en los diamantes flotantes o en los personajes para explorar.
      </div>
    </div>
  );
};
