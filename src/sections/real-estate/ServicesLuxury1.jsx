// src/sections/real-estate/ServicesLuxury1.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServicesLuxury1 = () => {
  const [activeService, setActiveService] = useState(null)
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Luxury Property Sales",
      shortDesc: "Elite property marketing and sales",
      fullDesc: "Specialized marketing strategies and negotiation for high-end properties, ensuring maximum value and complete discretion for our distinguished clients.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format",
      stats: [
        { label: "Properties Sold", value: "$2.5B+" },
        { label: "Average Sale Time", value: "45 Days" },
        { label: "Client Satisfaction", value: "98%" }
      ],
      process: [
        "Market Analysis & Positioning",
        "Global Marketing Campaign",
        "Private Showings",
        "Negotiation & Closing"
      ],
      accent: "#C9A87D"
    },
    {
      id: 2,
      title: "Property Acquisition",
      shortDesc: "Finding your perfect estate",
      fullDesc: "Comprehensive property search and acquisition services, including off-market opportunities and exclusive access to pre-market listings.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format",
      stats: [
        { label: "Properties Sourced", value: "250+" },
        { label: "Off-Market Deals", value: "40%" },
        { label: "Success Rate", value: "95%" }
      ],
      process: [
        "Requirements Analysis",
        "Market Research",
        "Property Tours",
        "Due Diligence"
      ],
      accent: "#8D7B68"
    },
    {
      id: 3,
      title: "Investment Advisory",
      shortDesc: "Strategic portfolio management",
      fullDesc: "Expert guidance on real estate investment opportunities, portfolio diversification, and market timing strategies.",
      image: "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=1200&auto=format",
      stats: [
        { label: "ROI Average", value: "22%" },
        { label: "Portfolio Value", value: "$1.8B" },
        { label: "Client Return Rate", value: "92%" }
      ],
      process: [
        "Portfolio Analysis",
        "Investment Strategy",
        "Market Timing",
        "Performance Tracking"
      ],
      accent: "#A69CAC"
    },
    {
      id: 4,
      title: "Luxury Property Management",
      shortDesc: "Comprehensive estate care",
      fullDesc: "Full-service property management for luxury estates, including maintenance, security, and tenant relations.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format",
      stats: [
        { label: "Properties Managed", value: "150+" },
        { label: "Response Time", value: "< 1hr" },
        { label: "Tenant Retention", value: "94%" }
      ],
      process: [
        "Property Maintenance",
        "Tenant Services",
        "Financial Reporting",
        "Security Management"
      ],
      accent: "#9D8F8F"
    }
  ]


  return (
    <section className="relative min-h-screen py-20 bg-[#0f0f0f]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <div className="inline-flex items-center px-6 py-2 mb-6 space-x-2 border rounded-full border-white/10">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: services[0].accent }}></span>
            <span className="text-sm font-medium text-white/60">Luxury Services</span>
          </div>
          <h2 className="mb-6 text-5xl font-light text-white md:text-6xl">
            Exceptional Service,
            <span className="block">Extraordinary Results</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                activeService === service.id ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative overflow-hidden">
                {/* Service Card */}
                <div className={`relative p-8 transition-all duration-500 ${
                  activeService === service.id ? 'aspect-[16/9]' : 'aspect-square'
                }`}>
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full">
                    <AnimatePresence>
                      {activeService === service.id ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="mb-4 text-3xl font-light text-white">{service.title}</h3>
                            <p className="mb-6 text-white/80">{service.fullDesc}</p>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {service.stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                  <div className="mb-1 text-2xl font-light text-white" style={{ color: service.accent }}>
                                    {stat.value}
                                  </div>
                                  <div className="text-sm text-white/60">{stat.label}</div>
                                </div>
                              ))}
                            </div>

                            {/* Process */}
                            <div className="mt-auto">
                              <div className="mb-4 text-sm uppercase text-white/60">Our Process</div>
                              <div className="flex flex-wrap justify-between gap-2">
                                {service.process.map((step, idx) => (
                                  <div key={idx} className="flex items-center">
                                    <span className="w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: service.accent }}></span>
                                    <span className="text-sm text-white">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col justify-end h-full"
                        >
                          <h3 className="mb-2 text-2xl font-light text-white">{service.title}</h3>
                          <p className="text-white/60">{service.shortDesc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

ServicesLuxury1.meta = {
  id: 'services-luxury-1',
  name: 'Luxury Real Estate Services Grid',
  type: 'services',
  niche: 'real-estate',
  style: 'luxury'
}

export default ServicesLuxury1
