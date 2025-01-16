"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Canvas with SSR disabled
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});

function Threefiber1() {
  return (
    <DynamicCanvas>
       hi
    </DynamicCanvas>
  );
}

export default Threefiber1;
