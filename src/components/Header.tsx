import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-emerald-500/8 transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Ultra-Enhanced Logo Section */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="p-1.5 xs:p-2 sm:p-3 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <Code className="h-4 xs:h-5 sm:h-6 lg:h-7 w-4 xs:w-5 sm:w-6 lg:w-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-200" />
              </div>
              {/* Enhanced floating particles around logo */}
              <div className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg shadow-blue-400/50"></div>
              <div className="absolute -bottom-0.5 xs:-bottom-1 -left-0.5 xs:-left-1 w-1 xs:w-1.5 h-1 xs:h-1.5 bg-emerald-400 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg shadow-emerald-400/50"></div>
              <div className="absolute top-1/2 -right-1 xs:-right-2 w-0.5 xs:w-1 h-0.5 xs:h-1 bg-purple-400 rounded-full animate-pulse delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <span className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-200">
                  YUG AGARWAL
                </span>
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-blue-400/30 blur-sm group-hover:text-blue-400/50 transition-colors duration-200">
                  YUG AGARWAL
                </div>
              </div>
              <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2 mt-0.5 sm:mt-1">
                <Sparkles className="h-1.5 xs:h-2 sm:h-3 w-1.5 xs:w-2 sm:w-3 text-emerald-400 animate-pulse" />
                <span className="text-xs xs:text-xs sm:text-xs font-black tracking-wider text-slate-400 group-hover:text-slate-300 transition-colors duration-200">FULL-STACK DEVELOPER</span>
                <div className="w-0.5 h-0.5 xs:w-1 xs:h-1 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'about', label: 'About', icon: User, color: 'blue' },
              { id: 'skills', label: 'Skills', icon: Code, color: 'emerald' },
              { id: 'projects', label: 'Projects', icon: Briefcase, color: 'purple' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-2 px-3 lg:px-4 py-2 lg:py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105 relative overflow-hidden ${
                  item.color === 'blue' ? 'hover:bg-blue-500/15 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30' :
                  item.color === 'emerald' ? 'hover:bg-emerald-500/15 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-500/30' :
                  'hover:bg-purple-500/15 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30'
                } text-slate-300 text-sm lg:text-base border border-transparent hover:backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <item.icon className="h-3 w-3 lg:h-4 lg:w-4 group-hover:scale-110 transition-transform duration-200 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            
            {/* Ultra-Enhanced Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-bold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden text-sm lg:text-base shadow-lg shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <Mail className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 group-hover:rotate-12 transition-transform duration-200" />
              <span className="relative z-10">Contact</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
            </button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-2 xs:p-2.5 sm:p-3 hover:bg-slate-800/60 rounded-lg xs:rounded-xl transition-all duration-200 hover:scale-105 border border-slate-700/50 hover:border-slate-600/70 backdrop-blur-sm relative overflow-hidden group shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 xs:mt-4 sm:mt-6 pb-3 xs:pb-4 sm:pb-6 space-y-2 xs:space-y-2.5 sm:space-y-3 border-t border-slate-700/50 pt-3 xs:pt-4 sm:pt-6 backdrop-blur-xl">
            {[
              { id: 'about', label: 'About Me', icon: User },
              { id: 'skills', label: 'Skills & Technologies', icon: Code },
              { id: 'projects', label: 'Featured Projects', icon: Briefcase }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-2.5 xs:space-x-3 sm:space-x-4 w-full text-left px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-700/60 rounded-lg xs:rounded-xl transition-all duration-200 font-bold text-slate-300 hover:text-white border border-transparent hover:border-slate-600/50 relative overflow-hidden text-sm xs:text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <item.icon className="h-3.5 xs:h-4 sm:h-5 w-3.5 xs:w-4 sm:w-5 group-hover:scale-110 transition-transform duration-200 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center space-x-2.5 xs:space-x-3 sm:space-x-4 w-full text-left px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-lg xs:rounded-xl transition-all duration-200 font-bold text-white relative overflow-hidden text-sm xs:text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <Mail className="h-3.5 xs:h-4 sm:h-5 w-3.5 xs:w-4 sm:w-5 relative z-10 group-hover:rotate-12 transition-transform duration-200" />
              <span className="relative z-10">Get In Touch</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;