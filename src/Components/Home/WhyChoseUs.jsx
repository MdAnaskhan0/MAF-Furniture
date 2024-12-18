import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { GiCycle } from "react-icons/gi";
import WhyChoseImage from '../../assets/images/why-choose-us-img.jpg';

const WhyChoseUs = () => {
  return (
    <div className="bg-[#EFF2F1] min-h-[100vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Why Chose Us */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h3>
            <p className="text-gray-600 mb-8 px-4 text-sm sm:text-base sm:px-0">
              Discover why our customers choose MAF Furniture for their home decor needs. Our commitment to quality, customer satisfaction, and innovation is unmatched.
            </p>

            <div className='grid grid-cols-2 sm:grid-cols-2 gap-8'>
              <div className="flex flex-col items-center md:items-start gap-2">
                <TbTruckDelivery className='text-4xl text-green-600' />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Fast & Free Delivery</h4>
                  <p className="text-gray-500 sm:px-0 text-xs sm:text-sm">We offer speedy and cost-free delivery to ensure your furniture arrives on time and in perfect condition.</p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <IoBagHandleOutline className='text-4xl text-green-600' />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Easy to Shop</h4>
                  <p className="text-gray-500 sm:px-0 text-xs sm:text-sm">Shop with confidence on our user-friendly website, where browsing and buying are a breeze.</p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start  gap-2">
                <HiOutlineSupport className='text-4xl text-green-600' />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">24/7 Support</h4>
                  <p className="text-gray-500 sm:px-0 text-xs sm:text-sm">Our dedicated customer support team is always ready to assist you, day or night.</p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-2">
                <GiCycle className='text-4xl text-green-600' />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Hassle-Free Returns</h4>
                  <p className="text-gray-500 sm:px-0 text-xs sm:text-sm">If you're not satisfied, return your purchase with ease. No questions asked.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Chose Us Image */}
          <div className="md:w-1/2">
            <img src={WhyChoseImage} alt="Why Choose Us" className="w-3/4 h-auto rounded-lg shadow-lg mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
