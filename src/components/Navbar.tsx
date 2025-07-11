
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flowcast
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
              <a href="#kickstarter" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Back on Kickstarter
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#roadmap" className="block px-3 py-2 text-gray-300 hover:text-white">Roadmap</a>
            <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-white">Team</a>
            <a href="#kickstarter" className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg mx-3">
              Back on Kickstarter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
