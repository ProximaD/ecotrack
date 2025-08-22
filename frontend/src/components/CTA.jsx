import React from 'react';
import { Smartphone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the global movement toward sustainability. Download EcoTrack today and start your journey to a greener future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Download for iOS</span>
          </button>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Download for Android</span>
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Free download • No credit card required • Available worldwide
        </p>
      </div>
    </section>
  );
}