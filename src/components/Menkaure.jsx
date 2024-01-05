import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

export function Menkaure({ page }) {
  const { nodes, materials } = useGLTF(
    "./pyramid_of_menkaure_giza_pyramid_complex_egypt.glb"
  );

  const model = useRef();
  const [shouldRotate, setShouldRotate] = useState(false);

  useFrame((state, delta) => {
    if (page == 0) {
      console.log(model.current.rotation);
      if (model.current.rotation.x > 0) {
        setShouldRotate(true);
      }
      if (model.current.rotation.x < 0) {
        setShouldRotate(false);
      }
      if (shouldRotate) {
        model.current.rotation.x -= delta * 0.06;
      } else {
        model.current.rotation.y += delta * 0.06;
      }
    }

    if (page == 1) {
      setShouldRotate(true);
      if (model.current.rotation.x >= 1.3) {
        setShouldRotate(false);
      }
      if (shouldRotate) {
        model.current.rotation.x += delta * 0.06;
      }
    }

    if (page == 2) {
      if (model.current.rotation.x > 0) {
        setShouldRotate(true);
      }
      if (model.current.rotation.x < 0) {
        setShouldRotate(false);
      }

      if (shouldRotate) {
        model.current.rotation.x -= delta * 0.06;
      }
    }
  });

  useThree(({ camera }) => {
    if (page == 1) {
      camera.position.x = 0;
      camera.position.y = 2;
      camera.position.z = 8;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <group dispose={null}>
        {page == 2 && <OrbitControls maxPolarAngle={Math.PI / 2} />}
        {/* Add 'target' to set the pivot point in the center of the mesh*/}
        <group ref={model} target={[0, 0, 0]}>
          <Center rotation={[-1.3, -1.93, -0.91]} scale={0.03}>
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
    </>
  );
}

useGLTF.preload("./pyramid_of_menkaure_giza_pyramid_complex_egypt.glb");
