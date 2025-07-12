// src/sections/real-estate/FeaturedProperties2.jsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const properties = [
  {
    id: 1,
    image: "/images/property-1.jpg",
    title: "The Glass House",
    location: "Beverly Hills",
    price: "$28,500,000",
    description: "An architectural masterpiece featuring walls of glass, infinity pool, and panoramic city views.",
    specs: {
      size: "12,500 sq ft",
      land: "1.2 acres",
      built: "2023",
      type: "Modern"
    },
    amenities: ["Private Theater", "Wine Cellar", "Smart Home", "Elevator"]
  },
  {
    id: 2,
    image: "/images/property-2.jpg",
    title: "Oceanfront Estate",
    location: "Malibu",
    price: "$42,000,000",
    description: "Direct beach access with 120 feet of ocean frontage and state-of-the-art security.",
    specs: {
      size: "15,800 sq ft",
      land: "2.5 acres",
      built: "2022",
      type: "Contemporary"
    },
    amenities: ["Beach Access", "Helipad", "Tennis Court", "Guest House"]
  },
  // Add more properties as needed...
]

const FeaturedLuxury2 = () => {
  const [activeProperty, setActiveProperty] = useState(0)
  const property = properties[activeProperty]

  return (
    <section className="relative min-h-screen py-20 bg-[#0c0c0c]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]" />
        <motion.img
          key={property.id}
          src={property.image}
          alt="" 
          className="object-cover w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <motion.div 
            className="inline-flex items-center px-6 py-2 mb-6 space-x-2 border rounded-full border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-sm text-white/60">Currently Featuring</span>
          </motion.div>
          <h2 className="mb-6 text-5xl font-light text-white">Exceptional Properties</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Property Navigation */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {properties.map(({ id, title, location }, index) => (
                <motion.button
                  key={id}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeProperty === index 
                      ? 'bg-white/10 backdrop-blur-sm' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveProperty(index)}
                  whileHover={{ x: 10 }}
                  aria-pressed={activeProperty === index}
                  aria-label={`View details of ${title} in ${location}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-white">{title}</span>
                    <span className="text-sm text-white/60">{location}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Featured Property Display */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 lg:grid-cols-2"
              >
                {/* Property Image */}
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-3xl font-light text-white">
                      {property.price}
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-2 text-3xl font-light text-white">
                      {property.title}
                    </h3>
                    <p className="text-lg text-white/60">
                      {property.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(property.specs).map(([key, value]) => (
                      <div key={key} className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                        <div className="text-sm uppercase text-white/60">{key}</div>
                        <div className="text-lg font-light text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div>
                    <div className="mb-4 text-sm uppercase text-white/60">Featured Amenities</div>
                    <div className="flex flex-wrap gap-3">
                      {property.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-4 py-2 text-sm text-white rounded-full bg-white/10 backdrop-blur-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Button className="px-8 py-6 text-black transition-all bg-white hover:bg-white/90">
                      Schedule Viewing
                    </Button>
                    <Button
                      variant="outline"
                      className="px-8 py-6 text-white transition-all border-2 border-white/20 hover:bg-white hover:text-black"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturedLuxury2.meta = {
  id: 'featured-properties-2',
  name: 'Interactive Luxury Properties Showcase',
  type: 'properties',
  niche: 'real-estate',
  style: 'luxury'
}

export default FeaturedLuxury2
