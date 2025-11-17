function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gray-50 px-4 py-1 text-sm text-gray-700">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <div className="prose prose-invert prose-amber mt-6 max-w-none text-gray-600">
        {children}
      </div>
    </section>
  )
}

export default Section
