import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Breath from "./pages/Breath";
import { BreathProvider } from "./contexts/BreathContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  { path: "/breath", element: <Breath></Breath> },
]);

function App() {
  return (
    <BreathProvider>
      <RouterProvider router={router}></RouterProvider>
    </BreathProvider>
  );
}

export default App;
