import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SolarPowerPlant from "./pages/SolarPowerPlant.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/solar-power-plant" element={<SolarPowerPlant />} />
      </Routes>
    </Router>
  );
}

export default App;
