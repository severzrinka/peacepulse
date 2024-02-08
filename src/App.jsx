import { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./reduxOperations/store";
import Homepage from "./pages/Homepage";
import Breath from "./pages/Breath";
import { BreathProvider } from "./contexts/BreathContext";

function App() {
  const BojaSwitcher = () => {
    const boja = useSelector((state) => state.breath.boja);

    useLayoutEffect(() => {
      const linkId = "dynamic-theme-style";
      let link = document.getElementById(linkId);
      if (!link) {
        link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);
      }

      link.href = boja ? "/indexL.css" : "/indexD.css";
    }, [boja]);

    return null;
  };

  return (
    <Provider store={store}>
      <BreathProvider>
        <BojaSwitcher />
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
