# Kwerker --- React E-Commerce Store

Kwerker is a modern, responsive e-commerce frontend built with
**React**, **React Router**, **Tailwind CSS**, **Axios**, and **React
Hook Form**.

The project uses the **Fake Store API** for product data and
demonstrates a complete client-side shopping experience including
product browsing, search, filtering, sorting, product details, cart
management, wishlist functionality, authentication, protected routes,
and persistent browser storage.

------------------------------------------------------------------------

## 🌐 Links

  Resource       Link
  -------------- ---------------------------------------------------------
  🚀 Live Demo   **https://kwerker-react-ecommerce.vercel.app/**
  💻 GitHub      **https://github.com/AxodusYT/kwerker-react-ecommerce**
  🔗 LinkedIn    **https://www.linkedin.com/in/axo-vishal/**

> Replace `YOUR_LIVE_VERCEL_URL` with the Vercel deployment URL and
> `YOUR_LINKEDIN_URL` with your LinkedIn profile URL after deployment.

------------------------------------------------------------------------

## ✨ Features

### 🛍️ Product System

-   Fetches products dynamically from the Fake Store API
-   Product listing
-   Product details page
-   Product categories
-   Product search
-   Product sorting
-   Product filtering
-   Price filtering
-   Rating filtering
-   Product ratings and review counts
-   Responsive product cards

### 🛒 Shopping Cart

-   Add products to cart
-   Add products from Product Card
-   Add products from Product Details
-   Increase quantity
-   Decrease quantity
-   Automatically remove item when quantity reaches `0`
-   Remove products manually
-   Persistent cart using localStorage
-   Dynamic item totals
-   Dynamic subtotal
-   Tax calculation
-   Grand total
-   Empty cart state
-   Navbar cart quantity indicator

### ❤️ Wishlist

-   Add products to wishlist
-   Remove products from wishlist
-   Wishlist from Product Card
-   Wishlist from Product Details
-   Persistent wishlist using localStorage
-   Empty wishlist state

### 🔐 Authentication

Kwerker includes a frontend authentication system designed for this
project.

Users can:

-   Register multiple accounts
-   Prevent duplicate email registration
-   Login with registered credentials
-   Logout
-   Stay logged in after refreshing the browser
-   Access protected pages only after authentication
-   Prevent logged-in users from accessing Login/Register pages

Authentication state is stored in localStorage.

> **Security note:** This is a frontend/demo authentication system.
> Passwords stored in browser localStorage are not secure and should not
> be used for production authentication.

### 🛡️ Protected Routes

Unauthenticated users are redirected to `/login`.

Protected pages include:

``` text
/
/products
/products/:id
/categories
/about
/cart
/wishlist
```

Authentication pages remain available when logged out:

``` text
/login
/register
```

### 📱 Responsive Design

The UI is designed for:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

The navbar includes a responsive mobile hamburger menu.

------------------------------------------------------------------------

## 🧰 Tech Stack

### Frontend

-   React
-   JavaScript
-   React Router
-   Tailwind CSS
-   React Hook Form
-   Axios

### State Management

-   React Context API
-   React Hooks
-   localStorage

### API

-   Fake Store API

### Tooling

-   Vite
-   ESLint
-   Git
-   GitHub
-   Vercel

------------------------------------------------------------------------

## 🏗️ Project Architecture

The application uses reusable React components and centralized state
management through React Context.

### Global Context

`src/context/MyContext.jsx` manages:

``` text
Products
Cart
Wishlist
Registered Users
Current User
Authentication
```

### Cart Functions

``` text
addToCart()
increaseQuantity()
decreaseQuantity()
removeFromCart()
```

### Authentication Functions

``` text
registerUser()
loginUser()
logoutUser()
```

------------------------------------------------------------------------

## 🔄 Data Flow

### Products

``` text
Fake Store API
      ↓
    Axios
      ↓
 MyContext.jsx
      ↓
  products[]
      ↓
React Components
      ↓
Product Cards / Product Details
```

### Cart

``` text
Product
   ↓
addToCart()
   ↓
MyContext
   ↓
cart[]
   ↓
localStorage
```

### Authentication

``` text
Register
   ↓
registerUser()
   ↓
users[]
   ↓
"kwerker-users"


Login
   ↓
loginUser()
   ↓
currentUser
   ↓
"kwerker-current-user"
```

------------------------------------------------------------------------

## 💾 LocalStorage

Kwerker uses localStorage to persist client-side application data.

  Key                      Purpose
  ------------------------ ------------------------------------------
  `kwerker-cart`           Stores cart products and quantities
  `kwerker-wishlist`       Stores wishlist products
  `kwerker-users`          Stores registered demo users
  `kwerker-current-user`   Stores the currently logged-in demo user

------------------------------------------------------------------------

## 📂 Project Structure

``` text
kwerker-react-ecommerce/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilters.jsx
│   │   └── ProductToolbar.jsx
│   │
│   ├── context/
│   │   └── MyContext.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Categories.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Products.jsx
│   │   ├── Register.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── AuthRedirect.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/AxodusYT/kwerker-react-ecommerce.git
```

### 2. Navigate into the project

``` bash
cd kwerker-react-ecommerce
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🏗️ Production Build

Create a production build:

``` bash
npm run build
```

Preview the production build locally:

``` bash
npm run preview
```

Run ESLint:

``` bash
npm run lint
```

------------------------------------------------------------------------

## 📜 Available Scripts

  Command             Description
  ------------------- --------------------------
  `npm run dev`       Start development server
  `npm run build`     Create production build
  `npm run preview`   Preview production build
  `npm run lint`      Run ESLint

------------------------------------------------------------------------

## 🔌 API

Kwerker uses the Fake Store API.

Products endpoint:

``` text
https://fakestoreapi.com/products
```

Individual product endpoint:

``` text
https://fakestoreapi.com/products/:id
```

The API is used for demonstration and learning purposes.

------------------------------------------------------------------------

## 🧪 Testing the Main Features

### Authentication

1.  Open Register.
2.  Create an account.
3.  Login using the registered email and password.
4.  Refresh the page.
5.  Confirm that the user remains logged in.
6.  Try opening `/login` or `/register`.
7.  Confirm that authenticated users are redirected.
8.  Logout.
9.  Confirm that protected pages redirect to Login.

### Cart

1.  Open Products.
2.  Add a product.
3.  Open Cart.
4.  Increase the quantity.
5.  Decrease the quantity.
6.  Continue decreasing until quantity reaches `0`.
7.  Confirm the product is removed.
8.  Refresh the page.
9.  Confirm cart persistence.

### Wishlist

1.  Open a product.
2.  Add it to Wishlist.
3.  Open Wishlist.
4.  Refresh the browser.
5.  Confirm the wishlist remains.

------------------------------------------------------------------------

## 🎯 Learning Objectives

This project was created to practice real-world React development
concepts:

-   Component-based architecture
-   Reusable components
-   React Hooks
-   `useState`
-   `useEffect`
-   `useContext`
-   React Context API
-   React Router
-   Dynamic routes
-   Protected routes
-   Conditional rendering
-   Axios API integration
-   React Hook Form
-   Form validation
-   Client-side state management
-   localStorage
-   Responsive design
-   Tailwind CSS
-   Git and GitHub
-   Vercel deployment

------------------------------------------------------------------------

## 🔮 Future Improvements

Possible future improvements include:

-   Real backend authentication
-   Secure password hashing
-   Database integration
-   User profile
-   Address management
-   Order history
-   Checkout system
-   Payment gateway
-   Product reviews
-   Pagination
-   Advanced product filtering
-   Toast notifications
-   Loading skeletons
-   Better API error handling
-   Admin dashboard
-   Product management
-   Order management

------------------------------------------------------------------------

## ⚠️ Disclaimer

Kwerker is a learning and portfolio project.

The Fake Store API is used for demonstration purposes.

The authentication implementation stores demo user credentials in
browser localStorage and is **not suitable for production
applications**.

A production application should use secure server-side authentication,
password hashing, database storage, HTTPS, secure sessions/tokens, and
proper authorization.

------------------------------------------------------------------------

## 👨‍💻 Author

### Vishal Sharma

**GitHub:**\
https://github.com/AxodusYT

**LinkedIn:**\
**https://www.linkedin.com/in/axo-vishal/**

------------------------------------------------------------------------

## 📄 License

This project was created for learning and portfolio purposes.
