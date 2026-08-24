import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

// Simple footer component with 4 columns: Contact, Social Links, Policies, Newsletter
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-wrap gap-8">
        {/* Column 1: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">CONTACT US</h3>

          <p className="footer-text">
            <span className="footer-label">Address:</span>{" "}
            <a
              className="footer-link flex items-center gap-1"
              href="https://www.google.com/maps/search/?api=1&query=DHA+Lahore+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt size={14} className="footer-icon" aria-hidden="true" />
              D.H.A Lahore, Pakistan
            </a>
          </p>

          <p className="footer-text">
            <span className="footer-label">Phone :</span>{" "}
            <a
              className="footer-link flex items-center gap-1"
              href="tel:+923167779661"
            >
              <FaPhoneAlt size={14} className="footer-icon" aria-hidden="true" />
              +923167779661
            </a>
          </p>

          <p className="footer-text">
            <span className="footer-label">Email :</span>{" "}
            <a
              className="footer-link flex items-center gap-1"
              href="mailto:info@lirastudioofficial.com"
            >
              <FaEnvelope size={14} className="footer-icon" aria-hidden="true" />
              info@lirastudioofficial.com
            </a>
          </p>

          <p className="footer-label footer-hours-title">Customer Service Hours:</p>
          <p className="footer-text">Monday - Saturday</p>
          <p className="footer-text">9:00 am to 5:30 GMT+5.</p>
        </div>

        {/* Column 2: Social Links */}
        <div className="footer-column">
          <h3 className="footer-heading">LIRA</h3>

          <ul className="footer-list">
            <li className="footer-list-item flex items-center gap-2">
              <FaFacebookF size={16} className="footer-icon" aria-hidden="true" />
              <a
                href="https://www.facebook.com"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footer-list-item flex items-center gap-2">
              <FaInstagram size={16} className="footer-icon" aria-hidden="true" />
              <a
                href="https://www.instagram.com"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="footer-list-item flex items-center gap-2">
              <FaWhatsapp size={16} className="footer-icon" aria-hidden="true" />
              <a
                href="https://wa.me/923167779661"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Policies */}
        <div className="footer-column">
          <h3 className="footer-heading">OUR POLICIES</h3>

          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-link">Shipping &amp; Delivery</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">Exchange Policy</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">Terms &amp; Conditions</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">FAQ's</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="footer-column footer-column-wide">
          <h3 className="footer-heading">FOLLOW THE LATEST TRENDS AND STYLES</h3>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email address"
              className="footer-input"
            />
            <button type="button" className="footer-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;