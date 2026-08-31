import React from "react";
import { useNavigate } from "react-router-dom";
import "./Specialcollections.css";

// Data for each collection card.
// Images are pulled from Unsplash based on the collection title/theme.
const collections = [
  {
    id: 1,
    title: "Unstitched",
    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85",
    category: "unstitched",
  },
  {
    id: 2,
    title: "Casuals",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    category: "casual",
  },
  {
    id: 3,
    title: "West",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    category: "west",
  },
  {
    id: 4,
    title: "Formals",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
    category: "formals",
  },
];

// Simple functional component. No hooks besides navigation —
// it just loops over the collections array and renders a card for each.
function SpecialCollections() {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/collection/${category}`);
  };

  return (
    <section className="collections-section">
      {/* Tailwind: container + flex for the header row */}
      <div className="container flex items-center justify-between">
        <h2 className="collections-title">
          Our <span className="collections-title-italic">special</span> collections
        </h2>

        {/* Simple arrow buttons (no functionality, just visual) */}
        <div className="flex items-center collections-arrows">
          <button className="arrow-btn" aria-label="Previous">
            &#8249;
          </button>
          <button className="arrow-btn" aria-label="Next">
            &#8250;
          </button>
        </div>
      </div>

      {/* Tailwind: grid for basic layout of the cards */}
      <div className="container grid collections-grid">
        {collections.map((item) => (
          <div
            className="collection-card"
            key={item.id}
            onClick={() => handleCardClick(item.category)}
            style={{ cursor: "pointer" }}
          >
            <div className="collection-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="collection-image"
              />
            </div>
            <p className="collection-label">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialCollections;