import * as THREE from 'three';

/**
 * Simple first-person controls with WASD and mouse look.
 * Uses PointerLock for immersive experience.
 */
export function createControls(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let canJump = false;

    const controls = {
        update: () => {
            // Basic movement - will be expanded
        }
    };

    // Pointer lock
    domElement.addEventListener('click', () => {
        domElement.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === domElement) {
            console.log('Pointer locked');
        }
    });

    // Keyboard controls
    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'KeyW': moveForward = true; break;
            case 'KeyS': moveBackward = true; break;
            case 'KeyA': moveLeft = true; break;
            case 'KeyD': moveRight = true; break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'KeyW': moveForward = false; break;
            case 'KeyS': moveBackward = false; break;
            case 'KeyA': moveLeft = false; break;
            case 'KeyD': moveRight = false; break;
        }
    });

    // Mouse look
    let yaw = 0;
    let pitch = 0;
    const sensitivity = 0.002;

    document.addEventListener('mousemove', (event) => {
        if (document.pointerLockElement === domElement) {
            yaw -= event.movementX * sensitivity;
            pitch -= event.movementY * sensitivity;
            pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));

            camera.rotation.set(pitch, yaw, 0);
        }
    });

    // Simple movement update
    const speed = 5.0;
    controls.update = () => {
        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if (moveForward || moveBackward) velocity.z = direction.z * speed * 0.016; // delta approx
        else velocity.z = 0;
        if (moveLeft || moveRight) velocity.x = direction.x * speed * 0.016;
        else velocity.x = 0;

        // Apply to camera (simple, no collision yet)
        camera.translateX(velocity.x);
        camera.translateZ(velocity.z);
    };

    return controls;
}