import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import BestSellers from '../components/Bestsellers/Bestsellers'
import SideBy from '../components/SideBy/SideBy'
import CarousalCollection from '../components/Casualcollections/Casualcollections'
import SolidsCollection from '../components/Solidscollection/Solidscollection'
import WarmDaysBanner from '../components/Warmdaysbanner/Warmdaysbanner'
import SpecialCollections from '../components/Specialcollections/Specialcollections'
import Faq from '../components/Faq/Faq'

function home() {
  return (
    <div>
      <HeroSection/>
      <SpecialCollections/>
      <WarmDaysBanner/>
      <CarousalCollection/>
      <SideBy/>
      <SolidsCollection/>
      <BestSellers/>
      <Faq/>
      <Footer/>
      
    </div>
  )
}

export default home
