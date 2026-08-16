import { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

import Navbar from "../components/Navbar";
import ProductToolbar from "../components/ProductToolbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  const { products } = useContext(MyStore);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Sorting

  const sortedProducts = [...filteredProducts]; //// creating true copy

  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating-high") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  if (sortBy === "rating-low") {
    sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Header */}

        <div className="mb-10">
          <p className="text-sm font-semibold text-violet-600 mb-2">
            Kwerker Shop
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Shop All Products
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Explore our collection of products and find something you'll love.
          </p>
        </div>

        {/* Toolbar */}

        <ProductToolbar
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Products */}

        <section>
          {sortedProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <p className="text-gray-500">No products available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
