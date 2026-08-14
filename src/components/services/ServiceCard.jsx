import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

export default function ServiceCard({ service, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
      >
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{service.title}</h3>
        <p className="text-gold text-2xl font-bold mb-3">{service.price}</p>
        <p className="text-warm-gray text-sm leading-relaxed">{service.description}</p>
      </motion.div>
    </AnimatedSection>
  )
}
