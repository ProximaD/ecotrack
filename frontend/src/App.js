import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Home />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default App;
