import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Home />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;
