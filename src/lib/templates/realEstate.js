// lib/templates/realEstate.js
import HeroLuxury1 from "@/sections/real-estate/HeroLuxury1";
import ServicesLuxury1 from "@/sections/real-estate/ServicesLuxury1";
import TestimonialsLuxury1 from "@/sections/real-estate/TestimonialsLuxury1";
import FooterLuxury1 from "@/sections/real-estate/FooterLuxury1";

const realEstateTemplates = [
  {
    id: "luxury-home-template",
    name: "Luxury Home Landing Page",
    sections: [
      {
        name: "Hero Luxury 1",
        component: HeroLuxury1,
        initialProps: HeroLuxury1.defaultProps || {},
      },
      {
        name: "Services Luxury 1",
        component: ServicesLuxury1,
        initialProps: ServicesLuxury1.defaultProps || {},
      },
      {
        name: "Testimonials Luxury 1",
        component: TestimonialsLuxury1,
        initialProps: TestimonialsLuxury1.defaultProps || {},
      },
      {
        name: "Footer Luxury 1",
        component: FooterLuxury1,
        initialProps: FooterLuxury1.defaultProps || {},
      },
    ],
  },
];

export default realEstateTemplates;
