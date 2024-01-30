import PropTypes from "prop-types";

function Popup({ show, what }) {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="flex mt-10 justify-center">
        <p className="text-5xl mt-4 text-center font-serif italic">{what}</p>
      </div>
    </div>
  );
}

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  what: PropTypes.string.isRequired,
};

export default Popup;
