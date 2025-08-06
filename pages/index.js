export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Coco Indo Global
        </h1>
        <p className="text-lg mb-6">
          Your trusted supplier for premium coconut charcoal briquettes.
        </p>
        <a
          href="https://wa.me/6281227756413"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full"
        >
          Contact Us via WhatsApp
        </a>
      </section>

      {/* Products Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Main Product</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Type: Hexagonal Coconut Charcoal Briquette</li>
          <li>Moisture: &lt; 8%</li>
          <li>Ash Content: &lt; 3%</li>
          <li>Fixed Carbon: &gt; 75%</li>
          <li>Packaging: PP bag 20kg</li>
          <li>MOQ: 1x20ft Container</li>
          <li>Capacity: 50 tons/month</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Coco Indo Global
      </footer>
    </div>
  );
}
