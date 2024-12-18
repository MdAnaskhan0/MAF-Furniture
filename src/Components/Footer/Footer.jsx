import React from "react";
import Sofa from "../../assets/images/sofa.png";
import Logo from "../Logo";
import { CiMail } from "react-icons/ci";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section bg-white py-10 sm:py-16 md:py-20 relative">
      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="sofa-img relative sm:absolute sm:top-[-150px] sm:right-0 z-1 mt-6 sm:mt-0">
          <img
            src={Sofa}
            alt="Sofa"
            className="w-2/3 mx-auto sm:max-w-[300px] md:max-w-[380px] lg:max-w-[400px]"
          />
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col lg:flex-row lg:items-center mb-10">
          <div className="lg:w-2/3">
            <div className="subscription-form">
              <h3 className="text-xl font-medium text-primary flex items-center mb-6">
                <CiMail className="mr-2 text-primary text-2xl" />
                Subscribe to Newsletter
              </h3>
              <form
                action="#"
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <input
                  type="text"
                  className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#3B5D50] focus:border-[#3B5D50]"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#3B5D50] focus:border-[#3B5D50]"
                  placeholder="Enter your email"
                />
                <button className="bg-[#3B5D50] py-2 px-7 rounded-md">
                  <FaTelegramPlane className="text-2xl text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links and About Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-4">
              <Logo />
            </Link>
            <p className="text-gray-600 mb-6 text-sm">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique.
            </p>
            {/* Social Media Links */}
            <ul className="flex gap-4">
              <li>
                <Link
                  to="https://www.facebook.com"
                  className="text-gray-600 hover:text-[#3B5D50] transition"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.twitter.com"
                  className="text-gray-600 hover:text-[#3B5D50] transition"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com"
                  className="text-gray-600 hover:text-[#3B5D50] transition"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com"
                  className="text-gray-600 hover:text-[#3B5D50] transition"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/about" className="hover:text-[#3B5D50] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-[#3B5D50] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#3B5D50] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3B5D50] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/support" className="hover:text-[#3B5D50] transition">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge"
                  className="hover:text-[#3B5D50] transition"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  to="/live-chat"
                  className="hover:text-[#3B5D50] transition"
                >
                  Live Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/jobs" className="hover:text-[#3B5D50] transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#3B5D50] transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-[#3B5D50] transition"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#3B5D50] transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/nordic-chair"
                  className="hover:text-[#3B5D50] transition"
                >
                  Nordic Chair
                </Link>
              </li>
              <li>
                <Link
                  to="/kruzo-aero"
                  className="hover:text-[#3B5D50] transition"
                >
                  Kruzo Aero
                </Link>
              </li>
              <li>
                <Link
                  to="/ergonomic-chair"
                  className="hover:text-[#3B5D50] transition"
                >
                  Ergonomic Chair
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center lg:text-left">
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
              &mdash; Designed with love by{" "}
              <Link
                to="https://mdanaskhan.vercel.app/"
                className="text-[#3B5D50] hover:underline"
              >
                Md. Anas Khan
              </Link>{" "}
              Distributed By{" "}
              <Link
                to="https://github.com"
                className="text-[#3B5D50] hover:underline"
              >
                Github
              </Link>
            </p>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-[#3B5D50] transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#3B5D50] transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
