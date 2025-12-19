import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Fashy<span className="text-indigo-600">Store</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Your one-stop shop for premium products, latest trends,
              and unbeatable prices.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">All Products</li>
              <li className="hover:text-indigo-600 cursor-pointer">New Arrivals</li>
              <li className="hover:text-indigo-600 cursor-pointer">Best Sellers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Offers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer">About Us</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
              <li className="hover:text-indigo-600 cursor-pointer">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-500">
              <Facebook className="h-5 w-5 hover:text-indigo-600 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-indigo-600 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-indigo-600 cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FashyStore. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:text-indigo-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-indigo-600 cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
