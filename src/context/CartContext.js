// ============================================================
// CartContext.js
// Global shopping cart state using React's Context API.
// Any component can read or change the cart by saying:
//   const { cartItems, addToCart, ... } = useContext(CartContext);
// ============================================================

import React, { createContext, useContext, useState } from "react";

// 1) Create the context. This is just an empty "pipe" — the Provider
//    below is what actually gives it data to share.
const CartContext = createContext();

// ============================================================
// CartProvider — wraps the whole app and holds all cart state.
// ============================================================
export function CartProvider({ children }) {
  // Every item in the cart has this shape:
  //   { id, name, price, image, size, quantity }
  const [cartItems, setCartItems] = useState([]);

  // Whether the cart drawer is currently open or closed.
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ----------------------------------------------------------
  // Add a product to the cart (given the product object, the
  // selected size, and the quantity the user picked).
  // If the same product + size already exists, just add to the
  // existing quantity instead of creating a duplicate line.
  // ----------------------------------------------------------
  const addToCart = (product, size, quantity) => {
    // Look for an existing item with the same product id AND size.
    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (existingIndex !== -1) {
      // Already in the cart -> increase its quantity.
      setCartItems((prev) =>
        prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Not in the cart yet -> add a brand new item.
      setCartItems((prev) => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: size,
          quantity: quantity,
        },
      ]);
    }

    // Open the drawer so the user immediately sees what they added.
    setIsCartOpen(true);
  };

  // ----------------------------------------------------------
  // Change the quantity of one item (identified by id + size).
  // We ignore it if the new quantity would drop below 1.
  // ----------------------------------------------------------
  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // ----------------------------------------------------------
  // Remove one item (identified by id + size) from the cart.
  // ----------------------------------------------------------
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // ----------------------------------------------------------
  // Empty the whole cart. Used after an order is placed.
  // ----------------------------------------------------------
  const clearCart = () => {
    setCartItems([]);
  };

  // ----------------------------------------------------------
  // Total count of all items (sum of every item's quantity).
  // This is what the little badge on the navbar cart icon shows.
  // ----------------------------------------------------------
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Provide all the state + functions to every child component.
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Export the context so components can use it with useContext().
export default CartContext;
