import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function PricingTable({ tiers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <AnimatedSection key={tier.id} delay={index * 0.15}>
          <div
            className={`rounded-2xl p-8 h-full flex flex-col ${
              tier.highlighted
                ? 'bg-charcoal text-white shadow-xl scale-[1.02]'
                : 'bg-white shadow-sm border border-blush'
            }`}
          >
            {tier.highlighted && (
              <span className="bg-gold text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start mb-4">
                Most Popular
              </span>
            )}
            <h3 className={`font-heading text-2xl font-semibold ${tier.highlighted ? 'text-white' : 'text-charcoal'}`}>
              {tier.name}
            </h3>
            <p className={`text-sm mt-1 ${tier.highlighted ? 'text-white/70' : 'text-warm-gray'}`}>
              {tier.tagline}
            </p>
            <p className={`text-3xl font-bold mt-6 mb-8 ${tier.highlighted ? 'text-gold-light' : 'text-rose'}`}>
              {tier.price}
            </p>

            <ul className="space-y-3 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {feature.included ? (
                    <RiCheckLine className={`shrink-0 ${tier.highlighted ? 'text-gold-light' : 'text-sage'}`} size={18} />
                  ) : (
                    <RiCloseLine className={`shrink-0 ${tier.highlighted ? 'text-white/30' : 'text-warm-gray/40'}`} size={18} />
                  )}
                  <span className={feature.included ? '' : `${tier.highlighted ? 'text-white/40' : 'text-warm-gray/60'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                to="/contact"
                variant={tier.highlighted ? 'secondary' : 'outline'}
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
