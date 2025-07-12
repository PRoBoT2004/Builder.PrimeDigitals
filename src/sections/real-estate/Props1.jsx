import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Dummy property data
const properties = [
  {
    title: "Beachfront Bungalow",
    image: "https://source.unsplash.com/800x600/?beach,house",
    details: "3 Bed • 2 Bath • 2,100 sq ft",
    price: "$1.5M",
  },
  {
    title: "City Penthouse",
    image: "https://source.unsplash.com/800x600/?city,apartment",
    details: "4 Bed • 4 Bath • 3,800 sq ft",
    price: "$3.2M",
  },
  {
    title: "Modern Suburban Home",
    image: "https://source.unsplash.com/800x600/?modern,house",
    details: "5 Bed • 3 Bath • 2,700 sq ft",
    price: "$850K",
  },
  {
    title: "Luxury Villa",
    image: "https://source.unsplash.com/800x600/?luxury,villa",
    details: "6 Bed • 5 Bath • 6,000 sq ft",
    price: "$5.9M",
  },
];

const Props1 = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Properties
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover the finest properties across every lifestyle and location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{prop.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{prop.details}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{prop.price}</span>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Props1;
