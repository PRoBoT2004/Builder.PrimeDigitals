// src/sections/real-estate/TestimonialsLuxury1.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Alexandra Thompson",
    position: "CEO, Global Investments",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format",
    quote: "The level of professionalism and attention to detail exceeded all expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Jonathan Parker",
    position: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format",
    quote: "Their understanding of luxury real estate helped us secure our dream property.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabella Martinez",
    position: "Art Collector",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format",
    quote: "An exceptional experience from start to finish. Their network is unmatched.",
    rating: 5
  }
]

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    key={testimonial.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center"
  >
    {/* Client Image */}
    <div className="mb-6">
      <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Rating */}
    <div className="flex justify-center gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    {/* Quote */}
    <blockquote className="mb-6 text-xl font-light text-white md:text-2xl">
      "{testimonial.quote}"
    </blockquote>

    {/* Client Info */}
    <div className="text-center">
      <div className="mb-1 text-lg font-light text-white">
        {testimonial.name}
      </div>
      <div className="text-sm text-white/60">
        {testimonial.position}
      </div>
    </div>
  </motion.div>
)

const TestimonialsLuxury1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-[#0c0c0c]">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
            Client Testimonials
          </h2>
          <p className="text-lg text-white/60">
            What our clients say about us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative px-8 md:px-12">
            {/* Navigation Arrows */}
            <div className="absolute left-0 right-0 flex justify-between -translate-y-1/2 pointer-events-none top-1/2">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-8 h-8 text-white transition-colors border rounded-full pointer-events-auto md:w-10 md:h-10 bg-white/5 border-white/10 hover:bg-white/10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-8 h-8 text-white transition-colors border rounded-full pointer-events-auto md:w-10 md:h-10 bg-white/5 border-white/10 hover:bg-white/10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </AnimatePresence>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'w-6 bg-white' 
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TestimonialsLuxury1.meta = {
  id: 'testimonials-luxury-1',
  name: 'Luxury Testimonial Carousel',
  type: 'testimonials',
  niche: 'real-estate',
  style: 'luxury'
}

export default TestimonialsLuxury1