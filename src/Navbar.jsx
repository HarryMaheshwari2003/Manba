import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-26 w-full bg-white poppins-light relative z-10">
      <div className="flex justify-between items-center px-6 py-4 lg:px-[90px]">
        <div className="logo flex gap-4 items-center">
          <img
            src="src/assets/logo.png"
            className="h-12 w-10 sm:h-16 sm:w-14 lg:h-18 lg:w-14"
            alt="Logo"
          />
          <h1 className="text-blue-600 font-medium text-lg sm:text-xl lg:text-2xl">
            Manba Finaserve
          </h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-600 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div
          className={`absolute top-20 left-0 w-full bg-white text-center md:static md:w-auto md:flex md:items-center md:gap-9 ${isMenuOpen ? 'block' : 'hidden'
            }`}
        >
          <ul className="flex  flex-col md:flex-row gap-5 md:gap-9 text-lg sm:text-xl lg:text-xl text-blue-950 px-6 md:px-0">
            <li className="relative group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 cursor-pointer'
                    : 'text-blue-950 hover:text-blue-600 cursor-pointer'
                }
              >
                Home
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 cursor-pointer'
                    : 'text-blue-950 hover:text-blue-600 cursor-pointer'
                }
              >
                About Us
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 cursor-pointer'
                    : 'text-blue-950 hover:text-blue-600 cursor-pointer'
                }
              >
                Service
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 cursor-pointer'
                    : 'text-blue-950 hover:text-blue-600 cursor-pointer'
                }
              >
                Contact Us
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
