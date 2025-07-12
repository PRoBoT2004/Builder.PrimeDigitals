// src/sections/real-estate/TestimonialsLuxury3.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Victoria Sterling",
    position: "Luxury Brand CEO",
    company: "Sterling Enterprises",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format",
    backgroundImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format",
    quote: "Working with this team transformed our entire approach to luxury real estate.",
    fullQuote: "Their market expertise and personal attention to detail created an experience that exceeded every expectation. From consultation to closing day, every interaction was exceptional.",
    location: "Beverly Hills, CA",
    propertyType: "Modern Estate",
    transactionValue: "$22.5M",
    rating: 5
  },
  {
    id: 2,
    name: "Alexander Hayes",
    position: "Private Equity Partner",
    company: "Hayes Capital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format",
    backgroundImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format",
    quote: "Their strategic approach to luxury real estate investment has been instrumental.",
    fullQuote: "The market insights and negotiation skills are world-class. Their strategic analysis helped us identify opportunities others missed, saving us millions.",
    location: "Manhattan, NY",
    propertyType: "Penthouse Suite",
    transactionValue: "$35.8M",
    rating: 5
  },
  {
    id: 3,
    name: "Catherine Montclair",
    position: "Art Gallery Owner",
    company: "Montclair Collections",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format",
    backgroundImage: "https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=1600&auto=format",
    quote: "An extraordinary experience that redefined what exceptional service means.",
    fullQuote: "Their understanding of luxury and aesthetics perfectly aligned with our vision. Finding the perfect property seemed impossible until we met this team.",
    location: "Miami Beach, FL",
    propertyType: "Waterfront Villa",
    transactionValue: "$18.9M",
    rating: 5
  }
]

const TestimonialsLuxury3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const paginate = (direction) => {
    setCurrentIndex((prev) =>
      direction === 1 ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative min-h-screen bg-[#0c0c0c] overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentTestimonial.id}`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentTestimonial.backgroundImage}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen py-20">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-8 mx-auto lg:grid-cols-2 lg:gap-16 max-w-7xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`testimonial-${currentTestimonial.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="grid items-center w-full gap-12 lg:grid-cols-2"
              >
                {/* Left - Image */}
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Rating + Value */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute p-4 text-black -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl"
                  >
                    <div className="flex gap-1 mb-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-black/60">Value</div>
                    <div className="text-sm font-medium">{currentTestimonial.transactionValue}</div>
                  </motion.div>
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute text-4xl -top-4 -left-2 lg:text-6xl text-white/20">"</div>
                    <blockquote className="pl-4 text-xl font-light leading-relaxed text-white md:text-2xl lg:text-3xl">
                      {currentTestimonial.quote}
                    </blockquote>
                  </div>

                  <p className="text-base leading-relaxed lg:text-lg text-white/70">
                    {currentTestimonial.fullQuote}
                  </p>

                  {/* Client Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-white lg:text-2xl">{currentTestimonial.name}</h3>
                      <p className="text-sm text-white/60 lg:text-base">{currentTestimonial.position}</p>
                      <p className="text-sm text-white/40">{currentTestimonial.company}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <div className="mb-1 text-xs text-white/40">Location</div>
                        <div className="text-sm text-white">{currentTestimonial.location}</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs text-white/40">Property</div>
                        <div className="text-sm text-white">{currentTestimonial.propertyType}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation - Changed from 'fixed' to 'absolute' */}
      <div className="absolute z-20 -translate-x-1/2 bottom-6 left-1/2">
        <div className="flex items-center px-6 py-3 space-x-4 rounded-full bg-black/50 backdrop-blur-sm">
          <button
            onClick={() => paginate(-1)}
            className="flex items-center justify-center w-8 h-8 text-white transition-colors border rounded-full border-white/20 hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots / Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-6 bg-white' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="flex items-center justify-center w-8 h-8 text-white transition-colors border rounded-full border-white/20 hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

TestimonialsLuxury3.meta = {
  id: 'testimonials-luxury-3',
  name: 'Split Background Luxury Testimonials',
  type: 'testimonials',
  niche: 'real-estate',
  style: 'luxury'
}

export default TestimonialsLuxury3