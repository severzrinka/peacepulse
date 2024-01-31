import { useEffect } from "react";
import confetti from "canvas-confetti";
import ButtoN from "../components/ButtoN";
import { setShowCongrats } from "../reduxOperations/actions";
import { useDispatch, useSelector } from "react-redux";

function Congrats() {
  const dispatch = useDispatch();
  const { showCongrats } = useSelector((state) => state.breath);

  const handleCloseCongrats = () => {
    dispatch(setShowCongrats(false));
  };

  useEffect(() => {
    confetti({
      particleCount: 900,
      spread: 500,
      origin: { y: 0.2 },
      zIndex: 1000,
      disableForReducedMotion: true,
    });
  }, [showCongrats]);

  return (
    <>
      {showCongrats && (
        <div style={styles.container}>
          <h1>Congratulations!</h1>
          <ButtoN text={"OK"} onClick={handleCloseCongrats} />
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    zIndex: 1000,
  },
};

export default Congrats;
