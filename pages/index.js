import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
  Coconut Charcoal for the World’s Finest Hookah & Grilling Experiences
</h1>
<p className="text-lg text-gray-700">
  100% Coconut Shell Briquettes — Made in Indonesia, Trusted by Buyers Worldwide.
</p>
        </section>

        {/* Highlights */}
        <section className="grid md:grid-cols-3 gap-8 py-12 text-center">
          <div>
            <h3 className="font-semibold text-xl mb-2">100% Coconut Shell</h3>
            <p>Pure raw material with no fillers or wood additives.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Long Burn Time</h3>
            <p>Up to 2 hours — perfect heat for shisha or BBQ.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Export Ready</h3>
            <p>SVLK, COA, and shipping from Jakarta or Surabaya.</p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Shisha Briquettes</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ash &lt; 2.5%</li>
                <li>No odor, no spark, no cracks</li>
                <li>Strong heat, hexagon & cube shapes</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">BBQ Briquettes</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ash &lt; 3%</li>
                <li>Good for grill, food-safe</li>
                <li>Custom sizes and bulk packaging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Ac*
