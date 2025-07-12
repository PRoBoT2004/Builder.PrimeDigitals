// src/sections/real-estate/HeroLuxury3.jsx
import React from 'react'
import useContextualEditingStore from '@/hooks/useContextualEditingStore'

const HeroLuxury3 = ({
  id = 'hero-luxury-3',
  bgImage = 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  brand = 'Luxury Portfolio',
  headline = ['Where', 'Luxury', 'Meets Legacy'],
  description = 'Curating the world\'s most distinguished properties for the most discerning clients. Experience luxury real estate redefined.',
  stats = [
    { value: '$980M+', label: 'Annual Sales' },
    { value: '98%', label: 'Client Satisfaction' }
  ],
  ctas = ['Explore Properties', 'Contact Us'],
  featured = {
    label: 'Featured Property',
    name: 'Beverly Hills Estate',
    price: '$28,500,000'
  },
  social = ['Instagram', 'LinkedIn', 'Twitter'],
  bgColor = '#ffffff',
  textColor = '#000000',
  font = 'Poppins',
  fontSize = '4rem',
  color = '#f59e0b',
  leftBgColor = '#f8f5f0',
  primaryButtonBg = '#000000',
  secondaryButtonBorder = '#000000',
  primaryButtonColor = '#ffffff',
  secondaryButtonColor = '#000000',
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
      className="relative min-h-screen"
      style={{ backgroundColor: bgColor, fontFamily: font }}
    >
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div 
          className="flex items-center order-2 px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:order-1"
          style={{ backgroundColor: leftBgColor }}
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Brand */}
            <div className="flex items-center mb-6 space-x-2 sm:mb-8">
              <div className="w-8 h-[1px] sm:w-12" style={{ backgroundColor: `${textColor}30` }} />
              <span 
                className="text-xs font-medium tracking-widest uppercase cursor-pointer sm:text-sm"
                style={{ 
                  color: `${textColor}60`,
                  fontFamily: font
                }}
                onClick={(e) => handleClick(e, 'brand', 'text')}
              >
                {brand}
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="mb-4 font-light leading-tight cursor-pointer sm:mb-6"
              style={{
                fontFamily: font,
                fontSize: `clamp(2.5rem, 8vw, ${fontSize})`,
                color: textColor
              }}
              onClick={(e) => handleClick(e, 'headline', 'text')}
            >
              <span className="block">{headline[0]}</span>
              <span 
                className="block italic font-normal"
                style={{ color }}
              >
                {headline[1]}
              </span>
              <span className="block">{headline[2]}</span>
            </h1>

            {/* Description */}
            <p 
              className="mb-6 text-base leading-relaxed cursor-pointer sm:mb-8 sm:text-lg"
              style={{ 
                color: `${textColor}70`,
                fontFamily: font
              }}
              onClick={(e) => handleClick(e, 'description', 'text')}
            >
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 sm:gap-6 md:gap-8 sm:mb-10 md:mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div 
                    className="text-2xl font-light sm:text-3xl lg:text-4xl"
                    style={{ 
                      color: textColor,
                      fontFamily: font
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs sm:text-sm"
                    style={{ 
                      color: `${textColor}60`,
                      fontFamily: font
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                className="w-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: primaryButtonBg,
                  color: primaryButtonColor,
                  fontFamily: font,
                  focusRingColor: primaryButtonBg
                }}
                onClick={(e) => handleClick(e, 'ctas', 'text')}
              >
                {ctas[0]}
              </button>
              <button 
                className="w-full px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'transparent',
                  color: secondaryButtonColor,
                  borderColor: secondaryButtonBorder,
                  fontFamily: font
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = secondaryButtonBorder
                  e.target.style.color = leftBgColor
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = secondaryButtonColor
                }}
                onClick={(e) => handleClick(e, 'ctas', 'text')}
              >
                {ctas[1]}
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 min-h-[50vh] lg:min-h-full lg:order-2">
          <div className="absolute inset-0">
            <img 
              src={bgImage} 
              alt="Luxury Property" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          {/* Featured Property Info */}
          <div className="absolute p-4 bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:p-6 sm:m-2 lg:bottom-8 lg:left-8">
            <div 
              className="mb-1 text-xs font-medium sm:text-sm"
              style={{ 
                color: '#00000060',
                fontFamily: font
              }}
            >
              {featured.label}
            </div>
            <div 
              className="mb-1 text-lg font-light cursor-pointer sm:text-xl"
              style={{ 
                color: '#000000',
                fontFamily: font
              }}
              onClick={(e) => handleClick(e, 'featured', 'text')}
            >
              {featured.name}
            </div>
            <div 
              className="text-xs sm:text-sm"
              style={{ 
                color: '#00000060',
                fontFamily: font
              }}
            >
              {featured.price}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-auto">
        <div className="flex justify-center space-x-4 lg:justify-start lg:space-x-6">
          {social.map((link, i) => (
            <a 
              key={i} 
              href="#" 
              className="text-xs transition-all duration-300 cursor-pointer sm:text-sm hover:scale-105"
              style={{ 
                color: `${textColor}60`,
                fontFamily: font
              }}
              onMouseEnter={(e) => {
                e.target.style.color = textColor
              }}
              onMouseLeave={(e) => {
                e.target.style.color = `${textColor}60`
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


export default HeroLuxury3
// Add this just before `export default HeroLuxury3`
HeroLuxury3.defaultProps = {
  id: 'hero-luxury-3',
  bgImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2071&q=80',
  brand: 'Luxury Portfolio',
  headline: ['Where', 'Luxury', 'Meets Legacy'],
  description: "Curating the world's most distinguished properties for the most discerning clients. Experience luxury real estate redefined.",
  stats: [
    { value: '$980M+', label: 'Annual Sales' },
    { value: '98%', label: 'Client Satisfaction' }
  ],
  ctas: ['Explore Properties', 'Contact Us'],
  featured: {
    label: 'Featured Property',
    name: 'Beverly Hills Estate',
    price: '$28,500,000'
  },
  social: ['Instagram', 'LinkedIn', 'Twitter'],
  bgColor: '#ffffff',
  textColor: '#000000',
  font: 'Poppins',
  fontSize: '4rem',
  color: '#f59e0b',
  leftBgColor: '#f8f5f0',
  primaryButtonBg: '#000000',
  secondaryButtonBorder: '#000000',
  primaryButtonColor: '#ffffff',
  secondaryButtonColor: '#000000',
};
