import React, { useState } from "react";
import { FaPlus, FaMinus, FaHeadset } from "react-icons/fa6";
import "./Faq.css";

// FAQ data: questions shoppers ask most often.
const faqs = [
  {
    id: 1,
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 24–48 hours. Standard delivery takes 3–5 working days across Pakistan, while express delivery arrives in 1–2 working days. You'll receive a tracking link by email or WhatsApp as soon as your parcel ships.",
  },
  {
    id: 2,
    question: "Do you offer cash on delivery?",
    answer:
      "Yes, cash on delivery is available nationwide. We also accept card payments online and digital wallets at checkout. A small confirmation is sent before we dispatch your order on COD.",
  },
  {
    id: 3,
    question: "What is your exchange and return policy?",
    answer:
      "We offer easy exchanges within 7 working days of delivery, provided the items are unworn, unwashed and still tagged. A one-time exchange for a different size or colour is free; returns for a refund are accepted within the same window under our terms.",
  },
  {
    id: 4,
    question: "How do I find my correct size?",
    answer:
      "Every product page includes a detailed size chart with bust, waist and hip measurements in inches. If you're between sizes, we recommend sizing up — and you can always WhatsApp us for a personal fit recommendation.",
  },
  {
    id: 5,
    question: "How do I care for my Maison Hues pieces?",
    answer:
      "To keep colours vibrant, hand wash or machine wash on a gentle cycle in cold water, inside out. Avoid wringing, dry in the shade, and iron on low. Pre-treated and embellished fabrics should be dry cleaned.",
  },
  {
    id: 6,
    question: "Can I track my order?",
    answer:
      "Absolutely. A unique tracking ID is shared with you as soon as your order leaves our studio, letting you follow it in real time until it reaches your door.",
  },
];

// Accessible accordion. Clicking a question toggles its answer open/closed.
// Uses a simple index-based state so only one item is open at a time.
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="faq-section">
      <div className="container faq-container">
        {/* ---------- Left: heading + support card ---------- */}
        <div className="faq-left">
          <h2 className="faq-title">
            Frequently asked <span className="faq-title-italic">questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about ordering, shipping and caring for
            your Maison Hues pieces.
          </p>

          <div className="faq-support-card">
            <div className="faq-support-icon">
              <FaHeadset aria-hidden="true" />
            </div>
            <div>
              <p className="faq-support-label">Still need help?</p>
              <p className="faq-support-text">
                Our team is happy to assist you on WhatsApp.
              </p>
              <a
                href="https://wa.me/923167779661"
                target="_blank"
                rel="noopener noreferrer"
                className="faq-support-link"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>

        {/* ---------- Right: accordion list ---------- */}
        <div className="faq-right">
          <ul className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li className="faq-item" key={item.id}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggle(index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    className={`faq-answer-wrap ${isOpen ? "faq-answer-open" : ""}`}
                    role="region"
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
