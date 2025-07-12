// src/sections/real-estate/FeaturedLuxury1.jsx
import React from 'react'
import { Button } from '@/components/ui/button'

const PropertyCard = ({ image, price, title, location, beds, baths, sqft }) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
        <div className="mb-2 text-sm font-medium tracking-wider uppercase text-white/80">
          {location}
        </div>
        <h3 className="mb-2 text-2xl font-light text-white">{title}</h3>
        <div className="mb-4 text-xl font-light text-white">{price}</div>

        <div className="flex items-center gap-4 mb-4 text-white/90">
          <div className="flex items-center gap-1">
            <span className="text-sm">{beds}</span>
            <span className="text-sm">Beds</span>
          </div>
          <div className="w-[1px] h-4 bg-white/30"></div>
          <div className="flex items-center gap-1">
            <span className="text-sm">{baths}</span>
            <span className="text-sm">Baths</span>
          </div>
          <div className="w-[1px] h-4 bg-white/30"></div>
          <div className="flex items-center gap-1">
            <span className="text-sm">{sqft}</span>
            <span className="text-sm">Sq Ft</span>
          </div>
        </div>

        <Button className="w-full py-6 text-black transition-all bg-white hover:bg-white/90">
          View Property
        </Button>
      </div>
    </div>
  )
}

const sampleProperties = [
  {
    image: "https://source.unsplash.com/random?luxury,mansion,1",
    price: "$4,500,000",
    title: "Modern Beachfront Villa",
    location: "Miami Beach, FL",
    beds: 5,
    baths: 6,
    sqft: "6,200"
  },
  {
    image: "https://source.unsplash.com/random?luxury,penthouse,2",
    price: "$3,900,000",
    title: "Penthouse with City Views",
    location: "Manhattan, NY",
    beds: 4,
    baths: 4.5,
    sqft: "4,100"
  },
  {
    image: "https://source.unsplash.com/random?luxury,estate,3",
    price: "$5,200,000",
    title: "Contemporary Mountain Estate",
    location: "Aspen, CO",
    beds: 6,
    baths: 7,
    sqft: "7,500"
  }
];

const sampleStats = [
  { value: "2,500+", label: "Properties Sold" },
  { value: "$2B+", label: "Total Sales" },
  { value: "150+", label: "Luxury Listings" },
  { value: "98%", label: "Client Satisfaction" }
];

const FeaturedLuxury1 = ({
  subtitle = 'Featured Properties',
  title = 'Exceptional Residences',
  ctaText = 'View All Properties',
  properties = sampleProperties,
  stats = sampleStats
}) => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-8 mb-16 md:flex-row">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-[1px] bg-black/30"></div>
              <span className="text-sm font-medium tracking-wider uppercase text-black/60">
                {subtitle}
              </span>
            </div>
            <h2 className="text-4xl font-light text-black md:text-5xl">
              {title}
            </h2>
          </div>

          <Button variant="outline" className="px-8 py-4 text-black transition-all border-2 border-black rounded-none hover:bg-black hover:text-white">
            {ctaText}
          </Button>
        </div>

        {/* Properties */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-8 pt-20 mt-20 border-t md:grid-cols-4 border-black/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 text-3xl font-light text-black">{stat.value}</div>
                <div className="text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

FeaturedLuxury1.meta = {
  id: 'featured-luxury-1',
  name: 'Luxury Featured Properties',
  type: 'properties',
  niche: 'real-estate',
  style: 'luxury'
}

export default FeaturedLuxury1