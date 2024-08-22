import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { xCropLinks } from "./links";
import { BookmarkIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../../DarkModeContext";

function SideBar({ isVisible, onClose }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const { isDarkMode } = useDarkMode();

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full border border-gray-300  flex flex-col py-4 transform transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"}`}
    >
      <div className="flex justify-between px-4 py-2 mb-4">
        <h1 className="text-center text-xl font-bold">Admin Panel</h1>
        <ChevronDoubleLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* XCrop Links Section */}
      <div className="px-2 mb-2">
        <button
          onClick={() => handleSectionToggle("xcrop")}
          className={`w-full text-left px-4 py-2 font-semibold rounded transition hover:bg-blue-500 ${
            activeSection === "xcrop" && "bg-blue-500"
          }`}
        >
          Phoenix Soft Solutions
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            activeSection === "xcrop"
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mt-2">
            {xCropLinks.map((link) => (
              <li
                key={link.path}
                className="flex flex-row mb-2 px-4 rounded ml-2"
              >
                <BookmarkIcon
                  className={`w-6 h-6 ${
                    activeLink === link.path ? "text-blue-500" : "text-gray-400"
                  } hover:text-blue-500 cursor-pointer mt-2`}
                />
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full text-left p-2 ${
                    activeLink === link.path
                      ? "text-blue-500"
                      : "text-gray-400 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* New Project Links Section */}
    </div>
  );
}

export default SideBar;
