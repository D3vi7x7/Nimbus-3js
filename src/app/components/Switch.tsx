import * as THREE from "three";
import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";

// Type definitions
type GLTFResult = GLTF & {
  nodes: {
    Single_Switch_Mesh_1: THREE.Mesh;
    Single_Switch_Mesh_2: THREE.Mesh;
    Single_Switch_Mesh_3: THREE.Mesh;
    Single_Switch_Mesh_4: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};

type SwitchProps = {
  color: string;
  keyType: string;
}

export function Switch({color,keyType}: SwitchProps) {
  const { nodes } = useGLTF("/switch.gltf") as unknown as GLTFResult;


  const stemRef = useRef<THREE.Mesh>(null);

  const audio = useRef<HTMLAudioElement | null>(null);
  if(!audio.current){
    audio.current = typeof window !== "undefined" ? new Audio(`/sounds/${keyType}.mp3`) : null;
  }

  const handlePointerDown = () => {
    if(stemRef.current){
      const stem = stemRef.current;

      gsap.to(stem.position,{
        z: 0.005,
        duration: 0.08,
        ease: "power2.inOut"
      })
    }

    if(audio.current){
      audio.current.currentTime = 0;
      audio.current.play();
    }
  }

  const handlePointerUp = () => {
    if(stemRef.current){
      const stem = stemRef.current;

      gsap.to(stem.position,{
        z: 0,
        duration: 0.08,
        ease: "power2.inOut"
      })
    }
  }

  return (
    <group scale={10} rotation={[Math.PI / 2, 0, 0]}
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
    onPointerLeave={handlePointerUp}>
      {/* Switch housing */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Single_Switch_Mesh_1.geometry}
      >
        <meshStandardMaterial color="#999999" roughness={0.7} />
      </mesh>

      {/* Gold contacts */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Single_Switch_Mesh_2.geometry}
      >
        <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={1} />
      </mesh>

      {/* Colored stem */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Single_Switch_Mesh_3.geometry}
        ref={stemRef}
      >
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>

      {/* Switch base */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Single_Switch_Mesh_4.geometry}
      >
        <meshStandardMaterial color="#999999" roughness={0.7} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/switch.gltf");
