import React from "react";
import Navbar from "./Components/Navbar.js";
import Hero from "./Components/Hero.js";
import About from "./Components/About.js";
import Project from "./Components/Poject.js";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />

    </div>
  );
}

export default App;
