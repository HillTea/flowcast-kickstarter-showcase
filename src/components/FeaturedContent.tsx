import { Play, Clock, User, Heart, Share2, MessageCircle } from 'lucide-react';

const FeaturedContent = () => {
  const featuredPodcast = {
    title: "Tech Talk : L'avenir de l'IA",
    creator: "Sarah Martinez",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop",
    duration: "42:15",
    views: "125K",
    likes: "8.2K",
    description: "Dans cet épisode captivant, nous explorons les dernières avancées en intelligence artificielle avec des experts du domaine..."
  };

  return (
    <section className="pt-20 pb-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video/Audio Player */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
              <img 
                src={featuredPodcast.thumbnail} 
                alt={featuredPodcast.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                <Clock size={16} />
                <span>{featuredPodcast.duration}</span>
              </div>
            </div>
          </div>

          {/* Content Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {featuredPodcast.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{featuredPodcast.creator}</span>
                </div>
                <span>•</span>
                <span>{featuredPodcast.views} vues</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {featuredPodcast.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
                <Play size={20} />
                <span>Écouter maintenant</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                <Heart size={20} />
                <span>{featuredPodcast.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Share2 size={20} />
                <span>Partager</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle size={20} />
                <span>Commenter</span>
              </button>
            </div>

            {/* Subscribe */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{featuredPodcast.creator}</h3>
                    <p className="text-gray-400 text-sm">156K abonnés</p>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;