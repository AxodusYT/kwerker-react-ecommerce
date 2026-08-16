import { Link } from "react-router";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}

        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}

          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-black tracking-tight text-gray-900"
            >
              K<span className="text-violet-600">werker</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
              Discover products you'll love with a simple, modern, and enjoyable
              shopping experience.
            </p>

            {/* Social Links */}

            <div className="flex items-center gap-3 mt-7">
              {/* GitHub */}

              <a
                href="https://github.com/AxodusYT/kwerker-react-ecommerce"
                target="_blank"
                rel="noreferrer"
                aria-label="Kwerker GitHub Repository"
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/axo-vishal/"
                target="_blank"
                rel="noreferrer"
                aria-label="Vishal Sharma LinkedIn"
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}

          <div>
            <h3 className="text-sm font-bold text-gray-900">Shop</h3>

            <div className="flex flex-col gap-3 mt-5">
              <Link
                to="/products"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                All Products
              </Link>

              <Link
                to="/categories"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                Categories
              </Link>

              <Link
                to="/wishlist"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Kwerker */}

          <div>
            <h3 className="text-sm font-bold text-gray-900">Kwerker</h3>

            <div className="flex flex-col gap-3 mt-5">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
              >
                Explore Store
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}

          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2026 Kwerker. All rights reserved.
          </p>

          {/* Developer */}

          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <span>Built with</span>

            <Heart className="w-4 h-4 text-violet-600 fill-violet-600" />

            <span>by</span>

            <a
              href="https://www.linkedin.com/in/axo-vishal/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gray-600 hover:text-violet-600 transition-colors"
            >
              Vishal Sharma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
