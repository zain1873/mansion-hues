import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PrivacyPolicy.css";

// ---- Table of contents (scrollspy via anchor links) ----
const sections = [
  { id: "introduction", label: "Introduction", num: "1" },
  { id: "eligibility", label: "Eligibility & Timelines", num: "2" },
  { id: "conditions", label: "Conditions for Exchange", num: "3" },
  { id: "how-to-request", label: "How to Request an Exchange", num: "4" },
  { id: "non-exchangeable", label: "Non-Exchangeable Items", num: "5" },
  { id: "shipping", label: "Exchange Shipping & Costs", num: "6" },
  { id: "inspection", label: "Inspection & Quality Check", num: "7" },
  { id: "contact-us", label: "Contact Us", num: "8" },
];

// ---- Reusable content blocks ----
function Section({ id, num, title, intro, children }) {
  return (
    <article id={id} className="terms-block">
      <header className="terms-block-header">
        <span className="terms-block-num" aria-hidden="true">
          {num}
        </span>
        <h3 className="terms-block-title">{title}</h3>
      </header>
      {intro && <p className="terms-text">{intro}</p>}
      <div className="terms-block-body">{children}</div>
    </article>
  );
}

function SubHeading({ children }) {
  return <h4 className="terms-sub-heading">{children}</h4>;
}

function List({ items }) {
  return (
    <ul className="terms-list">
      {items.map((item, i) => (
        <li className="terms-list-item" key={i}>
          <span className="terms-list-marker" aria-hidden="true">
            —
          </span>
          <p className="terms-text">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function ExchangePolicy() {
  return (
    <div className="terms-page">
      {/* ---------- Header banner: dark, Navbar sits on top ---------- */}
      <header className="terms-hero">
        <Navbar />
        <div className="terms-hero-content">
          <p className="terms-hero-eyebrow">Exchange</p>
          <h1 className="terms-hero-title">Exchange Policy</h1>
          <p className="terms-hero-sub">
            We want you to love every piece you order from Maison Hues. If
            something isn't quite right, our simple exchange policy makes it
            easy to swap it for the perfect fit.
          </p>
          <span className="terms-hero-date">Effective from August 1, 2026</span>
        </div>
      </header>
{/* ---------- Body ---------- */}
      <main className="terms-layout">
        <aside className="terms-toc" aria-label="Table of contents">
          <h4 className="terms-toc-title">On this page</h4>
          <nav className="terms-toc-nav">
            <ul className="terms-toc-list">
              {sections.map((s) => (
                <li className="terms-toc-item" key={s.id}>
                  <a className="terms-toc-link" href={`#${s.id}`}>
                    <span className="terms-toc-num">{s.num}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://wa.me/923167779661"
            className="terms-toc-support"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="terms-toc-support-label">Questions?</span>
            <span className="theme-btn mt-3">Chat with our team</span>
          </a>
        </aside>

        <section className="terms-content">
          <div className="terms-content-overline">Maison Hues · Studio</div>

          <Section
            id="introduction"
            num="01"
            title="Introduction"
            intro="This Exchange Policy explains how you can exchange items purchased from Maison Hues when they don't meet your expectations."
          >
            <p className="terms-text">
              We understand that sizing and style preferences can vary, so we
              offer exchanges to help you find the look that suits you best.
              Please read the sections below carefully before initiating an
              exchange.
            </p>
          </Section>

          <Section
            id="eligibility"
            num="02"
            title="Eligibility & Timelines"
            intro="Exchanges are available within a set window from the date your order is delivered."
          >
            <List
              items={[
                "You may request an exchange within 7 days of receiving your order.",
                "The item must be unused, unwashed and in its original condition.",
                "All original tags must remain attached to the product.",
                "Please include the packing slip or order reference with your request.",
              ]}
            />
          </Section>

          <Section
            id="conditions"
            num="03"
            title="Conditions for Exchange"
            intro="To keep the process fair for every customer, exchanges are subject to the following conditions:"
          >
            <List
              items={[
                "Items must show no signs of wear, damage, odour or alteration.",
                "Original packaging, hygiene stickers and accessories must be intact.",
                "Exchanges of the same item in a different size or colour are processed first, subject to stock availability.",
                "If the requested replacement is unavailable, we will offer an alternative or a store credit.",
              ]}
            />
          </Section>

          <Section
            id="how-to-request"
            num="04"
            title="How to Request an Exchange"
            intro="Starting an exchange is quick and simple — just follow these steps:"
          >
            <List
              items={[
                "Contact our team on WhatsApp or email with your order number and the reason for exchange.",
                "Share a photo of the item along with the attached tag for our quick verification.",
                "Once approved, we will guide you on returning the item and confirm the replacement.",
                "Your replacement will be dispatched after we receive and inspect the returned item.",
              ]}
            />
          </Section>
<Section
            id="non-exchangeable"
            num="05"
            title="Non-Exchangeable Items"
            intro="For reasons of hygiene and safety, certain categories cannot be exchanged:"
          >
            <List
              items={[
                "Final-sale or clearance items marked as non-returnable.",
                "Personalised or made-to-order products.",
                "Underwear, swimwear and other intimate-wear items in opened packaging.",
                "Accessories that have been used or altered.",
              ]}
            />
            <p className="terms-text">
              Please check the product description at the time of purchase for
              any exchange restrictions that may apply.
            </p>
          </Section>

          <Section
            id="shipping"
            num="06"
            title="Exchange Shipping & Costs"
            intro="We aim to keep exchanges as cost-effective as possible for our customers."
          >
            <List
              items={[
                "If the exchange is due to an error on our side (wrong item, or size not as described), return shipping is covered by Maison Hues.",
                "For exchanges due to a change of preference or size, the customer is responsible for the return shipping cost.",
                "A return pickup can be arranged through our team for your convenience.",
                "Replacement orders are shipped using our standard delivery services.",
              ]}
            />
          </Section>

          <Section
            id="inspection"
            num="07"
            title="Inspection & Quality Check"
            intro="Every returned item is inspected before a replacement is issued."
          >
            <p className="terms-text">
              Once your return reaches us, our quality team verifies that the
              item meets the conditions described in this policy. If the item
              passes inspection, we will process your exchange promptly. If it
              does not meet our conditions, we will contact you to explain the
              outcome and next steps.
            </p>
          </Section>

          <Section
            id="contact-us"
            num="08"
            title="Contact Us"
            intro="If you have any questions about this Exchange Policy or need assistance with an exchange, our team is here to help."
          >
            <List
              items={[
                "Email: maison.hues11@gmail",
                "Phone / WhatsApp: +92 316 7779661",
                "Address: Maison Hues, Islamabad, Pakistan.",
              ]}
            />
          </Section>

          <p className="terms-content-footnote">
            For any queries regarding this Exchange Policy, reach out to our
            team at{" "}
            <a
              href="mailto:maison.hues11@gmail"
              className="terms-inline-link"
            >
              maison.hues11@gmail
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ExchangePolicy;