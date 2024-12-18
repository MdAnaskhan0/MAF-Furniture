import React from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const SliceProduct = () => {
  const { products } = useContext(ProductsContext);
  const SliceProducts = products.slice(2, 5);

  return (
    <>
      <div className="bg-gray-100 min-h-[100vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side information */}
            <div className="md:w-1/3 mb-12 md:mb-0 text-center md:text-left">
              <h3 className="pt-10 sm:pt-0 text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Crafted with Excellent Materials
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati totam exercitationem id quas laborum iusto.
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-block bg-yellow-500 text-black py-2 px-6 rounded hover:bg-yellow-600 transition duration-300"
              >
                Explore
              </Link>
            </div>

            {/* Right side Product Grid */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                {SliceProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="rounded-lg overflow-hidden transform hover:shadow-lg hover:scale-105 transition duration-300 "
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full object-cover h-64 md:h-80 lg:h-96 px-2"
                    />
                    <div className="p-4 flex flex-col items-center">
                      <h2 className="text-base font-semibold mb-2">
                        {product.title.slice(0, 35)}
                      </h2>
                      <div className="text-yellow-500 mb-2">
                        {Array.from({ length: product.rating }).map(
                          (_, index) => (
                            <span key={index}>&#9733;</span>
                          )
                        )}
                      </div>
                      <p className="text-xl text-gray-800 font-bold mb-2">
                        <span className="text-black">
                          ৳ {product.price.toFixed(0)}
                        </span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliceProduct;
