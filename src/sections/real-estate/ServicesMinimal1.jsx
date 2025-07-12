import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ServicesMinimal1 = () => {
  const containerRef = useRef(null)
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Property Marketing",
      tagline: "Strategic Luxury Marketing",
      description: "Comprehensive marketing strategies tailored for luxury properties",
      mainImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
      overlayImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      accent: "#C9A87D",
      features: [
        {
          title: "Global Reach",
          description: "International marketing campaigns reaching qualified buyers worldwide",
          icon: "🌍"
        },
        {
          title: "Digital Excellence",
          description: "Advanced digital marketing techniques and social media strategies",
          icon: "💻"
        },
        {
          title: "Premium Content",
          description: "High-end photography, videography, and virtual tours",
          icon: "📸"
        }
      ],
      stats: [
        { label: "Global Reach", value: "50M+" },
        { label: "Conversion Rate", value: "32%" },
        { label: "Engagement", value: "4.8x" }
      ]
    }
    // Add more services here if needed
  ]

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-[#f8f5f0] to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h1v1h-1z' fill='%23000000' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Section Header */}
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-40 text-center"
        >
          <motion.div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(201,168,125,0.1) 0%, rgba(201,168,125,0) 70%)',
              animation: 'pulse 4s infinite'
            }}
          />
          
          <div className="inline-flex items-center px-8 py-3 mb-8 space-x-2 border rounded-full border-black/10 bg-white/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: services[0].accent }}></span>
            <span className="text-sm font-medium tracking-wider uppercase text-black/60">Luxury Services</span>
          </div>
          
          <h2 className="mb-8 text-6xl font-light tracking-tight text-black md:text-7xl lg:text-8xl">
            Elevating Your
            <span className="block mt-2">Real Estate Experience</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-black/60">
            Comprehensive luxury real estate services tailored to exceed the expectations of our distinguished clientele.
          </p>
        </motion.div>

        {/* Services Timeline */}
        <div className="space-y-60">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative grid gap-16 lg:grid-cols-2"
              >
                {/* Image Section */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative overflow-hidden aspect-[4/3] rounded-lg shadow-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <img 
                        src={service.mainImage} 
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </motion.div>
                  </div>

                  {/* Overlay Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute w-2/3 overflow-hidden rounded-lg shadow-2xl -bottom-12 -right-12 aspect-square"
                  >
                    <img 
                      src={service.overlayImage}
                      alt={`${service.title} detail`}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                  </motion.div>

                  {/* Stats Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute p-6 rounded-lg shadow-xl -left-8 -bottom-8 bg-white/90 backdrop-blur-sm"
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="mb-1 text-2xl font-light" style={{ color: service.accent }}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-black/60">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <div className="mb-4 text-sm tracking-widest uppercase text-black/60">
                        {service.tagline}
                      </div>
                      <h3 className="mb-6 text-5xl font-light text-black">{service.title}</h3>
                      <p className="text-xl leading-relaxed text-black/60">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 }}
                          className="flex items-start space-x-6"
                        >
                          <div className="flex items-center justify-center w-16 h-16 text-2xl rounded-full"
                               style={{ backgroundColor: `${service.accent}15` }}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="mb-2 text-2xl font-light text-black">
                              {feature.title}
                            </h4>
                            <p className="leading-relaxed text-black/60">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

ServicesMinimal1.meta = {
  id: 'services-minimal-1',
  name: 'Minimal Timeline Services',
  type: 'services',
  niche: 'real-estate',
  style: 'minimal'
}

export default ServicesMinimal1
