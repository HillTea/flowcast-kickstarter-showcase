
import { 
  Smartphone, 
  Users, 
  Play, 
  Heart, 
  MessageCircle, 
  Upload, 
  DollarSign, 
  Download,
  Shield,
  BarChart3
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Method Authentication",
      description: "Login with email, social media, or phone number. Your security, your choice.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Personalized Feed",
      description: "AI-powered recommendations based on your listening habits and preferences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Play,
      title: "Advanced Media Player",
      description: "Seamless audio/video playback with premium quality and smart controls.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Social Interactions",
      description: "Like, share, comment with timestamps. Connect with your community.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Discussion Clubs",
      description: "Join content-specific clubs and engage in meaningful conversations.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Upload,
      title: "Creator Studio",
      description: "Professional upload tools with detailed analytics and insights.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Monetization Tools",
      description: "Earn through tips, subscriptions, and premium content offerings.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Download,
      title: "Offline Mode",
      description: "Premium subscribers can download content for offline listening.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Features That 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolutionize </span>
            Streaming
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of media streaming with features designed for creators and listeners alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mock App Interface */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">See Flowcast in Action</h3>
              <p className="text-gray-400">A glimpse of our intuitive interface design</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" 
                  alt="Desktop Interface"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-semibold text-white mb-2">Desktop Experience</h4>
                <p className="text-gray-400 text-sm">Full-featured desktop interface with advanced controls</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                  alt="Mobile Interface"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-semibold text-white mb-2">Mobile App</h4>
                <p className="text-gray-400 text-sm">Optimized mobile experience for on-the-go streaming</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop" 
                  alt="Creator Dashboard"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-semibold text-white mb-2">Creator Tools</h4>
                <p className="text-gray-400 text-sm">Professional analytics and content management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
