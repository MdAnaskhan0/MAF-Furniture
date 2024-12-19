import React from 'react';
import { ProductsContext } from "../../Context/ProductsContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const PopularProduct = () => {
    const { products } = useContext(ProductsContext);
    const popularProduct = products.slice(0, 3);
    return (
        <>
            <div className="bg-[#EFF2F1] min-h-[30vh] flex items-center justify-center">
                <div className="container mx-auto px-10 py-8 grid md:grid-cols-3 gap-8">
                    {/* Popular Product Items */}
                    {popularProduct.map((product) => (
                        <div key={product.id} className="">
                            <Link to={`/product/${product.id}`} className='flex justify-between items-center gap-4'>
                                <div className="overflow-hidden rounded-lg">
                                    <img src={product.images[0]} alt={product.title} className="w-[250px] h-[250px] object-scale-down" />
                                </div>
                                <div>
                                    <h2 className="text-base font-bold mb-2">{product.title.slice(0, 22)}</h2>
                                    <p className="text-gray-600 mb-4 pr-3 sm:pr-8 text-sm">{product.description.slice(0, 45)}...</p>
                                    <Link to={`/product/${product.id}`} className="text-[#3B5D50] font-semibold hover:text-green-700">View Details...</Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PopularProduct;
