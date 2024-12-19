import React from 'react'
import ReusableBanner from '../Components/ReusableBanner'
import Services from '../Components/Services'
import InteriorDesign from '../Components/Home/InteriorDesign'
import SliceProduct from '../Components/Home/SliceProduct'
import TestimonialSlider from '../Components/Home/TestimonialSlider'
const Service = () => {
  return (
    <>
      <ReusableBanner PageHeader={"Services"}/>
      <Services />
      <InteriorDesign />
      <SliceProduct />
      <TestimonialSlider />
    </>
  )
}

export default Service