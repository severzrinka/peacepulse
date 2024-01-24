import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time * 60);
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentTime > 0) {
        setCurrentTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

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
        {formatTime(currentTime)}
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired,
};

export default CountdownTimer;
