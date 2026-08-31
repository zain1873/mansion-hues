import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.png";
import lookbookImg from "../../assets/banner.jpg";
import CartDrawer from "../Cartdrawer/CartDrawer";
import CartContext from "../../context/CartContext";
import AuthContext from "../../context/AuthContext";
import WishlistContext from "../../context/WishlistContext";

function Navbar() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pull cart info (badge count + open/close drawer) from global context.
  const { cartCount, setIsCartOpen } = useContext(CartContext);

  // Pull auth info (current user + modal opener + logout) from global context.
  const { user, setIsAuthModalOpen, logout } = useContext(AuthContext);

  // Pull wishlist count (for the badge on the wishlist icon) from global context.
  const { wishlistCount } = useContext(WishlistContext);

  const accountRef = useRef(null);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar flex items-center justify-between px-6 py-4 w-full">
      {/* Hamburger (mobile only) */}
      <button
        className="navbar-hamburger"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Left side: Shop dropdown (desktop/tablet) */}
      <div
        className="navbar-shop-wrapper"
        onMouseEnter={() => setShopOpen(true)}
        onMouseLeave={() => setShopOpen(false)}
      >
        <button className="navbar-shop-btn flex items-center gap-1">
          SHOP
          <span className="navbar-arrow">▾</span>
        </button>

        {/* Shop Mega Menu */}
        <div className={`shop-mega-menu ${shopOpen ? "open" : ""}`}>
          <div className="shop-mega-menu-inner">
            <div className="shop-menu-col">
              <h4>Main Menu</h4>
              <a href="/new-arrivals">New In</a>
              <a href="/formal-edit">Formal Edit</a>
              <a href="/co-ordsets">Co-Ord Sets</a>
              <a href="/fusion-edit">Fusion Edit</a>
            </div>

            <div className="shop-menu-col">
              <h4>By Collecion</h4>
                <a href="/collection/solids">Solids</a>
                <a href="/collection/embroidered">Embroidered</a>
                <a href="/collection/unstitched">Unstitched</a>
                <a href="/collection/casual">Casuals</a>
                <a href="/collection/west">West</a>
                <a href="/collection/formals">Formals</a>
 
            </div>

            <div className="shop-menu-col">
              <h4>By Fabric</h4>
              <span className="shop-menu-tag">Lawn</span>
              <span className="shop-menu-tag">Crepe</span>
              <span className="shop-menu-tag">Matte Twill</span>
              <span className="shop-menu-tag">Linen</span>
              <span className="shop-menu-tag">Silk</span>
          </div>

            <div className="shop-menu-image">
              <img src={lookbookImg} alt="Lookbook" />
            </div>
          </div>
        </div>
      </div>

      {/* Center: Logo (linked) */}
      <a href="/" className="navbar-logo" aria-label="Maison Hues home">
        <img src={navLogo} alt="Maison Hues" className="navbar-logo-img" />
      </a>

      {/* Right side: Icons */}
      <div className="navbar-icons">
        {/* Search icon */}
        <button
          className="navbar-icon-btn"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Account icon */}
        <div
          className="navbar-account-wrapper"
          ref={accountRef}
          onMouseEnter={() => window.innerWidth > 768 && setAccountOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setAccountOpen(false)}
        >
          <button
            className="navbar-icon-btn"
            aria-label="Account"
            onClick={() => {
              // Agar user login nahi hai, seedha modal khol dein
              // (dropdown ki zaroorat nahi login ke liye)
              if (!user) {
                setIsAuthModalOpen(true);
              } else {
                setAccountOpen((v) => !v);
              }
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>

          {/* Logged-in user ke liye dropdown (greeting + logout) */}
          {user && (
            <div className={`account-dropdown ${accountOpen ? "open" : ""}`}>
              <p className="account-greeting">Hi, {user.name}</p>
              <button className="account-login-btn" onClick={logout}>
                LOGOUT
              </button>
            </div>
          )}
        </div>

        {/* Wishlist icon with count - navigates to the wishlist page */}
        <button
          className="navbar-icon-btn navbar-icon-with-badge"
          aria-label="Wishlist"
          onClick={() => navigate("/wishlist")}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5 5.5 5c2 0 3.5 1.2 4.5 2.5C11 6.2 12.5 5 14.5 5 18 5 19.3 9 17.5 12.5 15 16.65 12 21 12 21z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          {/* Show the badge only when there is at least one item in the wishlist */}
          {wishlistCount > 0 && (
            <span className="navbar-badge">{wishlistCount}</span>
          )}
        </button>

        {/* Cart icon with count - opens the cart drawer */}
        <button
          className="navbar-icon-btn navbar-icon-with-badge"
          aria-label="Cart"
          onClick={() => setIsCartOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          {/* Show the badge only when there is at least one item in the cart */}
          {cartCount > 0 && <span className="navbar-badge">{cartCount}</span>}
        </button>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay ${searchOpen ? "open" : ""}`}>
        <button
          className="search-close-btn"
          aria-label="Close search"
          onClick={() => setSearchOpen(false)}
        >
          ✕
        </button>
        <div className="search-overlay-content">
          <h3>What are you looking for?</h3>
          <div className="search-input-wrapper">
            <input type="text" placeholder="Search for products, brands and more" />
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="popular-searches-label">Popular Searches:</p>
        </div>
      </div>

      {/* Mobile Menu (drawer) */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={navLogo} alt="Maison Hues" className="mobile-menu-logo" />
          <button
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            ✕
          </button>
        </div>
        <div className="mobile-menu-links">
          <p className="mobile-menu-section-title">Main Menu</p>
          <a href="/new-arrivals" onClick={closeMobileMenu}>New In</a>
          <a href="/formal-edit" onClick={closeMobileMenu}>Formal Edit</a>
          <a href="/co-ordsets" onClick={closeMobileMenu}>Co-Ord Sets</a>
          <a href="/fusion-edit" onClick={closeMobileMenu}>Fusion Edit</a>

          <p className="mobile-menu-section-title">By Collecion</p>
              <a href="collection/solids">Solids</a>
              <a href="collection/embroidered">Embroidered</a>
              <a href="collection/unstitched">Unstitched</a>
              <a href="collection/casual">Casuals</a>
              <a href="collection/west">West</a>
              <a href="collection/formals">Formals</a>

          <p className="mobile-menu-section-title">By Fabric</p>
          <span className="mobile-menu-tag">Lawn</span>
          <span className="mobile-menu-tag">Crepe</span>
          <span className="mobile-menu-tag">Matte Twill</span>
          <span className="mobile-menu-tag">Linen</span>
          <span className="mobile-menu-tag">Silk</span>
        </div>
      </div>

      {/* Backdrop when search or mobile menu is open (cart drawer has its own overlay) */}
      {(searchOpen || mobileMenuOpen) && (
        <div
          className="navbar-backdrop"
          onClick={() => {
            setSearchOpen(false);
            setMobileMenuOpen(false);
          }}
        />
      )}
      <CartDrawer />
    </nav>
  );
}

export default Navbar;