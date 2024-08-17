import React from 'react'
import { HomeIcon, SunIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <div className="flex justify-end items-center">
        <div className="flex flex-row gap-4">
          <button>
            <SunIcon className="w-6 h-6 text-black" />
          </button>
          <button onClick={() => navigate("/")}>
            <HomeIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar