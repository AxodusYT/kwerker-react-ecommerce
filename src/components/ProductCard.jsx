import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product }) => {
    const navigate = useNavigate()


  const { wishlist, setWishlist ,addToCart } = useContext(MyStore);

  ///// check if its wishleiste

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  ///// toggleing wishlisted item if added remove if not add it in the list

  const wishlistToggle = () => {
    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.id !== product.id)); //// removes from list if already there
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition duration-300">
      {/* Clickable Product Area */}

      <Link to={`/products/${product.id}`}>
        {/* Image */}

        <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain group-hover:scale-105 transition duration-500"
          />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              wishlistToggle();
            }}
            className={`absolute top-4 right-4 w-9 h-9 rounded-full text-2xl bg-white shadow-sm flex items-center justify-center transition ${
              isWishlisted ? "text-red-500" : "text-gray-500 hover:text-red-500"
            }`}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>

        {/* Product Info */}

        <div className="p-5">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-2">
            {product.category}
          </p>

          <h3 className="hover:text-violet-800 font-semibold text-gray-900 leading-6 line-clamp-2 min-h-12">
            {product.title}
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-500 text-sm">
              ★ {product.rating?.rate}
            </span>

            <span className="text-xs text-gray-400">
              ({product.rating?.count})
            </span>
          </div>
        </div>
      </Link>

      {/* Price + Cart */}

      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>

        <button
          type="button"
          onClick={() => {
            addToCart(product);
          navigate("/cart")}}
          className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
