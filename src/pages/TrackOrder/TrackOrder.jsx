import React, { useState } from "react";
import {
  FaBoxOpen,
  FaTruckFast,
  FaLocationDot,
  FaRegCircleCheck,
  FaHeadset,
  FaClockRotateLeft,
} from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./TrackOrder.css";

// The different stages an order passes through. The <index> of the current
// stage is what the tracker highlights on screen.
const TRACKING_STEPS = [
  { key: "confirmed", label: "Order Confirmed", desc: "We have received your order" },
  { key: "processing", label: "Processing", desc: "Your items are being packed" },
  { key: "shipped", label: "Shipped", desc: "Handed over to the courier" },
  { key: "transit", label: "Out for Delivery", desc: "Out for delivery today" },
  { key: "delivered", label: "Delivered", desc: "Delivered to your address" },
];

const SAMPLE_ITEMS = [
  { name: "Embroidered Lawn Suit", size: "M", qty: 1, price: "Rs. 4,950" },
  { name: "Matte Twill Co-Ord Set", size: "L", qty: 1, price: "Rs. 6,300" },
];

// Demo result shown after the form is submitted (no backend available yet).
const SAMPLE_RESULT = {
  currentStep: 2, // 0-indexed index into TRACKING_STEPS (Shipped)
  orderId: "MH-10482",
  placedOn: "Aug 24, 2026",
  eta: "Aug 29, 2026",
  courier: "TCS Express",
  trackingNo: "TCS-7712083394",
  address: "Flat 4B, Blue Area, Islamabad, Pakistan",
};

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!orderId.trim()) nextErrors.orderId = "Please enter your order number.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const resetSearch = () => {
    setSubmitted(false);
    setOrderId("");
    setEmail("");
  };

  const result = SAMPLE_RESULT;
  const stepRow = TRACKING_STEPS.map((step, i) => ({
    ...step,
    state:
      i < result.currentStep ? "done" : i === result.currentStep ? "current" : "pending",
  }));

  return (
    <div className="track-page">
      {/* ---------- Hero banner: dark, holds the Navbar ---------- */}
      <header className="track-hero">
        <Navbar />
        <div className="track-hero-content">
          <p className="track-hero-eyebrow">Order Tracking</p>
          <h1 className="track-hero-title">Track Your Order</h1>
          <p className="track-hero-sub">
            Enter your order number and the email you used at checkout to see the
            real-time status of your delivery.
          </p>
        </div>
      </header>

      <main className="track-main">
        {/* ---------- Tracking form ---------- */}
        <section className="track-search">
          <div className="track-form-card">
            <span className="track-form-icon">
              <FaTruckFast />
            </span>
            <h2 className="track-form-title">Find your order</h2>
            <form className="track-form" onSubmit={handleSubmit} noValidate>
              <div className="track-field">
                <label className="track-label" htmlFor="orderId">
                  Order Number
                </label>
                <input
                  id="orderId"
                  type="text"
                  className={`track-input ${errors.orderId ? "track-input-error" : ""}`}
                  placeholder="e.g. MH-10482"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
                {errors.orderId && (
                  <span className="track-error">{errors.orderId}</span>
                )}
              </div>

              <div className="track-field">
                <label className="track-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`track-input ${errors.email ? "track-input-error" : ""}`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="track-error">{errors.email}</span>}
              </div>

              <button type="submit" className="track-btn theme-btn">
                TRACK ORDER
              </button>
              <p className="track-help">
                Tip: your order number is in the confirmation email you received
                after checkout.
              </p>
            </form>
          </div>
        </section>

        {/* ---------- Tracking result ---------- */}
        {submitted && (
          <section className="track-result">
            {/* Header: order + references */}
            <div className="track-result-header">
              <div>
                <p className="track-result-eyebrow">Tracking result</p>
                <h2 className="track-result-title">Order #{result.orderId}</h2>
                <p className="track-result-meta">
                  Placed on {result.placedOn} &middot; Courier: {result.courier}{" "}
                  &middot; Tracking # {result.trackingNo}
                </p>
              </div>
              <button className="track-change-btn" onClick={resetSearch}>
                <FaClockRotateLeft /> Track another
              </button>
            </div>

            {/* Timeline */}
            <div className="track-timeline">
              {stepRow.map((step) => (
                <div
                  key={step.key}
                  className={`track-step track-step-${step.state}`}
                >
                  <div className="track-step-marker">
                    {step.state === "done" && <FaRegCircleCheck />}
                    {step.state === "current" && <FaLocationDot />}
                    {step.state === "pending" && <FaBoxOpen />}
                  </div>
                  <p className="track-step-label">{step.label}</p>
                  <p className="track-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Details grid */}
            <div className="track-details">
              <div className="track-detail-card">
                <h3 className="track-detail-title">Estimated Delivery</h3>
                <p className="track-detail-value">{result.eta}</p>
                <p className="track-detail-desc">Arriving on or before this date.</p>
              </div>

              <div className="track-detail-card">
                <h3 className="track-detail-title">Shipping Address</h3>
                <p className="track-detail-desc track-address">{result.address}</p>
              </div>

              <div className="track-detail-card track-detail-wide">
                <h3 className="track-detail-title">Items in this order</h3>
                <ul className="track-items">
                  {SAMPLE_ITEMS.map((item, i) => (
                    <li className="track-item" key={i}>
                      <span className="track-item-name">
                        {item.name}
                        <span className="track-item-size"> (Size {item.size})</span>
                      </span>
                      <span className="track-item-qty">Qty {item.qty}</span>
                      <span className="track-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ---------- Need help strip ---------- */}
        <section className="track-support">
          <FaHeadset className="track-support-icon" />
          <div>
            <h3 className="track-support-title">Need help with your order?</h3>
            <p className="track-support-text">
              Our support team is available Monday to Saturday, 10am – 7pm. Reach us
              on WhatsApp and we will get back to you shortly.
            </p>
          </div>
          <a
            href="https://wa.me/923167779661"
            target="_blank"
            rel="noopener noreferrer"
            className="track-support-btn"
          >
            CONTACT SUPPORT
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TrackOrder;