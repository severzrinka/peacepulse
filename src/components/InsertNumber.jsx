import { useState } from "react";

const InsertNumber = () => {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleMinutesChange = (event) => {
    const { value } = event.target;
    // Ensure that the value is a positive integer with up to two digits
    if (/^\d{0,2}$/.test(value)) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (event) => {
    const { value } = event.target;

    if (/^\d{0,2}$/.test(value) || value === "") {
      setSeconds(value);
    }
  };

  return (
    <div className="flex mt-4 justify-center">
      <label>
        <input
          type="text"
          value={minutes}
          onChange={handleMinutesChange}
          placeholder="00"
          maxLength="2"
          style={{ width: "40px", height: "50px" }}
        />
      </label>
      <label>
        <input
          type="text"
          value={seconds}
          onChange={handleSecondsChange}
          placeholder="00"
          maxLength="2"
          className="ml-2"
          style={{ width: "40px", height: "50px" }}
        />
      </label>
    </div>
  );
};

export default InsertNumber;
