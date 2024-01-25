import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Breath from "./pages/Breath";
import { BreathProvider } from "./contexts/BreathContext";

function App() {
  return (
    <BreathProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/breath/:id" element={<Breath />} />
        </Routes>
      </Router>
    </BreathProvider>
  );
}

export default App;
