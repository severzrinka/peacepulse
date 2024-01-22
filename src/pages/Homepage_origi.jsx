import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { disanja } from "/globalThings";
import sea from "/public/sea.png";
import { useBreath } from "../contexts/BreathContext";

function Homepage() {
  const { setBreathingTechnique } = useBreath();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const pageStyle = {
    backgroundImage: `url(${sea})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#def1ff",
    minHeight: "100vh",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
    margin: "5vw 5vw",
    overflowY: "auto",
    maxHeight: "80vh",
  };

  if (disanja.length === 4 && windowWidth > 650) {
    gridContainerStyle.margin = "5vw 12vw 200px 18vw";
  } else if (disanja.length === 3 && windowWidth > 650) {
    gridContainerStyle.margin = "5vw 15vw 200px 27vw";
  } else {
    gridContainerStyle.margin = "5vw 5vw 20px 5vw";
  }

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    width: "300px",
    borderRadius: "10px",
    backgroundColor: "#c9e6ff",
    border: "2px solid #72baf7",
    padding: "10px",
  };

  const textStyle = {
    fontSize: "24px",
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <Header />
      <p className="md:text-2xl mt-4 text-center font-serif italic sm:text-xl">
        Choose your breathing exercise for today
      </p>
      <div style={gridContainerStyle}>
        {disanja.map((breathingTechnique, index) => (
          <Link
            key={index}
            to="/breath"
            onClick={() => setBreathingTechnique(breathingTechnique)}
          >
            <div style={boxStyle}>
              <p style={textStyle}>{breathingTechnique}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
