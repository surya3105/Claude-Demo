import { testimonials } from '../data/testimonials'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import Button from '../components/ui/Button'

export default function TestimonialsPage() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Love Stories"
            subtitle="Hear from the couples whose dream weddings we've had the honor of bringing to life."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-warm-gray mb-6">Ready to start your own love story?</p>
            <Button to="/contact">Get In Touch</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
