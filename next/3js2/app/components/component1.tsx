"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";


function RotatingBox() {
  const meshRef = useRef<Mesh>(null);

  // Rotate the box on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0; // Rotate on the X-axis
      meshRef.current.rotation.y += 0.0; // Rotate on the Y-axis
      meshRef.current.rotation.z += 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[3, 7, 3]} /> {/* Box dimensions: width, height, depth */}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}


export default function Component1() {
  return (
    <>
    <div className="w-screen h-screen overflow-hidden">
      <Canvas>
        <PerspectiveCamera
          makeDefault // Sets this as the default camera
          position={[10, 5, 10]} // Position of the camera
          fov={40} // Field of view
        />

        {/* Add lighting */}

        {/* Ambient Light for overall brightness */}
        <ambientLight intensity={0.4} />

        {/* Point Light for 3D shading */}
        <pointLight position={[5, 5, 5]} intensity={1} />

        {/* Directional Light for shadows */}
        <directionalLight position={[10, 5, 1]} intensity={0.5} />



        {/* Add the rotating box */}
        <RotatingBox />

        {/* Add Orbit Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  </>
  )
}

