import './App.css';
import React from "react";
import Home from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
