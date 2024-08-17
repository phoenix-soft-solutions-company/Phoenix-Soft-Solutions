import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { xCropLinks, newProject } from "./links";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

function SideBar({ isVisible, onClose }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full bg-white border border-gray-300 text-black flex flex-col py-4 transform transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="flex justify-between px-4 py-2 mb-4">
        <h1 className="text-center text-xl font-bold">Admin Panel</h1>
        <ChevronDoubleLeftIcon className="w-6 h-6 text-black cursor-pointer" onClick={onClose} />
      </div>

      {/* XCrop Links Section */}
      <div className="px-2 mb-2">
        <button
          onClick={() => handleSectionToggle("xcrop")}
          className={`w-full text-left px-4 py-2 font-semibold rounded transition ${
            activeSection === "xcrop"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-white hover:bg-blue-500"
          }`}>
          Xcrop
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            activeSection === "xcrop" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          <ul className="mt-2">
            {xCropLinks.map((link) => (
              <li key={link.path} className="mb-2 px-4">
                <button
                  onClick={() => navigate(link.path)}
                  className="w-full text-left text-gray-500 hover:text-white hover:bg-gray-300 p-2 rounded">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-2 mb-2">
        <button
          onClick={() => handleSectionToggle("newProject")}
          className={`w-full text-left px-4 py-2 font-semibold rounded transition ${
            activeSection === "newProject"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:text-white hover:bg-blue-500"
          }`}>
          ABC web
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            activeSection === "newProject" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          <ul className="mt-2">
            {newProject.map((link) => (
              <li key={link.path} className="mb-2 px-4">
                <button
                  onClick={() => navigate(link.path)}
                  className="w-full text-left text-gray-500 hover:text-white hover:bg-gray-300 p-2 rounded">
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
