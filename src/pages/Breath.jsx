import Header from "../components/Header";
import { useBreath } from "../contexts/BreathContext";

function Breath() {
  const { selectedBreathingTechnique } = useBreath();
  return (
    <div className="bg-light-blue-200 h-screen">
      <Header />
      <h1 className="md:text-3xl mt-12 font-serif text-center black sm:text-l">
        {selectedBreathingTechnique}
      </h1>
      <p className=" mt-12 font-serif text-center black"></p>

      <p className=" mt-12 font-serif text-center black">
        Simply sync you breathing to the animation Da li ovo sad radi??
      </p>
    </div>
  );
}

export default Breath;
