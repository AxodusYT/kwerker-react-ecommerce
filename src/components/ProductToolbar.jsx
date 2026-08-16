const ProductToolbar = ({ setSearch, search, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Product Count */}

      <p className="text-sm text-gray-500">
        Showing <span className="font-semibold text-gray-900">all</span>{" "}
        products
      </p>

      {/* Search + Sort */}

      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full sm:w-64 h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition"
          />
        </div>

        {/* Sort */}

        <select className="h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 outline-none focus:border-violet-500 cursor-pointer"
        value={sortBy}
        onChange={(e)=>setSortBy(e.target.value)}>
          <option value="default">Sort by</option>

          <option value="price-low">Price: Low to High</option>

          <option value="price-high">Price: High to Low</option>

          <option value="rating-high">Rating: High to Low</option>

          <option value="rating-low">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default ProductToolbar;
