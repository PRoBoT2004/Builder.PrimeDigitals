import React from "react";
import { useNavigate } from "react-router-dom";
import useBuilderStore from "@/store/useBuilderStore";
import getTemplatesByNiche from "@/lib/getTemplatesByNiche";

const Templates = () => {
  const { niche, clearSections, addSection, setNiche } = useBuilderStore();
  const navigate = useNavigate();

  const templates = getTemplatesByNiche(niche);

  const handleSelectTemplate = (template) => {
    clearSections();
    setNiche(niche);
    template.sections.forEach((section) => addSection(section));
    navigate("/builder/editor?from=templates");
  };

  const handleBackToMode = () => {
    navigate("/builder/mode");
  };

  // Enhanced template data with descriptions and previews
  const enhanceTemplateData = (template) => {
    const templateEnhancements = {
      "luxury-home-template": {
        description: "Professional luxury real estate template with elegant design and premium features",
        preview: "🏡",
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-500/10 to-teal-600/10",
        features: ["Luxury hero section", "Premium services showcase", "Client testimonials", "Professional footer"]
      }
    };

    const enhancement = templateEnhancements[template.id] || {
      description: `Professional template with ${template.sections.length} carefully crafted sections`,
      preview: "🎨",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      features: template.sections.map(section => section.name)
    };

    return {
      ...template,
      ...enhancement
    };
  };

  // Niche display names
  const nicheDisplayNames = {
    "real-estate": "Real Estate",
    "portfolio": "Portfolio",
    "agency": "Agency",
    "restaurant": "Restaurant",
    "fitness": "Fitness",
    "ecommerce": "E-commerce"
  };

  const nicheDisplayName = nicheDisplayNames[niche] || niche;

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
          {/* Back Button */}
          <div className="pt-8 mb-8">
            <button
              onClick={handleBackToMode}
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
              Back to Mode Selection
            </button>
          </div>

          {/* Header Section */}
          <div className="mb-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Step 3 of 4</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text">
                Choose Your
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text animate-gradient-x">
                Template
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Select a professionally designed template for your {nicheDisplayName} business. 
              You can customize everything later.
            </p>
          </div>

          {/* Templates Content */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative p-6 border shadow-2xl bg-gray-900/80 backdrop-blur-xl border-blue-500/20 rounded-3xl sm:p-8 lg:p-12">
              
              {templates.length === 0 ? (
                /* No Templates Available */
                <div className="py-16 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-yellow-500/10 border-yellow-500/20 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-yellow-300">Coming Soon</span>
                  </div>
                  
                  <div className="mb-6 text-6xl">🚧</div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {nicheDisplayName} Templates Coming Soon
                  </h3>
                  
                  <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-400">
                    We're working hard to create amazing templates for {nicheDisplayName} businesses. 
                    In the meantime, you can use our Custom Builder to create your perfect homepage.
                  </p>
                  
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                      onClick={() => navigate("/builder/editor")}
                      className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 group bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Try Custom Builder
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:scale-x-100"></div>
                    </button>
                    
                    <button
                      onClick={() => navigate("/builder/niches")}
                      className="px-8 py-4 font-semibold text-blue-300 transition-all duration-300 border-2 group border-blue-500/30 rounded-xl hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 backdrop-blur-sm"
                    >
                      Choose Different Niche
                    </button>
                  </div>
                </div>
              ) : (
                /* Templates Available */
                <>
                  <div className="mb-8 text-center">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {nicheDisplayName} Templates
                    </h3>
                    <p className="text-sm text-gray-400">
                      Choose from our curated collection of {nicheDisplayName}-specific templates
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                    {templates.map((template, index) => {
                      const enhancedTemplate = enhanceTemplateData(template);
                      
                      return (
                        <div
                          key={template.id}
                          onClick={() => handleSelectTemplate(template)}
                          className="relative p-6 transition-all duration-300 border cursor-pointer group bg-gray-800/50 border-gray-700/50 rounded-xl hover:border-blue-500/30 hover:bg-gray-800/70 hover:scale-105 hover:shadow-2xl"
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          {/* Gradient Background on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${enhancedTemplate.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            {/* Preview Icon */}
                            <div className="mb-4 text-4xl transition-transform duration-300 sm:text-5xl group-hover:scale-110">
                              {enhancedTemplate.preview}
                            </div>
                            
                            {/* Title */}
                            <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300 sm:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200">
                              {template.name}
                            </h3>
                            
                            {/* Description */}
                            <p className="mb-4 text-sm leading-relaxed text-gray-400 transition-colors duration-300 sm:text-base group-hover:text-gray-300">
                              {enhancedTemplate.description}
                            </p>

                            {/* Sections Count */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${enhancedTemplate.gradient}`}></div>
                                <span className="text-sm text-gray-300">
                                  {template.sections.length} sections included
                                </span>
                              </div>
                            </div>

                            {/* Sections Preview */}
                            <div className="mb-6 space-y-2">
                              <div className="mb-2 text-sm font-medium text-gray-300">Included sections:</div>
                              {template.sections.slice(0, 4).map((section, sectionIndex) => (
                                <div key={sectionIndex} className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                  <span className="text-xs text-gray-500">
                                    {section.name}
                                  </span>
                                </div>
                              ))}
                              {template.sections.length > 4 && (
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                  <span className="text-xs text-gray-500">
                                    +{template.sections.length - 4} more sections
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Arrow Icon */}
                            <div className="flex justify-end">
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
                          <div className={`absolute inset-0 bg-gradient-to-r ${enhancedTemplate.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-12 text-center">
                    <p className="text-sm text-gray-400">
                      Don't worry about perfection - you can customize every element in the next step.
                    </p>
                  </div>
                </>
              )}
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
  );
};

export default Templates;