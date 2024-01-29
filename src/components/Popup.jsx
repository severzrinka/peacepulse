import PropTypes from "prop-types";
import countdown from "/public/countdown.mp4";

function Popup({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="flex mt-10 justify-center">
        <video
          src={countdown}
          autoPlay
          style={{ width: "80%", maxWidth: "700px" }}
        />
      </div>
    </div>
  );
}

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Popup;
