// src/lib/availableSections/realEstate.js

import AboutLuxury1 from "@/sections/real-estate/AboutLuxury1";
import FeaturedLuxury1 from "@/sections/real-estate/FeaturedLuxury1";
import FeaturedLuxury2 from "@/sections/real-estate/FeaturedLuxury2";
import FeaturedLuxury3 from "@/sections/real-estate/FeaturedLuxury3";
import FeaturedLuxury4 from "@/sections/real-estate/FeaturedLuxury4";
import FooterLuxury1 from "@/sections/real-estate/FooterLuxury1";
import FooterModern1 from "@/sections/real-estate/FooterModern1";
import HeroBold1 from "@/sections/real-estate/HeroBold1";
import HeroHuman1 from "@/sections/real-estate/HeroHuman1";
import HeroLuxury1 from "@/sections/real-estate/HeroLuxury1";
import HeroLuxury2 from "@/sections/real-estate/HeroLuxury2";
import HeroLuxury3 from "@/sections/real-estate/HeroLuxury3";
import NavbarLuxury1 from "@/sections/real-estate/NavbarLuxury1";
import NavbarModern1 from "@/sections/real-estate/NavbarModern1";
import ServicesLuxury1 from "@/sections/real-estate/ServicesLuxury1";
import ServicesLuxury2 from "@/sections/real-estate/ServicesLuxury2";
import ServicesLuxury4 from "@/sections/real-estate/ServicesLuxury4";
import ServicesMinimal1 from "@/sections/real-estate/ServicesMinimal1";
import TestimonialsLuxury1 from "@/sections/real-estate/TestimonialsLuxury1";
import TestimonialsLuxury3 from "@/sections/real-estate/TestimonialsLuxury3";
import TestimonialsMinimal2 from "@/sections/real-estate/TestimonialsMinimal2";
import TestimonialsMinimal4 from "@/sections/real-estate/TestimonialsMinimal4";

const realEstateSections = [
  {
    type: "navbar",
    variations: [
      { id: "navbar-luxury-1", name: "Navbar Luxury 1", component: NavbarLuxury1 },
      { id: "navbar-modern-1", name: "Navbar Modern 1", component: NavbarModern1 },
    ],
  },
  {
    type: "hero",
    variations: [
      {
        id: "hero-luxury-1",
        name: "Hero Luxury 1",
        component: HeroLuxury1,
        defaultProps: {
          bgImage: "/assets/hero-estate.jpg",
          tagline: "Exclusive Properties",
          headline: ["Find Your Dream", "Luxury Home"],
          description: "Discover exceptional properties in the world's most exclusive locations.",
          searchPlaceholder: "Enter location, price range, or property type...",
          ctaText: "Search Properties",
          locations: ["Beverly Hills, CA", "Manhattan, NY", "Miami Beach, FL", "Aspen, CO"]
        }
      },
      { id: "hero-luxury-2", name: "Hero Luxury 2", component: HeroLuxury2 },
      { id: "hero-luxury-3", name: "Hero Luxury 3", component: HeroLuxury3 },
      { id: "hero-bold-1", name: "Hero Bold 1", component: HeroBold1 },
      { id: "hero-human-1", name: "Hero Human 1", component: HeroHuman1 },
    ],
  },
  {
    type: "featured",
    variations: [
      { id: "featured-luxury-1", name: "Featured Luxury 1", component: FeaturedLuxury1 },
      { id: "featured-luxury-2", name: "Featured Luxury 2", component: FeaturedLuxury2 },
      { id: "featured-luxury-3", name: "Featured Luxury 3", component: FeaturedLuxury3 },
      { id: "featured-luxury-4", name: "Featured Luxury 4", component: FeaturedLuxury4 },
    ],
  },
  {
    type: "services",
    variations: [
      { id: "services-luxury-1", name: "Services Luxury 1", component: ServicesLuxury1 },
      { id: "services-luxury-2", name: "Services Luxury 2", component: ServicesLuxury2 },
      { id: "services-luxury-4", name: "Services Luxury 4", component: ServicesLuxury4 },
      { id: "services-minimal-1", name: "Services Minimal 1", component: ServicesMinimal1 },
    ],
  },
  {
    type: "about",
    variations: [
      { id: "about-luxury-1", name: "About Luxury 1", component: AboutLuxury1 },
    ],
  },
  {
    type: "testimonials",
    variations: [
      { id: "testimonials-luxury-1", name: "Testimonials Luxury 1", component: TestimonialsLuxury1 },
      { id: "testimonials-luxury-3", name: "Testimonials Luxury 3", component: TestimonialsLuxury3 },
      { id: "testimonials-minimal-2", name: "Testimonials Minimal 2", component: TestimonialsMinimal2 },
      { id: "testimonials-minimal-4", name: "Testimonials Minimal 4", component: TestimonialsMinimal4 },
    ],
  },
  {
    type: "footer",
    variations: [
      { id: "footer-luxury-1", name: "Footer Luxury 1", component: FooterLuxury1 },
      { id: "footer-modern-1", name: "Footer Modern 1", component: FooterModern1 },
    ],
  },
];

export default realEstateSections;
