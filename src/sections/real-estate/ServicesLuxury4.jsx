// src/sections/real-estate/ServicesLuxury4.jsx
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Luxury Sales",
    shortDesc: "Premium property marketing & sales",
    icon: "🏰",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format",
    color: "#DDB892",
    stats: [
      { value: "$2.5B+", label: "Sales Volume" },
      { value: "150+", label: "Properties" },
      { value: "98%", label: "Success Rate" }
    ],
    features: [
      "Global Marketing Reach",
      "VIP Client Network",
      "Premium Staging",
      "Strategic Pricing"
    ]
  },
  {
    id: 2,
    title: "Investment",
    shortDesc: "Strategic property investments",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format",
    color: "#B08968",
    stats: [
      { value: "21%", label: "Avg. ROI" },
      { value: "45+", label: "Markets" },
      { value: "24/7", label: "Support" }
    ],
    features: [
      "Market Analysis",
      "Portfolio Strategy",
      "Risk Assessment",
      "Wealth Planning"
    ]
  },
  {
    id: 3,
    title: "Development",
    shortDesc: "Luxury property development",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=1600&auto=format",
    color: "#9C6644",
    stats: [
      { value: "60+", label: "Projects" },
      { value: "$1.8B", label: "Value" },
      { value: "15yrs", label: "Experience" }
    ],
    features: [
      "Project Management",
      "Design Excellence",
      "Quality Control",
      "Timeline Mastery"
    ]
  },
  {
    id: 4,
    title: "Consulting",
    shortDesc: "Expert real estate guidance",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&auto=format",
    color: "#826A5C",
    stats: [
      { value: "500+", label: "Clients" },
      { value: "4.9/5", label: "Rating" },
      { value: "100%", label: "Retention" }
    ],
    features: [
      "Strategic Planning",
      "Market Research",
      "Investment Advisory",
      "Risk Management"
    ]
  }
]

const ServiceCard = ({ service, isExpanded, isHovered, onExpand, onHover, index }) => {
  return (
    <motion.div
      layout
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${
        isExpanded ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{
        backgroundColor: `${service.color}10`,
        zIndex: isExpanded ? 10 : 1
      }}
      onClick={() => onExpand()}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            initial={false}
            animate={{ scale: isHovered ? 1.02 : 1, y: isHovered ? -5 : 0 }}
            className="relative h-full p-8"
          >
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ opacity: isHovered ? 0.2 : 0 }}
              style={{
                background: `linear-gradient(45deg, ${service.color}, transparent)`
              }}
            />

            <div className="relative z-10">
              <motion.div 
                className="mb-4 text-4xl"
                animate={{ scale: isHovered ? 1.1 : 1, y: isHovered ? -5 : 0 }}
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="mb-2 text-2xl font-light text-white"
                animate={{ y: isHovered ? -3 : 0 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-white/60"
                animate={{ opacity: isHovered ? 1 : 0.6 }}
              >
                {service.shortDesc}
              </motion.p>

              {/* Learn More Peek */}
              <motion.div
                className="absolute flex items-center space-x-2 bottom-4 right-4"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10
                }}
              >
                <span className="text-sm text-white/80">Learn More</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                  <svg 
                    className="w-4 h-4 text-white transition-transform duration-300 transform" 
                    style={{
                      transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative p-8 md:p-12"
          >
            <div className="grid items-start gap-8 md:grid-cols-2">
              {/* Left Content */}
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-4 text-3xl font-light text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {service.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div 
                        className="mb-1 text-2xl font-light"
                        style={{ color: service.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <motion.div
                  className="relative rounded-xl overflow-hidden aspect-[4/3]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(45deg, ${service.color}40, transparent)`
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute flex items-center justify-center w-8 h-8 transition-all rounded-full top-4 right-4 bg-white/10 hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                onExpand()
              }}
            >
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ServicesLuxury4 = () => {
  const [expandedId, setExpandedId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)

  return (
    <section className="py-24 bg-[#0c0c0c] overflow-hidden">
      <LayoutGroup>
        <div className="container px-4 mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20 text-center"
          >
            <h2 className="mb-6 text-5xl font-light text-white">Our Services</h2>
            <p className="text-xl text-white/60">
              Comprehensive luxury real estate services tailored to exceed expectations
            </p>
          </motion.div>

          {/* Services Grid */}
          <div 
            ref={containerRef}
            className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                isHovered={hoveredId === service.id}
                onExpand={() => setExpandedId(expandedId === service.id ? null : service.id)}
                onHover={(hover) => setHoveredId(hover ? service.id : null)}
                index={index}
              />
            ))}
          </div>
        </div>
      </LayoutGroup>
    </section>
  )
}

ServicesLuxury4.meta = {
  id: 'services-luxury-4',
  name: 'Expandable Luxury Grid Services',
  type: 'services',
  niche: 'real-estate',
  style: 'luxury'
}

export default ServicesLuxury4