import React from "react";
import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose, cartItems = [], onContinueShopping }) {
  const itemCount = cartItems.length;

  const handleContinueShopping = () => {
    if (onContinueShopping) onContinueShopping();
    onClose();
  };

  // Calculate subtotal only when items exist
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay / backdrop - clicking it closes the drawer */}
      <div
        className={`cart-drawer-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">YOUR CART ({itemCount})</h2>
          <button
            className="cart-drawer-close"
            aria-label="Close cart"
            onClick={onClose}
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
                className="cart-drawer-continue-btn"
                onClick={handleContinueShopping}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            // Cart items state
            <>
              <ul className="cart-drawer-items">
                {cartItems.map((item) => (
                  <li className="cart-drawer-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-drawer-item-img"
                    />
                    <div className="cart-drawer-item-info">
                      <p className="cart-drawer-item-name">{item.name}</p>
                      <p className="cart-drawer-item-qty">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="cart-drawer-item-price">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="cart-drawer-footer">
                <div className="cart-drawer-subtotal">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <button className="cart-drawer-checkout-btn">
                  CHECKOUT
                </button>
                <button
                  className="cart-drawer-continue-btn cart-drawer-continue-btn-outline"
                  onClick={handleContinueShopping}
                >
                  CONTINUE SHOPPING
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