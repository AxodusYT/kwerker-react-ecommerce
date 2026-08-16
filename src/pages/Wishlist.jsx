import { useContext } from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { MyStore } from "../context/MyContext";
import Footer from "../components/Footer";

const Wishlist = () => {
  const { wishlist } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Header */}

        <div className="mb-10">
          <p className="text-sm font-semibold text-violet-600 mb-2">
            Saved for later
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Your Wishlist
          </h1>

          <p className="text-gray-500 mt-3">Keep track of products you love.</p>
        </div>

        {/* Wishlist */}

        {wishlist.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 sm:p-20 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-100 flex items-center justify-center text-3xl text-violet-600">
              ♡
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Save products you love and they'll appear here.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center h-12 px-6 mt-6 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
