import React from 'react'
import ProductGrid from '../Components/ProductGrid'
import Banner from '../Components/Home/Banner'
import SliceProduct from '../Components/Home/SliceProduct'
import WhyChoseUs from '../Components/Home/WhyChoseUs'

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <SliceProduct />   
        <WhyChoseUs /> 
      </div>
    </>
  )
}

export default Home