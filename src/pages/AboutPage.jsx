import { motion } from 'framer-motion'
import { RiHeartLine, RiStarLine, RiMagicLine, RiInstagramLine } from 'react-icons/ri'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'

const values = [
  { icon: <RiHeartLine size={28} />, title: 'Passion', description: 'Every bride I work with gets my full dedication to make her look absolutely stunning.' },
  { icon: <RiStarLine size={28} />, title: 'Perfection', description: 'I use only premium products and techniques to ensure flawless, long-lasting results.' },
  { icon: <RiMagicLine size={28} />, title: 'Personalized', description: 'Every face is unique. I customize each look to enhance your natural beauty.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ rotateY: 3 }}
                className="relative perspective-1000"
              >
                <img
                  src="/images/gallery/bride-11.jpg"
                  alt="Beula B - Makeup Artist"
                  className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gold uppercase text-sm tracking-[0.3em] mb-4 font-medium">About Me</p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal font-semibold mb-6">
                Hi, I'm Beula B
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  I'm a professional bridal makeup artist based in Chennai with a passion for making every bride
                  look and feel like a queen on her special day. With years of experience in the beauty industry,
                  I specialize in traditional South Indian bridal looks as well as modern HD makeup techniques.
                </p>
                <p>
                  My approach is simple — I listen to what you envision, understand your skin type and features,
                  and create a customized look that enhances your natural beauty. Whether it's a classic
                  Kanchipuram saree look or a contemporary reception style, I ensure you look your absolute best.
                </p>
                <p>
                  I use only premium, skin-friendly products from top brands to ensure your makeup stays
                  flawless throughout the entire wedding day and looks stunning in every photograph.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button href="https://www.instagram.com/makeover_by_beula" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2"><RiInstagramLine size={16} /> Follow My Work</span>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading title="Why Choose Me" light />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
                >
                  <div className="text-gold mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
