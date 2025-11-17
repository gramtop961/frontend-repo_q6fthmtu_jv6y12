import Hero from './components/Hero'
import Section from './components/Section'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <Section id="philosophy" eyebrow="Our Philosophy" title="Time is the ultimate luxury">
        <p>
          We create watches with meticulous attention to detail, premium materials, and engineering excellence. Each piece reflects our commitment to quality, sophistication, and performance.
        </p>
      </Section>

      <Section id="craftsmanship" eyebrow="Craftsmanship" title="Master artisans, premium materials">
        <p>
          Our watches are built using high-grade stainless steel, sapphire crystal glass, and precision-engineered movements. Every design goes through rigorous testing to ensure accuracy, durability, and long-lasting beauty.
        </p>
      </Section>

      <Collections />
      <WhyChooseUs />

      <Section id="promise" eyebrow="Our Promise" title="A companion for life">
        <p>
          We stand behind every timepiece with warranty protection and quality assurance, ensuring your watch remains as reliable as the day you received it.
        </p>
      </Section>

      <Section id="cta" eyebrow="Discover Your Time" title="Find the watch that reflects your style">
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#collections"
            className="group inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-medium text-black shadow-lg shadow-amber-400/20 transition hover:brightness-95"
          >
            Browse Collection
          </a>
          <a
            href="/test"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
          >
            System Test
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App
