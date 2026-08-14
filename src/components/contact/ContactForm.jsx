import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 text-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-gold text-5xl mb-4"
        >
          &#10003;
        </motion.div>
        <h3 className="font-heading text-2xl text-charcoal mb-2">Thank You!</h3>
        <p className="text-warm-gray">I'll get back to you within 24 hours to confirm your appointment.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Your Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Wedding / Event Date *</label>
          <input
            type="date"
            name="weddingDate"
            required
            value={formData.weddingDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">Service Needed *</label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
        >
          <option value="">Select a service</option>
          <option value="bridal-normal">Bridal Normal Makeup — ₹15,000</option>
          <option value="bridal-hd">Bridal HD Makeup — ₹30,000</option>
          <option value="simple">Simple Makeup — ₹5,000</option>
          <option value="bridesmaid">Bridesmaid Makeup — ₹5,000</option>
          <option value="hairdressing">Bridal Hairdressing — ₹2,000</option>
          <option value="combo">Makeup + Hairdressing Combo</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">Additional Details</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-blush bg-cream/50 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell me about your wedding plans, preferred look, any skin concerns..."
        />
      </div>

      <Button type="submit" className="w-full text-center">Send Booking Request</Button>
    </form>
  )
}
