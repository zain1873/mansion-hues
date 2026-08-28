import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PrivacyPolicy.css";

// ---- Table of contents (scrollspy via anchor links) ----
const sections = [
  { id: "introduction", label: "Introduction", num: "1" },
  { id: "information-collected", label: "Information We Collect", num: "2" },
  { id: "how-we-use", label: "How We Use Your Information", num: "3" },
  { id: "cookies", label: "Cookies & Tracking", num: "4" },
  { id: "sharing", label: "Sharing & Disclosure", num: "5" },
  { id: "security", label: "Data Security", num: "6" },
  { id: "your-rights", label: "Your Rights & Choices", num: "7" },
  { id: "third-party-links", label: "Third-Party Links", num: "8" },
  { id: "policy-updates", label: "Updates to This Policy", num: "9" },
  { id: "contact-us", label: "Contact Us", num: "10" },
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

function PrivacyPolicy() {
  return (
    <div className="terms-page">
      {/* ---------- Header banner: dark, Navbar sits on top ---------- */}
      <header className="terms-hero">
        <Navbar />
        <div className="terms-hero-content">
          <p className="terms-hero-eyebrow">Privacy</p>
          <h1 className="terms-hero-title">Privacy Policy</h1>
          <p className="terms-hero-sub">
            Learn how Maison Hues collects, uses and protects your personal
            information when you browse our site or shop with us.
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
            intro="This Privacy Policy explains how Maison Hues ('we', 'us' or 'our') collects, uses, stores and protects the personal information you provide when you visit our website, place an order, or interact with our team."
          >
            <p className="terms-text">
              By using our website or sharing your information with us, you
              agree to the practices described in this policy. If you do not
              agree with any part of this policy, please refrain from providing
              your personal information through our website.
            </p>
</Section>
<Section
            id="information-collected"
            num="02"
            title="Information We Collect"
            intro="We collect only the information necessary to process your orders, respond to your enquiries, and improve your shopping experience."
          >
            <SubHeading>Information you provide directly</SubHeading>
            <List
              items={[
                "Contact details such as your full name, phone number and email address.",
                "Delivery and billing address for shipping your order.",
                "Order details, including products purchased and payment preferences.",
                "Any messages you share with us via email, WhatsApp or our enquiry forms.",
              ]}
            />
            <SubHeading>Information collected automatically</SubHeading>
            <List
              items={[
                "Device and browser information, such as IP address and browser type.",
                "Pages visited, time spent on our site and referring links.",
                "Cookie and usage data (see the 'Cookies & Tracking' section below).",
              ]}
            />
          </Section>

          <Section
            id="how-we-use"
            num="03"
            title="How We Use Your Information"
            intro="We use your information solely for the purposes for which it was collected, including:"
          >
            <List
              items={[
                "Processing and fulfilling your orders, including delivery and status updates.",
                "Responding to your enquiries and providing customer support.",
                "Sending order confirmations, dispatch notices and important service messages.",
                "Sharing relevant news and offers — only if you have opted in to our newsletter.",
                "Improving our website, product ranges and overall customer experience.",
                "Complying with applicable legal and accounting requirements.",
              ]}
            />
          </Section>

          <Section
            id="cookies"
            num="04"
            title="Cookies & Tracking"
            intro="Our website may use cookies and similar technologies to remember your preferences and understand how visitors use our site."
          >
            <p className="terms-text">
              Cookies help us keep the website secure, remember items in your
              cart, and analyse traffic so we can improve our service. You can
              control or delete cookies through your browser settings; however,
              disabling them may affect how the website functions.
            </p>
          </Section>

          <Section
            id="sharing"
            num="05"
            title="Sharing & Disclosure"
            intro="We value your trust and do not sell, rent or trade your personal information to third parties for their own marketing purposes."
          >
            <List
              items={[
                "We may share limited information with trusted service providers, such as couriers and payment gateways, strictly to complete your order.",
                "Information is shared only to the extent necessary to provide the service you requested.",
                "We may disclose information where required by law, or to protect the rights and safety of Maison Hues, our customers or the public.",
              ]}
            />
          </Section>
<Section
            id="security"
            num="06"
            title="Data Security"
            intro="We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss or misuse."
          >
            <p className="terms-text">
              While no method of transmission over the internet is completely
              secure, we follow industry best practices and regularly review
              our procedures to safeguard your data. Any payment information
              you provide is handled through our secure payment gateway.
            </p>
          </Section>

          <Section
            id="your-rights"
            num="07"
            title="Your Rights & Choices"
            intro="You have control over the personal information you share with us."
          >
            <List
              items={[
                "You may request access to, or a copy of, the personal information we hold about you.",
                "You may ask us to correct any inaccurate or incomplete information.",
                "You may request that we delete your personal data, subject to legal or accounting requirements.",
                "You may unsubscribe from marketing communications at any time using the link in our emails or by contacting us directly.",
              ]}
            />
            <p className="terms-text">
              To exercise any of these rights, please reach out to our team
              using the contact details in the "Contact Us" section below. We
              will respond to your request within a reasonable timeframe.
            </p>
          </Section>

          <Section
            id="third-party-links"
            num="08"
            title="Third-Party Links"
            intro="Our website may contain links to third-party websites, such as social media platforms or partner services."
          >
            <p className="terms-text">
              These external sites have their own privacy policies, and we are
              not responsible for their content or practices. We encourage you
              to review the privacy policy of any third-party website you visit
              before providing your information.
            </p>
          </Section>

          <Section
            id="policy-updates"
            num="09"
            title="Updates to This Policy"
            intro="We may update this Privacy Policy from time to time to reflect changes in our practices, the law or our services."
          >
            <p className="terms-text">
              Any changes will be posted on this page with a new effective
              date. Your continued use of our website after changes are posted
              constitutes acceptance of the updated policy. We encourage you to
              review this page periodically.
            </p>
          </Section>

          <Section
            id="contact-us"
            num="10"
            title="Contact Us"
            intro="If you have any questions, concerns or requests regarding this Privacy Policy or how we handle your information, please get in touch."
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
            For any queries regarding this Privacy Policy, reach out to our
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

export default PrivacyPolicy;
