// src/sections/real-estate/HeroLuxury2.jsx
import React from 'react'
import useContextualEditingStore from '@/hooks/useContextualEditingStore'

const HeroLuxury2 = ({
  id,
  bgImage,
  tagline,
  headline,
  description,
  primaryCta,
  secondaryCta,
  stats,
  bgColor,
  textColor,
  font,
  fontSize,
  color,
  primaryButtonBg,
  secondaryButtonBorder,
}) => {
  const openEditor = useContextualEditingStore((s) => s.openEditor)

  const handleClick = (e, key, type) => {
    const rect = e.target.getBoundingClientRect()
    openEditor({
      sectionId: id,
      elementId: `${id}-${key}`,
      type,
      position: {
        x: rect.left + rect.width / 2,
        y: rect.top + window.scrollY
      },
      propKey: key,
    })
  }

  return (
    <section
      id={id}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: bgColor, fontFamily: font }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Luxury Real Estate"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Tagline */}
            <div className="mb-4 sm:mb-6">
              <span
                className="inline-block text-xs font-medium tracking-[0.15em] uppercase cursor-pointer sm:text-sm md:tracking-[0.2em]"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: font
                }}
                onClick={(e) => handleClick(e, 'tagline', 'text')}
              >
                {tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="leading-tight tracking-tight cursor-pointer"
              style={{
                fontFamily: font,
                fontSize: `clamp(2.5rem, 8vw, ${fontSize})`,
                color: textColor,
                fontWeight: '300'
              }}
              onClick={(e) => handleClick(e, 'headline', 'text')}
            >
              <span className="block">{headline[0]}</span>
              <span className="block italic font-normal" style={{ color }}>
                {headline[1]}
              </span>
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl mx-auto mt-4 text-base font-light leading-relaxed cursor-pointer sm:mt-6 sm:text-lg md:text-xl lg:text-xl"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: font
              }}
              onClick={(e) => handleClick(e, 'description', 'text')}
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 mt-6 sm:flex-row sm:gap-4 sm:mt-8 lg:mt-10">
              <button
                className="w-full px-6 py-3 text-sm font-semibold transition-all duration-300 border border-transparent rounded-lg cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base md:text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 min-w-[180px] sm:min-w-[200px]"
                style={{
                  backgroundColor: primaryButtonBg,
                  color: '#000000',
                  fontFamily: font
                }}
                onClick={(e) => handleClick(e, 'primaryCta', 'text')}
              >
                {primaryCta}
              </button>
              <button
                className="w-full px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-lg cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base md:text-lg hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 min-w-[180px] sm:min-w-[200px]"
                style={{
                  backgroundColor: 'transparent',
                  color: textColor,
                  border: `1px solid ${secondaryButtonBorder}`,
                  fontFamily: font
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ffffff'
                  e.target.style.color = '#000000'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = textColor
                }}
                onClick={(e) => handleClick(e, 'secondaryCta', 'text')}
              >
                {secondaryCta}
              </button>
            </div>

            {/* Stats */}
            <div className="pt-8 mt-8 border-t border-white/20 sm:pt-10 sm:mt-10 lg:pt-12 lg:mt-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="mb-1 text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl"
                      style={{ color: textColor, fontFamily: font }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs tracking-wider uppercase sm:text-sm md:text-base"
                      style={{ color: 'rgba(255, 255, 255, 0.6)', fontFamily: font }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-6 left-1/2 sm:bottom-8">
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-6 bg-white/30 mb-2 sm:h-8"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse sm:w-2 sm:h-2"></div>
        </div>
      </div>
    </section>
  )
}

HeroLuxury2.defaultProps = {
  id: 'hero-luxury-2',
  bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80',
  tagline: 'Premium Real Estate',
  headline: ['Redefining', 'Luxury Living'],
  description: "Discover exceptional properties where sophisticated design meets uncompromising quality in the world's most coveted locations.",
  primaryCta: 'View Collection',
  secondaryCta: 'Schedule Tour',
  stats: [
    { value: '250+', label: 'Properties Sold' },
    { value: '$2.8B', label: 'Total Sales' },
    { value: '15+', label: 'Years Experience' }
  ],
  bgColor: '#000000',
  textColor: '#ffffff',
  font: 'Poppins',
  fontSize: '4rem',
  color: '#f59e0b',
  primaryButtonBg: '#ffffff',
  secondaryButtonBorder: 'rgba(255, 255, 255, 0.3)',
}

export default HeroLuxury2
