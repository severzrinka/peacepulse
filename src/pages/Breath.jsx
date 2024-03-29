import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setVideoPlaying,
  setMinutes,
  setCountdownRunning,
  setCountupRunning,
  setPaused,
  setShowPopup,
  //  setCurrentTime,
  setShowCongrats,
} from "../reduxOperations/actions";
import ButtoN from "../components/ButtoN";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import InsertNumber from "../components/InsertNumber";
import CountupTimer from "../components/CountupTimer";
import Popup from "../components/Popup";
import { useParams } from "react-router-dom";
//import sea from "/public/sea.png";
import { disanja, opis, snimke } from "/globalThings";
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
    showCongrats,
  } = useSelector((state) => state.breath);
  const videoRef = useRef(null);

  console.log(isCountdownRunning);

  const pozicija = parseInt(id, 10);
  const description = opis[pozicija];
  const ime = disanja[pozicija];
  const snimak = snimke[pozicija];

  useEffect(() => {
    if (videoRef.current) {
      isPaused ? videoRef.current.pause() : videoRef.current.play();
    }
  }, [isPaused]);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleTimerEnd = () => {
    dispatch(setShowCongrats(true));
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

  return (
    <div className="pageStyle">
      <div className="overlayStyle">
        {showCongrats && <Congrats></Congrats>}
        <Popup show={showPopup} what={"get ready..."}></Popup>
        <Header />
        {isVideoPlaying && minutes !== "" ? (
          <CountdownTimer
            time={parseInt(minutes, 10)}
            isPaused={isPaused}
            onTimerEnd={handleTimerEnd}
          ></CountdownTimer>
        ) : (
          <div></div>
        )}
        {isVideoPlaying ? (
          <div
            className="countup-timer-container"
            style={{
              opacity: minutes === "" ? 1 : 0,
            }}
          >
            <CountupTimer
              isRunning={isCountupRunning}
              setIsRunning={(isRunning) =>
                dispatch(setCountupRunning(isRunning))
              }
            ></CountupTimer>
          </div>
        ) : (
          <div></div>
        )}
        <h1 className="md:text-3xl mt-12 font-serif text-center black sm:text-l imeDisanja">
          {ime}
        </h1>
        <p className="mt-10 font-serif md:text-lg text-center black sm:text-l sync">
          Simply sync your breathing to the animation
        </p>

        {isVideoPlaying ? (
          <div className="flex mt-10 justify-center">
            <video
              ref={videoRef}
              src={snimak}
              controls
              autoPlay
              style={{ width: "60%", maxWidth: "500px" }}
              onEnded={handleVideoEnd}
            />
          </div>
        ) : (
          <div className="lg:ml-72 lg:mr-56 mt-12 md:text-lg font-serif text-center black sm:text-l description">
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
            <p className="lg:ml-64 lg:mr-56 mt-5 md:text-lg font-serif text-center black sm:text-l optional">
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
