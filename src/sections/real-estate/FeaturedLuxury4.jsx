// src/sections/real-estate/FeaturedLuxury4.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const properties = [
  {
    id: 1,
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&auto=format",
      "https://images.unsplash.com/photo-1614596153824-9f442c58dd2c?w=800&auto=format"
    ],
    title: "Villa Paradiso",
    location: "Beverly Hills",
    price: "$42,000,000",
    specs: {
      interior: "15,000 sq ft",
      land: "3.5 acres",
      rooms: "8 bedrooms",
      features: "Private Beach"
    },
    description: "An architectural masterpiece with panoramic city views",
    status: "Exclusive"
  },
  {
    id: 2,
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=800&auto=format",
      "https://images.unsplash.com/photo-1613553497126-a44624272024?w=800&auto=format",
      "https://images.unsplash.com/photo-1613553497126-a44624272024?w=800&auto=format"
    ],
    title: "Ocean View Estate",
    location: "Malibu",
    price: "$38,500,000",
    specs: {
      interior: "12,000 sq ft",
      land: "2.8 acres",
      rooms: "6 bedrooms",
      features: "Infinity Pool"
    },
    description: "Stunning oceanfront property with private beach access",
    status: "New Listing"
  },
  {
    id: 3,
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
      "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=800&auto=format",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format"
    ],
    title: "Modern Masterpiece",
    location: "Hollywood Hills",
    price: "$29,900,000",
    specs: {
      interior: "10,500 sq ft",
      land: "1.5 acres",
      rooms: "5 bedrooms",
      features: "Theater Room"
    },
    description: "Ultra-modern design with spectacular city views",
    status: "Featured"
  }
]

const FeaturedLuxury4 = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setActiveIndex((prev) => (prev + 1) % properties.length)
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [isTransitioning])

  const PropertyPreview = ({ property, index }) => {
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
    const isActive = activeIndex === index

    return (
      <motion.div
        className={`absolute inset-0 ${isActive ? 'z-20' : 'z-10'}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 1.1,
          rotateY: isActive ? 0 : 15
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="grid h-full md:grid-cols-12">
          {/* Main Image Section */}
          <div className="relative h-[60vh] md:h-full md:col-span-8">
            <div className="relative h-full overflow-hidden">
              <motion.img
                src={property.mainImage}
                alt={property.title}
                className="object-cover w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                loading="lazy"
              />
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="inline-flex items-center px-4 py-2 mb-4 space-x-2 text-sm rounded-full bg-white/10 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-white/80">{property.status}</span>
                    </div>
                    <h2 className="mb-2 text-4xl font-light text-white md:text-6xl lg:text-7xl">
                      {property.title}
                    </h2>
                    <p className="text-xl text-white/80">{property.location}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="relative h-[40vh] md:h-full md:col-span-4">
            <div className="h-full p-6 overflow-y-auto bg-[#0c0c0c] md:p-12">
              {/* Property Gallery */}
              <div className="relative mb-8 overflow-hidden aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeGalleryIndex}
                    src={property.galleryImages[activeGalleryIndex]}
                    alt={`Gallery ${activeGalleryIndex + 1} of ${property.title}`}
                    className="object-cover w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Gallery Navigation */}
                <div className="absolute flex justify-center space-x-2 bottom-4 left-4 right-4">
                  {property.galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      aria-label={`View gallery image ${idx + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeGalleryIndex ? 'bg-white w-6' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-light text-white">{property.price}</div>
                  <div className="mt-2 text-white/60">{property.description}</div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(property.specs).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="p-4 rounded-lg bg-white/5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-sm uppercase text-white/40">{key}</div>
                      <div className="text-white">{value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-black transition-all bg-white rounded-lg hover:bg-white/90"
                  >
                    Schedule Private Viewing
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-white transition-all border rounded-lg border-white/20 hover:bg-white/10"
                  >
                    Download Property Details
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="relative h-screen bg-[#0c0c0c] overflow-hidden">
      {/* Properties Container */}
      <div className="relative w-full h-full">
        {properties.map((property, index) => (
          <PropertyPreview 
            key={property.id} 
            property={property} 
            index={index} 
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-30 -translate-x-1/2 bottom-8 left-1/2">
        <div className="flex items-center space-x-4">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setActiveIndex(index)
                setTimeout(() => setIsTransitioning(false), 1000)
              }}
              aria-label={`Switch to property ${properties[index].title}`}
              aria-pressed={activeIndex === index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-white w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

FeaturedLuxury4.meta = {
  id: 'featured-luxury-4',
  name: 'Luxury Property Carousel with Gallery',
  type: 'properties',
  niche: 'real-estate',
  style: 'luxury'
}

export default FeaturedLuxury4
