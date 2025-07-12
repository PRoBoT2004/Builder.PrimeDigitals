// src/sections/real-estate/TestimonialsMinimal2.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    position: "Investment Banker",
    company: "Goldman Sachs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format",
    quote: "Their expertise in luxury markets is unparalleled. The team delivered exceptional results.",
    location: "New York",
    property: "Manhattan Penthouse",
    value: "$18M",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Tech Executive",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
    quote: "Professional, knowledgeable, and incredibly responsive. Made the entire process seamless.",
    location: "San Francisco",
    property: "Modern Villa",
    value: "$12.5M",
    rating: 5
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Entrepreneur",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format",
    quote: "Outstanding service and market knowledge. They found us the perfect investment property.",
    location: "Los Angeles",
    property: "Beverly Hills Estate",
    value: "$25M",
    rating: 5
  },
  {
    id: 4,
    name: "Emma Thompson",
    position: "Art Dealer",
    company: "Christie's",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format",
    quote: "Their attention to detail and client service sets them apart from other agencies.",
    location: "Miami",
    property: "Waterfront Condo",
    value: "$8.7M",
    rating: 5
  },
  {
    id: 5,
    name: "James Wilson",
    position: "Hedge Fund Manager",
    company: "Blackstone",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format",
    quote: "Incredible market insights and negotiation skills. Highly recommend their services.",
    location: "Chicago",
    property: "Luxury Loft",
    value: "$6.2M",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Anderson",
    position: "Fashion Designer",
    company: "Independent",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format",
    quote: "They understood our vision perfectly and delivered beyond our expectations.",
    location: "Austin",
    property: "Contemporary Home",
    value: "$4.8M",
    rating: 5
  }
]

const TestimonialCard = ({ testimonial, index, isHovered, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => onHover(testimonial.id)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
        className="h-full p-6 bg-white shadow-lg rounded-2xl md:p-8"
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 mr-4 overflow-hidden rounded-full md:w-16 md:h-16">
            <img src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <h4 className="text-lg font-light text-black">{testimonial.name}</h4>
            <p className="text-sm text-black/60">{testimonial.position}</p>
            <p className="text-xs text-black/40">{testimonial.company}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
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
        <blockquote className="mb-6 leading-relaxed text-black/80">
          "{testimonial.quote}"
        </blockquote>

        {/* Property Info */}
        <div className="pt-4 space-y-2 border-t border-black/10">
          <div className="flex justify-between text-sm">
            <span className="text-black/60">Location:</span>
            <span className="text-black">{testimonial.location}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-black/60">Property:</span>
            <span className="text-black">{testimonial.property}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-black/60">Value:</span>
            <span className="font-medium text-black">{testimonial.value}</span>
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-2xl"
          animate={{
            borderColor: isHovered ? '#DDB892' : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

const TestimonialsMinimal2 = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0]">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-light text-black md:text-5xl md:mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black/60"
          >
            Trusted by distinguished clients across the globe
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isHovered={hoveredId === testimonial.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 pt-16 mt-16 border-t md:grid-cols-4 md:mt-24 md:pt-24 border-black/10"
        >
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">500+</div>
            <div className="text-sm text-black/60">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">4.9/5</div>
            <div className="text-sm text-black/60">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">$2.5B+</div>
            <div className="text-sm text-black/60">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-light text-black md:text-4xl">98%</div>
            <div className="text-sm text-black/60">Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

TestimonialsMinimal2.meta = {
  id: 'testimonials-minimal-2',
  name: 'Minimal Testimonial Grid',
  type: 'testimonials',
  niche: 'real-estate',
  style: 'minimal'
}

export default TestimonialsMinimal2