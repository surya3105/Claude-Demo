import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <p className="text-gold uppercase text-sm tracking-[0.3em] mb-4 font-medium">Welcome</p>
          <h2 className="font-heading text-3xl md:text-5xl text-charcoal font-semibold mb-6">
            Your Beauty, My Passion
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-warm-gray leading-relaxed text-lg">
            I'm Beula B, a professional bridal makeup artist based in Chennai. With years of experience in
            bridal and party makeup, I specialize in creating stunning looks that make every bride feel
            confident and beautiful on her special day. From traditional South Indian bridal looks to
            modern HD makeup, I bring out the best version of you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { number: '500+', label: 'Happy Brides' },
              { number: '8+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center perspective-1000"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-gold">{stat.number}</p>
                <p className="text-warm-gray text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
