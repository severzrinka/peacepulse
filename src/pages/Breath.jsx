import { useState, useRef, useEffect } from "react";
import ButtoN from "../components/ButtoN";
import Header from "../components/Header";
import { disanja, opis } from "/globalThings";
import sea from "/public/sea.png";
import kocka from "/public/kocka.mp4";
import CountdownTimer from "../components/CountdownTimer";
import InsertNumber from "../components/InsertNumber";
import CountupTimer from "../components/CountupTimer";
import { useParams } from "react-router-dom";
import Popup from "../components/Popup";
import Congrats from "./Congrats";

function Breath() {
  const { id } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [minutes, setMinutes] = useState("");
  const [isCountdownRunning, setIsCountdownRunning] = useState(true);
  const [isCountupRunning, setIsCountupRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentTime, setCurrentTime] = useState(minutes * 60);

  console.log(isCountdownRunning);

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

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPaused]);

  const handleTimerEnd = () => {
    setIsVideoPlaying(false);
    setIsCountdownRunning(false);
    setIsCountupRunning(false);
    setMinutes("");
    setIsPaused(false);
    setIsCountupRunning(false);
    setShowPopup(false);
  };

  useEffect(() => {
    if (currentTime === 0) {
      handleTimerEnd();
    }
  }, [currentTime]);

  function handleClick(buttonText) {
    setShowPopup(true);
    if (buttonText === "Begin") {
      setTimeout(() => {
        setIsVideoPlaying(true);
        setIsCountdownRunning(true);
        setIsCountupRunning(true);
        setIsPaused(false);
        setShowPopup(false);
      }, 3000);
    } else {
      setIsVideoPlaying(false);
      setIsCountdownRunning(false);
      setIsCountupRunning(false);
      setMinutes("");
      setIsPaused(false);
      setIsCountupRunning(false);
      setShowPopup(false);
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
        <Popup show={showPopup} what={"get ready..."}></Popup>
        <Header />
        {isVideoPlaying && minutes !== "" ? (
          <CountdownTimer
            time={minutes}
            isPaused={isPaused}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          ></CountdownTimer>
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
              ref={videoRef}
              src={kocka}
              controls
              autoPlay
              style={{ width: "80%", maxWidth: "600px" }}
              onEnded={handleVideoEnd}
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
          <Congrats></Congrats>;
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
