import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Menkaure() {
  const { nodes, materials } = useGLTF(
    "./pyramid_of_menkaure_giza_pyramid_complex_egypt.glb"
  );

  const model = useRef();

  useFrame((state, delta) => {
    model.current.rotation.y += delta * 0.08;
  });

  return (
    <group dispose={null}>
      {/* Add 'target' to set the pivot point in the center of the mesh*/}
      <group ref={model} target={[0, 0, 0]}>
        <Center rotation={[-1.3, -1.93, -0.91]} scale={0.05}>
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
