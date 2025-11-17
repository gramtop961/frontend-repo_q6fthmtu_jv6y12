function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">✔</span>
      <span className="text-gray-700">{children}</span>
    </li>
  )
}

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gray-50 px-4 py-1 text-sm text-gray-700">
          <span className="h-2 w-2 rounded-full bg-amber-400" /> Why Choose Us
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Built for durability. Designed for elegance.
        </h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        <Bullet>Precision-engineered movements</Bullet>
        <Bullet>Premium materials and craftsmanship</Bullet>
        <Bullet>Elegant, versatile designs</Bullet>
        <Bullet>Built for durability and comfort</Bullet>
        <Bullet>Exceptional customer support</Bullet>
        <Bullet>Secure worldwide shipping</Bullet>
      </ul>
    </section>
  )
}

export default WhyChooseUs
