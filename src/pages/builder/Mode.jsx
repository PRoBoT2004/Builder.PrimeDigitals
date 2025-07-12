import React from 'react'
import { useNavigate } from 'react-router-dom'
import useBuilderStore from '@/store/useBuilderStore'

const Mode = () => {
  const navigate = useNavigate()
  const { niche, setNiche } = useBuilderStore()

  const modes = [
    {
      id: 'quick',
      title: 'Quick Start',
      description: 'Get started fast with pre-made sections and templates tailored to your niche',
      icon: '⚡',
      route: '/builder/templates',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/10 to-teal-600/10',
      features: ['Pre-built sections', 'Industry templates', 'Fast setup', 'Beginner friendly']
    },
    {
      id: 'custom',
      title: 'Custom Builder',
      description: 'Full control over every element with advanced customization options',
      icon: '🎨',
      route: '/builder/editor',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-600/10',
      features: ['Complete control', 'Advanced options', 'Unlimited creativity', 'Professional tools']
    }
  ]

  const handleModeSelect = (route) => {
    // Optional: persist niche again here
    if (niche) {
      localStorage.setItem("homepage_builder_layout", JSON.stringify({
        niche,
        sections: [] // Empty for custom start
      }))
    }
    navigate(route)
  }

  const handleBackToNiches = () => {
    navigate('/builder/niches')
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-emerald-600/5 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
          {/* Back Button */}
          <div className="pt-8 mb-8">
            <button
              onClick={handleBackToNiches}
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-300 transition-all duration-300 group hover:text-blue-200"
            >
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to Niche Selection
            </button>
          </div>

          {/* Header Section */}
          <div className="mb-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Step 2 of 4</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Select Builder
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-gradient-x">
                Mode
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Choose how you want to build your homepage. Both paths lead to stunning results.
            </p>
          </div>

          {/* Mode Selection */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-emerald-600/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative p-6 border shadow-2xl bg-gray-900/80 backdrop-blur-xl border-blue-500/20 rounded-3xl sm:p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                {modes.map((mode, index) => (
                  <div
                    key={mode.id}
                    onClick={() => handleModeSelect(mode.route)}
                    className="relative p-8 transition-all duration-300 border cursor-pointer group bg-gray-800/50 border-gray-700/50 rounded-2xl hover:border-blue-500/30 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${mode.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 text-5xl transition-transform duration-300 sm:text-6xl group-hover:scale-110">
                        {mode.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300 sm:text-3xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200">
                        {mode.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="mb-6 text-base leading-relaxed text-gray-400 transition-colors duration-300 sm:text-lg group-hover:text-gray-300">
                        {mode.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-6 space-y-3">
                        {mode.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${mode.gradient}`}></div>
                            <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium bg-gradient-to-r ${mode.gradient} bg-clip-text text-transparent`}>
                          {mode.id === 'quick' ? 'Recommended for beginners' : 'For advanced users'}
                        </span>
                        <svg 
                          className="w-6 h-6 text-gray-500 transition-all duration-300 transform group-hover:text-blue-400 group-hover:translate-x-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>

              {/* Comparison Info */}
              <div className="p-6 mt-12 border bg-gray-800/30 rounded-xl border-gray-700/30">
                <h4 className="mb-4 text-lg font-semibold text-center text-white">
                  Not sure which to choose?
                </h4>
                <div className="grid gap-4 text-sm text-gray-400 sm:grid-cols-2">
                  <div className="text-center">
                    <div className="mb-2 font-medium text-emerald-400">Choose Quick Start if:</div>
                    <p>You want to get online fast, prefer guided setup, or are new to web design</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 font-medium text-purple-400">Choose Custom Builder if:</div>
                    <p>You have specific design requirements, want full control, or are experienced with design tools</p>
                  </div>
                </div>
              </div>
            </div>
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
  )
}

export default Mode