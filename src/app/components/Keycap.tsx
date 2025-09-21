import * as THREE from "three";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Keycap: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};

type keycapProps = {
    position? : [number,number,number],
    rotation? : [number,number,number],
    texture?: number
}

export function Keycap({
    position,rotation = [0,0,0],
    texture = 0
}:keycapProps) {

    const textures = [
    "/keycap_uv-1.png",
    "/keycap_uv-2.png",
    "/keycap_uv-3.png",
    "/keycap_uv-4.png",
    "/keycap_uv-5.png",
    "/keycap_uv-6.png",
    "/keycap_uv-7.png",
    ]

    const uvtexture = textures[texture];

    const keycapTexture = useTexture(uvtexture);
    keycapTexture.colorSpace = THREE.SRGBColorSpace;

  const { nodes } = useGLTF("/keycap.gltf") as unknown as GLTFResult;

  const placeholderMat = new THREE.MeshStandardMaterial({
    map: keycapTexture,
    roughness: 0.11,
  });

  return (
    <Float rotationIntensity={7} position={position} rotation={rotation}>
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycap.geometry}
        material={placeholderMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
    </Float>
  );
}
