import React from "react";
import loginImage from "../constants/images/login.avif";
import { HomeIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or authentication here

    // On successful login, navigate to the admin page
    window.open("/admin/xcrop/counter", "_blank");
  };

  return (
    <div>
      <div className="bg-red-800 text-white py-4 px-10 fixed left-0 top-0 right-0 z-[1000]">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={Logo} alt="Company Logo" className="h-8 lg:h-10 mr-4" />
            <span className="text-xl lg:text-2xl font-bold tracking-widest font-serif">Xcrop</span>
          </div>

          <div className="flex flex-row">
            <button onClick={() => navigate("/")}>
              <HomeIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center p-4 lg:p-10 mt-16">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-2 sm:p-6 w-full">
          <div className="mb-6 w-full lg:w-1/2 lg:border-r-2 lg:border-red-800">
            <img
              src={loginImage} // Use the imported image
              alt="login"
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>

          <div className="px-4 sm:px-8 w-full lg:w-1/2 mx-auto my-auto lg:pl-16">
            <div className="">
              <form className="" onSubmit={handleSubmit}>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2 lg:mt-6">Sign In</h1>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-xl font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign In
                </button>
              </form>
              <div className="mt-6 flex items-center justify-between">
                <hr className="w-full border-gray-300" />
                <span className="mx-4 text-sm text-gray-500">OR</span>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="white">
                    <path d="M44.5,20H24v8.5h12c-1.6,4.6-5.8,8-10.9,8C19.1,36.5,14.5,31.9,14.5,26S19.1,15.5,24,15.5c2.1,0,4,0.6,5.6,1.7l6.2-6.2 C32.3,8.5,28.3,7,24,7C14.3,7,6.5,14.8,6.5,24.5S14.3,42,24,42c11.7,0,20.5-10.4,19.3-22h-0.8H44.5z" />
                  </svg>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="white">
                    <path d="M24,4C12.9,4,4,12.9,4,24c0,9.5,6.6,17.4,15.3,19.4v-13.7H13v-5.7h6.3v-4.4c0-6.3,3.8-9.7,9.4-9.7c2.7,0,5,0.2,5.7,0.3v6.6 h-3.9c-3.1,0-3.8,1.5-3.8,3.7v4.6h7.7l-1,5.7h-6.7v13.7C37.4,41.4,44,33.5,44,24C44,12.9,35.1,4,24,4z" />
                  </svg>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
