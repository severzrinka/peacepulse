import Button from "../components/ButtoN";
import Header from "../components/Header";
import { useState } from "react";
import { useBreath } from "../contexts/BreathContext";
import { disanja, opis } from "/globalThings";
import sea from "/public/sea.png";
import more from "/public/more.mp4";

function Breath() {
  const { selectedBreathingTechnique } = useBreath();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const pageStyle = {
    backgroundImage: `url(${sea})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#def1ff",
    minHeight: "100vh",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(222, 241, 255, 0.6)",
  };

  const index = disanja.indexOf(selectedBreathingTechnique);

  const description = index !== -1 ? opis[index] : "";

  function hanleClick() {
    console.log("popuši mi ");
    setIsVideoPlaying(true);
  }

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <Header />
        <h1 className="md:text-3xl mt-12 font-serif text-center black sm:text-l">
          {selectedBreathingTechnique}
        </h1>
        <p className="lg:ml-72 lg:mr-56 mt-12 md:text-lg font-serif text-center black sm:text-l">
          {description}
        </p>
        <p className="mt-12 font-serif md:text-lg text-center black sm:text-l">
          Simply sync your breathing to the animation
        </p>
        <div className="flex mt-12 justify-center">
          {isVideoPlaying ? (
            <video
              src={more}
              controls
              autoPlay
              className="mt-12"
              style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
            />
          ) : (
            <Button text="Begin" onClick={hanleClick}></Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Breath;
