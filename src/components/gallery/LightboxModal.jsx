import { motion } from 'framer-motion'
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export default function LightboxModal({ image, images, onClose, onNavigate }) {
  const currentIndex = images.findIndex(img => img.id === image.id)

  const handlePrev = () => {
    const prev = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    onNavigate(images[prev])
  }

  const handleNext = () => {
    const next = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    onNavigate(images[next])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors z-10"
        aria-label="Close"
      >
        <RiCloseLine size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handlePrev() }}
        className="absolute left-4 md:left-8 text-white/70 hover:text-gold transition-colors"
        aria-label="Previous"
      >
        <RiArrowLeftSLine size={40} />
      </button>

      <motion.div
        key={image.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); handleNext() }}
        className="absolute right-4 md:right-8 text-white/70 hover:text-gold transition-colors"
        aria-label="Next"
      >
        <RiArrowRightSLine size={40} />
      </button>

      <div className="absolute bottom-6 text-white/50 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}
