import React from "react";

// images
// Swap these paths with your own files inside src/assets
import leftImage from "../../assets/banner-sunny.webp";
import bottomRightImage from "../../assets/sunnyweather.webp";

// Our own custom CSS (colors, fonts, hover effects, media queries)
import "./Warmdaysbanner.css";

// Main component
export default function WarmDaysBanner() {
  return (
    <section className="wdb-section w-full">
      <div className="wdb-grid grid">
        {/* Left side: single large image, spans full height */}
        <div className="wdb-left">
          <img
            className="wdb-left-image w-full h-full"
            src={leftImage}
            alt="Woman in a floral summer outfit holding flowers"
          />
        </div>

        {/* Right side: top text panel + bottom image, stacked */}
        <div className="wdb-right flex flex-col">
          {/* Text panel */}
          <div className="wdb-text-panel flex flex-col items-center justify-center">
            <p className="wdb-heading">Warm days, fresh looks.</p>
            <h2 className="wdb-subheading">Explore what's new</h2>
            <a href="#" className="wdb-cta">
              DISCOVER NOW
            </a>
          </div>

          {/* Bottom image panel */}
          <div className="wdb-bottom-image-wrap">
            <img
              className="wdb-bottom-image w-full h-full"
              src={bottomRightImage}
              alt="Friends in colorful summer outfits at an outdoor tennis court"
            />
          </div>
        </div>
      </div>
    </section>
  );
}