import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.png";
import lookbookImg from "../../assets/banner.webp";
import CartDrawer from "../Cartdrawer/CartDrawer";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // NEW: controls cart drawer

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
              <a href="/new-arrivals">New Arrivals</a>
              <a href="/print-shop">The Print Shop</a>
              <a href="/mandarin-set">Mandarin Set</a>
              <a href="/monochrome-edit">Monochrome Edit</a>
            </div>

            <div className="shop-menu-col">
              <h4>By Type</h4>
              <a href="/type/solids">Solids</a>
              <a href="/type/embroidered">Embroidered</a>
            </div>

            <div className="shop-menu-col">
              <h4>By Fabric</h4>
              <a href="/fabric/lawn">Lawn</a>
              <a href="/fabric/crepe">Crepe</a>
              <a href="/fabric/matte-twill">Matte Twill</a>
              <a href="/fabric/linen">Linen</a>
              <a href="/fabric/silk">Silk</a>
            </div>

            {/* <div className="shop-menu-col">
              <h4>By Season</h4>
              <a href="/season/all-year">All Year Round</a>
              <a href="/season/summer">Summer</a>
              <a href="/season/fall-25">Fall Collection '25</a>
              <a href="/season/winter">Winter Collection</a>
            </div> */}
{/* 
            <div className="shop-menu-col">
              <h4>By Style</h4>
              <a href="/style/everyday">Everyday Wear</a>
              <a href="/style/festive">Festive Wear</a>
              <a href="/style/dinner">Dinner Wear</a>
              <a href="/style/co-ord">Co-ord sets</a>
              <a href="/style/easterns">Easterns</a>
              <a href="/style/westerns">Westerns</a>
              <a href="/style/kaftaans">Kaftaans</a>
            </div> */}

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
            onClick={() => setAccountOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>

          <div className={`account-dropdown ${accountOpen ? "open" : ""}`}>
            <button className="account-login-btn">LOGIN</button>
            <p className="account-register-text">
              NEW USER? <a href="/register">REGISTER NOW</a>
            </p>
            <div className="account-language">
              <h4>SELECT LANGUAGE</h4>
              <button className="account-lang-btn">ENGLISH</button>
            </div>
          </div>
        </div>

        {/* Wishlist icon with count */}
        <button className="navbar-icon-btn navbar-icon-with-badge" aria-label="Wishlist">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5 5.5 5c2 0 3.5 1.2 4.5 2.5C11 6.2 12.5 5 14.5 5 18 5 19.3 9 17.5 12.5 15 16.65 12 21 12 21z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="navbar-badge">0</span>
        </button>

        {/* Cart icon with count - opens the cart drawer */}
        <button
          className="navbar-icon-btn navbar-icon-with-badge"
          aria-label="Cart"
          onClick={() => setCartOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="navbar-badge">0</span>
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
          <a href="/new-arrivals" onClick={closeMobileMenu}>New Arrivals</a>
          <a href="/print-shop" onClick={closeMobileMenu}>The Print Shop</a>
          <a href="/mandarin-set" onClick={closeMobileMenu}>Mandarin Set</a>
          <a href="/monochrome-edit" onClick={closeMobileMenu}>Monochrome Edit</a>
          <a href="/pure-lawn" onClick={closeMobileMenu}>Pure Lawn</a>
          <a href="/resort-collection" onClick={closeMobileMenu}>Resort Collection</a>
          <a href="/best-sellers" onClick={closeMobileMenu}>Best Sellers</a>
          <a href="/spring-summer-26" onClick={closeMobileMenu}>Spring/Summer'26</a>
          <a href="/brown-edition" onClick={closeMobileMenu}>Brown Edition</a>

          <p className="mobile-menu-section-title">By Fabric</p>
          <a href="/fabric/lawn" onClick={closeMobileMenu}>Lawn</a>
          <a href="/fabric/crepe" onClick={closeMobileMenu}>Crepe</a>
          <a href="/fabric/matte-twill" onClick={closeMobileMenu}>Matte Twill</a>
          <a href="/fabric/linen" onClick={closeMobileMenu}>Linen</a>
          <a href="/fabric/silk" onClick={closeMobileMenu}>Silk</a>
          <a href="/fabric/velvet" onClick={closeMobileMenu}>Velvet</a>

          <p className="mobile-menu-section-title">By Style</p>
          <a href="/style/everyday" onClick={closeMobileMenu}>Everyday Wear</a>
          <a href="/style/festive" onClick={closeMobileMenu}>Festive Wear</a>
          <a href="/style/dinner" onClick={closeMobileMenu}>Dinner Wear</a>
          <a href="/style/co-ord" onClick={closeMobileMenu}>Co-ord sets</a>
          <a href="/style/easterns" onClick={closeMobileMenu}>Easterns</a>
          <a href="/style/westerns" onClick={closeMobileMenu}>Westerns</a>
          <a href="/style/kaftaans" onClick={closeMobileMenu}>Kaftaans</a>
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

      {/* Cart Drawer - slides in from the right */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
}

export default Navbar;