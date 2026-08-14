import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryGrid({ images, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {images.map(image => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            onClick={() => onSelect(image)}
            className="cursor-pointer group perspective-1000"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-[3/4] rounded-xl overflow-hidden relative shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{image.alt}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
