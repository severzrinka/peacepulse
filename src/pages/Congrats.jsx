import { useEffect } from "react";
import confetti from "canvas-confetti";

function Congrats() {
  useEffect(() => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  //podesi ovo da bude popup
  return <p>Meditation over</p>;
}

export default Congrats;
