import React from 'react'
import { HomeIcon, SunIcon } from "@heroicons/react/24/outline";
import { useNavigate ,useLocation} from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Generate the navigation path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const navigationPath = pathSegments.map((segment, index) => (
    <React.Fragment key={segment}>
      <span>{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
      {index < pathSegments.length - 1 && <span className="mx-2">/</span>}
    </React.Fragment>
  ));

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <div className="flex justify-between items-center px-5">
        <div className="py-2 text-gray-700">{navigationPath}</div>
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