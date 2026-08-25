import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import BestSellers from '../components/Bestsellers/Bestsellers'
import SideBy from '../components/SideBy/SideBy'
import CarousalCollection from '../components/Casualcollections/Casualcollections'
import SolidsCollection from '../components/Solidscollection/Solidscollection'
import WarmDaysBanner from '../components/Warmdaysbanner/Warmdaysbanner'
import SpecialCollections from '../components/Specialcollections/Specialcollections'

function home() {
  return (
    <div>
      <HeroSection/>
      <SpecialCollections/>
      <CarousalCollection/>
      <SideBy/>
      <SolidsCollection/>
      <WarmDaysBanner/>
      <BestSellers/>
      <Footer/>
      
    </div>
  )
}

export default home
