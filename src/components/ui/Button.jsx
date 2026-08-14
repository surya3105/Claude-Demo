import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gold text-charcoal hover:bg-gold-light font-semibold',
  secondary: 'bg-rose text-white hover:bg-dusty-rose font-semibold',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-medium',
}

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const base = `inline-block px-8 py-3 rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${variants[variant]} ${className}`

  const MotionComponent = motion.create ? motion.div : motion.div

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
        <Link to={to} className={base}>{children}</Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
        <a href={href} className={base} {...props}>{children}</a>
      </motion.div>
    )
  }
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <button className={base} {...props}>{children}</button>
    </motion.div>
  )
}
