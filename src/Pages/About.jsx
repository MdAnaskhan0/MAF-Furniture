import React from 'react'
import ReusableBanner from '../Components/ReusableBanner'
import WhyChoseUs from '../Components/Home/WhyChoseUs'
import OurTeams from '../Components/OurTeams'
import TestimonialSlider from '../Components/Home/TestimonialSlider'

const About = () => {
  return (
    <>
      <ReusableBanner PageHeader={"About MAF"} />
      <WhyChoseUs />
      <OurTeams />
      <TestimonialSlider />
    </>
  )
}

export default About