// src/sections/real-estate/HeroHuman1.jsx
import React from 'react'
import useContextualEditingStore from '@/hooks/useContextualEditingStore'

const HeroHuman1 = ({
  id = 'hero-human-1',
  badge = 'Trusted by 10,000+ Families',
  title = 'Your Journey Home',
  highlight = 'Starts Here',
  description = 'We believe finding a home should be personal, supportive, and stress-free. Our dedicated team guides you every step of the way to find not just a house, but your perfect home.',
  stories = [
    {
      title: 'First-Time Buyers',
      quote: 'They made our first home purchase feel like a celebration, not a challenge. Every question was answered with patience and care.',
      name: 'Sarah & Mike',
      role: 'Happy Homeowners',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      title: 'Growing Families',
      quote: 'Understanding our needs as a growing family, they found us the perfect neighborhood with great schools and parks nearby.',
      name: 'Jennifer & David',
      role: 'Family of Four',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H9M17 20v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2m12 0H3m0 0v-1a6 6 0 019-5.197m3 5.197a6 6 0 01-9-5.197'
    },
    {
      title: 'Dream Achievers',
      quote: 'After years of saving, they helped us find our dream home within budget. The process was smooth and transparent throughout.',
      name: 'Maria & Carlos',
      role: 'Dream Home Owners',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    }
  ],
  ctas = ['Start Your Search', 'Talk to an Agent'],
  trustStats = [
    { value: '4.9★', label: 'Client Rating' },
    { value: '15+', label: 'Years Experience' },
    { value: '2,500+', label: 'Homes Sold' },
    { value: '24h', label: 'Response Time' }
  ],
  bgColor = 'linear-gradient(to bottom right, #e5f0ff, #f3eaff)',
  textColor = '#111827',
  font = 'Inter',
  fontSize = '4rem',
  color = '#2563eb',
  cardBgColor = '#ffffff',
  primaryButtonBg = '#2563eb',
  secondaryButtonBorder = '#bfdbfe',
  primaryButtonColor = '#ffffff',
  secondaryButtonColor = '#2563eb',
  badgeBgColor = '#dbeafe',
  badgeTextColor = '#1d4ed8',
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
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        background: bgColor,
        fontFamily: font,
      }}
    >
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <div 
            className="inline-flex items-center px-3 py-2 mb-4 text-xs font-medium rounded-full cursor-pointer sm:px-4 sm:text-sm sm:mb-6"
            style={{
              backgroundColor: badgeBgColor,
              color: badgeTextColor,
              fontFamily: font
            }}
            onClick={(e) => handleClick(e, 'badge', 'text')}
          >
            <svg className="w-3 h-3 mr-2 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {badge}
          </div>
          <h1 
            className="mb-4 font-bold leading-tight cursor-pointer sm:mb-6"
            style={{
              fontFamily: font,
              fontSize: `clamp(2rem, 6vw, ${fontSize})`,
              color: textColor
            }}
            onClick={(e) => handleClick(e, 'title', 'text')}
          >
            {title}
            <span 
              className="block"
              style={{ color }}
            >
              {highlight}
            </span>
          </h1>
          <p 
            className="max-w-3xl mx-auto text-base leading-relaxed cursor-pointer sm:text-lg md:text-xl"
            style={{ 
              color: `${textColor}99`,
              fontFamily: font
            }}
            onClick={(e) => handleClick(e, 'description', 'text')}
          >
            {description}
          </p>
        </div>

        {/* Stories */}
        <div className="grid gap-6 mb-12 sm:gap-8 lg:grid-cols-3 sm:mb-16 lg:mb-20">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="p-4 transition-all duration-300 shadow-lg cursor-pointer sm:p-6 rounded-2xl hover:shadow-xl hover:scale-105"
              style={{ 
                backgroundColor: cardBgColor,
                fontFamily: font
              }}
              onClick={(e) => handleClick(e, 'stories', 'text')}
            >
              <div className={`flex items-center justify-center w-10 h-10 mb-3 rounded-xl sm:w-12 sm:h-12 sm:mb-4 ${story.iconBg}`}>
                <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${story.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={story.iconPath} />
                </svg>
              </div>
              <h3 
                className="mb-2 text-base font-semibold sm:text-lg"
                style={{ 
                  color: textColor,
                  fontFamily: font
                }}
              >
                {story.title}
              </h3>
              <p 
                className="text-sm leading-relaxed sm:text-base"
                style={{ 
                  color: `${textColor}99`,
                  fontFamily: font
                }}
              >
                "{story.quote}"
              </p>
              <div className="flex items-center mt-3 sm:mt-4">
                <div className="w-6 h-6 mr-2 bg-gray-300 rounded-full sm:w-8 sm:h-8 sm:mr-3"></div>
                <div>
                  <div 
                    className="text-xs font-medium sm:text-sm"
                    style={{ 
                      color: textColor,
                      fontFamily: font
                    }}
                  >
                    {story.name}
                  </div>
                  <div 
                    className="text-xs"
                    style={{ 
                      color: `${textColor}66`,
                      fontFamily: font
                    }}
                  >
                    {story.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="p-6 text-center shadow-xl sm:p-8 md:p-12 rounded-3xl"
          style={{ 
            backgroundColor: cardBgColor,
            fontFamily: font
          }}
        >
          <h2 
            className="mb-3 text-2xl font-bold cursor-pointer sm:mb-4 sm:text-3xl md:text-4xl"
            style={{ 
              color: textColor,
              fontFamily: font
            }}
            onClick={(e) => handleClick(e, 'title', 'text')}
          >
            Ready to Start Your Journey?
          </h2>
          <p 
            className="max-w-2xl mx-auto mb-6 text-base cursor-pointer sm:mb-8 sm:text-lg"
            style={{ 
              color: `${textColor}99`,
              fontFamily: font
            }}
            onClick={(e) => handleClick(e, 'description', 'text')}
          >
            Let's have a conversation about your dreams, needs, and timeline. No pressure, just genuine guidance from people who care.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              className="w-full px-6 py-3 text-sm font-medium transition-all duration-300 transform cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base md:text-lg rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                backgroundColor: primaryButtonBg,
                color: primaryButtonColor,
                fontFamily: font
              }}
              onClick={(e) => handleClick(e, 'ctas', 'text')}
            >
              {ctas[0]}
            </button>
            <button 
              className="w-full px-6 py-3 text-sm font-medium transition-all duration-300 border-2 cursor-pointer sm:w-auto sm:px-8 sm:py-4 sm:text-base md:text-lg rounded-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                backgroundColor: 'transparent',
                color: secondaryButtonColor,
                borderColor: secondaryButtonBorder,
                fontFamily: font
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#eff6ff'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
              onClick={(e) => handleClick(e, 'ctas', 'text')}
            >
              {ctas[1]}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-6 mt-8 border-t border-gray-100 sm:gap-6 md:grid-cols-4 sm:pt-8 sm:mt-12">
            {trustStats.map((item, i) => (
              <div key={i} className="text-center">
                <div 
                  className="mb-1 text-lg font-bold sm:text-xl md:text-2xl"
                  style={{ 
                    color,
                    fontFamily: font
                  }}
                >
                  {item.value}
                </div>
                <div 
                  className="text-xs sm:text-sm"
                  style={{ 
                    color: `${textColor}66`,
                    fontFamily: font
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

HeroHuman1.defaultProps = {
  id: 'hero-human-1',
  badge: 'Trusted by 10,000+ Families',
  title: 'Your Journey Home',
  highlight: 'Starts Here',
  description: 'We believe finding a home should be personal, supportive, and stress-free. Our dedicated team guides you every step of the way to find not just a house, but your perfect home.',
  stories: [
    {
      title: 'First-Time Buyers',
      quote: 'They made our first home purchase feel like a celebration, not a challenge. Every question was answered with patience and care.',
      name: 'Sarah & Mike',
      role: 'Happy Homeowners',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      title: 'Growing Families',
      quote: 'Understanding our needs as a growing family, they found us the perfect neighborhood with great schools and parks nearby.',
      name: 'Jennifer & David',
      role: 'Family of Four',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H9M17 20v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2m12 0H3m0 0v-1a6 6 0 019-5.197m3 5.197a6 6 0 01-9-5.197'
    },
    {
      title: 'Dream Achievers',
      quote: 'After years of saving, they helped us find our dream home within budget. The process was smooth and transparent throughout.',
      name: 'Maria & Carlos',
      role: 'Dream Home Owners',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    }
  ],
  ctas: ['Start Your Search', 'Talk to an Agent'],
  trustStats: [
    { value: '4.9★', label: 'Client Rating' },
    { value: '15+', label: 'Years Experience' },
    { value: '2,500+', label: 'Homes Sold' },
    { value: '24h', label: 'Response Time' }
  ],
  bgColor: 'linear-gradient(to bottom right, #e5f0ff, #f3eaff)',
  textColor: '#111827',
  font: 'Inter',
  fontSize: '4rem',
  color: '#2563eb',
  cardBgColor: '#ffffff',
  primaryButtonBg: '#2563eb',
  secondaryButtonBorder: '#bfdbfe',
  primaryButtonColor: '#ffffff',
  secondaryButtonColor: '#2563eb',
  badgeBgColor: '#dbeafe',
  badgeTextColor: '#1d4ed8',
}

export default HeroHuman1