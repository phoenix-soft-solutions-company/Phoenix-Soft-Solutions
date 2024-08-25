import React, { useState, useEffect } from "react";
import { LINKS } from "../constants/Links";
import { Link } from "react-router-dom";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [navbarBg, setNavbarBg] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  const changeNavbarBg = () => {
    if (window.scrollY >= 100) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 right-0 z-[1000] transition-colors duration-300 ${
        navbarBg ? "bg-white" : "bg-transparent"
      } text-red-600`}>
      <div className="relative">
        <div className="absolute top-[10px] xl:top-[8px] left-4 flex items-center z-[900]">
          <img src={Logo} alt="Company Logo" className="h-12 md:h-20 xl:h-24 mr-6" />
        </div>

        <div className="absolute top-[10px] xl:top-[8px] left-[115px] xl:left-[138px] items-center space-x-4 hidden lg:flex">
          {/* Social Media Icons */}
          <a
            href="https://www.facebook.com/phoenixsoftsolutionsnz?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="w-full h-10 bg-blue-950 items-center justify-between px-4 hidden md:flex">
          <div className="flex items-center space-x-4 ml-auto">
            <p className="text-white font-bold text-sm">info@phoenixsoftsolutions.com</p>
            <p className="text-white font-bold text-sm">Contact Us 77 844 3682</p>
            <a href="/company/Contactus" className="inline-block">
              <button className="bg-red-600 text-white py-1 px-5 text-xs sm:text-sm">
                Have Any Questions??
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-end items-center py-4 px-10">
          <div className="hidden xl:flex space-x-1">
            {LINKS?.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => toggleDropdown(null)}>
                <Link
                  to={link.path}
                  className="flex flex-row items-center gap-1 hover:bg-red-400  hover:underline underline-offset-8 px-3 py-2 rounded">
                  <span className="tracking-wide font-semibold font-mono uppercase text-md">{link.name}</span>
                  {link.subpages && (
                    <div className="flex items-center h-full">
                      <ChevronDownIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </Link>

                {link.subpages && link.subpages.length < 5 && dropdownOpen === index && (
                  <div className="absolute left-0 z-[999] w-48 bg-white border border-red-700 rounded shadow-lg group-hover:block">
                    {link.subpages.map((subpage, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subpage.path}
                        className="block px-4 py-2 hover:bg-red-400"
                        onClick={toggleNavbar}>
                        <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                          {subpage.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                {link.subpages && link.subpages.length > 5 && dropdownOpen === index && (
                  <div className="flex flex-row absolute left-0 z-[1001] w-96 bg-white border border-red-700 rounded shadow-lg">
                    <div className="w-48 group-hover:block border-r border-red-700">
                      {link.subpages.slice(0, 9).map((subpage, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subpage.path}
                          className="block px-4 py-2 hover:bg-red-400"
                          onClick={toggleNavbar}>
                          <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
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
                          className="block px-4 py-2 hover:bg-red-400"
                          onClick={toggleNavbar}>
                          <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
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
      </div>

      {/* Side bar */}
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto bg-white text-red-600 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden w-60 sm:w-96 p-4 z-[1000]`}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleNavbar}>
            <XMarkIcon className="w-6 h-6 text-red-600" />
          </button>
        </div>

        {/* Blue bar with social icons and contact information */}
        <div className="w-full bg-blue-950 py-4 px-2 mb-4 flex flex-col items-center space-y-2 lg:hidden">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.facebook.com/phoenixsoftsolutionsnz?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="text-center text-white font-bold text-xs">info@phoenixsoftsolutions.com</p>
          <p className="text-center text-white font-bold text-sm">Contact Us 77 844 3682</p>
          <a href="/company/Contactus" className="text-center">
            <button className="bg-red-600 text-white py-2 px-6 text-xs sm:text-sm">
              Have Any Questions??
            </button>
          </a>
        </div>

        {/* Navigation Links */}
        {LINKS.map((link, index) => (
          <div key={index} className="relative mb-2">
            <div className="flex flex-row justify-between items-center cursor-pointer px-4 py-2 hover:bg-red-300">
              <Link to={link.path} className="block px-4 py-2" onClick={toggleNavbar}>
                <span className="tracking-wide font-semibold hover:underline underline-offset-8 font-mono uppercase text-md">
                  {link.name}
                </span>
              </Link>

              {link.subpages && (
                <ChevronDownIcon
                  onClick={() => toggleMobileDropdown(index)}
                  className="w-5 h-5 text-red-600"
                />
              )}
            </div>

            {link.subpages && mobileDropdownOpen === index && (
              <div className="pl-10">
                {link.subpages.map((subpage, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subpage.path}
                    className="block px-4 py-2 hover:bg-red-200"
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
