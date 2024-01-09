import "./../style/loading.css";
import { useProgress } from "@react-three/drei";

export default function Loading({ setIsLoaded, setPlaySound }) {
  const { progress } = useProgress();

  const handleClick = () => {
    setIsLoaded(true);
    setPlaySound(true);
  };

  return (
    <div className="loading-container">
      <div className="loading-text">{progress} % LOADED</div>
      {progress == 100 && (
        <button onClick={handleClick} className="start-button">
          START EXPERIENCE
        </button>
      )}
    </div>
  );
}
