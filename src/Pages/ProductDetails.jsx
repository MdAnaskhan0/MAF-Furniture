import React from 'react'
import SingleProduct from '../Components/SingleProduct'
import ReuseableBanner from '../Components/ReusableBanner'

const ProductDetails = () => {
  return (
    <>
        <ReuseableBanner PageHeader={"Product Info"}/>
        <SingleProduct />
    </>
  )
}

export default ProductDetails