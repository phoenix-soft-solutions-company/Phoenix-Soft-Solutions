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
      }, 100); 

      return () => clearTimeout(timer); 
    } else {
      setIsSidebarFullyHidden(false);
    }
  }, [isSidebarVisible]);

  return (
    <div className="flex flex-row min-h-screen bg-gray-200">
      <SideBar isVisible={isSidebarVisible} onClose={() => setIsSidebarVisible(false)} />

      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarVisible ? "ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"
        } px-4 py-2`}>
        {!isSidebarVisible && isSidebarFullyHidden && (
          <button onClick={() => setIsSidebarVisible(true)} className="p-2 fixed top-6 left-4">
            <Bars3Icon className="w-6 h-6 text-black" />
          </button>
        )}
        <NavBar />
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4 min-h-[85vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
