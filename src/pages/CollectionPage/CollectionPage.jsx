import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import products from "../../data/products";

import "./CollectionPage.css";

// categoryName (URL se aane wala) → page par dikhne wala asal title.
// Naya collection add karna ho tou bas yahan ek entry add karni hai.
const categoryTitles = {
  casual: "Our Casual Collections",
  solids: "Our Solids Collection",
};

function CollectionPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Sirf usi category ke products nikalna jo URL mein aayi hai.
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  // Agar mapping mein title na mile (unknown category), fallback title.
  const pageTitle = categoryTitles[categoryName] || "Collection";

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Navbar />
      <main className="collection-page">
        <h1 className="collection-page-title">{pageTitle}</h1>

        {filteredProducts.length === 0 ? (
          <p className="collection-page-empty">No products found.</p>
        ) : (
          <div className="collection-page-grid">
            {filteredProducts.map((product) => (
              <div
                className="collection-page-card"
                key={product.id}
                onClick={() => handleCardClick(product.id)}
              >
                <div className="collection-page-img-wrap">
                  <img
                    className="collection-page-img collection-page-img-default"
                    src={product.image}
                    alt={product.name}
                  />
                  <img
                    className="collection-page-img collection-page-img-hover"
                    src={product.hoverImage}
                    alt={product.name}
                  />
                </div>
                <p className="collection-page-name">{product.name}</p>
                <p className="collection-page-price">{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default CollectionPage;