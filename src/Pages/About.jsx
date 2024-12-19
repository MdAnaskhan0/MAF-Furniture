import React from 'react'
import ReusableBanner from '../Components/ReusableBanner'
import WhyChoseUs from '../Components/Home/WhyChoseUs'
import OurTeams from '../Components/OurTeams'

const About = () => {
  return (
    <>
      <ReusableBanner PageHeader={"About"} />
      <WhyChoseUs />
      <OurTeams />
    </>
  )
}

export default About