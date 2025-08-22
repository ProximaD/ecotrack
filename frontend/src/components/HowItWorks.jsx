import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Track Daily Habits',
      description: 'Log your transportation, energy use, shopping, and recycling activities with our intuitive interface.',
      color: 'bg-green-500'
    },
    {
      number: '2',
      title: 'Get Insights',
      description: 'Receive personalized analytics and actionable recommendations to reduce your carbon footprint.',
      color: 'bg-blue-500'
    },
    {
      number: '3',
      title: 'Make Impact',
      description: 'Watch your positive environmental impact grow and compete with friends on eco-challenges.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How EcoTrack Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start your journey towards a more sustainable lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}