// src/sections/HeroLuxury1.jsx
import React from 'react'
import { Button } from '@/components/ui/button'
import useContextualEditingStore from '@/hooks/useContextualEditingStore'


const HeroLuxury1 = ({
  bgImage,
  tagline,
  headline,
  description,
  searchPlaceholder,
  ctaText,
  locations,
  bgColor,
  textColor,
  font,
  fontSize,
  color,
  id,
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
      id="hero-luxury-1"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: bgColor, fontFamily: font }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Luxury Estate"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container px-4 mx-auto" style={{ color: textColor }}>
          <div className="max-w-4xl">
            {/* Tagline */}
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 text-sm font-medium tracking-wide uppercase border rounded-full"
                style={{
                  backgroundColor: 'rgba(251, 191, 36, 0.2)',
                  borderColor: 'rgba(251, 191, 36, 0.3)',
                  color: '#facc15',
                  fontFamily: font
                }}
              >
                {tagline}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 leading-tight cursor-pointer"
              style={{
                fontFamily: font,
                fontSize,
              }}
              onClick={(e) => handleClick(e, 'headline', 'text')}
            >
              {headline.map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={i === 1 ? { fontWeight: 'bold', color } : {}}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl mb-10 text-xl leading-relaxed cursor-pointer text-white/80"
              style={{ fontFamily: font }}
              onClick={(e) => handleClick(e, 'description', 'text')}
            >
              {description}
            </p>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex flex-col max-w-2xl gap-3 p-3 bg-white shadow-2xl rounded-2xl md:flex-row md:items-center">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="flex-1 px-6 py-4 text-lg text-gray-800 bg-transparent border-0 placeholder:text-gray-500 focus:outline-none"
                />
                <Button
                  onClick={(e) => handleClick(e, 'ctaText', 'text')}
                  style={{
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '0.75rem',
                    fontFamily: font
                  }}
                >
                  {ctaText}
                </Button>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-wider uppercase text-white/60">
                Popular Locations
              </p>
              <div className="flex flex-wrap gap-3">
                {locations.map((place, index) => (
                  <button
                    key={index}
                    className="px-6 py-3 text-sm font-medium transition-all duration-300 border rounded-full text-white/90 border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm hover:scale-105"
                    style={{ fontFamily: font }}
                  >
                    {place}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HeroLuxury1.defaultProps = {
  bgImage: '/assets/hero-estate.jpg',
  tagline: 'Exclusive Properties',
  headline: ['Find Your Dream', 'Luxury Home'],
  description: "Discover exceptional properties in the world's most exclusive locations.",
  searchPlaceholder: 'Enter location, price range, or property type...',
  ctaText: 'Search Properties',
  locations: ['Beverly Hills, CA', 'Manhattan, NY', 'Miami Beach, FL', 'Aspen, CO'],
  bgColor: '#000000',
  textColor: '#ffffff',
  font: 'Poppins',
  fontSize: '56px',
  color: '#f59e0b',
}

export default HeroLuxury1