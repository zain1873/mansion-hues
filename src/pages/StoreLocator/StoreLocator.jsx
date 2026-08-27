import React from "react";
import { FaLocationDot, FaMagnifyingGlass, FaPhone } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import "./StoreLocator.css";
import Navbar from './../../components/Navbar/Navbar';

const stores = [
  {
    id: 1,
    name: "Centaurus Mall - M.Basics",
    distance: "3 km",
    address: "Shop # S-40, 2nd Floor, Centaurus Mall, F-8 Markaz, Islamabad",
    phone: "051-2820011",
  },
  {
    id: 2,
    name: "M-Basics Flagship Store",
    distance: "6.5 km",
    address: "Block 10, Jinnah Super Market, F-7, Islamabad",
    phone: "051-2651234",
  },
  {
    id: 3,
    name: "Giga Mall - M.Basics",
    distance: "10 km",
    address: "Giga Mall, DHA Phase 2, Islamabad",
    phone: "051-5789922",
  },
];

function StoreLocator() {
  return (
    <div>
      <Navbar />

      <div className="store-locator-page">
        <h1 className="store-locator-title">Store Locator</h1>

        <div className="store-locator-container flex flex-col md:flex-row">
          {/* Left: search + store list */}
          <div className="store-locator-sidebar">
            <div className="store-search-box flex items-center">
              <input
                type="text"
                placeholder="Type a postcode or address..."
                className="store-search-input"
              />
              <button className="store-search-btn" aria-label="Search">
                <FaMagnifyingGlass />
              </button>
            </div>

            <div className="store-list">
              {stores.map((store) => (
                <div className="store-item" key={store.id}>
                  <span className="store-pin">
                    <FaLocationDot />
                  </span>
                  <div className="store-details">
                    <div className="store-top-row flex justify-between">
                      <h3 className="store-name">{store.name}</h3>
                      <span className="store-distance">{store.distance}</span>
                    </div>
                    <p className="store-address">{store.address}</p>
                    <a href={`tel:${store.phone}`} className="store-phone">
                      <FaPhone className="store-phone-icon" />
                      {store.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: map */}
          <div className="store-locator-map">
            <iframe
              title="Islamabad Store Map"
              src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StoreLocator;