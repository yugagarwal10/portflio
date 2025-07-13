import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, User, MessageSquare, Sparkles, Star, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-4 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
          <div className="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-4xl mx-auto font-medium leading-relaxed px-4">
              Ready to start your next project? Let's discuss how we can work together to bring your
              <span className="text-blue-400 font-bold"> innovative ideas</span> to life with
              <span className="text-emerald-400 font-bold"> cutting-edge technology</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Enhanced Contact Info */}
            <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-10">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-2xl shadow-xl">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Let's Connect</h3>
                      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mt-2"></div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                    <div className="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm hover:scale-105">
                      <div className="p-3 sm:p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base font-bold text-slate-400 mb-1">Email Address</p>
                        <p className="text-white font-medium text-sm sm:text-base lg:text-lg break-all">yugagarwal214@gmail.com</p>
                      </div>
                    </div>

                    <div className="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm hover:scale-105">
                      <div className="p-3 sm:p-4 bg-emerald-600/20 rounded-xl border border-emerald-500/30">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base font-bold text-slate-400 mb-1">Phone Number</p>
                        <p className="text-white font-medium text-sm sm:text-base lg:text-lg">+91 81605 08314</p>
                      </div>
                    </div>

                    <div className="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm hover:scale-105">
                      <div className="p-3 sm:p-4 bg-purple-600/20 rounded-xl border border-purple-500/30">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base font-bold text-slate-400 mb-1">Location</p>
                        <p className="text-white font-medium text-sm sm:text-base lg:text-lg">Surat , India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultra-Modern Contact Form */}
            <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 right-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-10">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 rounded-2xl shadow-xl">
                      <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Send Message</h3>
                      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mt-2"></div>
                    </div>
                  </div>

                  {isSubmitted && (
                    <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl flex items-center space-x-3 sm:space-x-4 backdrop-blur-sm" data-aos="zoom-in">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-emerald-400 font-bold text-sm sm:text-base">Message Sent Successfully!</p>
                        <p className="text-emerald-300 text-xs sm:text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="group">
                      <label htmlFor="name" className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-slate-300 flex items-center">
                        <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" />
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:outline-none focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm group-hover:border-slate-600/50 text-sm sm:text-base"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm sm:text-base font-bold mb-3 sm:mb-4 text-slate-300 flex items-center">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm group-hover:border-slate-600/50 text-sm sm:text-base"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm sm:text-base font-bold mb-3 sm:mb-4 text-slate-300 flex items-center">
                        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-400" />
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl focus:outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-slate-400 resize-none backdrop-blur-sm group-hover:border-slate-600/50 text-sm sm:text-base"
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-3 sm:space-x-4 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                          <span className="relative z-10">Send Message</span>
                          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 animate-pulse relative z-10" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;