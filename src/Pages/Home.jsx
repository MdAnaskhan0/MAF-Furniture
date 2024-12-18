import React from 'react'
import ProductGrid from '../Components/ProductGrid'
import Banner from '../Components/Home/Banner'
import SliceProduct from '../Components/Home/SliceProduct'
import WhyChoseUs from '../Components/Home/WhyChoseUs'
import InteriorDesign from '../Components/Home/InteriorDesign'
import PopularProduct from '../Components/Home/PopularProduct'
import TestimonialSlider from '../Components/Home/TestimonialSlider'

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <SliceProduct />   
        <WhyChoseUs /> 
        <InteriorDesign />
        <PopularProduct />
        <TestimonialSlider />
      </div>
    </>
  )
}

export default Home