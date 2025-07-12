// src/sections/real-estate/FooterLuxury1.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const companyInfo = {
  name: 'LUXE ESTATES',
  tagline: 'Premium Real Estate',
  description: 'Setting the standard in luxury real estate with unparalleled service, exclusive properties, and exceptional client experiences.',
  address: '123 Luxury Boulevard, Premium District',
  city: 'New York, NY 10001',
  phone: '+1 (555) 123-4567',
  email: 'info@luxeestates.com'
}

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Careers', href: '#careers' }
]

const propertyTypes = [
  { label: 'Luxury Villas', href: '#villas' },
  { label: 'Modern Penthouses', href: '#penthouses' },
  { label: 'Waterfront Properties', href: '#waterfront' },
  { label: 'Commercial Spaces', href: '#commercial' },
  { label: 'Investment Properties', href: '#investment' },
  { label: 'Exclusive Estates', href: '#estates' }
]

const services = [
  { label: 'Property Valuation', href: '#valuation' },
  { label: 'Investment Advisory', href: '#advisory' },
  { label: 'Property Management', href: '#management' },
  { label: 'Legal Services', href: '#legal' },
  { label: 'Interior Design', href: '#design' },
  { label: 'Concierge Services', href: '#concierge' }
]

const socialMedia = [
  { 
    name: 'Facebook', 
    href: '#facebook', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#instagram', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.408 3.014 12.015 3.014 9.034c0-2.981.836-5.374 2.112-6.663.875-.801 2.026-1.291 3.323-1.291 1.297 0 2.448.49 3.323 1.291 1.276 1.289 2.112 3.682 2.112 6.663 0 2.981-.836 5.374-2.112 6.663-.875.801-2.026 1.291-3.323 1.291z"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: '#linkedin', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    href: '#youtube', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
  { label: 'Disclaimer', href: '#disclaimer' }
]

const awards = [
  { name: 'Top Real Estate Agency 2024', icon: '🏆' },
  { name: 'Best Luxury Service Award', icon: '⭐' },
  { name: 'Excellence in Real Estate', icon: '🥇' }
]

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
      <p className="text-sm text-slate-300">Get exclusive property listings and market insights.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-white border rounded-lg bg-slate-800 border-slate-700 focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-slate-400"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          className="w-full px-4 py-3 font-semibold transition-colors rounded-lg text-slate-900 bg-amber-400 hover:bg-amber-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitted}
        >
          {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
        </motion.button>
      </form>
    </div>
  )
}

const FooterSection = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="space-y-4"
  >
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    {children}
  </motion.div>
)

const FooterLink = ({ href, children, external = false }) => (
  <motion.a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="block py-1 text-sm transition-colors text-slate-300 hover:text-amber-400"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.a>
)

const SocialIcon = ({ social }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg text-slate-300 bg-slate-800 hover:text-white hover:bg-amber-400"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    aria-label={social.name}
  >
    {social.icon}
  </motion.a>
)

const FooterLuxury1 = () => {
  return (
    <footer className="border-t bg-slate-900 border-slate-800">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-amber-400 rounded-xl">
                <div className="text-xl font-bold text-slate-900">L</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{companyInfo.name}</div>
                <div className="text-sm text-slate-300">{companyInfo.tagline}</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div>{companyInfo.address}</div>
                  <div>{companyInfo.city}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{companyInfo.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{companyInfo.email}</span>
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Recognition</h4>
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-slate-300">
                  <span>{award.icon}</span>
                  <span>{award.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" delay={0.1}>
            <div className="space-y-1">
              {navigationLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Properties */}
          <FooterSection title="Properties" delay={0.2}>
            <div className="space-y-1">
              {propertyTypes.map((property, index) => (
                <FooterLink key={index} href={property.href}>
                  {property.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Services" delay={0.3}>
            <div className="space-y-1">
              {services.map((service, index) => (
                <FooterLink key={index} href={service.href}>
                  {service.label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 mt-12 border-t border-slate-800"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Ready to Find Your Dream Property?
              </h3>
              <p className="mb-6 text-slate-300">
                Let our expert team guide you through the luxury real estate market with personalized service and exclusive access to premium properties.
              </p>
              <motion.a
                href="#consultation"
                className="inline-flex items-center px-6 py-3 space-x-2 font-semibold transition-colors rounded-lg bg-amber-400 text-slate-900 hover:bg-amber-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Consultation</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
            
            <div className="lg:col-span-1">
              <NewsletterSignup />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-slate-400">
              © 2024 {companyInfo.name}. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              {socialMedia.map((social, index) => (
                <SocialIcon key={index} social={social} />
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs transition-colors text-slate-400 hover:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterLuxury1.meta = {
  id: 'footer-luxury-1',
  name: 'Luxury Real Estate Footer',
  type: 'footer',
  niche: 'real-estate',
  style: 'luxury'
}

export default FooterLuxury1