import React from 'react';
import { Code, Database, Globe, Wrench, Star, TrendingUp, Award, Target, Zap, Trophy, Smartphone, Link2, GitBranch, Puzzle, Users, FileText } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400" />,
      gradient: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', expertise: 'Expert' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600', expertise: 'Expert' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600', expertise: 'Expert' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-teal-600', expertise: 'Expert' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-emerald-600/20',
      borderColor: 'border-emerald-500/30',
      skills: [
        { name: 'Node.js', level: 95, color: 'from-green-400 to-green-600', expertise: 'Expert' },
        { name: 'MongoDB', level: 95, color: 'from-green-500 to-green-700', expertise: 'Expert' },
        { name: 'SQL', level: 40, color: 'from-blue-500 to-blue-700', expertise: 'Basic' },
        { name: 'Python', level: 40, color: 'from-yellow-500 to-yellow-700', expertise: 'Basic' },
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" />,
      gradient: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', expertise: 'Advanced' },
        { name: 'TypeScript', level: 80, color: 'from-indigo-400 to-indigo-600', expertise: 'Advanced' },
        { name: 'Python', level: 60, color: 'from-blue-400 to-blue-600', expertise: 'Intermediate' },
        { name: 'C', level: 45, color: 'from-gray-400 to-gray-600', expertise: 'Basic' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-orange-400" />,
      gradient: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-600 to-gray-800', expertise: 'Expert' },
        { name: 'Postman', level: 85, color: 'from-pink-400 to-pink-600', expertise: 'Intermediate' },
        { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600', expertise: 'Intermediate' },
        { name: 'CI/CD', level: 65, color: 'from-purple-400 to-purple-600', expertise: 'Intermediate' },
      ]
    }
  ];

  const getExpertiseIcon = (expertise: string) => {
    switch (expertise) {
      case 'Expert':
        return <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />;
      case 'Advanced':
        return <Award className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 fill-current" />;
      case 'Intermediate':
        return <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 fill-current" />;
      default:
        return <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />;
    }
  };

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Expert':
        return 'text-yellow-400';
      case 'Advanced':
        return 'text-emerald-400';
      case 'Intermediate':
        return 'text-blue-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] md:w-[800px] h-96 sm:h-[600px] md:h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/20 rounded-full animate-pulse"
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
          <div className="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-4xl mx-auto font-medium leading-relaxed px-4">
              A comprehensive showcase of my technical proficiency across
              <span className="text-blue-400 font-bold"> modern web technologies</span>,
              <span className="text-emerald-400 font-bold"> development tools</span>, and
              <span className="text-purple-400 font-bold"> programming languages</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm border ${category.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr from-white to-transparent rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6 sm:mb-8 md:mb-10">
                    <div className="p-3 sm:p-4 bg-slate-800/50 rounded-xl sm:rounded-2xl mr-3 sm:mr-5 border border-slate-700 backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-2">{category.title}</h3>
                      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                            <span className="text-sm sm:text-base md:text-lg font-black text-white">{skill.name}</span>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
                              {getExpertiseIcon(skill.expertise)}
                              <span className={`text-xs sm:text-sm font-bold ${getExpertiseColor(skill.expertise)}`}>
                                {skill.expertise}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="w-full bg-slate-800/50 rounded-full h-3 sm:h-4 border border-slate-700/50 overflow-hidden">
                            <div
                              className={`h-3 sm:h-4 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden shadow-lg`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Skills */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">Additional Expertise</h3>
                <div className="flex justify-center items-center space-x-2 mb-8 sm:mb-12">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {[
                    { name: 'Automation', icon: Code, color: 'from-blue-500/20 to-blue-600/20' },
                    { name: 'RESTful APIs', icon: Link2, color: 'from-emerald-500/20 to-emerald-600/20' },
                    { name: 'Responsive Design', icon: Smartphone, color: 'from-purple-500/20 to-purple-600/20' },
                    { name: 'Version Control', icon: GitBranch, color: 'from-orange-500/20 to-orange-600/20' },
                    { name: 'Agile Development', icon: Zap, color: 'from-yellow-500/20 to-yellow-600/20' },
                    { name: 'Problem Solving', icon: Puzzle, color: 'from-pink-500/20 to-pink-600/20' },
                    { name: 'Team Collaboration', icon: Users, color: 'from-teal-500/20 to-teal-600/20' },
                    { name: 'Technical Writing', icon: FileText, color: 'from-indigo-500/20 to-indigo-600/20' },
                  ].map((skill, index) => (

                    <div
                      key={skill.name}
                      className={`group bg-gradient-to-br ${skill.color} border border-slate-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex justify-center mb-2 sm:mb-3 text-slate-300 group-hover:text-white transition-colors">
                        <skill.icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="block text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white text-center transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="300">
            {[
              { number: '2+', label: 'Years Experience', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30' },
              { number: '5+', label: 'Projects Completed', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-emerald-600/20', border: 'border-emerald-500/30' },
              { number: '5+', label: 'Technologies Mastered', color: 'text-purple-400', bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30' },
              { number: '100%', label: 'Client Satisfaction', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500/30' }
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
        </div>
      </div>
    </section>
  );
};

export default Skills;