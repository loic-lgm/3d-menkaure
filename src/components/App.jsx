import { Canvas } from "@react-three/fiber";
import { MainHeader } from "./MainHeader";
import Experience from "../Experience";
import { BottomDescription } from "./BottomDescription";
import ScrollButton from "./ScrollButton";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const topButtonRef = useRef();
  const bottomButtonRef = useRef();

  const [page, setPage] = useState(0);

  const [topClassName, setTopClassName] = useState(
    "fa-solid fa-arrow-up fa-2xl light"
  );
  const [bottomClassName, setBottomClassName] = useState(
    "fa-solid fa-arrow-down fa-2xl"
  );

  useEffect(() => {
    if (page > 0) {
      setTopClassName("fa-solid fa-arrow-up fa-2xl");
    }
    if (page > 1) {
      setBottomClassName("fa-solid fa-arrow-down fa-2xl light");
    }
    if (page < 1) {
      setTopClassName("fa-solid fa-arrow-up fa-2xl light");
    }
    if (page < 2) {
      setBottomClassName("fa-solid fa-arrow-down fa-2xl");
    }
  }, [page]);

  return (
    <>
      <div className="app-container">
        <MainHeader />
        <div className="canvas">
          <Canvas
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [0, 2, 8],
            }}
          >
            <Experience />
          </Canvas>
        </div>
        <BottomDescription />
        <div className="scroll-button-container">
          <ScrollButton
            position="top"
            innerRef={topButtonRef}
            page={page}
            setPage={setPage}
            topClassName={topClassName}
          />
          <ScrollButton
            position="bottom"
            innerRef={bottomButtonRef}
            page={page}
            setPage={setPage}
            bottomClassName={bottomClassName}
          />
        </div>
      </div>
    </>
  );
}
