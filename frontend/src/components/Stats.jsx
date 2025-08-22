import React from 'react';

export default function Stats() {
  const stats = [
    { number: '1M+', label: 'Active Users' },
    { number: '500K', label: 'Tons CO₂ Saved' },
    { number: '150+', label: 'Countries' },
    { number: '4.9★', label: 'App Store Rating' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}