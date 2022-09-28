import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import HowDoWeDo from "./components/HowDoWeDo/HowDoWeDo";
import RoadMap from "./components/RoadMap/RoadMap";
import PowerOfPac from "./components/PowerOfPac/PowerOfPac";
function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <HowDoWeDo />
      <RoadMap />
      <PowerOfPac />
    </div>
  );
}

export default App;
