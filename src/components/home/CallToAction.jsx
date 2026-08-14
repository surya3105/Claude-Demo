import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/gallery/bride-5.jpg"
          alt="Bridal Look"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" />
      </div>

      <motion.div
        className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-60 h-60 border border-gold/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <AnimatedSection>
          <motion.p
            className="text-gold uppercase text-sm tracking-[0.3em] mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Book Your Session
          </motion.p>
          <h2 className="font-heading text-3xl md:text-5xl text-white font-semibold mb-6">
            Ready to Look Your Best?
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed text-lg">
            Let's create a look that makes you feel like the most beautiful bride. Book your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact">Book Now</Button>
            <Button href="https://www.instagram.com/makeover_by_beula" target="_blank" rel="noopener noreferrer" variant="outline">
              Follow on Instagram
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
