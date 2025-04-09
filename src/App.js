import React from "react";
import Home from "./Components/Home";
import Features from "./Components/Features";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
