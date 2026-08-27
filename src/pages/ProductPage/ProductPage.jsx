import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import products from "../../data/products";

import "./ProductPage.css";

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
    <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
    <path
      d="M12 5V19M5 12H19"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="black"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM6 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z"
      stroke="black"
      strokeWidth="1.3"
    />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M4 13v-1a8 8 0 0116 0v1M4 13v4a2 2 0 002 2h1v-6H5a1 1 0 00-1 1zM20 13v4a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1z"
      stroke="black"
      strokeWidth="1.3"
    />
  </svg>
);

const PaymentIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="black" strokeWidth="1.3" />
    <path d="M3 10h18" stroke="black" strokeWidth="1.3" />
  </svg>
);

const ReturnIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M4 12a8 8 0 1 1 2.34 5.66M4 12v5h5"
      stroke="black"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export default function ProductPage() {
  const { id } = useParams();

  // Abhi static array se product dhoondh rahe hain.
  // Baad mein yahan API call hogi, jaise: fetch(`/api/products/${id}`)
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[product.sizes.length - 1] : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="product-not-found">Product not found.</div>
        <Footer />
      </>
    );
  }

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <Navbar />

      <section className="product-page w-full">
        <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>
        <div className="product-page-container flex">
          {/* LEFT: Image gallery — jitni images ho, utni grid mein aa jayengi */}
          <div className="product-gallery">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} image ${index + 1}`}
                className="product-gallery-image"
              />
            ))}
          </div>

          {/* RIGHT: Sticky info panel */}
          <div className="product-info-panel">
            <h1 className="product-page-title">{product.name}</h1>

            <span className="product-sku">#{product.sku}</span>

            <p className="product-page-price">{product.price}</p>

            <p className="product-rewards">
              Earn <strong>{product.rewardMin}</strong> -{" "}
              <strong>{product.rewardMax}</strong> in rewards! Simply register
              or sign in to our loyalty program at checkout.
            </p>

            <p className="product-composition">{product.composition}</p>
            <p className="product-shirt-label">
              <strong>Shirt</strong>
            </p>
            <p className="product-shirt-detail">{product.shirtDetail}</p>

            <button
              className="read-more-btn"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? "READ LESS -" : "READ MORE +"}
            </button>

            {showDetails && (
              <ul className="product-details-list">
                {product.details.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            )}

            <div className="product-size-section">
              <p className="size-label">
                SIZE <strong>{selectedSize}</strong>
              </p>
              <div className="size-options flex">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      "size-button" +
                      (size === selectedSize ? " size-button-active" : "")
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-action-row flex items-center">
              <div className="quantity-selector flex items-center">
                <button
                  className="qty-btn"
                  onClick={decreaseQty}
                  aria-label="Decrease quantity"
                >
                  <MinusIcon />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={increaseQty}
                  aria-label="Increase quantity"
                >
                  <PlusIcon />
                </button>
              </div>

              <button className="add-to-cart-btn theme-btn">ADD TO CART</button>

              <button className="wishlist-btn" aria-label="Add to wishlist">
                <HeartIcon />
              </button>
            </div>

            <p className="stock-warning">
              Only {product.stock} left in stock. Order soon.
            </p>

            <ul className="delivery-checklist">
              <li>✓ Safe & Tracked Delivery</li>
              <li>✓ Secure online payment</li>
            </ul>

            <div className="info-cards-grid">
              <div className="info-card">
                <TruckIcon />
                <span>SAFE & TRACKED DELIVERY</span>
              </div>
              <div className="info-card">
                <SupportIcon />
                <span>24/7 SUPPORT</span>
              </div>
              <div className="info-card">
                <PaymentIcon />
                <span>SECURE PAYMENT</span>
              </div>
              <div className="info-card">
                <ReturnIcon />
                <span>EASY RETURNS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}