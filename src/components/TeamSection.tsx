
import { Linkedin, Twitter, Github } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Co-Founder & CEO",
      bio: "Former Spotify engineer with 8+ years in audio streaming technology.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Maria Garcia",
      role: "Co-Founder & CTO",
      bio: "Ex-YouTube architect specializing in video compression and streaming protocols.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c8c001?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product leader from SoundCloud with expertise in creator-focused platforms.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sophie Chen",
      role: "Lead Designer",
      bio: "UX/UI designer with a passion for creating intuitive media experiences.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Expert Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A diverse group of industry veterans bringing decades of experience from the world's leading streaming platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-2xl border border-gray-600 backdrop-blur-sm hover:transform hover:scale-105 transition-all"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href={member.social.github}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500M+</div>
            <div className="text-gray-400">Users Reached (Previous Companies)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$10M+</div>
            <div className="text-gray-400">In Seed Funding</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
