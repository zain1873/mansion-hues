// ============================================================
// WishlistContext.js
// Global wishlist state using React's Context API.
// Any component can read or change the wishlist by saying:
//   const { wishlistItems, addToWishlist, ... } = useContext(WishlistContext);
// ============================================================

import React, { createContext, useContext, useEffect, useState } from "react";

// Key used to store the wishlist in localStorage, so the wishlist survives
// page refreshes / full page navigations (just like the cart does).
const WISHLIST_STORAGE_KEY = "maison-hues-wishlist";

// Read the saved wishlist from localStorage. Wrapped in try/catch so that a
// missing, corrupted, or unreadable value (e.g. storage blocked) simply
// falls back to an empty wishlist instead of crashing the app.
const loadWishlistFromStorage = () => {
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// 1) Create the context. This is just an empty "pipe" — the Provider
//    below is what actually gives it data to share.
const WishlistContext = createContext();

// ============================================================
// WishlistProvider — wraps the whole app and holds all wishlist state.
// ============================================================
export function WishlistProvider({ children }) {
  // Every item in the wishlist has the same shape as the product:
  //   { id, name, price, image, hoverImage, category, sku, ... }
  // Initialise from localStorage (if anything was saved earlier) so the
  // wishlist persists across page refreshes / full page navigations.
  const [wishlistItems, setWishlistItems] = useState(loadWishlistFromStorage);

  // Every time the wishlist changes, save it back to localStorage. Wrapped in
  // try/catch so storage errors (private mode, quota, etc.) never break the app.
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch {
      // Ignore: wishlist still works in-memory even if persistence fails.
    }
  }, [wishlistItems]);

  // ----------------------------------------------------------
  // Add a product to the wishlist (given the full product object).
  // If the product is already there, we do nothing (no duplicates by id).
  // ----------------------------------------------------------
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const alreadyPresent = prev.some((item) => item.id === product.id);
      if (alreadyPresent) return prev;
      return [...prev, product];
    });
  };

  // ----------------------------------------------------------
  // Remove a product from the wishlist (identified by id).
  // ----------------------------------------------------------
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ----------------------------------------------------------
  // Toggle a product in the wishlist.
  // If it is not there yet -> add it. If it is already there -> remove it.
  // This is what the little heart button on the product page uses.
  // ----------------------------------------------------------
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const alreadyPresent = prev.some((item) => item.id === product.id);
      if (alreadyPresent) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // ----------------------------------------------------------
  // Return true if a product (by id) is in the wishlist, otherwise false.
  // Used by the heart button to decide between a filled or outline icon.
  // ----------------------------------------------------------
  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // Total number of wishlist items (for the navbar badge).
  const wishlistCount = wishlistItems.length;

  // Provide all the state + functions to every child component.
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Export the context so components can use it with useContext().
export default WishlistContext;