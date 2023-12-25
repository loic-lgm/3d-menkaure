import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export function Menkaure() {
  const { nodes, materials } = useGLTF(
    "./pyramid_of_menkaure_giza_pyramid_complex_egypt.glb"
  );

  const model = useRef();

  useFrame((state, delta) => {
    model.current.rotation.y += delta * 0.2;
  });

  return (
    <group dispose={null}>
      <group ref={model}>
        <Center rotation={[-1.47, -1.93, -0.91]} scale={0.05}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
          />
        </Center>
      </group>
    </group>
  );
}

useGLTF.preload("./pyramid_of_menkaure_giza_pyramid_complex_egypt.glb");
