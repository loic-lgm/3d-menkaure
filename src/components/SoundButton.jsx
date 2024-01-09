import { useRef } from "react";

export default function SoundButton({ sound, setPlaySound }) {
  const soundButton = useRef();

  const handleClick = () => {
    if (soundButton.current.classList.contains("light")) {
      soundButton.current.classList.remove("light");
      setPlaySound(true);
    } else {
      soundButton.current.classList.add("light");
      setPlaySound(false);
    }
  };
  return (
    <div
      ref={soundButton}
      className="sound-button pointer"
      onClick={handleClick}
    >
      <i className="fa-solid fa-volume-high"></i>
    </div>
  );
}
