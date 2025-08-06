import Layout from '../components/Layout';

export default function OrderProcess() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">How to Order</h1>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Send Your Inquiry:</strong> Contact us with product specifications and destination port.
          </li>
          <li>
            <strong>Quotation:</strong> We provide FOB/CIF pricing and estimated lead time.
          </li>
          <li>
            <strong>Sample Approval:</strong> Optional sample shipment for testing and quality check.
          </li>
          <li>
            <strong>Place Order:</strong> Confirm with 30% deposit; balance paid before shipment.
          </li>
          <li>
            <strong>Production & Delivery:</strong> Production starts immediately. Export via Jakarta/Surabaya port.
          </li>
        </ol>
      </div>
    </Layout>
  );
}
