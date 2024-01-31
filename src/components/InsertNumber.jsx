import { useState } from "react";
import PropTypes from "prop-types";

const InsertNumber = ({ onMinutesChange }) => {
  const [minutes, setMinutes] = useState("");

  const handleMinutesChange = (event) => {
    const { value } = event.target;
    if (/^\d{0,2}$/.test(value)) {
      setMinutes(value);
      onMinutesChange(value);
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
    </div>
  );
};

InsertNumber.propTypes = {
  onMinutesChange: PropTypes.number.isRequired,
};

export default InsertNumber;
