
import { Play, Users, Music, Video } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Audio & Video </span>
              Streaming
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Flowcast combines the best of SoundCloud, Spotify, and YouTube into one revolutionary platform. 
              Discover, create, and connect like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                <Play className="inline mr-2" size={20} />
                Watch Demo Video
              </button>
              
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all">
                Back on Kickstarter
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-8 text-gray-400">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={24} className="text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Early Adopters</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Music size={24} className="text-pink-400" />
                </div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Tracks Ready</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Video size={24} className="text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">5K+</div>
                <div className="text-sm">Videos Uploaded</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-700">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop" 
                    alt="Flowcast App Preview"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
