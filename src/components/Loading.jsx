import "./../style/loading.css";
import { useProgress } from "@react-three/drei";

export default function Loading({ setIsLoaded }) {
  const { progress } = useProgress();

  return (
    <div className="loading-container">
      <div className="loading-text">{progress} % LOADED</div>
      {progress == 100 && (
        <button onClick={() => setIsLoaded(true)} className="start-button">
          START EXPERIENCE
        </button>
      )}
    </div>
  );
}
