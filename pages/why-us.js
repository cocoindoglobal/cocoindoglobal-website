import Layout from '../components/Layout';

export default function WhyUs() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Why Choose Coco Indo Global?</h1>

        <p className="mb-4">
          Coco Indo Global is committed to providing premium coconut charcoal briquettes for shisha and BBQ.
          We focus on consistent quality, sustainable materials, and export-readiness.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>✅ Made from 100% pure coconut shells — no wood or additives</li>
          <li>✅ Clean burn with low ash content (&lt; 2.5%)</li>
          <li>✅ Strong heat and long-lasting — up to 2 hours</li>
          <li>✅ No cracks, no sparks, and no odor</li>
          <li>✅ OEM & white-label packaging available</li>
          <li>✅ Monthly capacity of 50+ tons</li>
          <li>✅ Flexible shipping from Indonesian ports</li>
        </ul>
      </div>
    </Layout>
  );
}
