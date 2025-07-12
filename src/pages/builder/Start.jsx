import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/builder/niches');
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-blue-600/5 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10 max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="pt-12 mb-16 text-center sm:pt-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Start Your Journey</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Build Your Perfect
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-gradient-x">
                Homepage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Transform your vision into reality with our intelligent homepage builder. 
              Create stunning, professional website designs and download them instantly.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="relative max-w-4xl mx-auto">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            
            <div className="relative p-6 border shadow-2xl bg-gray-900/80 backdrop-blur-xl border-blue-500/20 rounded-2xl sm:p-8 lg:p-12">
              {/* Content Header */}
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Getting Started
                </h2>
                <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "🎯",
                    title: "Choose Your Niche",
                    description: "Select from dozens of industry-specific templates"
                  },
                  {
                    icon: "🎨",
                    title: "Customize Design",
                    description: "Personalize colors, fonts, and layouts to match your brand"
                  },
                  {
                    icon: "📥",
                    title: "Download Design",
                    description: "Get your professional homepage design in PNG or PDF format"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="p-6 transition-all duration-300 border group bg-gray-800/50 border-gray-700/50 rounded-xl hover:border-blue-500/30 hover:bg-gray-800/70"
                  >
                    <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="mb-10">
                <h3 className="mb-6 text-xl font-semibold text-center text-white">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {[
                    "Select your industry and business type",
                    "Choose from our curated template collection", 
                    "Customize content, images, and styling",
                    "Download your homepage design as PNG or PDF"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-800/30 border-gray-700/30">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-10 sm:grid-cols-4">
                {[
                  { number: "50+", label: "Templates" },
                  { number: "10K+", label: "Designs Created" },
                  { number: "5min", label: "Setup Time" },
                  { number: "HD", label: "Quality Output" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 text-center border rounded-lg bg-gray-800/30 border-gray-700/30">
                    <div className="mb-1 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Navigation Component */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl blur-lg"></div>
                <div className="relative p-6 border bg-gray-800/50 border-blue-500/20 rounded-xl">
                  {/* Custom Get Started Button */}
                  <div className="text-center">
                    <button 
                      onClick={handleGetStarted}
                      className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Start Building Your Homepage
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:scale-x-100"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400">
              Join thousands of creators who've designed amazing homepages
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Start;