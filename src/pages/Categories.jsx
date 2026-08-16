import { useContext } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/MyContext";
import Navbar from "../components/Navbar";

const Categories = () => {
  const { products } = useContext(MyStore);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const categoryInfo = {
    electronics: {
      title: "Electronics",
      description:
        "Discover useful electronics and everyday tech products.",
      icon: "⚡",
    },

    jewelery: {
      title: "Jewellery",
      description:
        "Explore elegant jewellery and accessories.",
      icon: "💎",
    },

    "men's clothing": {
      title: "Men's Clothing",
      description:
        "Find stylish clothing and essentials for men.",
      icon: "👔",
    },

    "women's clothing": {
      title: "Women's Clothing",
      description:
        "Explore fashionable clothing and essentials for women.",
      icon: "👗",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        {/* Header */}

        <div className="max-w-2xl mb-12">

          <p className="text-sm font-semibold text-violet-600 mb-2">
            Explore Kwerker
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Shop by Category
          </h1>

          <p className="text-gray-500 mt-4 text-lg leading-7">
            Browse our collection by category and discover
            products that match what you're looking for.
          </p>

        </div>


        {/* Categories */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => {

            const info = categoryInfo[category] || {
              title: category,
              description:
                "Explore products from this category.",
              icon: "🛍️",
            };

            return (
              <Link
                key={category}
                to="/products"
                className="group bg-white rounded-3xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 transition duration-300"
              >

                {/* Icon */}

                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl mb-6 group-hover:bg-violet-600 transition">
                  <span className="group-hover:scale-110 transition">
                    {info.icon}
                  </span>
                </div>


                {/* Content */}

                <h2 className="text-xl font-bold text-gray-900 capitalize">
                  {info.title}
                </h2>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {info.description}
                </p>


                {/* Link */}

                <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-violet-600">
                  Explore category
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>

              </Link>
            );
          })}

        </div>


        {/* Bottom CTA */}

        <div className="mt-16 rounded-3xl bg-violet-600 p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>

            <p className="text-violet-200 text-sm font-semibold mb-2">
              Can't decide?
            </p>

            <h2 className="text-3xl font-bold">
              Explore everything.
            </h2>

            <p className="text-violet-100 mt-2">
              Browse the complete Kwerker collection.
            </p>

          </div>

          <Link
            to="/products"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50 transition"
          >
            View All Products
          </Link>

        </div>

      </main>

    </div>
  );
};

export default Categories;