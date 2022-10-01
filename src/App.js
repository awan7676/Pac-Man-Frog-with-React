import React from "react";
import Styles from './App.module.css';
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import HowDoWeDo from "./components/HowDoWeDo/HowDoWeDo";
import RoadMap from "./components/RoadMap/RoadMap";
import PowerOfPac from "./components/PowerOfPac/PowerOfPac";
import Faq from "./components/FAQ/Faq";
function App() {
  return (
    <div className={Styles.app}>
      <div className={Styles.all_components}>
        <Home />
        <AboutUs />
        <HowDoWeDo />
        <RoadMap />
        <PowerOfPac />
        <Faq />
      </div>
    </div>
  );
}

export default App;
