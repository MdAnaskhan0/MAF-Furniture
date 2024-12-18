import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const SingleProduct = () => {
    const {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            setProduct(res.data);
        })
    }, [])
    

  return (
   <>
    <div>
        {/* Left side image */}
        <div>
            <img src={product?.images[0]} alt={product?.title} />
        </div>
        {/* Right side details */}
        <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <p>Price: {product?.price}</p>
            <p>Rating: {product?.rating}</p>
        </div>
    </div>
   </>
  )
}

export default SingleProduct