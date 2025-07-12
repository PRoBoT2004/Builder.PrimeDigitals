import HeroLuxury1 from '@/sections/real-estate/HeroLuxury1'
import ServicesLuxury1 from '@/sections/real-estate/ServicesLuxury1'
import TestimonialsLuxury1 from '@/sections/real-estate/TestimonialsLuxury1'
import FooterLuxury1 from '@/sections/real-estate/FooterLuxury1'
import FeaturedLuxury1 from '@/sections/real-estate/FeaturedLuxury1'
import AboutLuxury1 from '@/sections/real-estate/AboutLuxury1'
// import ContactLuxury1 from '@/sections/real-estate/ContactLuxury1'

const templates = [
  {
    id: 'real-estate-template-1',
    name: 'Modern Real Estate',
    niche: 'real-estate',
    sections: [
      { name: 'HeroLuxury1', component: HeroLuxury1 },
      { name: 'ServicesLuxury1', component: ServicesLuxury1 },
      { name: 'TestimonialsLuxury1', component: TestimonialsLuxury1 },
      { name: 'FooterLuxury1', component: FooterLuxury1 },
    ],
  },
  {
    id: 'real-estate-template-2',
    name: 'Luxury Property Showcase',
    niche: 'real-estate',
    sections: [
      { name: 'HeroLuxury1', component: HeroLuxury1 },
      { name: 'FeaturedLuxury1', component: FeaturedLuxury1 },
      { name: 'AboutLuxury1', component: AboutLuxury1 },
      // { name: 'ContactLuxury1', component: ContactLuxury1 },
      { name: 'FooterLuxury1', component: FooterLuxury1 },
    ],
  },
  {
    id: 'real-estate-template-3',
    name: 'Trust & Services',
    niche: 'real-estate',
    sections: [
      { name: 'HeroLuxury1', component: HeroLuxury1 },
      { name: 'ServicesLuxury1', component: ServicesLuxury1 },
      { name: 'AboutLuxury1', component: AboutLuxury1 },
      { name: 'TestimonialsLuxury1', component: TestimonialsLuxury1 },
      { name: 'FooterLuxury1', component: FooterLuxury1 },
    ],
  },
]

export default templates
