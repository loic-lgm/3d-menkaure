import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

export function MainHeader() {
  useEffect(() => {
    gsap.to(".main-header", {
      duration: 3,
      text: {
        value: "Menkaure",
      },
    });
  }, []);
  return <div className="main-header"></div>;
}
