import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
      <RiDoubleQuotesL className="text-gold/40 mb-4" size={32} />
      <p className="text-warm-gray text-sm leading-relaxed flex-1 mb-6">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <RiStarFill key={i} className="text-gold" size={14} />
        ))}
      </div>
      <div>
        <p className="font-heading text-charcoal font-semibold">{testimonial.name}</p>
        <p className="text-warm-gray text-xs">{testimonial.location} &middot; {testimonial.date}</p>
      </div>
    </div>
  )
}
