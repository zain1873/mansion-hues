import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaGem, FaUsers, FaShirt } from "react-icons/fa6";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import heroBg from "../../assets/banner.jpg";
import storyImg from "../../assets/banner-sunny.webp";
import detailImg from "../../assets/sunnyweather.webp";
import clothImg from "../../assets/cloths/image-1.webp";
import "./About.css";

// ---- Value cards data ----
const values = [
  {
    icon: FaShirt,
    title: "Premium Fabric Selection",
    text: "Every garment is cut from carefully sourced, breathable fabrics chosen for comfort that lasts all day.",
  },
  {
    icon: FaLeaf,
    title: "Mindful Design Process",
    text: "From sketch to stitch, each piece is thoughtfully crafted — no shortcuts, only intention.",
  },
  {
    icon: FaGem,
    title: "Uniquely Designed Pieces",
    text: "Designed for authenticity, our collection celebrates individuality and effortless everyday style.",
  },
  {
    icon: FaUsers,
    title: "Building a Community",
    text: "We aren't just selling clothes — we are creating a community of people who wear their story.",
  },
];

// ---- Stats row data ----
const stats = [
  { value: "2026", label: "Founded" },
  { value: "500+", label: "Unique Designs" },
  { value: "10K+", label: "Happy Customers" },
  { value: "100%", label: "Effortless Style" },
];

function About() {
  return (
    <div className="about-page">
      {/* ============ Hero banner ============ */}
      <header
        className="about-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Navbar />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-eyebrow about-eyebrow-light">Our Story</p>
          <h1 className="about-hero-title">
            Welcome to <span>Maison&nbsp;Hues</span>
          </h1>
          <p className="about-hero-sub">
            What you wear is an extension of who you are.
          </p>
          <Link to="/" className="about-hero-btn">
            Shop the Collection
          </Link>
        </div>
        <div className="about-hero-scroll" aria-hidden="true">
          <span className="about-hero-scroll-line" />
          <span className="about-hero-scroll-text">Scroll</span>
        </div>
      </header>

      {/* ============ Intro / About ============ */}
      <section className="about-intro">
        <div className="about-intro-grid">
          <div className="about-intro-copy">
            <p className="about-eyebrow">About Us</p>
            <h2 className="about-title">Welcome to Maison&nbsp;Hues</h2>
            <p className="about-text">
              We believe that what you wear is an extension of who you are.
              Founded in 2026, Maison Hues began with a simple realization: it
              shouldn&apos;t be so hard to find high-quality, comfortable
              clothing that actually expresses your individuality.
            </p>
            <p className="about-text">
              From our premium fabric selection to our mindful design process,
              every thread is crafted with you in mind. We aren&apos;t just
              selling clothes; we are building a community. Thank you for being
              a part of our story.
            </p>
            <Link to="/Faqs" className="about-link">
              Explore the collection
              <span className="about-link-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="about-intro-media">
            <img
              src={clothImg}
              alt="Maison Hues designed garment"
              className="about-media-main"
            />
            <img
              src={detailImg}
              alt="Maison Hues fabric detail"
              className="about-media-accent"
            />
          </div>
        </div>
      </section>
{/* ============ Quote divider ============ */}
      <section className="about-quote">
        <p className="about-quote-mark" aria-hidden="true">
          &ldquo;
        </p>
        <blockquote className="about-quote-text">
          Fashion should feel like a conversation between who you are and who
          you are becoming.
        </blockquote>
        <p className="about-quote-author">&mdash; The Made of Hues Studio</p>
      </section>

      {/* ============ Brand journey ============ */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-media">
            <img
              src={storyImg}
              alt="Maison Hues story"
              className="about-story-img"
            />
          </div>
          <div className="about-story-copy">
            <p className="about-eyebrow">Our Journey</p>
            <h2 className="about-title">From a Small Room to a Big Dream</h2>
            <p className="about-text">
              Our journey began in a small room with a big dream and a handful
              of sketches. What started as a passion project quickly turned
              into a movement.
            </p>
            <p className="about-text">
              Today, we are proud to offer uniquely designed pieces for those
              who value authenticity and effortless style. Every silhouette we
              release carries a little of where we came from — and a lot of
              where we are going.
            </p>

            <ul className="about-story-list">
              <li className="about-story-item">
                <span className="about-story-check" aria-hidden="true">
                  &check;
                </span>
                Premium fabrics selected by hand
              </li>
              <li className="about-story-item">
                <span className="about-story-check" aria-hidden="true">
                  &check;
                </span>
                Designs made for real, everyday life
              </li>
              <li className="about-story-item">
                <span className="about-story-check" aria-hidden="true">
                  &check;
                </span>
                A community that grows with every order
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Values ============ */}
      <section className="about-values">
        <div className="about-values-head">
          <p className="about-eyebrow about-eyebrow-center">What We Stand For</p>
          <h2 className="about-title about-title-center">
            Crafted With You in Mind
          </h2>
          <p className="about-values-sub">
            Four promises run through everything we design and deliver.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <article className="about-value-card" key={i}>
                <div className="about-value-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-text">{v.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============ Stats ============ */}
      <section className="about-stats">
        <div className="about-stats-grid">
          {stats.map((s, i) => (
            <div className="about-stat" key={i}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <p className="about-eyebrow about-eyebrow-light">Join Us</p>
          <h2 className="about-cta-title">Be a Part of Our Story</h2>
          <p className="about-cta-text">
            Discover effortless pieces that feel like you — from our studio to
            your wardrobe.
          </p>
          <Link to="/" className="theme-btn">
            Start Shopping
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;