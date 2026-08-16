import { useContext, useState } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const { cart, currentUser, logoutUser } = useContext(MyStore);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  ///// for mobile screen hamburger

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-18 flex items-center justify-between">
          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-gray-900"
          >
            K<span className="text-violet-600">werker</span>
          </Link>

          {/* Main Navigation */}

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-900 hover:text-violet-600 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition"
            >
              Shop
            </Link>

            <Link
              to="/categories"
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition"
            >
              Categories
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition"
            >
              About
            </Link>
          </div>

          {/* Right Side */}

          <div className="flex items-center gap-2">
            {/* Search */}
            <Link
              to="/products"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                />
              </svg>
            </Link>
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
              aria-label="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
            </Link>
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.4 6m0 0h14.55c.764 0 1.33.746 1.087 1.48l-1.5 5.25A1.5 1.5 0 0 1 18.094 13.8H8.01a1.5 1.5 0 0 1-1.447-1.106L5.4 6Zm2.61 11.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </Link>
            {/* Divider */}
            <div className="mx-2 hidden sm:block h-7 w-px bg-gray-200" />
            {/* Login */}
            {currentUser ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">
                  Hi, {currentUser.name}
                </span>

                <button
                  type="button"
                  onClick={logoutUser}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-violet-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                Shop
              </Link>

              <Link
                to="/categories"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                Categories
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                About
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
