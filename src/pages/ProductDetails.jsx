import { Link, useParams } from "react-router";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const {
    wishlist,
    setWishlist,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(MyStore);

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  ///// check if its wishleiste

  const isWishlisted = wishlist.some((item) => item.id === product?.id);

  ///// toggleing wishlisted item if added remove if not add it in the list

  const wishlistToggle = () => {
    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id)); //// removes from list if already there
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  useEffect(() => {
    let getProducts = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res);
      setProduct(res.data);
    };
    getProducts();
  }, [id]);

  //// fakestore issue solving it slow so sometime it throws error cuse it reads it as null

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="flex items-center justify-center min-h-[70vh]">
          <p className="text-gray-500">Loading product...</p>
        </div>
      </div>
    );
  }

  //// checking if the product item in the cart

  const cartItem = cart.find((item) => item.id === product?.id);

  const quantity = cartItem?.quantity || 0;

  // /////// add to cart

  // const addToCart = () => {
  //   const existingProduct = cart.find((item) => item.id === product.id);

  //   if (existingProduct) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item,
  //       ),
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  // console.log(cart);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-violet-600">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-900">Product Details</span>
        </div>

        {/* Product */}

        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}

            <div className="bg-gray-50 min-h-125 flex items-center justify-center p-10 lg:p-16">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" max-h-105 max-w-full object-contain"
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    wishlistToggle();
                  }}
                  className={`absolute top-0 right-4 w-11 h-11 rounded-full text-4xl bg-white shadow-sm flex items-center justify-center transition ${
                    isWishlisted
                      ? "text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  {isWishlisted ? "♥" : "♡"}
                </button>
              </div>
            </div>

            {/* Details */}

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Category */}

              <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-4">
                {product.category}
              </p>

              {/* Title */}

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}

              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-1 text-yellow-500">
                  <span>★</span>

                  <span className="font-semibold text-gray-900">
                    {product.rating?.rate}
                  </span>
                </div>

                <span className="text-gray-300">|</span>

                <span className="text-sm text-gray-500">
                  {product.rating?.count} Reviews
                </span>
              </div>

              {/* Price */}

              <div className="mt-7">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>

              {/* Divider */}

              <div className="h-px bg-gray-100 my-7" />

              {/* Description */}

              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-2">
                  Description
                </h2>

                <p className="text-gray-500 leading-7">{product.description}</p>
              </div>

              {/* Actions */}

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                {quantity === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    type="button"
                    className="flex-1 h-13  rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition active:scale-95"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex-1 h-13 flex items-center justify-between rounded-xl bg-violet-600 text-white overflow-hidden active:scale-95">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-14 h-full text-xl font-semibold hover:bg-violet-700 transition"
                    >
                      −
                    </button>

                    <span className="font-semibold">{quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
                      className="w-14 h-full text-xl font-semibold hover:bg-violet-700 transition"
                    >
                      +
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    wishlistToggle();
                  }}
                  className={`h-13 px-6 rounded-xl text-4xl bg-white shadow-sm flex items-center justify-center transition active:scale-95 ${
                    isWishlisted
                      ? "text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  {isWishlisted ? "♥" : "♡"}
                </button>
              </div>

              {/* Extra Info */}

              <div className="grid grid-cols-3 gap-4 mt-8 pt-7 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400">Delivery</p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    Fast
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Returns</p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    30 Days
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Payment</p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    Secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
