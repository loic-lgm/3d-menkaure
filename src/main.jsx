import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Experience.jsx";
import "./style/index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);
