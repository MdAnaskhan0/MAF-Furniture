import React from 'react';
import bannerImage from '../../assets/images/couch.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="bg-[#3B5D50] min-h-[100vh] py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Banner Text */}
          <div className="flex flex-col gap-4 sm:gap-8 text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Welcome to <span className="text-green-600">MAF Furniture</span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg">
              Modern Interior Design Studio
            </p>
            <div className='flex justify-center md:justify-start gap-5 font-normal'>
              <Link to="/shop" className="border-2 bg-yellow-500 border-yellow-500 text-black py-2 px-6 rounded hover:border-yellow-600 hover:bg-yellow-600 transition ease-in-out duration-300">
                Shop Now
              </Link>
              <Link to="/shop" className="border-2 border-green-500 text-white py-2 px-6 rounded hover:border-green-600 transition ease-in-out duration-300">
                Explore
              </Link>
            </div>
          </div>

          {/* Banner Image */}
          <div className="md:w-1/2">
            <img src={bannerImage} alt="Furniture Banner" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
