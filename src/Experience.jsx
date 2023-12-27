import { Stars } from "@react-three/drei";
import Lights from "./components/Lights";
import { Menkaure } from "./components/Menkaure";

function App() {
  return (
    <>
      <Lights />
      <Menkaure />
      <Stars
        radius={100}
        depth={1}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}

export default App;
