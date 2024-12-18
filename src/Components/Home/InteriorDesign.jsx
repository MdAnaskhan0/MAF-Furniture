import React from 'react';

// Import Image
import Image1 from '../../assets/images/Intorior.png';

// Import Icons
import { FaCircleNotch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InteriorDesign = () => {
  return (
    <>
      <div className="bg-[#EFF2F1] min-h-[100vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <img src={Image1} alt="Interior Design" className="w-full h-auto mx-auto" />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center px-4 md:px-0">
            <h3 className="text-4xl text-center sm:text-left font-bold text-gray-800 mb-4">We Help You Create Modern Living Spaces</h3>
            <p className="text-gray-600 mb-8 px-4 text-sm sm:text-base sm:px-0">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

            <div className="flex flex-col items-center sm:items-start space-y-4">
              <div className="flex sm:items-start">
                <FaCircleNotch className="text-xl sm:text-2xl text-green-600 mr-2" />
                <p className='text-sm sm:text-base'>Donec facilisis quam ut purus rutrum lobortis</p>
              </div>
              <div className="flex items-start">
                <FaCircleNotch className="text-xl sm:text-2xl text-green-600 mr-2" />
                <p className='text-sm sm:text-base'>Donec facilisis quam ut purus rutrum lobortis</p>
              </div>
              <div className="flex items-start">
                <FaCircleNotch className="text-xl sm:text-2xl text-green-600 mr-2" />
                <p className='text-sm sm:text-base'>Donec facilisis quam ut purus rutrum lobortis</p>
              </div>
              <div className="flex items-start">
                <FaCircleNotch className="text-xl sm:text-2xl text-green-600 mr-2" />
                <p className='text-sm sm:text-base'>Donec facilisis quam ut purus rutrum lobortis</p>
              </div>
            </div>

            <Link to="/shop" className="mt-6 block w-max border-2 border-green-500 text-black font-normal py-2 px-6 rounded hover:border-green-600 transition ease-in-out duration-300 mx-auto md:mx-0">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InteriorDesign;
