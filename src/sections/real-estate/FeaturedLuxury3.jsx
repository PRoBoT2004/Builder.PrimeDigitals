// src/sections/real-estate/FeaturedLuxury3.jsx
import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    title: "The Horizon Residence",
    location: "Palm Beach",
    price: "$18.5M",
    accent: "#E0C8B0",
    details: {
      bedrooms: "6",
      bathrooms: "8",
      area: "9,500",
      year: "2024"
    },
    highlights: [
      "Private Beach Access",
      "Infinity Pool",
      "Smart Home System",
      "Wine Cellar"
    ]
  },
  // Add more properties as needed...
]

const FeaturedLuxury3 = () => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollXProgress } = useScroll({ container: containerRef })
  const opacity = useTransform(scrollXProgress, [0, 0.9], [1, 0])

  return (
    <section className="relative bg-[#0f0f0f]">
      {/* Scroll Indicator - REMOVED FIXED POSITIONING */}
      <motion.div 
        className="absolute top-0 left-0 right-0 z-10 h-1 bg-white/20"
        style={{ scaleX: scrollXProgress }}
      />

      {/* Navigation Dots - REMOVED FIXED POSITIONING */}
      <div className="absolute z-10 space-y-4 -translate-y-1/2 top-1/2 right-8">
        {properties.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index ? 'bg-white w-4' : 'bg-white/30'
            }`}
            onClick={() => {
              const element = document.getElementById(`property-${index}`)
              element?.scrollIntoView({ behavior: 'smooth', inline: 'start' })
              setActiveIndex(index)
            }}
            aria-label={`Scroll to ${properties[index].title}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>

      {/* Horizontal Scroll Container - REMOVED VIEWPORT HEIGHT */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ width: '100%' }} // CHANGED FROM calc(100vh - 1px) TO FIXED HEIGHT
      >
        {properties.map((property, index) => (
          <div
            key={property.id}
            id={`property-${index}`}
            className="relative flex-none w-full h-full snap-start" // CHANGED w-screen TO w-full
            style={{ minWidth: '100%' }} // ADDED TO ENSURE PROPER WIDTH
          >
            <div className="grid h-full lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-full overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundColor: property.accent }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Property Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-6xl font-light text-center text-white md:text-8xl"
                  >
                    {property.title}
                  </motion.h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative flex items-center h-full p-12 bg-[#0f0f0f]">
                <div className="relative w-full max-w-xl mx-auto">
                  {/* Location Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center px-4 py-2 mb-8 space-x-2 border rounded-full border-white/10"
                  >
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: property.accent }}></span>
                    <span className="text-white/60">{property.location}</span>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-5xl font-light text-white"
                  >
                    {property.price}
                  </motion.div>

                  {/* Property Details Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    {Object.entries(property.details).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-lg bg-white/5"
                      >
                        <div className="text-sm uppercase text-white/40">{key}</div>
                        <div className="text-2xl font-light text-white">{value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-12">
                    <h3 className="mb-6 text-sm uppercase text-white/40">Property Highlights</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {property.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <span 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: property.accent }}
                            aria-hidden="true"
                          ></span>
                          <span className="text-white/80">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 text-black transition-all rounded-full"
                      style={{ backgroundColor: property.accent }}
                    >
                      Schedule Viewing
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 text-white transition-all border rounded-full border-white/20 hover:bg-white hover:text-black"
                    >
                      Virtual Tour
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Prompt - REMOVED FIXED POSITIONING */}
      <motion.div 
        className="absolute flex items-center space-x-2 -translate-x-1/2 bottom-8 left-1/2 text-white/60"
        style={{ opacity }}
      >
        <span>Scroll to explore</span>
        <svg 
          className="w-4 h-4 animate-bounce" 
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
      </motion.div>
    </section>
  )
}

FeaturedLuxury3.meta = {
  id: 'featured-luxury-3',
  name: 'Horizontal Scroll Luxury Properties',
  type: 'properties',
  niche: 'real-estate',
  style: 'luxury'
}

export default FeaturedLuxury3