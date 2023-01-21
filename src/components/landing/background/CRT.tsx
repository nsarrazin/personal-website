import * as THREE from "three";
import React from "react";
import {
  useGLTF,
  RenderTexture,
  PerspectiveCamera,
  Text,
  Plane,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import { renderSVG } from './renderSVG'
import { Euler, Vector3 } from "three";

type GLTFResult = GLTF & {
  nodes: {
    ["Node-Mesh"]: THREE.Mesh;
    ["Node-Mesh_1"]: THREE.Mesh;
    ["Node-Mesh_2"]: THREE.Mesh; // screen
    ["Node-Mesh_3"]: THREE.Mesh; // side vents
  };
  materials: {
    mat15: THREE.MeshStandardMaterial;
    mat17: THREE.MeshStandardMaterial;
    mat16: THREE.MeshStandardMaterial; // screen
    mat22: THREE.MeshStandardMaterial; // side vents
  };
};

interface ScreenProps {
  children: any;
  [x: string | number | symbol]: unknown;
}

function Screen({ children, ...props }: ScreenProps) {
  const [o] = React.useState(() => new THREE.Object3D())

  return (
    <group {...props} >
      <Plane args={[1, 1, 1]} scale={[0.5, 0.5, 0.5]} position={[0.01, 0.18, -0.35]} rotation={[0, -Math.PI, 0]}>
        <meshPhysicalMaterial emissive="#CFDBF5">
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshPhysicalMaterial>
      </Plane>
      <primitive object={o} position={[0, 0.2, -1]} />
      <spotLight position={[0, 0.2, -0.5]} target={o} color={"#CFDBF5"} intensity={0.5} />
    </group>
  );
}

function ScreenText() {
  return (
    <Screen>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={["#CFDBF5"]} />
    </Screen>
  );
}

interface ModelProps extends GroupProps {
  newRef: React.ForwardedRef<THREE.Group>
}

export function CRT(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/crt-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null} ref={props.newRef} >
      <mesh
        geometry={nodes["Node-Mesh"].geometry}
        material={materials.mat15}
      />
      <mesh
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat17}
      />
      <ScreenText/>
      <mesh
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat22}
      />
    </group>
  );
}

export default CRT;
useGLTF.preload("/crt-transformed.glb");
