import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartContext from "../../context/CartContext";

import "./CartPage.css";


const parsePrice = (price) => {
  const cleaned = String(price)
    .replace(/Rs\.?/gi, "")   
    .replace(/,/g, "")        
    .trim();
  return parseFloat(cleaned) || 0;
};

function CartPage() {
  // Read the cart from the global context (no duplicate logic here).
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  // Subtotal = sum of (price * quantity) for every item in the cart.
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <main className="cart-page">
        {cartItems.length === 0 ? (
          // ---------- EMPTY CART ----------
          <div className="cart-empty">
            <h1 className="cart-empty-title">Your cart is empty</h1>
            <p className="cart-empty-text">
              Looks like you haven't added anything yet.
            </p>
            <Link className="theme-btn" to="/">
              BACK TO SHOP
            </Link>
          </div>
        ) : (
          <>
            <h1 className="cart-page-title">Shopping Cart</h1>

            <div className="cart-layout">
              {/* LEFT: the list of cart items */}
              <section className="cart-items-section" aria-label="Cart items">
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    // Key uses id + size so the same product in two
                    // different sizes stays as two separate lines.
                    <li className="cart-item" key={`${item.id}-${item.size}`}>
                      <img
                        className="cart-item-img"
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-size">Size: {item.size}</p>
                        <p className="cart-item-price">{item.price}</p>
                      </div>

                      {/* Quantity + / - controls */}
                      <div className="cart-item-qty">
                        <button
                          className="cart-qty-btn"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="cart-qty-value">{item.quantity}</span>
                        <button
                          className="cart-qty-btn"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      {/* Line total + remove button */}
                      <div className="cart-item-right">
                        <p className="cart-item-total">
                          Rs.{" "}
                          {(parsePrice(item.price) * item.quantity).toLocaleString()}
                        </p>
                        <button
                          className="cart-remove-btn"
                          onClick={() => removeFromCart(item.id, item.size)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* RIGHT: order summary (sticky on desktop) */}
              <aside className="cart-summary">
                <h2 className="cart-summary-title">Order Summary</h2>
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="cart-summary-row cart-summary-total">
                  <span>Total</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <Link className="cart-checkout-btn" to="/checkout">
                  PROCEED TO CHECKOUT
                </Link>
                <Link className="cart-back-btn" to="/">
                  Continue shopping
                </Link>
              </aside>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
