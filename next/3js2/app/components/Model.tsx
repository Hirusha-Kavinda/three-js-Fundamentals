"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export default function Model(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/models/untitled.glb") as any;

  return (
    <group {...props} dispose={null}>
      {/* Suzanne Mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={materials["Material.001"]}
        position={[0.125, 0.578, -0.36]}
        rotation={[0.006, -0.001, -0.021]}
      />
      {/* Cone Mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["Material.002"]}
        position={[0.219, 2.321, -0.405]}
        rotation={[0.064, -0.014, -0.069]}
        scale={[0.462, 0.875, 0.462]}
      />
    </group>
  );
}

useGLTF.preload("/models/untitled.glb");
