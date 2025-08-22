import React from 'react';
import { Globe, Zap, ShoppingBag, RotateCcw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Globe,
      title: 'Transport Tracking',
      description: 'Monitor your travel habits and discover eco-friendly alternatives for your daily commute.',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Energy Usage',
      description: 'Track home energy consumption and get personalized tips to reduce your electricity usage.',
      bgColor: 'from-blue-50 to-cyan-50',
      iconColor: 'bg-blue-500'
    },
    {
      icon: ShoppingBag,
      title: 'Smart Shopping',
      description: 'Make sustainable purchasing decisions with our eco-impact calculator for products.',
      bgColor: 'from-purple-50 to-pink-50',
      iconColor: 'bg-purple-500'
    },
    {
      icon: RotateCcw,
      title: 'Recycling Guide',
      description: 'Learn proper recycling practices and track your waste reduction progress over time.',
      bgColor: 'from-orange-50 to-red-50',
      iconColor: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Go Green
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tracking tools to monitor and reduce your environmental impact across all aspects of daily life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                <div className={`${feature.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}