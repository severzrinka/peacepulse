import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ time, isPaused }) => {
  const [localTime, setLocalTime] = useState(time * 60);

  useEffect(() => {
    setLocalTime(time * 60);
  }, [time]);

  useEffect(() => {
    let timer;
    if (!isPaused && localTime > 0) {
      timer = setInterval(() => {
        setLocalTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, localTime]);

  const formatTime = (seconds) => {
    const remainingMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(remainingMinutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div style={{ position: "absolute", top: 130, right: 0, padding: "10px" }}>
      <p className="md:text-3xl font-serif black sm:text-l">
        {formatTime(localTime)}
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired,
  isPaused: PropTypes.bool.isRequired,
};

export default CountdownTimer;
