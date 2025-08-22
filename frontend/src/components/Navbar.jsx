import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EcoTrack</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            <a href="#hero" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-green-600">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-green-600">Reviews</a>
            <button className="w-full mt-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}