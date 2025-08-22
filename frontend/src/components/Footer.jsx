import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-green-500 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EcoTrack</span>
          </div>
          <div className="flex flex-wrap justify-center space-x-8 text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-600 transition-colors">Support</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 EcoTrack. All rights reserved. Building a sustainable future, one track at a time.</p>
        </div>
      </div>
    </footer>
  );
}