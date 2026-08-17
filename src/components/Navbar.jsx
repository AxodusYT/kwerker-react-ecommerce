import { useContext, useState } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/MyContext";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const { cart, currentUser, logoutUser } = useContext(MyStore);

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logoutUser();
    closeMenu();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= MAIN NAVBAR ================= */}

        <div className="h-18 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl sm:text-2xl font-black tracking-tight text-gray-900"
          >
            K<span className="text-violet-600">werker</span>
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

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


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-1 sm:gap-2">

            {/* Search */}

            <Link
              to="/products"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
            >
              <Search className="h-5 w-5" />
            </Link>


            {/* Wishlist */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
            >
              <Heart className="h-5 w-5" />
            </Link>


            {/* Cart */}

            <Link
              to="/cart"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-violet-600 transition"
            >
              <ShoppingCart className="h-5 w-5" />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>


            {/* Divider */}

            <div className="mx-2 hidden md:block h-7 w-px bg-gray-200" />


            {/* ================= DESKTOP AUTH ================= */}

            {currentUser ? (
              <div className="hidden md:flex items-center gap-3">

                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
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
              <div className="hidden md:flex items-center gap-2">

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


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 hover:text-violet-600 transition"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">

            {/* User */}

            {currentUser ? (
              <div className="px-4 py-4 mb-3 rounded-2xl bg-violet-50">

                <p className="text-xs font-medium text-violet-600">
                  Signed in as
                </p>

                <p className="text-sm font-bold text-gray-900 mt-1">
                  {currentUser.name}
                </p>

              </div>
            ) : (
              <div className="px-4 py-4 mb-3 rounded-2xl bg-gray-50">

                <p className="text-sm font-semibold text-gray-900">
                  Welcome to Kwerker
                </p>

                <div className="flex gap-2 mt-3">

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex-1 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="flex-1 h-10 flex items-center justify-center rounded-xl bg-violet-600 text-white text-sm font-semibold"
                  >
                    Sign Up
                  </Link>

                </div>

              </div>
            )}


            {/* Navigation */}

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition"
              >
                Shop
              </Link>

              <Link
                to="/categories"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition"
              >
                Categories
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition"
              >
                About
              </Link>

              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition sm:hidden"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-violet-600 transition"
              >
                Cart
              </Link>

            </div>


            {/* Logout */}

            {currentUser && (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full mt-3 px-4 py-3 rounded-xl text-left text-sm font-semibold text-red-500 hover:bg-red-50 transition"
              >
                Logout
              </button>
            )}

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;