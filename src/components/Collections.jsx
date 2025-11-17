function CollectionCard({ title, description }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 text-sm font-medium text-amber-600">{title}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Collections() {
  const items = [
    {
      title: 'Classic Series',
      description:
        'A blend of tradition and modern styling—perfect for business, formal events, or everyday luxury.',
    },
    {
      title: 'Sport Series',
      description:
        'Engineered for endurance. Water-resistant, shock-proof, and ready for adventure.',
    },
    {
      title: 'Premium Automatic Series',
      description:
        'Powered by movement, crafted for enthusiasts who appreciate mechanical artistry.',
    },
    {
      title: 'Women’s Elegance Collection',
      description:
        'Refined, stylish, and beautifully designed for timeless femininity.',
    },
  ]

  return (
    <section id="collections" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gray-50 px-4 py-1 text-sm text-gray-700">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Collections
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Our Collections
          </h3>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <CollectionCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Collections
