"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";

function Laptop() {
  const screenRef = useRef<Mesh>(null);
  const baseRef = useRef<Mesh>(null);

  return (
    <group position={[0, 0, 0]}>
      {/* Laptop Base */}
      <mesh ref={baseRef} position={[0, -0.5, 0]}>
        <boxGeometry args={[6, 0.5, 4]} /> {/* Width, height, depth */}
        <meshStandardMaterial color="#555555" /> {/* Base color */}
      </mesh>

      {/* Laptop Screen */}
      <mesh ref={screenRef} position={[0, 2.5, -2]}>
        <boxGeometry args={[6, 4, 0.2]} /> {/* Width, height, depth */}
        <meshStandardMaterial color="#000000" /> {/* Screen frame color */}
      </mesh>

      {/* Screen Display */}
      <mesh position={[0, 2.5, -1.9]}>
        <planeGeometry args={[5.8, 3.8]} /> {/* Slightly smaller than screen frame */}
        <meshStandardMaterial color="#1E90FF" /> {/* Blue screen */}
      </mesh>

      {/* Hinge */}
      <mesh position={[0, 0, -2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function LaptopScene() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[10, 5, 10]} fov={40} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[10, 5, 1]} intensity={0.5} />
        <Laptop />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
