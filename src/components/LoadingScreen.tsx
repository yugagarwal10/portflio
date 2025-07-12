import React, { useEffect, useState } from 'react';
import { Code, Github, Linkedin, Mail, Twitter, Instagram, Facebook } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Show content immediately with smooth entrance
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    // Start slide up animation after 2 seconds
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
      // Complete loading after slide animation
      setTimeout(onComplete, 800);
    }, 2000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(slideTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center overflow-hidden transition-all duration-800 ease-in-out ${
      slideUp ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'float 20s ease-in-out infinite'
      }}></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`text-center relative z-10 transition-all duration-1000 ease-out ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 max-w-6xl mx-auto px-4">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-left lg:text-left">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-200 mb-2 leading-tight">
                Hi There,
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  Yug
                </span>
                <span className="text-orange-400"> Agarwal</span>
              </h2>
            </div>
            
            <div className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-6">
                I Am Into <span className="text-blue-400 font-bold">Web Development</span>
              </p>
              
              {/* About Me Button */}
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">About Me</span>
                <div className="relative z-10 w-2 h-2 bg-white rounded-full"></div>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/yugagarwal', color: 'hover:bg-gray-700' },
                { icon: Linkedin, href: 'https://linkedin.com/in/yugagarwal', color: 'hover:bg-blue-600' },
                { icon: Mail, href: 'mailto:yug.agarwal@email.com', color: 'hover:bg-red-600' },
                { icon: Twitter, href: '#', color: 'hover:bg-blue-500' },
                { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { icon: Facebook, href: '#', color: 'hover:bg-blue-700' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 sm:p-4 bg-slate-800/60 border border-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm ${social.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-white transition-colors relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Yellow Circle Background */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl shadow-yellow-500/25">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/40 rounded-full"></div>
                </div>
                
                {/* Profile Image */}
                <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 relative z-10">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Yug Agarwal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Code Icon */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6">
                <div className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-2xl shadow-xl relative overflow-hidden animate-bounce">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-50"></div>
                  <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white relative z-10" />
                </div>
              </div>
              
              {/* Floating Particles around image */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <div className="absolute top-1/4 -right-3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-500 shadow-lg shadow-emerald-400/50"></div>
              <div className="absolute bottom-1/4 -left-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Professional Message at Bottom */}
        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800/40 via-slate-700/40 to-slate-800/40 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-900/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                <span className="text-blue-400 font-bold">Crafting scalable web applications</span>, 
                <span className="text-emerald-400 font-bold"> exceptional user experiences</span>, and 
                <span className="text-purple-400 font-bold"> innovative digital solutions</span> that drive business growth.
              </p>
              
              {/* Animated dots indicator */}
              <div className="flex justify-center items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;