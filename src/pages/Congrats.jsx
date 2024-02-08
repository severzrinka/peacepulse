import { useEffect } from "react";
import confetti from "canvas-confetti";
import ButtoN from "../components/ButtoN";
import { setShowCongrats, setvrijeme } from "../reduxOperations/actions";
import { useDispatch, useSelector } from "react-redux";
import tree from "../../public/tree.png";
import bad from "../../public/bad.png";
import heavy from "../../public/heavy.jpeg";

function Congrats() {
  const dispatch = useDispatch();
  const { showCongrats, times } = useSelector((state) => state.breath);

  const handleCloseCongrats = () => {
    dispatch(setvrijeme(0));
    dispatch(setShowCongrats(false));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    confetti({
      particleCount: 1000,
      spread: 500,
      origin: { y: 0.4 },
      zIndex: 1000,
      disableForReducedMotion: true,
    });
  }, [showCongrats]);

  function getImageAndText() {
    const formattedTime = formatTime(times);

    if (formattedTime <= "10:00") {
      return {
        slika: heavy,
        text: "It is hard to find time for yourself, and you should be proud you practiced mindfulness today! The time you spent breathing is:",
      };
    } else if (formattedTime < "20:00") {
      return {
        slika: bad,
        text: "Truly a mindful master, you did an amazing job! You should be proud of yourself because time you spent breathing is:",
      };
    } else {
      return {
        slika: tree,
        text: "You are on a path of enlightment. You take your spiritual jurney seriously! You meditated for:",
      };
    }
  }

  const { slika, text } = getImageAndText();

  return (
    <>
      {showCongrats && (
        <div className="kontenjer">
          <h1 className="md:text-5xl mt-12 font-serif text-center black sm:text-2xl congradulations">
            Congratulations!
          </h1>
          <img
            src={slika}
            style={{
              resizeMode: "contain",
              height: 400,
              width: 500,
              margin: "20px 0",
            }}
            alt=""
          />
          <p className="md:text-2xl mt-4 text-center font-serif italic sm:text-xl opis">
            {text} {formatTime(times)}
          </p>
          <div className="flex justify-center mt-12">
            <ButtoN text={"OK"} onClick={handleCloseCongrats} />
          </div>
        </div>
      )}
    </>
  );
}

export default Congrats;
