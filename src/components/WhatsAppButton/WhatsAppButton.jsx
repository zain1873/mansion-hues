import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

function WhatsAppButton({ phoneNumber = '', message = 'Hello! I would like to know more.', size = 28 }) {
  // Build the wa.me link with an optional prefilled message.
  const baseUrl = `https://wa.me/${phoneNumber}`
  const href = message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl

  return (
    <a
      href={href}
      className="whatsapp-float-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={size} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton