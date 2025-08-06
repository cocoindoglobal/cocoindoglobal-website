import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-100 p-4 shadow">
        <div className="max-w-6xl mx-auto flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/products" className="hover:text-green-600">Products</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">{children}</main>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Coco Indo Global
      </footer>
    </div>
  );
}
