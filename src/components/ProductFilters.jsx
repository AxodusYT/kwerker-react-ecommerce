const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setMaxPrice,
  maxPrice,
  minRating,
  setMinRating,
  clearFilters,
}) => {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-5 h-fit">
      {/* Header */}

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>

        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-semibold text-violet-600 hover:text-violet-700"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}

      <div className="pb-6 border-b border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>

        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("all")}
            type="button"
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition ${
              selectedCategory === "all"
                ? "bg-violet-100 text-violet-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm capitalize transition ${
                selectedCategory === category
                  ? "bg-violet-100 text-violet-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}

      <div className="py-6 border-b border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">
          Price Range
        </h4>

        <input
          type="range"
          min="0"
          max="700"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-violet-600"
        />

        <div className="flex items-center justify-between mt-3">
          <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600">
            $0
          </div>

          <span className="text-gray-300">—</span>

          <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600">
            ${maxPrice}
          </div>
        </div>
      </div>

      {/* Rating */}

      <div className="py-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Rating</h4>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
              className="accent-violet-600"
            />

            <span className="text-sm text-gray-600">All ratings</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="rating"
              className="accent-violet-600"
              checked={minRating === 5}
              onChange={() => setMinRating(5)}
            />

            <span className="text-yellow-500">★★★★★</span>

            <span className="text-xs text-gray-500">5 & up</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="rating"
              className="accent-violet-600"
              checked={minRating === 4}
              onChange={() => setMinRating(4)}
            />

            <span className="text-yellow-500">★★★★☆</span>

            <span className="text-xs text-gray-500">4 & up</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="rating"
              className="accent-violet-600"
              checked={minRating === 3}
              onChange={() => setMinRating(3)}
            />

            <span className="text-yellow-500">★★★☆☆</span>

            <span className="text-xs text-gray-500">3 & up</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
