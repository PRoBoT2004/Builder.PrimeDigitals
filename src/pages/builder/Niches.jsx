import React from "react";
import { useNavigate } from "react-router-dom";
import useBuilderStore from "@/store/useBuilderStore";

const niches = [
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Build a professional real estate website with property listings and agent profiles",
    emoji: "🏡",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10"
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Showcase your personal work, skills, and achievements beautifully",
    emoji: "🧑‍🎨",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10"
  },
  {
    id: "agency",
    name: "Agency",
    description: "Promote your creative or digital agency with stunning visuals",
    emoji: "🏢",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/10 to-red-600/10"
  },
  {
    id: "restaurant",
    name: "Restaurant",
    description: "Create an appetizing website for your restaurant or food business",
    emoji: "🍽️",
    gradient: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-500/10 to-orange-600/10"
  },
  {
    id: "fitness",
    name: "Fitness",
    description: "Build a motivating website for gyms, trainers, or wellness centers",
    emoji: "💪",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/10"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Design a compelling online store to showcase and sell products",
    emoji: "🛍️",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-600/10"
  },
];

const Niches = () => {
  const navigate = useNavigate();
  const { setNiche } = useBuilderStore();

  const handleSelect = (nicheId) => {
    setNiche(nicheId);
    navigate("/builder/mode");
  };

  const handleBackToStart = () => {
    navigate("/builder/start");
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-20 left-10 w-96 h-96 bg-purple-600/5 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
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

        <div className="container relative z-10 px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="pt-12 mb-16 text-center sm:pt-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Step 1 of 4</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Choose Your
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-gradient-x">
                Niche
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Select your industry to get tailored templates and features that perfectly match your business needs.
            </p>
          </div>

          {/* Niches Grid */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative p-6 border shadow-2xl bg-gray-900/80 backdrop-blur-xl border-blue-500/20 rounded-3xl sm:p-8 lg:p-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {niches.map((niche, index) => (
                  <div
                    key={niche.id}
                    onClick={() => handleSelect(niche.id)}
                    className="relative p-6 transition-all duration-300 border cursor-pointer group bg-gray-800/50 border-gray-700/50 rounded-xl hover:border-blue-500/30 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${niche.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4 text-4xl transition-transform duration-300 sm:text-5xl group-hover:scale-110">
                        {niche.emoji}
                      </div>
                      
                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300 sm:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200">
                        {niche.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 sm:text-base group-hover:text-gray-300">
                        {niche.description}
                      </p>

                      {/* Arrow Icon */}
                      <div className="flex justify-end mt-4">
                        <svg 
                          className="w-5 h-5 text-gray-500 transition-all duration-300 transform group-hover:text-blue-400 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${niche.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-400">
                  Don't see your industry? Choose the closest match - you can customize everything later.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={handleBackToStart}
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-blue-300 transition-all duration-300 border-2 group border-blue-500/30 rounded-xl hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 backdrop-blur-sm"
            >
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to Start
            </button>
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

export default Niches;