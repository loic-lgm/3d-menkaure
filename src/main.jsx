import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Experience.jsx";
import "./style/index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 2, 8],
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
