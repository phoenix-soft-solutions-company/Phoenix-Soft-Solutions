import React, { useState } from "react";
import { LINKS } from "../constants/Links";
import { Link } from "react-router-dom";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
    <nav className="bg-gray-800 text-white py-4 px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="h-8 lg:h-10 mr-4" />
          <span className="text-xl lg:text-2xl font-bold tracking-widest font-serif">Xcrop</span>
        </div>
        <div className="hidden xl:flex space-x-1">
          {LINKS?.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}>
              <Link
                to={link.path}
                className="flex flex-row items-center gap-1 hover:bg-gray-700  hover:underline underline-offset-8 px-3 py-2 rounded">
                <span className="tracking-wide font-semibold font-mono uppercase text-md">{link.name}</span>
                {link.subpages && (
                  <div className="flex items-center h-full">
                    <ChevronDownIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </Link>

              {link.subpages && dropdownOpen === index && (
                <div className="absolute left-0 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg group-hover:block">
                  {link.subpages.map((subpage, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subpage.path}
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={toggleNavbar}>
                      <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                        {" "}
                        {subpage.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden w-full sm:w-96 p-4`}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleNavbar}>
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        {LINKS.map((link, index) => (
          <div key={index} className="relative mb-2">
            <div className="flex flex-row justify-between items-center cursor-pointer px-4 py-2 hover:bg-gray-700">
              <Link to={link.path} className="block px-4 py-2" onClick={toggleNavbar}>
                <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                  {link.name}
                </span>
              </Link>

              {link.subpages && (
                <ChevronDownIcon onClick={() => toggleMobileDropdown(index)} className="w-5 h-5 text-white" />
              )}
            </div>

            {link.subpages && mobileDropdownOpen === index && (
              <div className="pl-10">
                {link.subpages.map((subpage, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subpage.path}
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={toggleNavbar}>
                    <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                      {subpage.name}
                    </span>
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
