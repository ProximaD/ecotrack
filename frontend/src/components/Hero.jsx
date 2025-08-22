import React from 'react';
import { Smartphone, ArrowRight, CheckCircle, Globe, BarChart3, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Track Your 
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Carbon Footprint</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Join millions of eco-conscious users tracking their daily habits to reduce environmental impact. 
              Make every action count for a sustainable future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>Download Free</span>
              </button>
              <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center space-x-2">
                <span>Watch Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white p-8">
                <div className="text-center mb-6">
                  <Leaf className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold">EcoTrack</h3>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4 w-full">
                  <div className="text-sm opacity-90 mb-2">Today's Impact</div>
                  <div className="text-3xl font-bold">2.3 kg</div>
                  <div className="text-sm opacity-90">CO₂ Saved</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <Globe className="h-6 w-6 text-green-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
              <BarChart3 className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}