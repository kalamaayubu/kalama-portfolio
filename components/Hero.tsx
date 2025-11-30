"use client";

import { Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroModel from "./HeroModel";
import { Suspense } from "react";

const HeroSection = () => {
  return (
    <div className="bg-transparent h-96 items-start">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <HeroModel />
          </Stage>

          {/* ⭐ Add user drag + rotation interaction */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
          />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HeroSection;
