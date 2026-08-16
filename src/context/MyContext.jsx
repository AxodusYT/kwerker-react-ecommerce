import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  ////// making state fgor saved users  (can be multiple users saved)
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("kwerker-users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("kwerker-users", JSON.stringify(users));
  }, [users]);

  ////// making sate for currently logged in user ( can  only be 1 at a time)
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("kwerker-current-user");

    return savedUser ? JSON.parse(savedUser) : null; /// used null cause we dont want array and only 1 user object
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("kwerker-current-user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("kwerker-current-user"); //// remove user if logged out
    }
  }, [currentUser]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //// cart in Ls
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("kwerker-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("kwerker-cart", JSON.stringify(cart));
  }, [cart]);

  /// getting wishlist item from LS
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("kwerker-wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("kwerker-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const getProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  ///////// functions //////

  ////// func to registerUser

  const registerUser = (userData) => {
    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
    };

    setUsers([...users, newUser]);

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  ////// func to login user

  const loginUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid Email or Password",
      };
    }
    setCurrentUser(user);

    return {
      success: true,
      message: "Logged in successfully.",
    };
  };

  //// func to logout user

  const logoutUser = () => {
    setCurrentUser(null);
  };

  /////////  /////// add to cart

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  ///////////  cart functions
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <MyStore.Provider
      value={{
        

        products,
        loading,
        error,

        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,

        wishlist,
        setWishlist,

        users,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
