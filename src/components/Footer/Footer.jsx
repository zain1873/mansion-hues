import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import footerLogo from "../../assets/nav-logo.png";
import "./Footer.css";

// Footer: 5 columns on top (Logo, Company, Pages, Contact Us, Newsletter)
// + a bottom bar with the brand wordmark and social icons.
function Footer() {
  return (
    <footer className="footer">
      {/* ---------- Top row: 5 columns ---------- */}
      <div className="footer-container flex flex-wrap gap-8">

        {/* Column 1: Logo only */}
        <div className="footer-column footer-column-logo">
          <a href="/" className="footer-logo-link" aria-label="Maison Hues home">
            <img
              src={footerLogo}
              alt="Maison Hues"
              className="footer-logo-img footer-logo"
            />
          </a>
        </div>

        {/* Column 2: Company */}
        <div className="footer-column">
          <h3 className="footer-heading">COMPANY</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/about" className="footer-link">About Us</Link>
            </li>
            <li className="footer-list-item">
              <a href="/contact-us" className="footer-link">Contact Us</a>
            </li>
            {/* <li className="footer-list-item">
              <a href="#" className="footer-link">Careers</a>
            </li> */}
            <li className="footer-list-item">
              <Link to="/terms" className="footer-link">Terms</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Pages */}
        <div className="footer-column">
          <h3 className="footer-heading">PAGES</h3>
          <ul className="footer-list">
            {/* <li className="footer-list-item">
              <a href="#" className="footer-link">Shipping &amp; Delivery</a>
            </li> */}
            <li className="footer-list-item">
              <Link to="/exchange-policy" className="footer-link">Exchange Policy</Link>
            </li>
            <li className="footer-list-item">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">Track Your Order</a>
            </li>
            <li className="footer-list-item">
              <a href="/faqs" className="footer-link">FAQ&apos;s</a>
            </li>
            <li className="footer-list-item">
              <a href="/store-locator" className="footer-link">Store Locator</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">CONTACT US</h3>

          <p className="footer-text">
            Islamabad, Pakistan.
          </p>

          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <FaPhoneAlt size={12} className="footer-icon" aria-hidden="true" />
              <span className="footer-contact-label">Call:</span>
              <a href="tel:+923167779661" className="footer-link">
                +92 316 7779661
              </a>
            </li>
            <li className="footer-contact-item">
              <FaWhatsapp size={13} className="footer-icon" aria-hidden="true" />
              <span className="footer-contact-label">WhatsApp:</span>
              <a
                href="https://wa.me/923167779661"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 316 7779661
              </a>
            </li>
            <li className="footer-contact-item">
              <FaEnvelope size={12} className="footer-icon" aria-hidden="true" />
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:maison.hues11@gmail" className="footer-link">
                maison.hues11@gmail
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Newsletter (moved to right end) */}
        <div className="footer-column footer-column-newsletter">
          <h3 className="footer-heading">JOIN OUR NEWSLETTER</h3>
          <p className="footer-text footer-text-muted">
            We&apos;ll send you updates once per week.
          </p>

          <form
            className="footer-subscribe flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              className="footer-input"
              required
            />
            <button type="submit" className="footer-subscribe-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* ---------- Bottom row: brand wordmark + social icons ---------- */}
      <div className="footer-bottom flex items-center justify-between flex-wrap gap-6">

        <ul className="footer-social-icons flex items-center gap-4">
          <li>
            <a
              href="https://www.instagram.com"
              className="footer-social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="footer-social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              className="footer-social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com"
              className="footer-social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={17} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;