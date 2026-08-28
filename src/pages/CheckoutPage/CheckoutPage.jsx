import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartContext from "../../context/CartContext";

import "./CheckoutPage.css";

const parsePrice = (price) => {
  const cleaned = String(price)
    .replace(/Rs\.?/gi, "")
    .replace(/,/g, "")
    .trim();
  return parseFloat(cleaned) || 0;
};

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // If the cart is empty, send the user back to the cart page
  // (which shows the friendly "your cart is empty" message).
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [cartItems.length, navigate]);

  // ---- Contact form fields ----
  const [contact, setContact] = useState({ email: "", phone: "" });

  // ---- Shipping address fields ----
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // ---- Card details (only used when "Card Payment" is selected) ----
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const shippingCost = 0;
  const total = subtotal + shippingCost;

  // Generic handlers that update a form field using its "name" attribute.
  const handleContactChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const handleShippingChange = (e) =>
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  const handleCardChange = (e) =>
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });

  // No real payment gateway yet — just build a dummy order and move on.
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) Generate a unique-ish order ID using the current timestamp
    //    plus a small random number so it looks like a real order number.
    const orderId = `MH-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // 2) Take a snapshot of the items, shipping info and total so the
    //    confirmation page can show them even after the cart is cleared.
    const orderData = {
      orderId,
      items: cartItems,
      shipping,
      paymentMethod,
      total,
    };

    // 3) Go to the confirmation page, carrying the order data along
    //    via router state.
    navigate("/order-confirmation", { state: orderData });

    // 4) Empty the shopping cart now that the order is placed.
    clearCart();
  };

  if (cartItems.length === 0) return null;

  return (
    <>
      <Navbar />
      <main className="checkout-page">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-layout">
          {/* LEFT: the checkout form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Contact info */}
            <section className="checkout-section">
              <h2>Contact</h2>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleContactChange}
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={contact.phone}
                  onChange={handleContactChange}
                />
              </label>
            </section>

            {/* Shipping address */}
            <section className="checkout-section">
              <h2>Shipping Address</h2>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={shipping.name}
                  onChange={handleShippingChange}
                  required
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  value={shipping.address}
                  onChange={handleShippingChange}
                  required
                />
              </label>
              <div className="checkout-form-row">
                <label>
                  City
                  <input
                    type="text"
                    name="city"
                    value={shipping.city}
                    onChange={handleShippingChange}
                    required
                  />
                </label>
                <label>
                  Postal Code
                  <input
                    type="text"
                    name="postalCode"
                    value={shipping.postalCode}
                    onChange={handleShippingChange}
                  />
                </label>
              </div>
              <label>
                Country
                <input
                  type="text"
                  name="country"
                  value={shipping.country}
                  onChange={handleShippingChange}
                  required
                />
              </label>
            </section>

       {/* Payment method (no real gateway yet) */}
      <section className="checkout-section">
        <h2>Payment Method</h2>

        <label className="checkout-radio">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery
        </label>

        <label className="checkout-radio checkout-radio-card">
          <span className="checkout-radio-left">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit / Debit Card
          </span>

          {/* Card brand badges */}
          <span className="checkout-card-brands">
            <span className="checkout-brand-badge checkout-brand-visa">VISA</span>
            <span className="checkout-brand-badge checkout-brand-mastercard">
              <span className="mc-circle mc-circle-red"></span>
              <span className="mc-circle mc-circle-yellow"></span>
            </span>
            <span className="checkout-brand-badge checkout-brand-amex">AMEX</span>
          </span>
        </label>

  {/* Card details only show when "Card Payment" is selected.
      No real payment gateway yet — these are just placeholder fields. */}
  {paymentMethod === "card" && (
    <div className="checkout-card-details">
      <label className="checkout-card-input-wrapper">
        <input
          type="text"
          name="cardNumber"
          placeholder="Card number"
          value={cardDetails.cardNumber}
          onChange={handleCardChange}
          maxLength={19}
          required
        />
        <svg className="checkout-card-icon" viewBox="0 0 24 24" width="16" height="16">
          <rect x="5" y="10" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </label>

      <div className="checkout-form-row">
        <label className="checkout-card-input-wrapper">
          <input
            type="text"
            name="expiry"
            placeholder="Expiration date (MM / YY)"
            value={cardDetails.expiry}
            onChange={handleCardChange}
            maxLength={5}
            required
          />
        </label>
        <label className="checkout-card-input-wrapper">
          <input
            type="text"
            name="cvv"
            placeholder="Security code"
            value={cardDetails.cvv}
            onChange={handleCardChange}
            maxLength={3}
            required
          />
          <svg className="checkout-card-icon" viewBox="0 0 24 24" width="16" height="16">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <text x="12" y="16" textAnchor="middle" fontSize="11" fill="currentColor">?</text>
          </svg>
        </label>
      </div>

      <label className="checkout-card-input-wrapper">
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on card"
          value={cardDetails.nameOnCard}
          onChange={handleCardChange}
          required
        />
      </label>
    </div>
  )}
</section>

            <button className="checkout-place-btn" type="submit">
              PLACE ORDER
            </button>
          </form>

          {/* RIGHT: order summary (sticky on desktop, moves above the
              form on mobile via CSS ordering) */}
          <aside className="checkout-summary">
            <h2>Order Summary</h2>
            <ul className="checkout-summary-items">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.size}`}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>
                    Rs.{" "}
                    {(parsePrice(item.price) * item.quantity).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="checkout-summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="checkout-summary-row checkout-summary-total">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CheckoutPage;