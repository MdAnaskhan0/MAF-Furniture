import React from 'react';
import { FaShippingFast, FaCouch, FaRedo, FaPhoneAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast className="text-2xl sm:text-4xl text-[#3B5D50]" />,
      title: 'Free Shipping',
      description: 'Get free shipping on all orders over $100. Fast and reliable delivery to your doorstep.',
    },
    {
      id: 2,
      icon: <FaCouch className="text-2xl sm:text-4xl text-[#3B5D50]" />,
      title: 'Premium Quality',
      description: 'Our furniture is crafted with the finest materials to ensure long-lasting comfort and style.',
    },
    {
      id: 3,
      icon: <FaRedo className="text-2xl sm:text-4xl text-[#3B5D50]" />,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days for a smooth and satisfying shopping experience.',
    },
    {
      id: 4,
      icon: <FaPhoneAlt className="text-2xl sm:text-4xl text-[#3B5D50]" />,
      title: '24/7 Support',
      description: 'Our team is here to assist you with any questions or concerns, day or night.',
    },
  ];

  return (
    <div className="bg-[#EFF2F1] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Experience unparalleled services designed to enhance your furniture shopping journey.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-1">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 sm:p-6 text-left transition-transform transform hover:-translate-y-3"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
