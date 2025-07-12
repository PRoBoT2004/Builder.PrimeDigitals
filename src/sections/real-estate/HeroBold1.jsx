// src/sections/real-estate/HeroBold1.jsx
import React from 'react'
import { Button } from '@/components/ui/button'

const HeroBold1 = ({
  impactLabel = 'Game Changer',
  headlineTop = 'REAL',
  headlineMid = 'ESTATE',
  headlineBottom = 'REVOLUTION',
  description = 'Break the rules. Shatter expectations. Experience real estate like never before with cutting-edge technology and unmatched service.',
  ctaPrimaryText = 'Disrupt Now',
  ctaSecondaryText = 'Explore Platform',
  stats = [
    { value: '1M+', label: 'Properties' },
    { value: '50K+', label: 'Clients' },
    { value: '24/7', label: 'Support' }
  ],
  property = {
    label: 'Hot Deal',
    name: 'Luxury Penthouse',
    price: '$3.2M',
    features: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Sq Ft', value: '2.5K' }
    ],
    button: 'View Details'
  }
}) => {
  return (
    <section id="hero-bold-1" className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-gradient-to-br from-red-500 to-orange-500 opacity-20 animate-pulse"></div>
        <div className="absolute w-48 h-48 rounded-full top-1/2 right-20 bg-gradient-to-br from-purple-500 to-pink-500 opacity-15 animate-bounce"></div>
        <div className="absolute w-24 h-24 rounded-full opacity-25 bottom-20 left-1/4 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid h-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/10"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex items-center h-screen px-4 mx-auto">
        <div className="w-full mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center">
                <div className="px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transform -skew-x-12 bg-gradient-to-r from-red-500 to-orange-500">
                  {impactLabel}
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl font-black leading-none tracking-tighter text-white md:text-7xl lg:text-8xl xl:text-9xl">
                  <span className="block">{headlineTop}</span>
                  <span className="block text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
                    {headlineMid}
                  </span>
                  <span className="block text-4xl font-light text-gray-400 md:text-5xl lg:text-6xl">
                    {headlineBottom}
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <p className="max-w-lg text-xl font-light leading-relaxed text-gray-300 md:text-2xl">
                  {description}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 sm:flex-row">
                <Button className="px-10 py-5 text-lg font-bold tracking-wide text-white uppercase transition-all duration-300 transform shadow-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 hover:scale-105">
                  {ctaPrimaryText}
                </Button>
                <button className="flex items-center space-x-4 text-white transition-colors group hover:text-orange-400">
                  <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 border-2 border-white rounded-full group-hover:border-orange-400 group-hover:rotate-90">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium tracking-wide uppercase">{ctaSecondaryText}</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="mb-2 text-4xl font-black text-transparent md:text-5xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative aspect-square">
                <div className="absolute inset-0 transform bg-gradient-to-br from-red-500/20 to-orange-500/20 rotate-12 rounded-3xl"></div>
                <div className="absolute transform inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 -rotate-6 rounded-3xl"></div>

                {/* Property Card */}
                <div className="absolute p-8 transition-transform duration-300 transform bg-white shadow-2xl inset-8 rounded-2xl hover:scale-105">
                  <div className="space-y-6">
                    <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                      <div className="absolute px-3 py-1 text-xs font-bold text-white uppercase bg-red-500 rounded-full top-4 left-4">
                        {property.label}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="p-3 rounded-lg bg-white/90 backdrop-blur-sm">
                          <div className="mb-1 text-sm text-gray-600">{property.name}</div>
                          <div className="text-2xl font-bold text-gray-900">{property.price}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      {property.features.map((f, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-gray-900">{f.value}</div>
                          <div className="text-xs text-gray-500 uppercase">{f.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full py-3 font-bold tracking-wide text-white uppercase bg-black hover:bg-gray-800">
                      {property.button}
                    </Button>
                  </div>
                </div>

                <div className="absolute flex items-center justify-center w-16 h-16 text-xl font-bold text-white rounded-full -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 animate-bounce">
                  🔥
                </div>
                <div className="absolute flex items-center justify-center w-12 h-12 font-bold text-white rounded-full -bottom-4 -left-4 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse">
                  ⚡
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    </section>
  )
}

HeroBold1.meta = {
  id: 'heroBold1',
  name: 'Bold & Dynamic Real Estate Hero',
  type: 'hero',
  niche: 'real-estate',
  style: 'bold'
}

export default HeroBold1
