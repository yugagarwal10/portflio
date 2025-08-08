import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Laptop, Smartphone, Globe, Star, Award, TrendingUp, Code, Database, Palette, Zap, Eye, Heart, Calendar, Users, Handshake } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Color combinations for technology tags
  const techColors = [
    'text-blue-400 border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20',
    'text-emerald-400 border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20',
    'text-purple-400 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20',
    'text-pink-400 border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/20',
    'text-orange-400 border-orange-500/50 bg-orange-500/10 hover:bg-orange-500/20',
    'text-red-400 border-red-500/50 bg-red-500/10 hover:bg-red-500/20',
    'text-yellow-400 border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20',
    'text-indigo-400 border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20',
    'text-teal-400 border-teal-500/50 bg-teal-500/10 hover:bg-teal-500/20',
    'text-cyan-400 border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20',
    'text-green-400 border-green-500/50 bg-green-500/10 hover:bg-green-500/20',
    'text-rose-400 border-rose-500/50 bg-rose-500/10 hover:bg-rose-500/20',
    'text-violet-400 border-violet-500/50 bg-violet-500/10 hover:bg-violet-500/20',
    'text-lime-400 border-lime-500/50 bg-lime-500/10 hover:bg-lime-500/20',
    'text-amber-400 border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20',
    'text-sky-400 border-sky-500/50 bg-sky-500/10 hover:bg-sky-500/20'
  ];

  // Function to get random color for each technology
  const getRandomTechColor = useMemo(() => {
    const colorMap = new Map();
    return (tech: string) => {
      if (!colorMap.has(tech)) {
        colorMap.set(tech, techColors[Math.floor(Math.random() * techColors.length)]);
      }
      return colorMap.get(tech);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Laptop className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'fullstack',
      featured: true,
      status: 'Completed',
      duration: '3 months',
      team: '4 developers',
      likes: 127,
      views: 2340,
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderGradient: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced project analytics.',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'frontend',
      featured: true,
      status: 'In Progress',
      duration: '2 months',
      team: '3 developers',
      likes: 89,
      views: 1560,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderGradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, responsive design, and comprehensive weather analytics. Integrates multiple APIs for accurate data.',
      technologies: ['React', 'Chart.js', 'Weather APIs', 'CSS Grid', 'PWA'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'frontend',
      featured: false,
      status: 'Completed',
      duration: '1 month',
      team: '2 developers',
      likes: 156,
      views: 2890,
      gradient: 'from-orange-500/20 to-red-500/20',
      borderGradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations, dark mode, optimized performance, and advanced SEO. Built with cutting-edge technologies.',
      technologies: ['React', 'Tailwind CSS', 'AOS', 'Responsive Design', 'SEO'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'design',
      featured: false,
      status: 'Completed',
      duration: '2 weeks',
      team: '1 developer',
      likes: 203,
      views: 3420,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: 'API Management System',
      description: 'Comprehensive API management platform with authentication, rate limiting, analytics, and documentation. Built for enterprise-level scalability.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'backend',
      featured: false,
      status: 'Completed',
      duration: '4 months',
      team: '5 developers',
      likes: 78,
      views: 1240,
      gradient: 'from-indigo-500/20 to-blue-500/20',
      borderGradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      description: 'Modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption. Supports multimedia messages and voice calls.',
      technologies: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'MongoDB'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: 'fullstack',
      featured: true,
      status: 'In Progress',
      duration: '3 months',
      team: '3 developers',
      likes: 145,
      views: 2100,
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderGradient: 'from-green-500 to-emerald-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Star className="h-4 w-4" /> },
    { id: 'featured', label: 'Featured', icon: <Award className="h-4 w-4" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code className="h-4 w-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Palette className="h-4 w-4" /> },
    { id: 'backend', label: 'Backend', icon: <Database className="h-4 w-4" /> },
    { id: 'design', label: 'Design', icon: <Eye className="h-4 w-4" /> }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default:
        return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  return (
    <section id="projects" className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
          {/* Enhanced Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-4xl mx-auto font-medium leading-relaxed px-4">
              A curated collection of my most impactful projects, showcasing
              <span className="text-blue-400 font-bold"> innovative solutions</span>,
              <span className="text-emerald-400 font-bold"> cutting-edge technologies</span>, and
              <span className="text-purple-400 font-bold"> exceptional user experiences</span>
            </p>
          </div>

          {/* Enhanced Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="100">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group flex items-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm text-sm ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white shadow-xl shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{filter.icon}</span>
                <span className="relative z-10">{filter.label}</span>
                {activeFilter === filter.id && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 relative ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image with Enhanced Overlay */}
                <div className="relative overflow-hidden p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-105 rounded-2xl transition-transform duration-300"
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50 group-hover:opacity-30 transition-opacity duration-300`}></div>

                  {/* Hover Overlay with Quick Actions */}
                  <div className={`absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center space-x-4 sm:space-x-6 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <button className="group/btn bg-blue-600 hover:bg-blue-700 p-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
                      <ExternalLink className="h-6 w-6 text-white group-hover/btn:rotate-6 transition-transform" />
                    </button>
                    <button className="group/btn bg-slate-700 hover:bg-slate-600 p-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl">
                      <Github className="h-6 w-6 text-white group-hover/btn:rotate-6 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-4 sm:p-6 md:p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${project.borderGradient} animate-pulse`}></div>
                    </div>

                    <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-base font-medium line-clamp-3">
                      {project.description}
                    </p>

                    {/* Enhanced Technology Tags with Random Colors */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 border text-sm rounded-lg font-bold hover:scale-105 transition-all duration-200 cursor-pointer backdrop-blur-sm ${getRandomTechColor(tech)}`}
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
                  Interested in My Work?
                </h3>
                <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Explore more projects on my GitHub or get in touch to discuss potential collaborations
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <a
                    href="https://github.com/yugagarwal10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 sm:space-x-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                      <span className="relative z-10">View All Projects</span>
                    </button>
                  </a>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })} className="group bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm  flex items-center space-x-2 sm:space-x-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Handshake className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                    <span className="relative z-10">Let's Collaborate</span>
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

export default Projects;