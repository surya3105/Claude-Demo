export default function GalleryFilter({ categories, activeCategory, onFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onFilter(cat.id)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === cat.id
              ? 'bg-rose text-white'
              : 'bg-white text-warm-gray hover:bg-blush hover:text-charcoal'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
