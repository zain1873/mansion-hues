import React, { useRef } from "react";
// Swiper components + styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// images
import image1 from "../../assets/cloths/image-1.webp"
import image2 from "../../assets/cloths/image-2.webp"
import image3 from "../../assets/cloths/image-3.webp"
import image4 from "../../assets/cloths/image-4.webp"

// hoverable images
import imagehover1 from "../../assets/cloths/image-1-hover.webp"
import imagehover2 from "../../assets/cloths/image-2-hover.webp"
import imagehover3 from "../../assets/cloths/image-3-hover.webp"
import imagehover4 from "../../assets/cloths/image-4-hover.webp"


// Our own custom CSS (colors, fonts, hover effects, media queries)
import "./Casualcollections.css";

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
// Swap these paths with your own files inside src/assets/cloths
const products = [
  {
    id: 1,
    name: "2 PC Printed Cambric Suit",
    price: "Rs.6,990.00",
    image: image1,
    hoverImage: imagehover1,
  },
  {
    id: 2,
    name: "2 PC Embroidered Slub Lawn Suit",
    price: "Rs.7,290.00",
    image: image2,
    hoverImage: imagehover2,
  },
  {
    id: 3,
    name: "2 PC Dyed Crosshatch Suit",
    price: "Rs.5,990.00",
    image: image3,
    hoverImage: imagehover3,
  },
  {
    id: 4,
    name: "Printed Lawn Shirt",
    price: "Rs.4,290.00",
    image: image4,
    hoverImage: imagehover4,
  },
    {
    id: 5,
    name: "Printed Lawn Shirt",
    price: "Rs.4,290.00",
    image: image4,
    hoverImage: imagehover4,
  },
];

// One product card. Keeping this as its own small component
// keeps the main component easy to read.
function ProductCard({ product }) {
  return (
    <div className="product-card flex flex-col w-full">
      {/* Image wrapper handles the hover image-swap + plus icon */}
      <div className="product-image-wrapper relative w-full">
        <img
          className="product-image product-image-default w-full h-full"
          src={product.image}
          alt={product.name}
        />
        <img
          className="product-image product-image-hover w-full h-full"
          src={product.hoverImage}
          alt={product.name}
        />

        {/* Plus button, only visible on hover (see CSS) */}
        <button className="plus-button absolute" aria-label="Quick add">
          <PlusIcon />
        </button>
      </div>

      {/* Text info below the image */}
      <div className="product-info flex flex-col">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}

// Main component
export default function CasualCollections() {
  // Refs so our custom arrow buttons can control the Swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="casual-collections w-full">
      <div className="casual-container w-full max-w-screen-2xl mx-auto px-4">
        {/* Header row: title on the left, "view all" + arrows on the right */}
        <div className="casual-header flex items-center justify-between flex-wrap gap-4">
          <h2 className="casual-title">
            Our <span className="casual-title-italic">Casual</span> Collections
          </h2>

          <div className="casual-header-right flex items-center gap-6">
            <a href="#" className="view-all-link">
              VIEW ALL
            </a>

            <div className="casual-arrows flex items-center gap-2">
              <button ref={prevRef} className="arrow-button" aria-label="Previous">
                <ArrowLeftIcon />
              </button>
              <button ref={nextRef} className="arrow-button" aria-label="Next">
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper slider showing all product cards */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
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
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="casual-swiper"
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