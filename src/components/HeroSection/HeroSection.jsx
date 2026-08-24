import React from 'react'
import Navbar from '../Navbar/Navbar'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section relative w-full flex items-center">
      <Navbar />

      <div className="hero-text flex flex-col px-6">
      </div>     
    </section>
  )
}

export default HeroSection