import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu icons
import Logo from "../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md w-full sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 flex items-center">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>

          {/* Hamburger Menu - Small Devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? "block" : "hidden"
              } md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full left-0 top-16 md:top-auto z-50 md:w-auto md:translate-x-0`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center text-gray-700 font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-1  text-green-600 px-4 sm:px-0 sm:border-b-4 border-green-600 transition ease-in-out duration-300"
                      : "block py-2 px-4 hover:text-green-600 transition"
                  }
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Icons */}
            {/* Icons */}
            <div className="flex pb-4 border-b-2 border-green-500 sm:border-b-0 sm:pb-0 justify-center md:justify-start md:mt-0 md:ml-6 space-x-4">
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  `block py-2 ${isActive
                    ? "text-green-600 sm:border-b-4 border-green-600 transition ease-in-out duration-300 text-xl"
                    : "text-gray-800 hover:text-green-600 text-xl"
                  }`
                }
                onClick={toggleMenu}
              >
                <FaUser />
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block py-2 ${isActive
                    ? "text-green-600 sm:border-b-4 border-green-600 transition ease-in-out duration-300 text-xl"
                    : "text-gray-800 hover:text-green-600 text-xl"
                  }`
                }
                onClick={toggleMenu}
              >
                <FaCartShopping />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
