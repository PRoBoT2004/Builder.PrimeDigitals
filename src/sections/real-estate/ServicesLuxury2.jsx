// src/sections/real-estate/Services3.jsx
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Private Client Advisory",
    category: "Luxury Services",
    description: "Exclusive representation for distinguished clients seeking exceptional properties",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format",
    accent: "#DDB892",
    highlights: [
      "Personal Portfolio Manager",
      "24/7 Concierge Service",
      "Global Property Access"
    ],
    stats: {
      clients: "150+",
      satisfaction: "99%",
      retention: "95%"
    }
  },
  {
    id: 2,
    title: "Investment Strategy",
    category: "Wealth Management",
    description: "Strategic real estate investment planning and portfolio optimization",
    image: "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=1600&auto=format",
    accent: "#B08968",
    highlights: [
      "Market Analysis",
      "Portfolio Optimization",
      "Risk Management"
    ],
    stats: {
      roi: "22%",
      assets: "$2.5B",
      markets: "25+"
    }
  },
  {
    id: 3,
    title: "Property Development",
    category: "Development",
    description: "End-to-end luxury property development and project management",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&auto=format",
    accent: "#9C6644",
    highlights: [
      "Architecture & Design",
      "Project Management",
      "Quality Assurance"
    ],
    stats: {
      projects: "45+",
      value: "$1.8B",
      awards: "12"
    }
  }
]

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-[1400px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#0c0c0c]">
        <div className="relative p-8 md:p-12">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div 
                  className="inline-flex items-center px-4 py-2 mb-4 space-x-2 rounded-full"
                  style={{ backgroundColor: `${service.accent}20` }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: service.accent }}
                  />
                  <span className="text-sm font-medium text-white/80">
                    {service.category}
                  </span>
                </div>
                <h3 className="mb-4 text-4xl font-light text-white md:text-5xl">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-white/70">
                  {service.description}
                </p>
              </motion.div>

              {/* Highlights */}
              <div className="mb-8 space-y-4">
                {service.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: service.accent }}
                    />
                    <span className="text-white/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-4 md:gap-8"
              >
                {Object.entries(service.stats).map(([key, value], idx) => (
                  <div key={idx} className="text-center">
                    <div 
                      className="mb-2 text-2xl font-light md:text-3xl"
                      style={{ color: service.accent }}
                    >
                      {value}
                    </div>
                    <div className="text-xs capitalize md:text-sm text-white/60">
                      {key}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full">
              <motion.div
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] md:aspect-[16/12] lg:aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, ${service.accent}30, transparent)`,
                      opacity: isHovered ? 0.8 : 0.4
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ServicesLuxury2 = () => {
  const containerRef = useRef(null)
  const [activeService, setActiveService] = useState(0)

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 bg-[#0c0c0c] overflow-x-hidden"
    >
      {/* Navigation Dots */}
      {/* <div className="fixed z-50 -translate-y-1/2 top-1/2 right-8">
        <div className="space-y-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'w-8 bg-white' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div> */}

      {/* Services Content */}
      <div className="container px-4 mx-auto">
        <div className="space-y-32 md:space-y-40">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

ServicesLuxury2.meta = {
  id: 'services-luxury-2',
  name: 'Luxury Real Estate Services Grid',
  type: 'services',
  niche: 'real-estate',
  style: 'luxury'
}

export default ServicesLuxury2