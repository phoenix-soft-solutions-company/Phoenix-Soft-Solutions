import React, { useState } from "react";
import { LINKS } from "../constants/Links";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">Xcrop</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {LINKS?.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}>
              <Link to={link.path} className="hover:bg-gray-700 px-3 py-2 rounded">
                {link.name}
              </Link>
              {link.subpages && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg">
                  {link.subpages.map((subpage, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subpage.path}
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={toggleNavbar}>
                      {subpage.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden w-full sm:w-96 p-4`}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleNavbar}>
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        {LINKS.map((link, index) => (
          <div key={index} className="relative mb-2">
            <div
              onClick={() => toggleMobileDropdown(index)}
              className="cursor-pointer block px-4 py-2 hover:bg-gray-700">
              {link.name}
            </div>
            {link.subpages && mobileDropdownOpen === index && (
              <div className="ml-4">
                {link.subpages.map((subpage, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subpage.path}
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={toggleNavbar}>
                    {subpage.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
