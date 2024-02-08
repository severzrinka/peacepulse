import { useEffect } from "react";
import PropTypes from "prop-types";
import { setvrijeme } from "../reduxOperations/actions";
import { useDispatch, useSelector } from "react-redux";

function CountupTimer({ isRunning, setIsRunning }) {
  const dispatch = useDispatch();
  const { times } = useSelector((state) => state.breath);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(setvrijeme(times + 1));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, times, setIsRunning]); // Include times as a dependency to useEffect

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div style={{ position: "absolute", top: 130, right: 0, padding: "10px" }}>
      <p className="md:text-3xl font-serif black sm:text-l vrijeme">
        {formatTime(times)}
      </p>
    </div>
  );
}

CountupTimer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  setIsRunning: PropTypes.func.isRequired,
};

export default CountupTimer;
