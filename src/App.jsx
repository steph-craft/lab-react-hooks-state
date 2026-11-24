
import React, { useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Shopping cart state
  const [cartItems, setCartItems] = useState([]);

  // Category filter state
  const [category, setCategory] = useState("all");

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <header>
        <h1>My Shopping App</h1>

        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>

      <main>
        <ProductList
          category={category}
          setCategory={setCategory}
          addToCart={addToCart}
        />

        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;
