
import React from "react";

function Cart({ cartItems = [] }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      <p>Cart total: {cartItems.length}</p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
