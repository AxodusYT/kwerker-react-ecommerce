import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductFilters from "../components/ProductFilters";
import ProductToolbar from "../components/ProductToolbar";
import ProductCard from "../components/ProductCard";
import { useContext, useMemo, useState } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  const { products } = useContext(MyStore);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(700);
  const [minRating, setMinRating] = useState(0);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  console.log(sortBy);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  ///// filtering products to be shown

  const filteredProducts = products.filter((product) => {
    // check catogries selected

    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;

    // check price range

    const priceMatch = product.price <= maxPrice;

    /// check rating

    const ratingCheck = product.rating.rate >= minRating;

    ////check search

    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && priceMatch && ratingCheck && searchMatch;
  });

  /////// filtering f irst then sorting based on "sorted by" then product maping

  const sortedProducts = [...filteredProducts]; //// true copying  of filterd array
  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating-low") {
    sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  if (sortBy === "rating-high") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  ////

  const clearFilters = () => {
    setSelectedCategory("all");
    setMaxPrice(700);
    setMinRating(0);
    setSearch("");
    setSortBy("default");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Shop Header */}

        <div className="mb-8">
          <p className="text-sm font-semibold text-violet-600 mb-1">
            Our collection
          </p>

          <h2 className="text-3xl font-bold text-gray-900">All Products</h2>

          <p className="text-gray-500 mt-2">Browse our complete collection.</p>
        </div>

        {/* Toolbar */}

        <ProductToolbar
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Products + Filters */}

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          {/* Filters */}

          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minRating={minRating}
            setMinRating={setMinRating}
            clearFilters={clearFilters}
          />

          {/* Products */}

          <section>
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <p className="text-gray-500">No products available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
