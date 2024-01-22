import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const BreathContext = createContext();

export const BreathProvider = ({ children }) => {
  const [selectedBreathingTechnique, setSelectedBreathingTechnique] =
    useState(null);

  const setBreathingTechnique = (technique) => {
    setSelectedBreathingTechnique(technique);
  };

  return (
    <BreathContext.Provider
      value={{ selectedBreathingTechnique, setBreathingTechnique }}
    >
      {children}
    </BreathContext.Provider>
  );
};

BreathProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBreath = () => {
  return useContext(BreathContext);
};
