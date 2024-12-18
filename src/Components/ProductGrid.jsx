import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const { products, error, isLoading } = useContext(ProductsContext);

  if (isLoading)
    return <p className="text-center mt-10 text-lg">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1> */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="rounded-lg overflow-hidden transform hover:shadow-lg hover:scale-105 transition duration-300 border border-gray-300 sm:border-none"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="sm:w-full object-cover sm:h-64 md:h-80 lg:h-96 px-2"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xs sm:text-base font-semibold mb-2">
                {product.title.slice(0, 35)}
              </h2>
              <div className="text-yellow-500 mb-2 text-sm sm:text-lg">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
              <p className="text-xl text-gray-800 font-bold mb-2">
                <span className="text-black">৳ {product.price.toFixed(0)}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
