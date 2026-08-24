import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import BestSellers from '../components/Bestsellers/Bestsellers'

function home() {
  return (
    <div>
      <HeroSection/>
      <BestSellers/>
      <Footer/>
      
    </div>
  )
}

export default home
