import React, { useRef } from "react";
// Swiper components + styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// images
import image1 from "../../assets/cloths/image-1.webp";
import image2 from "../../assets/cloths/image-2.webp";
import image3 from "../../assets/cloths/image-3.webp";
import image4 from "../../assets/cloths/image-4.webp";

// hoverable images
import imagehover1 from "../../assets/cloths/image-1-hover.webp";
import imagehover2 from "../../assets/cloths/image-2-hover.webp";
import imagehover3 from "../../assets/cloths/image-3-hover.webp";
import imagehover4 from "../../assets/cloths/image-4-hover.webp";

// Our own custom CSS (colors, fonts, hover effects, media queries)
import "./Solidscollection.css";

// Plus icon (simple inline SVG so we don't need an extra icon library)
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path
      d="M12 5V19M5 12H19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Simple left arrow icon
const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Simple right arrow icon
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// All product data lives in one simple array.
// discount is optional -- only items with a discount show the badge + old price
const products = [
  {
    id: 1,
    name: "2 PC Dyed Crosshatch Suit",
    price: "Rs.5,990.00",
    oldPrice: null,
    discount: null,
    image: image1,
    hoverImage: imagehover1,
  },
  {
    id: 2,
    name: "Dyed Dobby Cotton Shirt",
    price: "Rs.2,993.00",
    oldPrice: "Rs.3,990.00",
    discount: "25% OFF",
    image: image2,
    hoverImage: imagehover2,
  },
  {
    id: 3,
    name: "Dyed Crosshatch Shirt",
    price: "Rs.2,993.00",
    oldPrice: "Rs.3,990.00",
    discount: "25% OFF",
    image: image3,
    hoverImage: imagehover3,
  },
  {
    id: 4,
    name: "2 PC Dyed Arabic Lawn Suit",
    price: "Rs.4,493.00",
    oldPrice: "Rs.5,990.00",
    discount: "25% OFF",
    image: image4,
    hoverImage: imagehover4,
  },
];

// One product card. Kept as its own small component so the
// main component stays easy to read.
function ProductCard({ product }) {
  return (
    <div className="sld-card flex flex-col w-full">
      {/* Image wrapper handles the hover image-swap + discount badge */}
      <div className="sld-img-wrap relative w-full">
        {/* Discount badge, top-left corner, only shown if a discount exists */}
        {product.discount && (
          <span className="sld-badge absolute">{product.discount}</span>
        )}

        <img
          className="sld-img sld-img-default w-full h-full"
          src={product.image}
          alt={product.name}
        />
        <img
          className="sld-img sld-img-hover w-full h-full"
          src={product.hoverImage}
          alt={product.name}
        />

        {/* Plus button, only visible on hover (see CSS) */}
        <button className="sld-plus-btn absolute" aria-label="Quick add">
          <PlusIcon />
        </button>
      </div>

      {/* Text info below the image */}
      <div className="sld-info flex flex-col">
        <p className="sld-name">{product.name}</p>
        <div className="sld-price-row flex items-center">
          {product.oldPrice && (
            <span className="sld-old-price">{product.oldPrice}</span>
          )}
          <span
            className={product.oldPrice ? "sld-price sld-price-off" : "sld-price"}
          >
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main component
export default function SolidsCollection() {
  // Refs so our custom arrow buttons can control the Swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="sld-section w-full">
      <div className="sld-container w-full max-w-screen-2xl mx-auto px-4">
        {/* Section title */}
        <h2 className="sld-title">
          Our <span className="sld-title-italic">Solids</span> Collection
        </h2>

        {/* Custom prev/next arrows sit above the slider on the right */}
        <div className="sld-arrows flex items-center justify-end gap-2">
          <button ref={prevRef} className="sld-arrow-btn" aria-label="Previous">
            <ArrowLeftIcon />
          </button>
          <button ref={nextRef} className="sld-arrow-btn" aria-label="Next">
            <ArrowRightIcon />
          </button>
        </div>

        {/* Swiper slider showing all product cards */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            // Connect our custom arrow buttons to Swiper's navigation
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            // Responsive slide counts (handled by Swiper itself)
            0: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
            1280: { slidesPerView: 4, spaceBetween: 0 },
          }}
          className="sld-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}