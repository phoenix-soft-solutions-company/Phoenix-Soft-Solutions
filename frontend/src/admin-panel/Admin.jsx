import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Admin() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSidebarFullyHidden, setIsSidebarFullyHidden] = useState(false);

  useEffect(() => {
    if (!isSidebarVisible) {
      const timer = setTimeout(() => {
        setIsSidebarFullyHidden(true);
      }, 100); // Match this duration with the sidebar transition time

      return () => clearTimeout(timer);
    } else {
      setIsSidebarFullyHidden(false);
    }
  }, [isSidebarVisible]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200">
      <SideBar
        isVisible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
        className="lg:fixed lg:left-0 lg:top-0 lg:w-64 lg:h-full"
      />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarVisible ? "lg:ml-64 lg:w-[calc(100%-16rem)]" : "lg:ml-0 lg:w-full"
        } px-4 py-2`}>
        <NavBar
          isSidebarVisible={isSidebarVisible}
          isSidebarFullyHidden={isSidebarFullyHidden}
          onOpenSidebar={() => setIsSidebarVisible(true)}
        />

        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4 min-h-[85vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
