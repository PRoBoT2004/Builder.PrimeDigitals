// src/sections/real-estate/AboutLuxury1.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const companyStory = {
  founded: '2010',
  experience: '14+ Years',
  title: 'Redefining Luxury Real Estate Excellence',
  subtitle: 'Where Vision Meets Legacy',
  description: 'Founded on the principles of exceptional service and uncompromising quality, we have established ourselves as the premier destination for luxury real estate. Our journey began with a simple vision: to transform the way discerning clients experience property acquisition and investment.',
  mission: 'To provide an unparalleled luxury real estate experience that exceeds expectations, builds lasting relationships, and creates extraordinary value for our distinguished clientele.',
  vision: 'To be the globally recognized leader in luxury real estate, setting the standard for innovation, integrity, and excellence in every transaction.'
}

const coreValues = [
  {
    id: 1,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, from initial consultation to final closing.',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format'
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'Trust and transparency form the foundation of all our client relationships.',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format'
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology and creative solutions to deliver superior results.',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=800&auto=format'
  },
  {
    id: 4,
    title: 'Exclusivity',
    description: 'Access to the most prestigious properties and exclusive market opportunities.',
    icon: '👑',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&auto=format'
  }
]

const achievements = [
  { label: 'Properties Sold', value: '$2.5B+', icon: '🏆' },
  { label: 'Satisfied Clients', value: '1,500+', icon: '👥' },
  { label: 'Years of Excellence', value: '14+', icon: '📅' },
  { label: 'Awards Won', value: '25+', icon: '🥇' },
  { label: 'Global Markets', value: '50+', icon: '🌍' },
  { label: 'Success Rate', value: '98%', icon: '📈' }
]

const teamHighlights = [
  {
    id: 1,
    name: 'Alexandra Sterling',
    position: 'Founder & CEO',
    specialization: 'Luxury Property Investment',
    experience: '20+ Years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format',
    description: 'Visionary leader with unparalleled expertise in luxury real estate markets.',
    achievements: ['Forbes 40 Under 40', 'Real Estate Executive of the Year', '$500M+ in Sales']
  },
  {
    id: 2,
    name: 'Marcus Wellington',
    position: 'Chief Investment Officer',
    specialization: 'Commercial & Investment Properties',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format',
    description: 'Strategic advisor specializing in high-value commercial and investment opportunities.',
    achievements: ['Harvard MBA', 'CIM Certification', '$300M+ Portfolio Managed']
  },
  {
    id: 3,
    name: 'Isabella Rodriguez',
    position: 'Head of Client Relations',
    specialization: 'Luxury Residential Sales',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format',
    description: 'Dedicated to providing exceptional service and building lasting client relationships.',
    achievements: ['Top 1% Agent Nationally', 'Client Satisfaction 99%', '$400M+ in Sales']
  }
]

const awards = [
  {
    year: '2024',
    title: 'Luxury Real Estate Agency of the Year',
    organization: 'International Property Awards',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&auto=format'
  },
  {
    year: '2023',
    title: 'Excellence in Customer Service',
    organization: 'Real Estate Business Awards',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&auto=format'
  },
  {
    year: '2023',
    title: 'Innovation in Real Estate Technology',
    organization: 'PropTech Excellence Awards',
    image: 'https://images.unsplash.com/photo-1600607687644-aac76f0e23ec?w=400&auto=format'
  }
]

const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          src={value.image}
          alt={value.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            className="mb-4 text-4xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {value.icon}
          </motion.div>
          <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
          <p className="text-sm leading-relaxed text-white/80">{value.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const TeamMember = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    className="overflow-hidden border bg-slate-800 rounded-2xl border-slate-700"
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
    
    <div className="p-6">
      <div className="mb-4">
        <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
        <p className="mb-1 font-medium text-amber-400">{member.position}</p>
        <p className="text-sm text-slate-300">{member.specialization}</p>
      </div>
      
      <p className="mb-4 text-sm leading-relaxed text-slate-300">{member.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span>⏱️</span>
          <span>{member.experience} Experience</span>
        </div>
        
        <div className="space-y-1">
          {member.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="p-6 text-center border bg-slate-800 rounded-xl border-slate-700"
  >
    <div className="mb-3 text-3xl">{achievement.icon}</div>
    <div className="mb-2 text-2xl font-bold text-amber-400">{achievement.value}</div>
    <div className="text-sm text-slate-300">{achievement.label}</div>
  </motion.div>
)

const AwardCard = ({ award, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="flex items-center p-4 space-x-4 border bg-slate-800 rounded-xl border-slate-700"
  >
    <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
      <img src={award.image} alt={award.title} className="object-cover w-full h-full" />
    </div>
    <div>
      <div className="text-sm font-semibold text-amber-400">{award.year}</div>
      <h4 className="font-medium text-white">{award.title}</h4>
      <p className="text-xs text-slate-400">{award.organization}</p>
    </div>
  </motion.div>
)

const AboutLuxury1 = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container px-4 mx-auto">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center px-6 py-2 mb-6 space-x-2 border rounded-full border-white/10">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm font-medium text-white/60">About Us</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-light leading-tight text-white md:text-6xl">
            {companyStory.title}
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-white/70">
            {companyStory.subtitle}
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-white/60">
            <div className="flex items-center space-x-2">
              <span>📅</span>
              <span>Founded {companyStory.founded}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⭐</span>
              <span>{companyStory.experience} Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Story Section */}
        <div className="grid items-center gap-16 mb-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-light text-white">Our Story</h2>
            <p className="mb-6 leading-relaxed text-white/70">{companyStory.description}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-amber-400">Mission</h3>
                <p className="text-sm leading-relaxed text-white/70">{companyStory.mission}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-amber-400">Vision</h3>
                <p className="text-sm leading-relaxed text-white/70">{companyStory.vision}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607688920-4e2a09cf159d?w=800&auto=format"
                alt="Luxury Office"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-light text-white">Core Values</h2>
            <p className="max-w-2xl mx-auto text-white/70">
              The principles that guide our every decision and interaction with clients.
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-light text-white">Our Achievements</h2>
            <p className="text-white/70">Numbers that reflect our commitment to excellence.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>

        {/* Team Highlights */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-light text-white">Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-white/70">
              Meet the visionaries driving innovation and excellence in luxury real estate.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {teamHighlights.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-light text-white">Recognition & Awards</h2>
            <p className="text-white/70">Industry recognition for our outstanding service and innovation.</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {awards.map((award, index) => (
              <AwardCard key={index} award={award} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

AboutLuxury1.meta = {
  id: 'about-luxury-1',
  name: 'Luxury About Section with Team',
  type: 'about',
  niche: 'real-estate',
  style: 'luxury'
}

export default AboutLuxury1