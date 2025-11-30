"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const HeroModel = (props: any) => {
  const ref = useRef<any>(null);
  const gltf = useGLTF("/assets/computer_desk.glb");

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.09; // Slow rotation
  });

  return (
    <group ref={ref} scale={1.5} position={[0, -1, 0]}>
      <primitive object={gltf.scene} {...props} />
    </group>
  );
};

export default HeroModel;
