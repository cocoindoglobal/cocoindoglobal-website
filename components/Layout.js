import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-[#fdfaf5] p-4 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <img src="/COCO_INDO_GLOBAL_LOGO.png" alt="Coco Indo Global Logo" className="h-10" />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="/about" className="hover:text-green-600">About Us</Link>
            <Link href="/products" className="hover:text-green-600">Products</Link>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
            <Link href="/contact" className="hover:text-green-600">Visit Us</Link>
          </div>

          {/* Right: Reserved space (for button later) */}
          <div className="hidden md:block w-32"></div>
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
