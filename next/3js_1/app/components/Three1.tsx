'use client';

import { listeners } from 'process';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const ThreeScene1 = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#F0F0F0');

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;


        /*
                // Create and add a cube object
                const geometry = new THREE.BoxGeometry(2.5,5,0.5);
                const material = new THREE.MeshLambertMaterial({
                    color: '#468585',
                    emissive: '#468585',
                });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);  
                */



        // Create the phone body (rectangle shape)
        const phoneBodyGeometry = new THREE.BoxGeometry(2.5, 5, 0.2); // Adjust dimensions for realistic proportions
        const phoneBodyMaterial = new THREE.MeshLambertMaterial({
            color: '#000000', // Black color for the phone body
            emissive: '#333333', // Slight emissive for a shiny look
        });
        const phoneBody = new THREE.Mesh(phoneBodyGeometry, phoneBodyMaterial);
        scene.add(phoneBody);

        // Create the phone screen (slightly inset rectangle)
        const screenGeometry = new THREE.PlaneGeometry(2.3, 4.6); // Slightly smaller than the body
        const screenMaterial = new THREE.MeshBasicMaterial({
            color: '#1E90FF', // A blue color for the screen
        });
        const phoneScreen = new THREE.Mesh(screenGeometry, screenMaterial);
        phoneScreen.position.z = 0.12; // Move the screen slightly forward
        scene.add(phoneScreen);



        // Add light
     //   const light = new THREE.DirectionalLight(0X9CDBA6, 10); // Adjust intensity
     //   light.position.set(1, 1, 1); // x y z
     //   scene.add(light);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);



        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio)
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }


        // add orbitController

        const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = false;
        // controls.dampingFactor =false;
        controls.enableZoom = true;
        controls.enablePan = true;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube

            //phoneBody.rotation.x += 0.0001;
            //phoneBody.rotation.y += 0.01;

            //phoneScreen.rotation.x += 0.0001;
            //phoneScreen.rotation.y += 0.01;



            // Render the scene
            renderer.render(scene, camera);
        };
        animate();



        // Handle window resizing
        window.addEventListener('resize', (): void => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });




    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default ThreeScene1;
