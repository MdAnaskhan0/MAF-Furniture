import React from "react";
import BannerImage from '../assets/images/couch.png';

const ReusableBanner = ({PageHeader}) => {
  return (
    <>
      <div className="bg-[#3B5D50] max-h-[55vh] py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-0 md:space-y-0 md:space-x-8">
          {/* Banner Text */}
          <div className="flex flex-col gap-4 sm:gap-8 text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl sm:pl-5 font-bold text-white">{PageHeader}</h1> 
          </div>

          {/* Banner Image */}
          <div className="md:w-1/2">
            <img
              src={BannerImage}
              alt="Furniture Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableBanner;
