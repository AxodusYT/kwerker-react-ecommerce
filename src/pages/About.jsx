import { Link } from "react-router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">
              About Kwerker
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight mt-6">
              Shopping made{" "}
              <span className="text-violet-600">simple.</span>
            </h1>

            <p className="text-lg text-gray-500 leading-8 mt-6 max-w-2xl">
              Kwerker is a modern e-commerce experience built around
              simplicity, discovery, and making online shopping enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        {/* Our Story */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}

          <div className="bg-violet-600 rounded-3xl min-h-100 flex items-center justify-center p-10">
            <div className="text-center text-white">
              <div className="text-7xl font-black">K</div>

              <p className="text-violet-200 mt-3 font-medium">
                Kwerker
              </p>
            </div>
          </div>

          {/* Story */}

          <div>
            <p className="text-sm font-semibold text-violet-600 mb-2">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Built for a better shopping experience.
            </h2>

            <p className="text-gray-500 leading-7 mt-5">
              We believe online shopping shouldn't feel complicated.
              Kwerker brings products, categories, discovery and shopping
              into one clean and easy-to-use experience.
            </p>

            <p className="text-gray-500 leading-7 mt-4">
              From discovering a new product to adding it to your cart,
              every part of Kwerker is designed to keep the experience
              simple and intuitive.
            </p>
          </div>
        </section>

        {/* Values */}

        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-violet-600">
              What We Believe
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Simple principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {/* Value 1 */}

            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-xl">
                ✨
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Simplicity
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                Shopping should be straightforward, intuitive and easy
                to understand.
              </p>
            </div>

            {/* Value 2 */}

            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-xl">
                🛍️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Discovery
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                We want every visit to help you discover something
                interesting.
              </p>
            </div>

            {/* Value 3 */}

            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Experience
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                Every interaction should feel smooth, clean and
                enjoyable.
              </p>
            </div>

          </div>
        </section>

        {/* Stats */}

        <section className="mt-20 bg-white rounded-3xl border border-gray-100 p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <p className="text-3xl font-bold text-violet-600">
                20+
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Products
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-violet-600">
                4
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Categories
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-violet-600">
                24/7
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Shopping
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-violet-600">
                100%
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Simple
              </p>
            </div>

          </div>
        </section>

        {/* Developer */}

        <section className="mt-20">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 lg:p-12">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

              {/* Content */}

              <div>
                <p className="text-sm font-semibold text-violet-600 mb-2">
                  About the Developer
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Built by Vishal Sharma.
                </h2>

                <p className="text-gray-500 leading-7 mt-5 max-w-2xl">
                  Kwerker is a frontend e-commerce project created by
                  Vishal Sharma to explore modern React development,
                  API integration, state management, authentication,
                  responsive design, and real-world application
                  architecture.
                </p>

                <p className="text-gray-500 leading-7 mt-4 max-w-2xl">
                  The project is built with React, React Router,
                  Tailwind CSS, Axios, React Hook Form and the Fake
                  Store API.
                </p>

                {/* Social Links */}

                <div className="flex items-center gap-3 mt-7">

                  <a
                    href="https://github.com/AxodusYT/kwerker-react-ecommerce"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/axo-vishal/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    LinkedIn
                  </a>

                </div>
              </div>

              {/* Developer Initial */}

              <div className="flex justify-center lg:justify-end">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-violet-100 flex items-center justify-center">
                  <span className="text-6xl font-black text-violet-600">
                    V
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to explore Kwerker?
          </h2>

          <p className="text-gray-500 mt-3">
            Find your next favorite product.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center justify-center mt-6 h-12 px-7 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
          >
            Start Shopping
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;