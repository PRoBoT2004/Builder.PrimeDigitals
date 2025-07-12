// src/sections/real-estate/FooterModern1.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const companyInfo = {
  name: 'MODERN ESTATE',
  tagline: 'Contemporary Living Solutions',
  description: 'Transforming the way you discover, buy, and sell properties with innovative technology and personalized service.',
  address: '456 Innovation Drive, Tech Quarter',
  city: 'San Francisco, CA 94107',
  phone: '+1 (555) 987-6543',
  email: 'hello@modernestate.com'
}

const quickLinks = [
  { label: 'Explore Properties', href: '#properties', icon: '🏠' },
  { label: 'Sell Your Home', href: '#sell', icon: '💰' },
  { label: 'Market Insights', href: '#insights', icon: '📊' },
  { label: 'Our Team', href: '#team', icon: '👥' },
  { label: 'Contact Us', href: '#contact', icon: '📞' },
  { label: 'Support', href: '#support', icon: '💬' }
]

const propertyCategories = [
  { label: 'Modern Apartments', count: '2,450+', href: '#apartments' },
  { label: 'Luxury Homes', count: '1,200+', href: '#homes' },
  { label: 'Commercial Spaces', count: '850+', href: '#commercial' },
  { label: 'Vacation Rentals', count: '3,100+', href: '#vacation' }
]

const featuredCities = [
  { name: 'San Francisco', properties: '5,200+', href: '#san-francisco' },
  { name: 'Los Angeles', properties: '4,800+', href: '#los-angeles' },
  { name: 'New York', properties: '6,100+', href: '#new-york' },
  { name: 'Miami', properties: '3,400+', href: '#miami' },
  { name: 'Seattle', properties: '2,900+', href: '#seattle' },
  { name: 'Austin', properties: '2,200+', href: '#austin' }
]

const socialLinks = [
  { 
    name: 'Instagram', 
    href: '#instagram', 
    icon: '📸',
    followers: '125K',
    color: 'from-pink-500 to-purple-600'
  },
  { 
    name: 'YouTube', 
    href: '#youtube', 
    icon: '🎥',
    followers: '89K',
    color: 'from-red-500 to-red-600'
  },
  { 
    name: 'LinkedIn', 
    href: '#linkedin', 
    icon: '💼',
    followers: '45K',
    color: 'from-blue-600 to-blue-700'
  },
  { 
    name: 'Twitter', 
    href: '#twitter', 
    icon: '🐦',
    followers: '156K',
    color: 'from-blue-400 to-blue-500'
  }
]

const testimonialHighlight = {
  quote: "Modern Estate made buying our dream home effortless and enjoyable.",
  author: "Sarah & Mike Chen",
  role: "Happy Homeowners",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format"
}

const NewsletterCard = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8 border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl"
    >
      <div className="mb-6 text-center">
        <div className="mb-3 text-4xl">📧</div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">Stay in the Loop</h3>
        <p className="text-sm text-gray-600">Get weekly market updates and exclusive property alerts.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubscribed}
        >
          {isSubscribed ? '✓ Subscribed Successfully!' : 'Subscribe Now'}
        </motion.button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">Join 25,000+ property enthusiasts</p>
      </div>
    </motion.div>
  )
}

const PropertyCategoryCard = ({ category, index }) => (
  <motion.a
    href={category.href}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="block p-6 transition-all bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg group"
    whileHover={{ y: -4 }}
  >
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {category.label}
        </h4>
        <p className="mt-1 text-2xl font-bold text-blue-600">{category.count}</p>
        <p className="text-sm text-gray-500">Available properties</p>
      </div>
      <div className="text-2xl transition-transform group-hover:scale-110">
        🏢
      </div>
    </div>
  </motion.a>
)

const CityCard = ({ city, index }) => (
  <motion.a
    href={city.href}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="block p-4 text-center transition-all bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md group"
    whileHover={{ scale: 1.02 }}
  >
    <div className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
      {city.name}
    </div>
    <div className="text-sm font-medium text-blue-600">{city.properties}</div>
  </motion.a>
)

const SocialCard = ({ social, index }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    className="block p-4 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg group"
    whileHover={{ y: -2 }}
  >
    <div className="text-center">
      <div className="mb-2 text-2xl transition-transform group-hover:scale-110">
        {social.icon}
      </div>
      <div className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
        {social.name}
      </div>
      <div className="text-sm text-gray-500">{social.followers} followers</div>
    </div>
  </motion.a>
)

const TestimonialCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonialHighlight.avatar}
        alt={testimonialHighlight.author}
        className="object-cover w-12 h-12 rounded-full"
      />
      <div className="ml-3">
        <div className="font-semibold text-gray-900">{testimonialHighlight.author}</div>
        <div className="text-sm text-gray-500">{testimonialHighlight.role}</div>
      </div>
    </div>
    <blockquote className="italic text-gray-700">
      "{testimonialHighlight.quote}"
    </blockquote>
    <div className="flex mt-3 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <span key={i}>⭐</span>
      ))}
    </div>
  </motion.div>
)

const FooterModern1 = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      {/* Main Footer Content */}
      <div className="container px-4 py-20 mx-auto">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-4 space-x-3">
            <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <div className="text-xl font-bold text-white">M</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{companyInfo.name}</div>
              <div className="text-sm text-gray-500">{companyInfo.tagline}</div>
            </div>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {companyInfo.description}
          </p>
        </motion.div>

        {/* Property Categories */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-2xl font-bold text-center text-gray-900"
          >
            Browse by Category
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {propertyCategories.map((category, index) => (
              <PropertyCategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-3">
          
          {/* Newsletter */}
          <div>
            <NewsletterCard />
          </div>

          {/* Featured Cities */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-xl font-bold text-gray-900"
            >
              Popular Cities
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {featuredCities.map((city, index) => (
                <CityCard key={index} city={city} index={index} />
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-xl font-bold text-gray-900"
            >
              Client Love
            </motion.h3>
            <TestimonialCard />
          </div>
        </div>

        {/* Quick Links & Social */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-xl font-bold text-gray-900"
            >
              Quick Access
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center p-3 space-x-3 transition-all bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-xl font-bold text-gray-900"
            >
              Follow Our Journey
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <SocialCard key={index} social={social} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-500 md:flex-row md:space-y-0 md:space-x-6">
              <div>© 2024 {companyInfo.name}. All rights reserved.</div>
              <div className="flex items-center space-x-4">
                <a href="#privacy" className="transition-colors hover:text-blue-600">Privacy</a>
                <a href="#terms" className="transition-colors hover:text-blue-600">Terms</a>
                <a href="#cookies" className="transition-colors hover:text-blue-600">Cookies</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>{companyInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterModern1.meta = {
  id: 'footer-modern-1',
  name: 'Modern Card-Based Footer',
  type: 'footer',
  niche: 'real-estate',
  style: 'modern'
}

export default FooterModern1