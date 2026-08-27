import React, { useState } from "react";
import "./Contactpage.css";
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';

function ContactPage() {
  // Basic state for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState({
    email: false,
    phone: false,
    sms: false,
  });

  // Handles checkbox toggle for "How do you want us to contact you?"
  const handleCheckboxChange = (field) => {
    setContactMethod({
      ...contactMethod,
      [field]: !contactMethod[field],
    });
  };

  // Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      message,
      contactMethod,
    });
    alert("Message sent!");
  };

  return (
    <>
      {/* Navbar sits outside the constrained container so it can be full-width */}
      <Navbar />

      <div className="contact-page container">
        {/* Head Office Section */}
        <section className="office-section">
          <h2 className="section-title">Head Office</h2>
          <h3 className="company-name">M-Basics by Maria B Designs Private Limited</h3>

          <p className="office-info">
            5.5 KM, Raiwind Road (Near Fatehbad Village) Lahore, Pakistan.
          </p>
          <p className="office-info">Timings: Monday to Saturday</p>
          <p className="office-info">(09:00 am to 05:00 pm)</p>
          <p className="office-info">
            Email Us: <a href="mailto:maison.hues11@gmail">maison.hues11@gmail</a>
          </p>
        </section>

        {/* Online Order Queries Section */}
        <section className="office-section">
          <h2 className="section-title">For Online Order Queries</h2>
          <h3 className="company-name">M-Basics by Maria B Designs Private Limited</h3>

          <p className="office-info">Customer Service Timings:</p>
          <p className="office-info">
            Monday to Saturday (11:00 am to 11:00 pm)(09:00 am to 05:00 pm)
          </p>
          <p className="office-info">
            <a href="tel:+923111162742">+92 311 1162742</a>
          </p>
          <p className="office-info">
            Email Us: <a href="mailto:help@mbasics.ae">help@mbasics.ae</a>
          </p>
        </section>

        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* First name / Last name row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Contact method checkboxes */}
          <div className="form-group">
            <label>How do you want us to contact you?</label>
            <div className="checkbox-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={contactMethod.email}
                  onChange={() => handleCheckboxChange("email")}
                />
                Email
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={contactMethod.phone}
                  onChange={() => handleCheckboxChange("phone")}
                />
                Phone
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={contactMethod.sms}
                  onChange={() => handleCheckboxChange("sms")}
                />
                SMS
              </label>
            </div>
          </div>

          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message field */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;