import React from 'react'
import ReusableBanner from '../Components/ReusableBanner'
import BlogComponent from '../Components/BlogComponent'
import TestimonialSlider from '../Components/Home/TestimonialSlider'

const Blog = () => {
  return (
    <>
      <ReusableBanner PageHeader={"Blog"}/>
      <BlogComponent  />
      <TestimonialSlider />
    </>
  )
}

export default Blog