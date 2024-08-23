import React from "react";
import { HomeIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";

function NavBar({ isSidebarVisible, isSidebarFullyHidden, onOpenSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Generate the navigation path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const navigationPath = pathSegments.map((segment, index) => {
    // Replace dashes with spaces and capitalize the first letter of each word
    const formattedSegment = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <React.Fragment key={segment}>
        <span>{formattedSegment}</span>
        {index < pathSegments.length - 1 && <span className="mx-2">/</span>}
      </React.Fragment>
    );
  });

  return (
    <div
      className={`border border-gray-300 rounded-lg p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}>
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-row items-center">
          {!isSidebarVisible && isSidebarFullyHidden && (
            <button onClick={onOpenSidebar} className="p-2">
              <Bars3Icon className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`} />
            </button>
          )}
          <div className="py-2 ml-2 flex items-center">{navigationPath}</div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <button onClick={toggleDarkMode} className="p-2">
            <SunIcon className={`w-6 h-6 ${isDarkMode ? "text-yellow-400" : "text-black"}`} />
          </button>
          <button onClick={() => navigate("/")}>
            <HomeIcon className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
