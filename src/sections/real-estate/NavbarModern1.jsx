// src/sections/real-estate/NavbarModern1.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navigationItems = [
  { id: 1, label: 'Home', href: '#home' },
  { 
    id: 2, 
    label: 'Properties', 
    href: '#properties',
    megaMenu: {
      sections: [
        {
          title: 'Property Types',
          links: [
            { label: 'Luxury Villas', href: '#villas', icon: '🏖️' },
            { label: 'Modern Apartments', href: '#apartments', icon: '🏢' },
            { label: 'Penthouses', href: '#penthouses', icon: '🌆' },
            { label: 'Commercial Spaces', href: '#commercial', icon: '🏢' }
          ]
        },
        {
          title: 'Services',
          links: [
            { label: 'Buy Properties', href: '#buy', icon: '🔑' },
            { label: 'Sell Properties', href: '#sell', icon: '💰' },
            { label: 'Rent Properties', href: '#rent', icon: '📋' },
            { label: 'Property Investment', href: '#invest', icon: '📈' }
          ]
        },
        {
          title: 'Locations',
          links: [
            { label: 'Downtown District', href: '#downtown', icon: '🏙️' },
            { label: 'Waterfront Area', href: '#waterfront', icon: '🌊' },
            { label: 'Suburban Estates', href: '#suburban', icon: '🌳' },
            { label: 'Business District', href: '#business', icon: '💼' }
          ]
        }
      ]
    }
  },
  { 
    id: 3, 
    label: 'Services', 
    href: '#services',
    megaMenu: {
      sections: [
        {
          title: 'Client Services',
          links: [
            { label: 'Property Consultation', href: '#consultation', icon: '💬' },
            { label: 'Market Analysis', href: '#analysis', icon: '📊' },
            { label: 'Investment Planning', href: '#planning', icon: '📋' },
            { label: 'Legal Support', href: '#legal', icon: '⚖️' }
          ]
        },
        {
          title: 'Property Management',
          links: [
            { label: 'Maintenance Services', href: '#maintenance', icon: '🔧' },
            { label: 'Tenant Management', href: '#tenants', icon: '👥' },
            { label: 'Financial Reporting', href: '#reporting', icon: '📈' },
            { label: 'Security Services', href: '#security', icon: '🛡️' }
          ]
        }
      ]
    }
  },
  { id: 4, label: 'About', href: '#about' },
  { id: 5, label: 'Contact', href: '#contact' }
]

const logoConfig = {
  text: 'MODERN ESTATE',
  subtitle: 'Contemporary Living'
}

const ctaButton = {
  text: 'Get Started',
  href: '#get-started'
}

const MobileMenu = ({ isOpen, onClose, items, cta }) => {
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu Sliding from Left */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 left-0 z-50 h-full overflow-y-auto border-r border-gray-200 w-80 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <div className="text-lg font-bold text-gray-900">{logoConfig.text}</div>
                  <div className="text-xs text-gray-500">{logoConfig.subtitle}</div>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-3">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      {/* Main Item */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <a
                          href={item.href}
                          className="flex-1 px-4 py-3 text-lg font-medium text-gray-900 transition-all rounded-xl hover:bg-blue-50 hover:text-blue-600"
                          onClick={!item.megaMenu ? onClose : undefined}
                        >
                          {item.label}
                        </a>
                        {item.megaMenu && (
                          <button
                            onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                            className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                          >
                            <motion.svg
                              className="w-4 h-4"
                              animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </button>
                        )}
                      </motion.div>

                      {/* Mega Menu Items */}
                      <AnimatePresence>
                        {item.megaMenu && expandedItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 ml-4 space-y-4"
                          >
                            {item.megaMenu.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <div className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                                  {section.title}
                                </div>
                                <div className="space-y-1">
                                  {section.links.map((link, linkIndex) => (
                                    <motion.a
                                      key={linkIndex}
                                      href={link.href}
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: linkIndex * 0.05 }}
                                      className="flex items-center px-3 py-2 space-x-3 text-sm text-gray-700 transition-colors rounded-lg hover:bg-blue-50 hover:text-blue-600"
                                      onClick={onClose}
                                    >
                                      <span className="text-lg">{link.icon}</span>
                                      <span>{link.label}</span>
                                    </motion.a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-gray-200">
                <motion.a
                  href={cta.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block w-full px-6 py-3 font-semibold text-center text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                  onClick={onClose}
                >
                  {cta.text}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const MegaMenu = ({ sections, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="absolute w-screen max-w-4xl mt-4 overflow-hidden transform -translate-x-1/2 border border-gray-200 shadow-2xl top-full left-1/2 bg-white/90 backdrop-blur-xl rounded-2xl"
      >
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-bold tracking-wide text-gray-900 uppercase">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                    className="flex items-center px-3 py-2 space-x-3 text-gray-700 transition-all rounded-lg hover:bg-blue-50 hover:text-blue-600 group"
                  >
                    <span className="text-lg transition-transform group-hover:scale-110">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const DesktopNavItem = ({ item }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsMegaMenuOpen(true)}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <motion.a
        href={item.href}
        className="relative flex items-center px-4 py-2 space-x-1 text-sm font-semibold text-gray-700 transition-all rounded-full hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span>{item.label}</span>
        {item.megaMenu && (
          <motion.svg
            className="w-4 h-4"
            animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        )}
      </motion.a>

      {/* Mega Menu */}
      {item.megaMenu && <MegaMenu sections={item.megaMenu.sections} isOpen={isMegaMenuOpen} />}
    </div>
  )
}

const DesktopNav = ({ items }) => (
  <nav className="items-center hidden space-x-2 lg:flex">
    {items.map((item) => (
      <DesktopNavItem key={item.id} item={item} />
    ))}
  </nav>
)

const Logo = ({ config, isScrolled }) => (
  <motion.a
    href="#home"
    className="flex items-center space-x-3"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center justify-center w-10 h-10 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
      <div className="text-lg font-bold text-white">M</div>
    </div>
    <div>
      <div className={`font-bold tracking-tight text-gray-900 transition-all duration-300 ${
        isScrolled ? 'text-lg' : 'text-xl'
      }`}>
        {config.text}
      </div>
      <div className="text-xs text-gray-500">{config.subtitle}</div>
    </div>
  </motion.a>
)

const NavbarModern1 = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative w-full">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative w-full z-10 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-5'
          }`}>
            
            {/* Logo */}
            <Logo config={logoConfig} isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <DesktopNav items={navigationItems} />

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.a
                href={ctaButton.href}
                className="px-6 py-2 text-sm font-semibold text-white transition-all rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {ctaButton.text}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center w-10 h-10 text-gray-700 transition-colors rounded-lg lg:hidden hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Positioned relative to navbar container */}
      {isMobileMenuOpen && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          items={navigationItems}
          cta={ctaButton}
        />
      )}
    </div>
  )
}

NavbarModern1.meta = {
  id: 'navbar-modern-1',
  name: 'Modern Glass Morphism Navbar',
  type: 'navigation',
  niche: 'real-estate',
  style: 'modern'
}

export default NavbarModern1