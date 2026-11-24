
import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

function ProductList({ category = "all", setCategory, addToCart }) {
  const filteredProducts =
    category === "all" || category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <section>
      <h2>Available Products</h2>

      <label htmlFor="category">Filter by Category: </label>

      <select
        id="category"
        value={category}
        onChange={(event) => setCategory?.(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
