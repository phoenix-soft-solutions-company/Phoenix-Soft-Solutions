import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active path
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div className="flex justify-center p-4">
        <div>
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={() => navigate("/admin/counter")}
              className={`border-2 py-4 px-8 text-base rounded transition duration-500 ${
                isActive("/admin/counter")
                  ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800"
                  : "border-green-700 bg-green-700 text-white hover:bg-green-800"
              }`}>
              Counter
            </button>
            <button
              onClick={() => navigate("/admin/project")}
              className={`border-2 py-4 px-8 text-base rounded transition duration-500 ${
                isActive("/admin/project")
                  ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800"
                  : "border-green-700 bg-green-700 text-white hover:bg-green-800"
              }`}>
              Project
            </button>
            <button
              onClick={() => navigate("/admin/event")}
              className={`border-2 py-4 px-8 text-base rounded transition duration-500 ${
                isActive("/admin/event")
                  ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800"
                  : "border-green-700 bg-green-700 text-white hover:bg-green-800"
              }`}>
              Event
            </button>
            <button
              onClick={() => navigate("/admin/feedback")}
              className={`border-2 py-4 px-8 text-base rounded transition duration-500 ${
                isActive("/admin/feedback")
                  ? "border-blue-700 bg-blue-700 text-white hover:bg-blue-800"
                  : "border-green-700 bg-green-700 text-white hover:bg-green-800"
              }`}>
              Feedback
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
