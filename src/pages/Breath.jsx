import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setVideoPlaying,
  setMinutes,
  setCountdownRunning,
  setCountupRunning,
  setPaused,
  setShowPopup,
  setCurrentTime,
  setShowCongrats,
} from "../reduxOperations/actions";
import ButtoN from "../components/ButtoN";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import InsertNumber from "../components/InsertNumber";
import CountupTimer from "../components/CountupTimer";
import Popup from "../components/Popup";
import { useParams } from "react-router-dom";
import sea from "/public/sea.png";
import kocka from "/public/kocka.mp4";
import { disanja, opis } from "/globalThings";
import Congrats from "./Congrats";

function Breath() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    isVideoPlaying,
    minutes,
    isCountdownRunning,
    isCountupRunning,
    isPaused,
    showPopup,
    currentTime,
    showCongrats,
  } = useSelector((state) => state.breath);
  const videoRef = useRef(null);

  console.log(isCountdownRunning);

  const pozicija = parseInt(id, 10);
  const description = opis[pozicija];
  const ime = disanja[pozicija];

  useEffect(() => {
    if (videoRef.current) {
      isPaused ? videoRef.current.pause() : videoRef.current.play();
    }
  }, [isPaused]);

  useEffect(() => {
    if (currentTime === 0) {
      handleTimerEnd();
    }
  }, [currentTime]);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleTimerEnd = () => {
    dispatch(setVideoPlaying(false));
    dispatch(setCountdownRunning(false));
    dispatch(setCountupRunning(false));
    dispatch(setMinutes(""));
    dispatch(setPaused(false));
    dispatch(setCountupRunning(false));
    dispatch(setShowPopup(false));
  };

  function handleClick(buttonText) {
    dispatch(setShowPopup(true));
    if (buttonText === "Begin") {
      setTimeout(() => {
        dispatch(setVideoPlaying(true));
        dispatch(setCountdownRunning(true));
        dispatch(setCountupRunning(true));
        dispatch(setPaused(false));
        dispatch(setShowPopup(false));
      }, 3000);
    } else {
      dispatch(setShowCongrats(true));
      handleTimerEnd();
    }
  }

  const handleMinutesChange = (newMinutes) => {
    dispatch(setMinutes(newMinutes));
  };

  function handlePause() {
    dispatch(setPaused(!isPaused));
    dispatch(setCountupRunning(!isCountupRunning));
  }

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

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        {showCongrats && <Congrats></Congrats>}
        <Popup show={showPopup} what={"get ready..."}></Popup>
        <Header />
        {isVideoPlaying && minutes !== "" ? (
          <CountdownTimer
            time={minutes}
            isPaused={isPaused}
            currentTime={currentTime}
            setCurrentTime={(time) => dispatch(setCurrentTime(time))}
          ></CountdownTimer>
        ) : (
          <div></div>
        )}

        {isVideoPlaying && minutes === "" ? (
          <CountupTimer
            isRunning={isCountupRunning}
            setIsRunning={(isRunning) => dispatch(setCountupRunning(isRunning))}
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
              style={{ width: "60%", maxWidth: "500px" }}
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
          <div></div>
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
