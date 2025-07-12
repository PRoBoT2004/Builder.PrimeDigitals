// src/sections/real-estate/NavbarLuxury1.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navigationItems = [
  { id: 1, label: 'Home', href: '#home' },
  { 
    id: 2, 
    label: 'Properties', 
    href: '#properties',
    dropdown: [
      { label: 'Buy Properties', href: '#buy' },
      { label: 'Sell Properties', href: '#sell' },
      { label: 'Rent Properties', href: '#rent' },
      { label: 'Luxury Estates', href: '#luxury' },
      { label: 'Commercial Properties', href: '#commercial' },
      { label: 'Investment Properties', href: '#investment' }
    ]
  },
  { 
    id: 3, 
    label: 'Services', 
    href: '#services',
    dropdown: [
      { label: 'Property Valuation', href: '#valuation' },
      { label: 'Investment Advisory', href: '#advisory' },
      { label: 'Property Management', href: '#management' },
      { label: 'Legal Services', href: '#legal' },
      { label: 'Interior Design', href: '#design' },
      { label: 'Concierge Services', href: '#concierge' }
    ]
  },
  { 
    id: 4, 
    label: 'About', 
    href: '#about',
    dropdown: [
      { label: 'Our Team', href: '#team' },
      { label: 'Company History', href: '#history' },
      { label: 'Awards & Recognition', href: '#awards' },
      { label: 'Careers', href: '#careers' }
    ]
  },
  { id: 5, label: 'Contact', href: '#contact' }
]

const logoConfig = {
  text: 'LUXE ESTATES',
  subtitle: 'Premium Real Estate'
}

const ctaButton = {
  text: 'Schedule Consultation',
  href: '#consultation'
}

const MobileMenu = ({ isOpen, onClose, items, cta }) => {
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Fixed positioning with higher z-index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu - Fixed positioning with highest z-index */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[9999] h-full overflow-y-auto border-l w-80 bg-slate-900 border-slate-700"
          >
            <div className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <div className="text-lg font-semibold text-white">{logoConfig.text}</div>
                  <div className="text-xs text-slate-300">{logoConfig.subtitle}</div>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full hover:bg-slate-800"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-2">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      {/* Main Item */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <a
                          href={item.href}
                          className="flex-1 px-4 py-3 text-lg font-medium text-white transition-colors rounded-lg hover:bg-slate-800 hover:text-amber-400"
                          onClick={!item.dropdown ? onClose : undefined}
                        >
                          {item.label}
                        </a>
                        {item.dropdown && (
                          <button
                            onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                            className="flex items-center justify-center w-8 h-8 text-white transition-colors rounded hover:bg-slate-800"
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

                      {/* Dropdown Items */}
                      <AnimatePresence>
                        {item.dropdown && expandedItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-2 ml-4 space-y-1 border-l border-slate-700"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href={subItem.href}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                className="block px-3 py-2 text-sm transition-colors rounded text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                                onClick={onClose}
                              >
                                {subItem.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-slate-700">
                <motion.a
                  href={cta.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block w-full px-6 py-3 font-semibold text-center transition-all rounded-lg text-slate-900 bg-amber-400 hover:bg-amber-300 hover:shadow-lg"
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

const DropdownMenu = ({ items, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 w-64 mt-2 overflow-hidden border shadow-2xl top-full bg-slate-900/95 backdrop-blur-md border-slate-700 rounded-xl z-[9997]"
      >
        <div className="py-2">
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="block px-4 py-3 text-sm text-white transition-colors border-l-2 border-transparent hover:bg-slate-800 hover:text-amber-400 hover:border-amber-400"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const DesktopNavItem = ({ item, isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <motion.a
        href={item.href}
        className="relative flex items-center py-2 space-x-1 text-sm font-medium tracking-wide text-white transition-colors hover:text-amber-400 group"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        <span>{item.label}</span>
        {item.dropdown && (
          <motion.svg
            className="w-4 h-4"
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        )}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>

      {/* Dropdown */}
      {item.dropdown && <DropdownMenu items={item.dropdown} isOpen={isDropdownOpen} />}
    </div>
  )
}

const DesktopNav = ({ items, isScrolled }) => (
  <nav className="hidden space-x-8 lg:flex">
    {items.map((item) => (
      <DesktopNavItem key={item.id} item={item} isScrolled={isScrolled} />
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
    <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-lg bg-amber-400">
      <div className="text-lg font-bold text-slate-900">L</div>
    </div>
    <div>
      <div className={`font-semibold tracking-wide text-white transition-all duration-300 ${
        isScrolled ? 'text-lg' : 'text-xl'
      }`}>
        {config.text}
      </div>
      <div className="text-xs text-slate-300">{config.subtitle}</div>
    </div>
  </motion.a>
)

const NavbarLuxury1 = () => {
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
    <div className="relative w-full" style={{ zIndex: 'auto' }}>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative w-full z-[9996] transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-xl' 
            : 'bg-slate-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-4' : 'py-6'
          }`}>
            
            {/* Logo */}
            <Logo config={logoConfig} isScrolled={isScrolled} />

            {/* Desktop Navigation */}
            <DesktopNav items={navigationItems} isScrolled={isScrolled} />

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.a
                href={ctaButton.href}
                className="px-6 py-2 text-sm font-semibold transition-all rounded-lg text-slate-900 bg-amber-400 hover:bg-amber-300 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {ctaButton.text}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-lg lg:hidden hover:bg-slate-800"
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

      {/* Mobile Menu - Now using portal-like positioning */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navigationItems}
        cta={ctaButton}
      />
    </div>
  )
}

NavbarLuxury1.defaultProps = {}

NavbarLuxury1.meta = {
  id: 'navbar-luxury-1',
  name: 'Luxury Real Estate Navbar with Dropdowns',
  type: 'navigation',
  niche: 'real-estate',
  style: 'luxury'
}

export default NavbarLuxury1