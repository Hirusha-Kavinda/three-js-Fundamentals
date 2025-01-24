"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AnimatedBoxProps {
  color: string; // Color of the box
  duration: number; // Duration of the animation
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ color, duration }) => {
  const boxRef = useRef<HTMLDivElement>(null); // Ref to the box element

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: "90vw", // Move to 90% of the viewport width
        rotation: 360, // Rotate the box
        borderRadius: "50%", // Animate to a circle
        width: "50px", // Adjust the width for a circle
        height: "50px", // Adjust the height for a circle
        duration: duration, // Use dynamic duration
        ease: "power2.inOut", // Smooth easing
        yoyo: true, // Go back to the original state
        repeat: -1, // Infinite repeat
      });
    }
  }, [duration]); // Re-run animation if duration changes

  return (
    <div
      ref={boxRef} // Attach the ref
      style={{
        width: "100px", // Initial width
        height: "100px", // Initial height
        backgroundColor: color, // Dynamic color
        borderRadius: "0%", // Initially a square
        margin: "20px 0", // Add spacing between boxes
      }}
    />
  );
};

export default AnimatedBox;
