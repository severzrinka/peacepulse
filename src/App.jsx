import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxOperations/store"; // Import the store
import Homepage from "./pages/Homepage";
import Breath from "./pages/Breath";
import { BreathProvider } from "./contexts/BreathContext";

function App() {
  return (
    <Provider store={store}>
      <BreathProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/breath/:id" element={<Breath />} />
          </Routes>
        </Router>
      </BreathProvider>
    </Provider>
  );
}

export default App;
