
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Podcast Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c8c001?w=100&h=100&fit=crop&crop=face",
      content: "Flowcast is exactly what the creator community needed. The monetization tools are game-changing!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The audio quality and social features make this platform perfect for artists like me.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Content Consumer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "I love how I can discover new content through the personalized feed. It's addictive!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Early Users 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Are Saying</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of creators and listeners who are already part of the Flowcast revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border border-gray-600 backdrop-blur-sm hover:transform hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="text-purple-400 mb-4" size={24} />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">Watch Our Demo Video</h3>
            <p className="text-gray-400 mb-8">See Flowcast in action with our comprehensive platform overview</p>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl flex items-center justify-center border border-gray-600">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer transform hover:scale-110">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-semibold">Click to Play Demo</p>
                  <p className="text-gray-400">Duration: 3:42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
