import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#EFF2F1] min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div className="p-1 sm:p-8 flex items-center justify-center">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="max-w-xs sm:max-w-full h-auto sm:object-contain"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
              {product?.title}
            </h1>
            <p className="text-gray-800 sm:pr-12 mt-4 text-base">
              Product ID: {product?.sku}
            </p>
            <p className="text-gray-500 sm:pr-12 mt-4 text-sm sm:text-base">
              {product?.description}
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-md sm:text-xl font-semibold bg-[#3B5D50] text-white px-4 py-2 rounded-md max-w-fit">
                Price: <span>৳</span> {product.price?.toFixed(0)}
              </p>

              <div className="text-yellow-500 mb-2 text-lg sm:text-2xl">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}{" "}
                <span className="text-black text-base sm:text-lg">{product?.rating}</span>
              </div>
              <p className="text-sm sm:text-md font-medium">Brand: {product?.brand}</p>
              <p className="text-sm sm:text-md font-medium">
                Category: {product?.category}
              </p>
              <p className="text-md font-medium">
                Stock: {product?.availabilityStatus}
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-[#3B5D50] border-2 border-[#3B5D50] text-white px-6 py-2 rounded-md hover:bg-[#3B6D50] transition ease-linear duration-300">
                Add to Cart
              </button>
              <button className="ml-4 border-2 border-[#3B5D50] text-black px-6 py-2 rounded-md hover:bg-[#3B6D50] hover:text-white transition ease-linear duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold uppercase text-gray-800 border-b pb-4 mb-6">
            Product Details
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start justify-start">
              <span className="font-medium text-gray-900">Dimensions:</span>
              &nbsp;
              <span className="text-sm flex flex-col">
                
                <span className="text-gray-800">
                Depth:{" "}{product?.dimensions?.depth} cm
                </span>
                 
                <span className="text-gray-800">
                Height:{" "}{product?.dimensions?.height} cm
                </span>
        
                <span className="text-gray-800">
                Width:{" "}{product?.dimensions?.width} cm
                </span>
              </span>
            </p>
            <hr className="border-gray-200"/>
            <p className="flex items-center">
              <span className="font-medium text-gray-900">
                Shipping:
              </span>
              &nbsp;
              <span className="text-gray-800">
                {product?.shippingInformation || "Not available"}
              </span>
            </p>
            <hr className="border-gray-200"/>
            <p className="flex items-center">
              <span className="font-medium text-gray-900">
                Warranty:
              </span>
              &nbsp;
              <span className="text-gray-800">
                {product?.warrantyInformation || "Not available"}
              </span>
            </p>
          </div>
        </div>

        {/* Product Reviews */}
        {product?.reviews?.length > 0 && (
          <div className="my-12">
            <h2 className="text-3xl font-semibold uppercase text-gray-800 mb-6">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product?.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white shadow-md rounded-lg p-6"
                >
                  <p className="italic text-gray-700">"{review.comment}"</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-500">
                      - {review.reviewerName}
                    </p>
                    <p className="text-md text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
