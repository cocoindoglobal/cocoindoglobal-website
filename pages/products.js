import Layout from '../components/Layout';

export default function Products() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Coconut Charcoal Briquettes</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Type: Hexagonal Coconut Charcoal Briquette</li>
        <li>Moisture: &lt; 8%</li>
        <li>Ash Content: &lt; 3%</li>
        <li>Fixed Carbon: &gt; 75%</li>
        <li>Packaging: PP bag 20kg</li>
        <li>MOQ: 1x20ft Container</li>
        <li>Capacity: 50 tons/month</li>
      </ul>
    </Layout>
  );
}
