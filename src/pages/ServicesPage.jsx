import { motion } from 'framer-motion'
import { RiCheckLine, RiStarFill } from 'react-icons/ri'
import { makeupServices, hairServices } from '../data/services'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              title="Makeup Services"
              subtitle="Premium bridal and party makeup to make you look stunning on your special day."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {makeupServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`rounded-2xl p-8 h-full relative overflow-hidden ${
                    service.highlighted
                      ? 'bg-charcoal text-white shadow-xl'
                      : 'bg-white shadow-md border border-blush'
                  }`}
                >
                  {service.highlighted && (
                    <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                      <RiStarFill size={10} /> POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`font-heading text-xl font-semibold ${service.highlighted ? 'text-white' : 'text-charcoal'}`}>
                      {service.title}
                    </h3>
                    <span className={`text-2xl font-bold ${service.highlighted ? 'text-gold' : 'text-rose'}`}>
                      {service.price}
                    </span>
                  </div>
                  <p className={`text-sm mb-5 ${service.highlighted ? 'text-white/70' : 'text-warm-gray'}`}>
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <RiCheckLine className={service.highlighted ? 'text-gold' : 'text-sage'} size={16} />
                          <span className={service.highlighted ? 'text-white/90' : 'text-charcoal'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.08),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading
              title="Hairdressing Services"
              subtitle="Complete your bridal look with professional hairstyling."
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hairServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5, rotateX: 2 }}
                  className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center h-full"
                >
                  <h3 className="font-heading text-lg text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-gold text-2xl font-bold mb-3">{service.price}</p>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Button to="/contact">Book Your Session</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
