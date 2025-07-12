// src/sections/real-estate/TestimonialsMinimal4.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [ {
      id: 1,
      name: "Robert Mitchell",
      position: "Investment Banker",
      company: "Goldman Sachs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format",
      quote: "Exceptional service that redefined luxury real estate for us.",
      fullTestimonial: "From our first meeting, it was clear this team operates on a different level. Their market knowledge, attention to detail, and commitment to excellence made what could have been a stressful process into a seamless journey. They didn't just meet our expectations; they exceeded them in every way possible.",
      location: "New York, NY",
      propertyType: "Penthouse",
      transactionValue: "$28.5M",
      year: "2024",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format",
      hasVideo: true
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      position: "Tech Entrepreneur",
      company: "Rodriguez Ventures",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format",
      quote: "Unmatched expertise in luxury real estate investment.",
      fullTestimonial: "Their strategic approach to real estate investment helped us build a portfolio that exceeded our financial goals. The team's deep understanding of market trends and their ability to identify emerging opportunities is truly remarkable. Every recommendation they made has proven to be incredibly valuable.",
      location: "San Francisco, CA",
      propertyType: "Modern Villa",
      transactionValue: "$15.2M",
      year: "2023",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format",
      hasVideo: false
    },
    {
      id: 3,
      name: "James Thompson",
      position: "Hedge Fund Manager",
      company: "Blackstone",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format",
      quote: "Professional excellence that sets the industry standard.",
      fullTestimonial: "Working with this team was a masterclass in how luxury real estate should be handled. Their negotiation skills saved us millions, and their market insights opened doors to properties we never would have discovered on our own. The level of service is simply unparalleled.",
      location: "Chicago, IL",
      propertyType: "Luxury Loft",
      transactionValue: "$12.8M",
      year: "2024",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=600&auto=format",
      hasVideo: true
    },
    {
      id: 4,
      name: "Sophia Chen",
      position: "Art Collector",
      company: "Chen Collections",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
      quote: "They understand luxury and aesthetics like no other.",
      fullTestimonial: "Finding a property that could accommodate both my art collection and provide the luxury lifestyle I desired seemed impossible. This team not only found the perfect space but also helped coordinate with designers to create something truly spectacular. Their attention to detail is extraordinary.",
      location: "Los Angeles, CA",
      propertyType: "Art Gallery Estate",
      transactionValue: "$22.7M",
      year: "2023",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&auto=format",
      hasVideo: false
    },
    {
      id: 5,
      name: "Marcus Williams",
      position: "Private Equity",
      company: "Williams Capital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format",
      quote: "Strategic insights that transformed our portfolio.",
      fullTestimonial: "The market analysis and investment strategies provided by this team have been instrumental in our portfolio's success. Their ability to identify undervalued properties in premium locations has generated exceptional returns. They truly understand the luxury market dynamics.",
      location: "Miami, FL",
      propertyType: "Oceanfront Villa",
      transactionValue: "$35.1M",
      year: "2024",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607688801-adb0d9d6284f?w=600&auto=format",
      hasVideo: true
    },
    {
      id: 6,
      name: "Isabella Martinez",
      position: "Fashion Designer",
      company: "Martinez Couture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format",
      quote: "An experience that exceeded every expectation.",
      fullTestimonial: "The team's understanding of luxury and aesthetics perfectly aligned with my vision. They found a property that not only serves as a beautiful home but also functions as a creative space for my work. The entire process was smooth, professional, and truly enjoyable.",
      location: "Austin, TX",
      propertyType: "Designer Estate",
      transactionValue: "$8.9M",
      year: "2023",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format",
      hasVideo: false
    }]

const ClientCard = ({ client, index, isSelected, isHovered, onClick, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative cursor-pointer group"
      onClick={() => onClick(client)}
      onMouseEnter={() => onHover(client)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        animate={{
          scale: isSelected ? 1.05 : isHovered ? 1.02 : 1,
          y: isHovered ? -2 : 0,
        }}
        className="relative overflow-hidden aspect-square rounded-2xl"
      >
        <img src={client.image} alt={client.name} className="object-cover w-full h-full" />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isSelected ? 'bg-black/60' : isHovered ? 'bg-black/40' : 'bg-black/20'
          }`}
        />

        {/* Info */}
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="text-white">
            <div className="mb-1 text-sm font-light md:text-base">{client.name}</div>
            <div className="text-xs text-white/80">{client.position}</div>
          </div>
        </div>

        {/* Video */}
        {client.hasVideo && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        )}

        {/* Stars */}
        <div className="absolute flex gap-1 top-3 left-3">
          {[...Array(client.rating)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const ExpandedTestimonial = ({ client, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid h-full md:grid-cols-2">
          <div className="relative">
            <img
              src={client.hasVideo ? client.videoThumbnail : client.image}
              alt={client.name}
              className="object-cover w-full h-64 md:h-full"
            />
            {client.hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center justify-center w-16 h-16 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="p-6 overflow-y-auto md:p-8">
            <button
              onClick={onClose}
              className="absolute flex items-center justify-center w-8 h-8 transition-colors rounded-full top-4 right-4 bg-black/10 hover:bg-black/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-2xl font-light text-black">{client.name}</h3>
                <p className="text-black/60">{client.position}</p>
                <p className="text-sm text-black/40">{client.company}</p>
              </div>

              <div className="flex gap-1">
                {[...Array(client.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927..." />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg leading-relaxed text-black/80">
                "{client.fullTestimonial}"
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
                <div>
                  <div className="mb-1 text-sm text-black/40">Location</div>
                  <div className="text-black">{client.location}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-black/40">Property Type</div>
                  <div className="text-black">{client.propertyType}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-black/40">Transaction Value</div>
                  <div className="font-medium text-black">{client.transactionValue}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-black/40">Year</div>
                  <div className="text-black">{client.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const TestimonialsMinimal4 = () => {
  const [selectedClient, setSelectedClient] = useState(null)
  const [hoveredClient, setHoveredClient] = useState(null)

  return (
    <section className="relative py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-light text-black md:text-5xl md:mb-6"
          >
            Client Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black/60"
          >
            Click on any client to explore their journey with us
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
          {testimonials.map((client, index) => (
            <ClientCard
              key={client.id}
              client={client}
              index={index}
              isSelected={selectedClient?.id === client.id}
              isHovered={hoveredClient?.id === client.id}
              onClick={() => setSelectedClient(client)}
              onHover={setHoveredClient}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedClient && (
            <ExpandedTestimonial
              client={selectedClient}
              onClose={() => setSelectedClient(null)}
            />
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 pt-16 mt-16 border-t md:grid-cols-4 md:mt-24 md:pt-24 border-black/10"
        >
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">1000+</div>
            <div className="text-sm text-black/60">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">$5B+</div>
            <div className="text-sm text-black/60">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">15+</div>
            <div className="text-sm text-black/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">50+</div>
            <div className="text-sm text-black/60">Luxury Markets</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

TestimonialsMinimal4.meta = {
  id: 'testimonials-minimal-4',
  name: 'Interactive Grid Testimonial Modal',
  type: 'testimonials',
  niche: 'real-estate',
  style: 'minimal'
}

export default TestimonialsMinimal4