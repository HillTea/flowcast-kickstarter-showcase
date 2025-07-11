import { Play, Clock, User, Headphones, Video, Music, TrendingUp } from 'lucide-react';

const ContentGrid = () => {
  const categories = [
    { name: 'Tendances', icon: TrendingUp, active: true },
    { name: 'Podcasts', icon: Headphones, active: false },
    { name: 'Vidéos', icon: Video, active: false },
    { name: 'Musique', icon: Music, active: false },
  ];

  const content = [
    {
      id: 1,
      title: "Entrepreneur Stories #42",
      creator: "Marc Dubois",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      duration: "28:45",
      views: "89K",
      type: "podcast",
      isLive: false
    },
    {
      id: 2,
      title: "Code Review Live",
      creator: "DevCommunity",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      duration: "LIVE",
      views: "2.1K",
      type: "video",
      isLive: true
    },
    {
      id: 3,
      title: "Méditation du Matin",
      creator: "Zen Studio",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      duration: "15:30",
      views: "234K",
      type: "audio",
      isLive: false
    },
    {
      id: 4,
      title: "Gaming News Weekly",
      creator: "GameZone",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      duration: "52:18",
      views: "156K",
      type: "video",
      isLive: false
    },
    {
      id: 5,
      title: "Cuisine du Monde",
      creator: "Chef Antoine",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      duration: "35:22",
      views: "67K",
      type: "video",
      isLive: false
    },
    {
      id: 6,
      title: "Startup Insights",
      creator: "Business Hub",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      duration: "41:05",
      views: "92K",
      type: "podcast",
      isLive: false
    },
    {
      id: 7,
      title: "Piano Sessions",
      creator: "Maria Classical",
      thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop",
      duration: "22:14",
      views: "45K",
      type: "music",
      isLive: false
    },
    {
      id: 8,
      title: "Science Vulgarisée",
      creator: "Dr. Martin",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      duration: "38:56",
      views: "178K",
      type: "podcast",
      isLive: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'podcast':
        return <Headphones size={14} />;
      case 'video':
        return <Video size={14} />;
      case 'music':
        return <Music size={14} />;
      default:
        return <Play size={14} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'podcast':
        return 'bg-purple-600';
      case 'video':
        return 'bg-red-600';
      case 'music':
        return 'bg-green-600';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center space-x-6 mb-8 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  category.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={20} className="text-gray-900 ml-0.5" />
                  </button>
                </div>

                {/* Duration/Live Badge */}
                <div className="absolute bottom-2 right-2">
                  {item.isLive ? (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      LIVE
                    </span>
                  ) : (
                    <span className="bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  <div className={`${getTypeColor(item.type)} text-white p-1.5 rounded-full`}>
                    {getTypeIcon(item.type)}
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                  <User size={14} />
                  <span>{item.creator}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                  <span>{item.views} vues</span>
                  {!item.isLive && (
                    <>
                      <span>•</span>
                      <span>il y a 2 jours</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors border border-gray-600">
            Charger plus de contenu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;