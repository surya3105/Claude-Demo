export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-heading text-3xl md:text-4xl font-semibold mb-4 ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-sm leading-relaxed ${light ? 'text-white/80' : 'text-warm-gray'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
