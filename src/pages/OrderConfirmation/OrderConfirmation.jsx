import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./OrderConfirmation.css";

const parsePrice = (price) => {
  const cleaned = String(price)
    .replace(/Rs\.?/gi, "") 
    .replace(/,/g, "")        
    .trim();
  return parseFloat(cleaned) || 0;
};
function OrderConfirmation() {

  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate("/", { replace: true });
    }
  }, [orderData, navigate]);

  // While we are redirecting, render nothing.
  if (!orderData) return null;

  const { orderId, items, shipping, total } = orderData;

  return (
    <>
      <Navbar />
      <main className="order-confirmation-page">
        {/* Success message */}
        <div className="order-success">
          <div className="order-success-icon" aria-hidden="true">
            {/* Simple SVG checkmark inside a circle */}
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="order-success-title">
            Thank you! Your order has been placed
          </h1>
          <p className="order-number">
            Order #{orderId}
          </p>
        </div>

        <div className="order-confirmation-layout">
          {/* LEFT: ordered items + shipping address */}
          <section className="order-details">
            <div className="order-section">
              <h2 className="order-section-title">Ordered Items</h2>
              <ul className="order-items">
                {items.map((item) => (
                  <li className="order-item" key={`${item.id}-${item.size}`}>
                    <img
                      className="order-item-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="order-item-info">
                      <p className="order-item-name">{item.name}</p>
                      <p className="order-item-size">Size: {item.size}</p>
                      <p className="order-item-meta">
                        Qty: {item.quantity} × {item.price}
                      </p>
                    </div>
                    <p className="order-item-total">
                      Rs.{" "}
                      {(parsePrice(item.price) * item.quantity).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-section">
              <h2 className="order-section-title">Shipping Address</h2>
              <address className="order-address">
                <p>{shipping.name}</p>
                <p>{shipping.address}</p>
                <p>
                  {shipping.city}
                  {shipping.postalCode ? `, ${shipping.postalCode}` : ""}
                </p>
                <p>{shipping.country}</p>
              </address>
            </div>
          </section>

          {/* RIGHT: total summary (sticky on desktop) */}
          <aside className="order-summary">
            <h2 className="order-section-title">Order Summary</h2>
            <div className="order-summary-row">
              <span>Items</span>
              <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="order-summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="order-summary-row order-summary-total">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>

            <Link className="order-continue-btn theme-btn" to="/">
              CONTINUE SHOPPING
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OrderConfirmation;
