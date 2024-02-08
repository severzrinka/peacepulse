import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ time, isPaused, onTimerEnd }) => {
  const [localTime, setLocalTime] = useState(time * 60);
  const intervalRef = useRef(null);

  useEffect(() => {
    setLocalTime(time * 60);
  }, [time]);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setLocalTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          onTimerEnd();
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPaused) {
      stopTimer();
    } else {
      startTimer();
    }

    return () => stopTimer();
  }, [isPaused]);

  const formatTime = (seconds) => {
    const remainingMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(remainingMinutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div style={{ position: "absolute", top: 130, right: 0, padding: "10px" }}>
      <p className="md:text-3xl font-serif black sm:text-l vrijeme">
        {formatTime(localTime)}
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired,
  isPaused: PropTypes.bool.isRequired,
  onTimerEnd: PropTypes.func,
};

export default CountdownTimer;
