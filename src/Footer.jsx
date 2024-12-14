import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function Footer() {
  return (
    <div className="w-[100vw] bg-zinc-900 text-white poppins-light">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <img src="src/assets/logo.png" className="h-16" alt="Manba Finance Logo" />
          <h1 className="text-white text-2xl font-normal">Manba Finaserve</h1>
          <div className="border-t-2 border-zinc-700 w-[100%] mt-20"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
          <div className="md:w-[60%]">
            <p className="text-white text-md leading-6">
              With thousands of people starting up new businesses every day, thousands of families looking for a new mortgage and so on, loan companies play a vital role in today's society...
            </p>
            <div className="flex flex-col gap-4 text-stone-50 mt-4">
              <p className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-lg text-gray-400" />
                <strong>Address:</strong> 312, Superdiamond Market
              </p>
              <p className="flex items-center gap-2 text-sm">
                <FaPhoneAlt className="text-lg text-gray-400" />
                <strong>Phone:</strong> +91 22 6212 5000
              </p>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-wrap justify-between gap-16">
            <div>
              <h2 className="text-xl font-semibold mb-4">Pages</h2>
              <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <Link to="/">Home</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <Link to="/about">About Us</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <Link to="/about">Contact Us</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <Link to="/services">Service</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <a href="#">Loan</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Loan</h2>
              <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <a href="#">Home Loan</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <a href="#">Personal Loan</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <a href="#">Gold Loan</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <IoIosArrowForward className="text-gray-500" />
                  <a href="#">Business Loan</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Social Media</h2>
              <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-center gap-2 hover:text-white">
                  <FaFacebook className="text-lg text-blue-600" />
                  <a href="#">Facebook</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <FaInstagram className="text-lg text-pink-500" />
                  <a href="#">Instagram</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <FaTwitter className="text-lg text-blue-400" />
                  <a href="#">Twitter</a>
                </li>
                <li className="flex items-center gap-2 hover:text-white">
                  <FaLinkedin className="text-lg text-blue-700" />
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black text-sm py-4 px-6 md:px-12 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© Manba Finaserve Holdings Limited</span>
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-lg text-black" />
          <a href="mailto:manbafinaserve@gmail.com" className="hover:underline">
            manbafinaserve@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
