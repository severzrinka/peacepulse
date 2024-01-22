import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "26px",
    backgroundColor: "#0077CC",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#005FA3",
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
