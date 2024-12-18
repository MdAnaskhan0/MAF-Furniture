import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const { products, error, isLoading } = useContext(ProductsContext);

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              <p className="text-gray-800 font-bold mb-2">
                Price: <span className="text-green-600">৳{product.price}</span>
              </p>
              <p className="text-yellow-500">
                Rating: {product.rating} ★
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
