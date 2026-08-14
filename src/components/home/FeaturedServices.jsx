import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const featured = [
  {
    title: 'Bridal Makeup',
    description: 'Stunning traditional and modern bridal looks for your wedding day.',
    price: 'From ₹15,000',
    image: '/images/gallery/bride-4.jpg',
  },
  {
    title: 'HD Makeup',
    description: 'Camera-ready HD airbrush finish that looks perfect in every photo.',
    price: 'From ₹30,000',
    image: '/images/gallery/bride-9.jpg',
  },
  {
    title: 'Hairdressing',
    description: 'Elegant bridal hairstyles that complement your complete look.',
    price: 'From ₹2,000',
    image: '/images/gallery/bride-14.jpg',
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="Services"
            subtitle="Premium bridal makeup and hairdressing services to make you look stunning on your special day."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featured.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, rotateY: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative rounded-2xl overflow-hidden h-96 perspective-1000"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-sm font-medium mb-1">{item.price}</p>
                  <h3 className="font-heading text-xl text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">View All Services & Pricing</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
