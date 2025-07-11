
import { CheckCircle, Circle, Clock } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Platform Foundation",
      status: "completed",
      date: "Q1 2024",
      features: [
        "Core audio/video streaming engine",
        "User authentication system",
        "Basic social features",
        "Mobile app beta"
      ]
    },
    {
      phase: "Phase 2",
      title: "Creator Tools & Monetization",
      status: "in-progress",
      date: "Q2 2024",
      features: [
        "Advanced creator dashboard",
        "Monetization tools (tips, subscriptions)",
        "Analytics and insights",
        "Community features"
      ]
    },
    {
      phase: "Phase 3",
      title: "AI & Premium Features",
      status: "planned",
      date: "Q3 2024",
      features: [
        "AI-powered recommendations",
        "Advanced search and discovery",
        "Offline mode for premium users",
        "Live streaming capabilities"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "planned",
      date: "Q4 2024",
      features: [
        "Multi-language support",
        "Regional content hubs",
        "Enterprise partnerships",
        "Advanced creator tools"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" size={24} />;
      case 'in-progress':
        return <Clock className="text-yellow-400" size={24} />;
      default:
        return <Circle className="text-gray-400" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Development 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow our journey as we build the future of media streaming, one milestone at a time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="flex items-center mb-4">
                      {getStatusIcon(item.status)}
                      <div className="ml-3">
                        <div className="text-sm text-gray-400">{item.phase}</div>
                        <div className="text-lg font-semibold text-white">{item.title}</div>
                      </div>
                      <div className="ml-auto">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full items-center justify-center z-10 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Help Us Build the Future</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your support on Kickstarter will accelerate our development timeline and help us deliver these features faster.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Back Our Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
