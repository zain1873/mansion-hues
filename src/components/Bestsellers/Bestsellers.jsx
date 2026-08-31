import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bestsellers.css";

// Verified free-to-use Unsplash images (Unsplash License)
const IMAGE_SOLIDS =
"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
const IMAGE_EMBROIDERED =
  "https://images.unsplash.com/photo-1481325545291-94394fe1cf95?auto=format&fit=crop&w=900&q=80";

// Simple functional component for the "Best Sellers" section
function BestSellers() {
  const navigate = useNavigate();

  return (
    <section className="best-sellers">
      {/* Header row: title on the left, "View all" button on the right */}
      <div className="best-sellers-header">
        <div>
          <h2 className="best-sellers-title">Best <span className="casual-title-italic">Sellers</span> </h2>
        </div>
        <button
          className="view-all-btn"
          onClick={() => navigate("/collection/best-sellers")}
        >
          <span>View all</span>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </button>
      </div>

      {/* Two products cards side by side */}
      <div className="best-sellers-grid">
        {/* Card 1 */}
        <div
          className="products-card"
          onClick={() => navigate("/collection/solids")}
          style={{ cursor: "pointer" }}
        >
          <div className="products-image-wrap">
            <img src={IMAGE_SOLIDS} alt="Solids" className="products-image" />
          </div>
          <div className="products-caption">
            <span className="products-label">Solids</span>
            <span className="products-cta">Shop now &rarr;</span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="products-card"
          onClick={() => navigate("/collection/embroidered")}
          style={{ cursor: "pointer" }}
        >
          <div className="products-image-wrap">
            <img src={IMAGE_EMBROIDERED} alt="Embroidered" className="products-image" />
          </div>
          <div className="products-caption">
            <span className="products-label">Embroidered</span>
            <span className="products-cta">Shop now &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;