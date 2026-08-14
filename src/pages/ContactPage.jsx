import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Get In Touch"
            subtitle="Ready to start planning your dream wedding? We'd love to hear from you. Fill out the form below and we'll be in touch within 24 hours."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
          </div>
          <div>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">Contact Information</h3>
                <ContactInfo />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
