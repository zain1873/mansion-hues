import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import WishlistContext from "../../context/WishlistContext";

import "./WishlistPage.css";

// Small filled heart used as the per-card "remove from wishlist" button.
const RemoveHeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

function WishlistPage() {
  // Read the wishlist from the global context (no duplicate logic here).
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <main className="wishlist-page">
        {wishlistItems.length === 0 ? (
          // ---------- EMPTY WISHLIST ----------
          <div className="wishlist-empty">
            <h1 className="wishlist-empty-title">Your wishlist is empty</h1>
            <p className="wishlist-empty-text">
              Save your favourite pieces with the heart button and they will
              show up here.
            </p>
            <Link className="wishlist-empty-link" to="/">
              BACK TO SHOP
            </Link>
          </div>
        ) : (
          <>
            <h1 className="wishlist-page-title">My Wishlist</h1>
            <div className="wishlist-page-grid">
              {wishlistItems.map((product) => (
                <div
                  className="wishlist-page-card"
                  key={product.id}
                  onClick={() => handleCardClick(product.id)}
                >
                  <div className="wishlist-page-img-wrap">
                    <img
                      className="wishlist-page-img wishlist-page-img-default"
                      src={product.image}
                      alt={product.name}
                    />
                    <img
                      className="wishlist-page-img wishlist-page-img-hover"
                      src={product.hoverImage}
                      alt={product.name}
                    />
                    {/* Remove button - stops propagation so it does NOT
                        navigate to the product page, it only removes it */}
                    <button
                      className="wishlist-page-remove"
                      aria-label={`Remove ${product.name} from wishlist`}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromWishlist(product.id);
                      }}
                    >
                      <RemoveHeartIcon />
                    </button>
                  </div>
                  <p className="wishlist-page-name">{product.name}</p>
                  <p className="wishlist-page-price">{product.price}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default WishlistPage;