import ButtoN from "../components/ButtoN";
import Header from "../components/Header";
import { useState } from "react";
import { disanja, opis } from "/globalThings";
import sea from "/public/sea.png";
import more from "/public/more.mp4";
import CountdownTimer from "../components/CountdownTimer";
import InsertNumber from "../components/InsertNumber";
import CountupTimer from "../components/CountupTimer";
import { useParams } from "react-router-dom";

function Breath() {
  const { id } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [minutes, setMinutes] = useState("");
  const [setIsCountdownRunning] = useState(true);
  const [isCountupRunning, setIsCountupRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const pageStyle = {
    backgroundImage: `url(${sea})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#def1ff",
    minHeight: "100vh",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(222, 241, 255, 0.6)",
  };

  const pozicija = parseInt(id, 10);
  const description = opis[pozicija];
  const ime = disanja[pozicija];

  //RIJEŠI PAUSE I RESUME BUTON
  function handleClick(buttonText) {
    if (buttonText === "Begin") {
      setIsVideoPlaying(true);
      setIsCountdownRunning(true);
      setIsCountupRunning(true);
      setIsPaused(false);
    } else {
      setIsVideoPlaying(false);
      setIsCountdownRunning(false);
      setIsCountupRunning(false);
      setMinutes("");
      setIsPaused(false);
      setIsCountupRunning(false);
    }
  }

  const handleMinutesChange = (newMinutes) => {
    setMinutes(newMinutes);
  };

  function handlePause() {
    setIsPaused(!isPaused);
    setIsCountupRunning(!isCountupRunning);
  }

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <Header />
        {isVideoPlaying && minutes !== "" ? (
          <CountdownTimer time={minutes} isPaused={isPaused}></CountdownTimer>
        ) : (
          <div></div>
        )}

        {isVideoPlaying && minutes === "" ? (
          <CountupTimer
            isRunning={isCountupRunning}
            setIsRunning={setIsCountupRunning}
          ></CountupTimer>
        ) : (
          <div></div>
        )}
        <h1 className="md:text-3xl mt-12 font-serif text-center black sm:text-l">
          {ime}
        </h1>
        <p className="mt-10 font-serif md:text-lg text-center black sm:text-l">
          Simply sync your breathing to the animation
        </p>

        {isVideoPlaying ? (
          <div className="flex mt-10 justify-center">
            <video
              src={more}
              controls
              autoPlay
              style={{ width: "100%", maxWidth: "800px" }}
            />
          </div>
        ) : (
          <div className="lg:ml-72 lg:mr-56 mt-12 md:text-lg font-serif text-center black sm:text-l">
            <p>{description}</p>
          </div>
        )}

        <div className="flex mt-5 justify-center">
          <ButtoN
            text={`${isVideoPlaying ? "End" : "Begin"}`}
            onClick={() => handleClick(isVideoPlaying ? "End" : "Begin")}
          ></ButtoN>

          {isVideoPlaying && (
            <div className="ml-2">
              <ButtoN
                text={isPaused ? "Resume" : "Pause"}
                onClick={handlePause}
              ></ButtoN>
            </div>
          )}
        </div>
        {isVideoPlaying ? (
          ""
        ) : (
          <>
            <p className="lg:ml-64 lg:mr-56 mt-5 md:text-lg font-serif text-center black sm:text-l">
              You can set the time limit in minutes (optional)
            </p>
            <InsertNumber onMinutesChange={handleMinutesChange}></InsertNumber>
          </>
        )}
      </div>
    </div>
  );
}

export default Breath;
