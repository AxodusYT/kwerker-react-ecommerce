import { useContext } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyContext";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(MyStore);
  console.log("CART:", cart);

  ///// sub total and othe calculations

  const subTotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  const shipping = subTotal > 200 ? 0 : 15;

  const tax = subTotal * 0.18;

  const total = subTotal + tax + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Header */}

        <div className="mb-8">
          <p className="text-sm font-semibold text-violet-600 mb-1">
            Your Shopping Bag
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your items before placing your order.
          </p>
        </div>

        {/* Cart Layout */}
        {cart.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 sm:p-20 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-100 flex items-center justify-center text-3xl text-violet-600">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center h-12 px-6 mt-6 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
            {/* ================= CART ITEMS ================= */}

            <section className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 p-5"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Product Image */}

                    <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center p-4 shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Information */}

                    <div className="flex-1">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-2">
                            {product.category}
                          </p>

                          <h2 className="font-semibold text-gray-900 text-lg leading-6">
                            {product.title}
                          </h2>
                        </div>

                        {/* Remove */}

                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Price */}

                      <p className="text-xl font-bold text-gray-900 mt-4">
                        ${product.price}
                      </p>

                      {/* Quantity */}

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(product.id)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
                          >
                            −
                          </button>

                          <span className="w-10 text-center text-sm font-semibold">
                            {product.quantity || 1}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(product.id)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-sm text-gray-500">
                          ${(product.price * (product.quantity || 1)).toFixed(2)} total
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition"
              >
                ← Continue Shopping
              </Link>
            </section>

            {/* ================= SUMMARY ================= */}

            <aside className="bg-white rounded-2xl border border-gray-100 p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-4 mt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-semibold text-gray-900">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  {shipping > 0 ? (
                    <span className="font-semibold text-gray-900">
                      ${shipping}
                    </span>
                  ) : (
                    <span className="font-semibold text-gray-900">Free</span>
                  )}
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax (18%)</span>

                  <span className="font-semibold text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-6" />

              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>

                <span className="text-2xl font-bold text-violet-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="w-full h-12 mt-6 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Secure checkout · Easy returns
              </p>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
