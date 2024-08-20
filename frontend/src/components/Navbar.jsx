import React, { useState } from "react";
import { LINKS } from "../constants/Links";
import { Link } from "react-router-dom";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo.png";

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
    <nav className="bg-red-800 text-white fixed left-0 top-0 right-0 z-[1000]">
      <div className="w-full h-8 bg-white"><p className="text-black">0769011856</p></div>
      <div className="flex justify-between items-center py-4 px-10">
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
                className="flex flex-row items-center gap-1 hover:bg-red-700  hover:underline underline-offset-8 px-3 py-2 rounded">
                <span className="tracking-wide font-semibold font-mono uppercase text-md">{link.name}</span>
                {link.subpages && (
                  <div className="flex items-center h-full">
                    <ChevronDownIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </Link>

              {link.subpages && link.subpages.length < 5 && dropdownOpen === index && (
                <div className="absolute left-0 z-[999] w-48 bg-red-800 border border-red-700 rounded shadow-lg group-hover:block">
                  {link.subpages.map((subpage, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subpage.path}
                      className="block px-4 py-2 hover:bg-red-700"
                      onClick={toggleNavbar}>
                      <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                        {" "}
                        {subpage.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {link.subpages && link.subpages.length > 5 && dropdownOpen === index && (
                <div className="flex flex-row absolute left-0 z-[999]w-96 bg-red-800 border border-red-700 rounded shadow-lg">
                  <div className="w-48 group-hover:block border-r border-red-700">
                    {link.subpages.slice(0, 9).map((subpage, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subpage.path}
                        className="block px-4 py-2 hover:bg-red-700"
                        onClick={toggleNavbar}>
                        <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                          {" "}
                          {subpage.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="w-48 group-hover:block">
                    {link.subpages.slice(9).map((subpage, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subpage.path}
                        className="block px-4 py-2 hover:bg-red-700"
                        onClick={toggleNavbar}>
                        <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                          {" "}
                          {subpage.name}
                        </span>
                      </Link>
                    ))}
                  </div>
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

      {/* Side bar */}
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto bg-red-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden w-full sm:w-96 p-4 z-[1000]`}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleNavbar}>
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        {LINKS.map((link, index) => (
          <div key={index} className="relative mb-2">
            <div className="flex flex-row justify-between items-center cursor-pointer px-4 py-2 hover:bg-red-700">
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
                    className="block px-4 py-2 hover:bg-red-700"
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
