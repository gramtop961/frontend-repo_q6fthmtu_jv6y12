import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          CRLUXURY • Where precision meets artistry
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Timepieces that tell stories
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          Designed for individuals who value elegance, durability, and exceptional craftsmanship.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#collections"
            className="group inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-medium text-black shadow-lg shadow-amber-400/20 transition hover:brightness-95"
          >
            Browse Collections
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Our Philosophy
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
    </section>
  )
}

export default Hero
