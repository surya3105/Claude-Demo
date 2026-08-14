import { Link } from 'react-router-dom'
import { RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-gold mb-4">Makeover by Beula</h3>
            <p className="text-sm leading-relaxed">
              Professional bridal makeup artist in Chennai. Making every bride look and feel like a queen on her special day.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map(item => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <RiMapPinLine className="text-gold mt-1 shrink-0" size={16} />
                <p className="text-sm">46/6 Panchalli Amman Kovil Street,<br />Arumbakkam, Chennai - 600106</p>
              </div>
              <div className="flex items-center gap-3">
                <RiMailLine className="text-gold shrink-0" size={16} />
                <p className="text-sm">beualasb2000@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <RiInstagramLine className="text-gold shrink-0" size={16} />
                <a href="https://www.instagram.com/makeover_by_beula" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold transition-colors">
                  @makeover_by_beula
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Makeover by Beula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
