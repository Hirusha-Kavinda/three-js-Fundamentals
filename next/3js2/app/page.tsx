"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./components/Model";
import * as THREE from "three";

export default function Scene() {
  const lightRef = useRef<THREE.PointLight>(null); // Ref for the cursor-following light

  // Function to update light position based on mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    if (lightRef.current) {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1; // Normalize X between -1 and 1
      const y = -(clientY / window.innerHeight) * 2 + 1; // Normalize Y between -1 and 1
      lightRef.current.position.set(x * 10, y * 10, 5); // Scale the movement
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove); // Attach mousemove listener
    return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup listener
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[-1, 0, 3]} fov={80} />

        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={0} />
        <pointLight ref={lightRef} intensity={5} distance={35} decay={2} color="white" />

        {/* Model */}
        <Model position={[0, -1, 0]} />

        {/* Controls */}
        <OrbitControls
        
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
