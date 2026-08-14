import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { categories, galleryImages } from '../data/gallery'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedSection from '../components/ui/AnimatedSection'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'
import LightboxModal from '../components/gallery/LightboxModal'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Our Portfolio"
            subtitle="Browse through our collection of beautiful weddings we've had the honor of planning and designing."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onFilter={setActiveCategory}
          />
        </AnimatedSection>

        <GalleryGrid
          images={filteredImages}
          onSelect={setSelectedImage}
        />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <LightboxModal
            image={selectedImage}
            images={filteredImages}
            onClose={() => setSelectedImage(null)}
            onNavigate={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
