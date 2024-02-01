import { useEffect } from "react";
import confetti from "canvas-confetti";
import ButtoN from "../components/ButtoN";
import { setShowCongrats, setvrijeme } from "../reduxOperations/actions";
import { useDispatch, useSelector } from "react-redux";
import heavy from "/public/heavy.jpeg";
import bad from "/public/bad.png";
import tree from "/public/tree.png";

//FUCKING FIX THIS

function Congrats() {
  const dispatch = useDispatch();
  const { showCongrats, times } = useSelector((state) => state.breath);

  const handleCloseCongrats = () => {
    dispatch(setvrijeme(0));
    dispatch(setShowCongrats(false));
  };

  const kontenjer = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.422)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "100px",
    backdropFilter: "blur(8px)",
    zIndex: 1000,
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

    if (formattedTime <= 10) {
      return {
        image: heavy,
        text: "It is hard to find time for yourself, and you should be proud you practiced mindfulness today! The time you spent breathing is:",
      };
    } else if (formattedTime < 30) {
      return {
        image: bad,
        text: "Truly a mindful master, you did an amazing job! You should be broud of yourself because time you spent breathing is:",
      };
    } else {
      return {
        image: tree,
        text: "You are on a path of enlightment. You take your spiritual jurney seriously! You meditated for:",
      };
    }
  }

  const { image, text } = getImageAndText();

  return (
    <>
      {showCongrats && (
        <div style={kontenjer}>
          <h1 className="md:text-5xl mt-12 font-serif text-center black sm:text-2xl">
            Congratulations!
          </h1>
          {formatTime(times) <= 10 ? (
            <img
              src={image}
              style={{
                resizeMode: "contain",
                height: 300,
                width: 400,
                margin: "20px 0",
              }}
              alt=""
            />
          ) : (
            <p className="md:text-2xl mt-4 text-center font-serif italic sm:text-xl">
              {text} {formatTime(times)}
            </p>
          )}
          <div className="flex justify-center mt-12">
            <ButtoN text={"OK"} onClick={handleCloseCongrats} />
          </div>
        </div>
      )}
    </>
  );
}

export default Congrats;
