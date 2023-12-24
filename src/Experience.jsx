import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";

function App() {
  return (
    <>
      <OrbitControls />
      <Lights />
      <mesh>
        <boxGeometry args={[3, 3]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </>
  );
}

export default App;
