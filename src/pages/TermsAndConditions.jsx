import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import "./TermsAndConditions.css";

// ---- Table of contents (scrollspy via anchor links) ----
const sections = [
  { id: "introduction", label: "Introduction", num: "1" },
  { id: "orders-pricing", label: "Orders & Pricing", num: "2" },
  { id: "payment", label: "Payments", num: "3" },
  { id: "shipping", label: "Shipping & Delivery", num: "4" },
  { id: "exchanges", label: "Exchanges & Refunds", num: "5" },
  { id: "cancellation", label: "Cancellations", num: "6" },
  { id: "quality", label: "Quality & Care", num: "7" },
  { id: "intellectual-property", label: "Intellectual Property", num: "8" },
  { id: "liable", label: "Limitation of Liability", num: "9" },
  { id: "governing", label: "Governing Law", num: "10" },
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
function TermsAndConditions() {
  return (
    <div className="terms-page">
      {/* ---------- Header banner: dark, Navbar sits on top ---------- */}
      <header className="terms-hero">
        <Navbar />
        <div className="terms-hero-content">
          <p className="terms-hero-eyebrow">Legal</p>
          <h1 className="terms-hero-title">Terms &amp; Conditions</h1>
          <p className="terms-hero-sub">
            Please read these terms carefully before placing an order with
            Maison Hues.
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
            title="Introduction & Acceptance of Terms"
            intro="Welcome to Maison Hues. By accessing our website, browsing our collections, or placing an order, you agree to be bound by the Terms and Conditions set out below. If you do not agree with any part of these terms, please do not use our website or purchase from us."
          >
            <p className="terms-text">
              We reserve the right to revise these Terms at any time. Any
              changes will be updated on this page with a new effective date,
              and your continued use of the website after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section
            id="orders-pricing"
            num="02"
            title="Orders & Pricing"
            intro="When you place an order, you are making an offer to purchase the products at the prices listed at the time of checkout."
          >
            <List
              items={[
                "All prices are quoted and payable in Pakistani Rupees (PKR) unless otherwise stated.",
                "We make every effort to display accurate colours, fabric and dimensions; minor variations may occur due to screen settings.",
                "An order is only confirmed once we receive clear payment confirmation and dispatch a confirmation notice.",
                "Full payment (or a minimum 50% advance for made-to-order pieces) is required before production begins.",
                "In the rare case of a pricing or stock error, we reserve the right to cancel or adjust your order and notify you promptly.",
              ]}
            />
          </Section>

          <Section
            id="payment"
            num="03"
            title="Payments"
            intro="We accept the following payment methods for online orders:"
          >
            <List
              items={[
                "Cash on Delivery (COD) — available nationwide on Pakistani orders.",
                "Bank Transfer and online card payments via our secure payment gateway.",
                "Digital wallets as shown in the payment options at checkout.",
                "Customised prepaid orders must be fully settled before stitching or production begins.",
              ]}
            />
          </Section>

          <Section
            id="shipping"
            num="04"
            title="Shipping & Delivery"
            intro="Each order is carefully packed and dispatched from our studio in Lahore, Pakistan."
          >
            <List
              items={[
                "Standard delivery across Pakistan takes 3–5 working days; major cities may receive orders sooner.",
                "Express delivery is available at checkout for 1–2 working day delivery on eligible areas.",
                "International shipping is offered to selected countries on a case-by-case basis.",
                "A unique tracking ID is shared via email or WhatsApp as soon as your parcel ships.",
                "Delivery times are estimates and may vary during peak seasons or due to courier delays beyond our control.",
              ]}
            />
          </Section>

          <Section
            id="exchanges"
            num="05"
            title="Exchanges & Refunds"
            intro="We want you to love every piece you receive from Maison Hues. Please review our exchange and return policy carefully."
          >
            <SubHeading>Exchanges</SubHeading>
            <List
              items={[
                "One free exchange for a different size or colour within 7 working days of delivery.",
                "Items must be unworn, unwashed, unused and in original packaging with all tags attached.",
                "Customised or made-to-order pieces are exchangeable only in the case of a manufacturing defect.",
              ]}
            />
            <SubHeading>Refunds</SubHeading>
            <List
              items={[
                "Refunds are accepted within the same 7-day window for items returned in perfect condition.",
                "Returns are subject to a quality inspection before a refund is approved.",
                "Approved refunds are processed back to the original payment method within 7–10 working days.",
              ]}
            />
          </Section>

          <Section
            id="cancellation"
            num="06"
            title="Cancellations"
            intro="You may cancel an order before it enters production without any charge."
          >
            <List
              items={[
                "Orders already stitched, dyed or cut cannot be cancelled.",
                "To request a cancellation, chat with our team on WhatsApp as soon as possible.",
                "For COD orders already dispatched, the shipment must be refused at your door to process a return.",
              ]}
            />
          </Section>

          <Section
            id="quality"
            num="07"
            title="Quality & Care"
            intro="Each MaisonHues garment is crafted with care. To keep your pieces at their best:"
          >
            <List
              items={[
                "Hand wash or machine wash on a gentle, cold cycle inside-out.",
                "Dry in the shade and iron on low; pre-treated and embellished fabrics should be dry cleaned.",
                "Colours may vary slightly between batches of the same fabric.",
                "Report any manufacturing defect within 2 days of delivery with photo evidence for review.",
              ]}
            />
          </Section>

          <Section
            id="intellectual-property"
            num="08"
            title="Intellectual Property"
            intro="All content on this website — including logos, artwork, product photography, text, and designs — is the property of Maison Hues and is protected under applicable law."
          >
            <p className="terms-text">
              You may not copy, reproduce, distribute, republish or use any of
              our content for commercial purposes without our prior written
              consent.
            </p>
          </Section>

          <Section
            id="liable"
            num="09"
            title="Limitation of Liability"
            intro="While we strive for accuracy and the highest standards, our total liability under these Terms shall not exceed the amount you paid for the product(s) concerned."
          >
            <p className="terms-text">
              We shall not be liable for any indirect, incidental, special or
              consequential damages arising from the use of or inability to use
              our products, or from any delay in delivery caused by events
              beyond our reasonable control (including force majeure).
            </p>
          </Section>

          <Section
            id="governing"
            num="10"
            title="Governing Law"
            intro="These Terms and any disputes arising out of or related to them shall be governed by and construed in accordance with the laws of Pakistan."
          >
            <p className="terms-text">
              Any dispute shall first be referred to amicable negotiation. If
              the dispute remains unresolved, it shall be subject to the
              exclusive jurisdiction of the courts of Lahore, Pakistan.
            </p>
            <p className="terms-text">
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </Section>

          <p className="terms-content-footnote">
            For any queries regarding these Terms and Conditions, reach out to
            our team at{" "}
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

export default TermsAndConditions;