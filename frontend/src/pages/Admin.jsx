import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

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
              className="border-2 border-green-700 bg-green-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-green-700 transition duration-500">
              Counter
            </button>
            <button
              onClick={() => navigate("/admin/project")}
              className="border-2 border-green-700 bg-green-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-green-700 transition duration-500">
              Project
            </button>
            <button
              onClick={() => navigate("/admin/event")}
              className="border-2 border-green-700 bg-green-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-green-700 transition duration-500">
              Event
            </button>
            <button
              onClick={() => navigate("/admin/feedback")}
              className="border-2 border-green-700 bg-green-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-green-700 transition duration-500">
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
