import React from 'react';
import { Code, Heart, Github, Linkedin, Mail, MapPin, Phone, Sparkles, Star, Award, User, Rocket, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border-t border-slate-700/50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Enhanced Brand Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-xl sm:rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white relative z-10" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                    Yug Agarwal
                  </span>
                  <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
                    <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-emerald-400" />
                    <span className="text-xs font-bold text-slate-400 tracking-wider">FULL-STACK DEVELOPER</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                Passionate about creating <span className="text-blue-400 font-bold">innovative web solutions</span> and
                <span className="text-emerald-400 font-bold"> exceptional user experiences</span>.
                Dedicated to delivering production-ready applications with modern technologies.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/yugagarwal10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 group-hover:text-blue-400 transition-colors relative z-10" />
                </a>
                <a
                  href="https://linkedin.com/in/yugagarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 group-hover:text-blue-400 transition-colors relative z-10" />
                </a>
                <a
                  href="mailto:yug.agarwal@email.com"
                  className="group p-2 sm:p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 group-hover:text-emerald-400 transition-colors relative z-10" />
                </a>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                <h4 className="text-lg sm:text-xl font-black text-white">Quick Navigation</h4>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "#about", label: "About Me", icon: <User className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { href: "#skills", label: "Skills & Technologies", icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { href: "#projects", label: "Featured Projects", icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { href: "#contact", label: "Get In Touch", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 text-sm sm:text-base"
                    >
                      <span>{link.icon}</span>
                      <span className="group-hover:text-blue-400 transition-colors">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
                <h4 className="text-lg sm:text-xl font-black text-white">Let's Connect</h4>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 bg-blue-600/20 rounded-lg">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-slate-400">Email</p>
                    <p className="text-white font-medium text-xs sm:text-sm md:text-base break-all">yugagarwal214@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 bg-emerald-600/20 rounded-lg">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-slate-400">Phone</p>
                    <p className="text-white font-medium text-xs sm:text-sm md:text-base">+91 81605 08314</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 bg-purple-600/20 rounded-lg">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-slate-400">Location</p>
                    <p className="text-white font-medium text-xs sm:text-sm md:text-base">Surat , India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced Bottom Section */}
          <div className="border-t border-slate-700/50 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <p className="text-slate-400 flex items-center space-x-1 sm:space-x-2 font-medium text-sm sm:text-base">
                  <span>© {currentYear} Yug Agarwal. Crafted with</span>
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
                  <span>and lots of</span>
                  <span className="text-yellow-400 font-bold">☕</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-bold text-slate-300">Available for work</span>
                </div>

                <button className="group px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Hire Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;