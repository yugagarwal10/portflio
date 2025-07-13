import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Code, Star, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-[500px] h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-24 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 lg:w-[500px] xl:w-[600px] 2xl:w-[800px] h-48 sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'float 20s ease-in-out infinite'
      }}></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Name and Photo */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-12 sm:mb-16">
            {/* Left Side - Name Section */}
            <div className="flex-1 text-center xl:text-left w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-200 mb-2 sm:mb-4 leading-tight name">
                Hi There,
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight mb-6 sm:mb-8">
                <span className="text-white">I'm </span>
                <span className="group relative bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent cursor-pointer name">
                  Yug
                </span>
                <span className="group relative text-orange-400 cursor-pointer name"> Agarwal</span>
              </h2>

              {/* Social Links Section */}
              <div className="flex justify-center xl:justify-start items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 mb-2 sm:mb-4 md:mb-8">
                <a
                  href="https://github.com/yugagarwal10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="p-2 sm:p-3 md:p-4 lg:p-5 bg-gradient-to-br from-slate-800/60 via-slate-700/60 to-slate-800/60 hover:from-slate-700/70 hover:via-slate-600/70 hover:to-slate-700/70 border border-slate-600/60 hover:border-slate-500/80 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-xl relative overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 group-hover:text-blue-400 transition-all duration-200 relative z-10" />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/yugagarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="p-2 sm:p-3 md:p-4 lg:p-5 bg-gradient-to-br from-slate-800/60 via-slate-700/60 to-slate-800/60 hover:from-slate-700/70 hover:via-slate-600/70 hover:to-slate-700/70 border border-slate-600/60 hover:border-slate-500/80 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-xl relative overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 group-hover:text-blue-400 transition-all duration-200 relative z-10" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Modern Profile Image */}
            <div className="flex-shrink-0 order-first xl:order-last mt-4">
              <div className="relative group">
                {/* Main Image Container with Modern Effects */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[400px] 2xl:h-[400px]">
                  {/* Rotating Ring Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1 shadow-lg shadow-blue-700">
                    <div className="w-full h-full rounded-full bg-slate-900"></div>
                  </div>
                  {/* Profile Image */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 relative z-10 xs:mt-10 ">
                    <img
                      src="/yug_photo-removebg-preview.png"
                      alt="Yug Agarwal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Info Section - Single Line with Equal Height/Width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Full-Stack Developer Card */}
            <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 relative overflow-hidden h-full">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10 text-center h-full flex flex-col justify-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-100 mb-3 sm:mb-4" style={{
                  textShadow: '0 0 30px rgba(148, 163, 184, 0.6), 0 0 60px rgba(148, 163, 184, 0.3)'
                }}>
                  Full-Stack Developer
                </p>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 animate-pulse" />
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                    React • Node.js • MongoDB Specialist
                  </p>
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 animate-pulse" />
                </div>
                <div className="flex justify-center items-center space-x-3 sm:space-x-4">
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse delay-300"></div>
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>

            {/* Creating Webpages Card */}
            <div className="bg-gradient-to-r from-slate-800/30 via-slate-700/30 to-slate-800/30 backdrop-blur-xl border border-slate-600/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/20 relative overflow-hidden h-full">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center h-full flex flex-col justify-center">
                <p className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-bold mb-4">
                  <span className="text-blue-400 font-black">Crafting scalable web applications</span>,
                  <span className="text-emerald-400 font-black"> exceptional user experiences</span>, and
                  <span className="text-purple-400 font-black"> innovative digital solutions.</span>
                </p>
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
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;