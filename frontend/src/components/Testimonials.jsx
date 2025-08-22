import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "EcoTrack helped me reduce my carbon footprint by 40% in just 3 months. The insights are incredibly detailed!",
      author: "Sarah Njeri",
      role: "Environmental Consultant",
      initial: "S",
      bgColor: "from-green-50 to-emerald-50",
      avatarColor: "bg-green-500"
    },
    {
      quote: "The gamification aspect is brilliant! My family competes to see who can be the most eco-friendly each week.",
      author: "Marcus Ochieng'",
      role: "Teacher & Father",
      initial: "M",
      bgColor: "from-blue-50 to-cyan-50",
      avatarColor: "bg-blue-500"
    },
    {
      quote: "Simple, beautiful, and effective. EcoTrack makes sustainable living accessible and fun for everyone.",
      author: "Elena Nafula",
      role: "Sustainability Blogger",
      initial: "E",
      bgColor: "from-purple-50 to-pink-50",
      avatarColor: "bg-purple-500"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Eco-Warriors Worldwide
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">4.9/5 from 50,000+ users</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-8`}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}