import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen bg-white text-black cursor-crosshair">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
