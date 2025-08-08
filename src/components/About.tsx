import React, { useState } from 'react';
import { Code, Server, Database, Figma, User, Award, Target, Zap, BookOpen, Coffee, Heart, Star, TrendingUp, Globe, Lightbulb, Rocket, Brain, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const tabs = [
    { id: 'journey', label: 'Journey', icon: <Rocket className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: 'skills', label: 'Core Skills', icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: 'values', label: 'Values & Approach', icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="h-4 w-4 sm:h-5 sm:w-5" /> }
  ];

  const coreSkills = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      description: 'Creating responsive, interactive user interfaces with modern frameworks',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
      gradient: 'from-blue-500/20 to-blue-600/20',
      borderGradient: 'from-blue-500 to-blue-600',
      expertise: 95
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />,
      description: 'Building scalable server-side applications and robust APIs',
      technologies: ['Node.js', 'Express', 'RESTful APIs', 'Microservices'],
      gradient: 'from-emerald-500/20 to-emerald-600/20',
      borderGradient: 'from-emerald-500 to-emerald-600',
      expertise: 88
    },
    {
      title: 'Database Management',
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />,
      description: 'Designing efficient data structures and optimizing queries',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Data Modeling'],
      gradient: 'from-purple-500/20 to-purple-600/20',
      borderGradient: 'from-purple-500 to-purple-600',
      expertise: 82
    },
    {
      title: 'UI/UX Design',
      icon: <Figma className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400" />,
      description: 'Crafting intuitive user experiences and beautiful interfaces',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      gradient: 'from-pink-500/20 to-pink-600/20',
      borderGradient: 'from-pink-500 to-pink-600',
      expertise: 75
    }
  ];

  const achievements = [
    {
      title: '5+ Projects Completed',
      description: 'Successfully delivered diverse web applications',
      icon: <CheckCircle className="h-6 w-6 text-emerald-400" />,
      color: 'text-emerald-400'
    },
    {
      title: '2+ Years Experience',
      description: 'Continuous learning and professional growth',
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      color: 'text-blue-400'
    },
    {
      title: '100% Client Satisfaction',
      description: 'Committed to exceeding expectations',
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      color: 'text-yellow-400'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active in the developer community',
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      color: 'text-purple-400'
    }
  ];

  const values = [
    {
      title: 'Clean Code Philosophy',
      description: 'Writing maintainable, readable, and efficient code that stands the test of time',
      icon: <Code className="h-6 w-6 text-blue-400" />
    },
    {
      title: 'User-Centric Design',
      description: 'Prioritizing user experience and accessibility in every project',
      icon: <User className="h-6 w-6 text-emerald-400" />
    },
    {
      title: 'Continuous Learning',
      description: 'Staying updated with latest technologies and industry best practices',
      icon: <BookOpen className="h-6 w-6 text-purple-400" />
    },
    {
      title: 'Problem Solving',
      description: 'Approaching challenges with creativity and analytical thinking',
      icon: <Lightbulb className="h-6 w-6 text-yellow-400" />
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'journey':
        return (
          <div className="space-y-6 sm:space-y-8" data-aos="fade-up">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center">
                  <Rocket className="h-6 w-6 text-blue-400 mr-3" />
                  The Beginning
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  My journey into web development started with curiosity about how websites work. What began as
                  simple HTML experiments quickly evolved into a deep passion for creating
                  <span className="text-blue-400 font-bold"> digital experiences</span> that make a difference.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500 to-purple-500 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-emerald-400 mr-3" />
                  Professional Growth
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Through hands-on projects and continuous learning, I've developed expertise in
                  <span className="text-emerald-400 font-bold"> full-stack development</span>. Each project
                  has been an opportunity to push boundaries and deliver
                  <span className="text-white font-bold"> exceptional results</span>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center">
                  <Target className="h-6 w-6 text-purple-400 mr-3" />
                  Current Focus
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Today, I specialize in creating
                  <span className="text-purple-400 font-bold"> scalable web applications</span> using modern
                  technologies. I'm passionate about clean code, user experience, and staying at the forefront of
                  <span className="text-white font-bold"> technological innovation</span>.
                </p>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up">
            {coreSkills.map((skill, index) => (
              <div
                key={skill.title}
                className={`bg-gradient-to-br ${skill.gradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden cursor-pointer`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl mr-4 border border-slate-700">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg sm:text-xl font-black text-white mb-1">{skill.title}</h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${skill.borderGradient} rounded-full`}></div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-xs sm:text-sm rounded-lg text-slate-300 font-bold hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-400">Expertise Level</span>
                      <span className="text-sm font-black text-white">{skill.expertise}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-3 border border-slate-700/50">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.borderGradient} transition-all duration-1000 relative overflow-hidden`}
                        style={{ width: hoveredSkill === index ? `${skill.expertise}%` : '0%' }}
                      >
                        <div className="absolute inset-0 bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'values':
        return (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-white to-transparent rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl mr-4 border border-slate-700">
                      {value.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">{value.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-white to-transparent rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex p-4 sm:p-6 bg-slate-800/50 rounded-2xl border border-slate-700 mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-300 text-sm sm:text-base">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-2 sm:py-4 md:py-6 lg:py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] md:w-[800px] h-96 sm:h-[600px] md:h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 relative overflow-hidden h-full">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10 text-center h-full flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black  bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                  About Me
                </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 sm:mb-8 mt-2 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center justify-center space-x-2 px-3 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm text-sm sm:text-base ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white shadow-xl shadow-blue-500/25 '
                      : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{tab.icon}</span>
                    <span className="relative z-10 text-center leading-tight hidden sm:inline">{tab.label}</span>
                    <span className="relative z-10 text-center leading-tight sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                    {activeTab === tab.id && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
              {/* Enhanced Tab Content */}
              <div className="mb-4 sm:mb-8">
                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Enhanced Personal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 mt-8" data-aos="fade-up" data-aos-delay="200">
            {[
              { number: '2+', label: 'Years Experience', icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30' },
              { number: '5+', label: 'Projects Completed', icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'text-emerald-400', bg: 'from-emerald-500/20 to-emerald-600/20', border: 'border-emerald-500/30' },
              { number: '5+', label: 'Technologies', icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'text-purple-400', bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30' },
              { number: '24/7', label: 'Availability', icon: <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />, color: 'text-yellow-400', bg: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500/30' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center bg-gradient-to-br ${stat.bg} backdrop-blur-sm border ${stat.border} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full blur-xl"></div>
                </div>
                <div className="relative z-10">
                  <div className={`${stat.color} mb-2 sm:mb-3 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black ${stat.color} mb-2 sm:mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-bold text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900x/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
                  Ready to Work Together?
                </h3>
                <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let's discuss your next project and bring your ideas to life with cutting-edge technology
                </p>
                <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })} className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 sm:space-x-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Let's Connect</span>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                  <button className="group bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;