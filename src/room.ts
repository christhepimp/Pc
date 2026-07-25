import * as THREE from 'three';

/**
 * Builds the 3D computer room geometry.
 * Inspired by retro cartoon computer rooms - wooden floors, old CRT monitors, etc.
 * Modular for future additions.
 */
export function createRoom(scene: THREE.Scene) {
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Wood color
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Walls
    const wallMaterial = new THREE.MeshLambertMaterial({ color: 0xA9A9A9 }); // Gray walls

    // Back wall
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMaterial);
    backWall.position.set(0, 4, -10);
    backWall.receiveShadow = true;
    scene.add(backWall);

    // Left wall
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-10, 4, 0);
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(10, 4, 0);
    rightWall.receiveShadow = true;
    scene.add(rightWall);

    // Ceiling
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshLambertMaterial({ color: 0x555555 }));
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 8, 0);
    scene.add(ceiling);

    // Add a simple desk or computer setup placeholder
    const deskGeometry = new THREE.BoxGeometry(4, 0.8, 2);
    const deskMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(0, 0.4, -5);
    desk.castShadow = true;
    desk.receiveShadow = true;
    scene.add(desk);

    // Monitor placeholder (CRT style box)
    const monitorGeo = new THREE.BoxGeometry(1.5, 1, 0.5);
    const monitorMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const monitor = new THREE.Mesh(monitorGeo, monitorMat);
    monitor.position.set(0, 1.8, -5.2);
    monitor.castShadow = true;
    scene.add(monitor);

    // Screen glow
    const screenLight = new THREE.PointLight(0x00ffaa, 2, 5);
    screenLight.position.set(0, 1.8, -4.8);
    scene.add(screenLight);

    console.log('Room created with basic elements.');
    return { floor, desk, monitor }; // For future reference
}