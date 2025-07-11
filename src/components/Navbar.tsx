
import { Search, Bell, User, Menu, Home, Mic, Video, Music, Headphones } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Flowcast</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
                <Home size={18} />
                <span>Accueil</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Mic size={18} />
                <span>Podcasts</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Video size={18} />
                <span>Vidéos</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Music size={18} />
                <span>Musique</span>
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher des podcasts, créateurs, épisodes..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <User size={20} />
            </button>
            <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
