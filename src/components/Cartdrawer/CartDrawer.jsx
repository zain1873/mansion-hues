import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";
import CartContext from "../../context/CartContext";


const parsePrice = (price) => {
  const cleaned = String(price)
    .replace(/Rs\.?/gi, "")   
    .replace(/,/g, "")       
  return parseFloat(cleaned) || 0;
};

function CartDrawer() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext);

  const itemCount = cartItems.length;

  const navigate = useNavigate();

  const closeCart = () => setIsCartOpen(false);

  const goToCart = () => {
    closeCart();
    navigate("/cart");
  };

  const goToCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <>
      <div
        className={`cart-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${isCartOpen ? "open" : ""}`}
        aria-hidden={!isCartOpen}
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">YOUR CART ({itemCount})</h2>
          <button
            className="cart-drawer-close"
            aria-label="Close cart"
            onClick={closeCart}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {itemCount === 0 ? (
            // Empty cart state (matches screenshot)
            <div className="cart-drawer-empty">
              <svg
                className="cart-drawer-bag-icon"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
              >
                <path
                  d="M6 8h12l-1 12H7L6 8z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M9 8V6a3 3 0 0 1 6 0v2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
              <p className="cart-drawer-empty-text">
                You don't have any items in your cart.
              </p>
              <button
                className="cart-drawer-continue-btn theme-btn"
                onClick={closeCart}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            // Cart items state
            <>
              <ul className="cart-drawer-items">
                {cartItems.map((item) => (
                  // The key uses id + size so the same product in two
                  // different sizes shows up as two separate lines.
                  <li
                    className="cart-drawer-item"
                    key={`${item.id}-${item.size}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-drawer-item-img"
                    />
                    <div className="cart-drawer-item-info">
                      <p className="cart-drawer-item-name">{item.name}</p>
                      <p className="cart-drawer-item-size">Size: {item.size}</p>

                      {/* Quantity + / - controls */}
                      <div className="cart-drawer-qty-controls">
                        <button
                          className="cart-drawer-qty-btn"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="cart-drawer-qty-value">
                          {item.quantity}
                        </span>
                        <button
                          className="cart-drawer-qty-btn"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-drawer-item-right">
                      <p className="cart-drawer-item-price">{item.price}</p>
                      {/* Remove this line from the cart */}
                      <button
                        className="cart-drawer-remove-btn"
                        aria-label="Remove item"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-drawer-footer">
                <div className="cart-drawer-subtotal">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                {/* VIEW CART and CHECKOUT navigate to their pages. */}
                <button
                  className="cart-drawer-checkout-btn"
                  onClick={goToCheckout}
                >
                  CHECKOUT
                </button>
                <button
                  className="cart-drawer-view-cart-btn"
                  onClick={goToCart}
                >
                  VIEW CART
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;