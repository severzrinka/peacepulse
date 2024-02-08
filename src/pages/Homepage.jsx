import { Link } from "react-router-dom";
import Header from "../components/Header";
import { disanja } from "/globalThings";
import { useBreath } from "../contexts/BreathContext";
import {
  setVideoPlaying,
  setMinutes,
  setCountdownRunning,
  setCountupRunning,
  setPaused,
  setShowPopup,
} from "../reduxOperations/actions";
import { useDispatch } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  const { setBreathingTechnique } = useBreath();

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
    padding: "5vw",
  };

  const textStyle = {
    fontSize: "24px",
    textAlign: "center",
  };

  function handleLinkKlik(x) {
    setBreathingTechnique(x);
    dispatch(setVideoPlaying(false));
    dispatch(setCountdownRunning(false));
    dispatch(setCountupRunning(false));
    dispatch(setMinutes(""));
    dispatch(setPaused(false));
    dispatch(setCountupRunning(false));
    dispatch(setShowPopup(false));
  }

  return (
    <div className="pageStyle">
      <Header />
      <p className="md:text-2xl mt-4 text-center font-serif italic sm:text-xl chooseBreath">
        Choose your breathing exercise for today
      </p>
      <div className="lg:ml-96 lg:mr-32 md:ml-72 md:mr-56 sm:flex sm:justify-center grid">
        <div className="sm:flex-grow" style={gridContainerStyle}>
          {disanja.map((breathingTechnique, index) => (
            <Link
              key={index}
              to={`/breath/${index}`}
              onClick={() => handleLinkKlik(breathingTechnique)}
            >
              <div className="boxStyle">
                <p style={textStyle}>{breathingTechnique}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
