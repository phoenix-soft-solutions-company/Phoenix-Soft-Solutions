import React, { useState, useEffect } from "react";
import loginImage from "../constants/images/login.avif";
import { HomeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenise } from "../utils/rsa.encrypt";
import { identifyError } from "../utils/identify.error";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Email") && localStorage.getItem("Password")) {
      setEmail(localStorage.getItem("Email"));
      setPassword(atob(localStorage.getItem("Password")));
      setRemember(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter the credentials");
      return;
    }

    setError(null);

    const userCredentials = {
      email: email,
      password: password,
    };

    let token;

    try {
      token = await tokenise(userCredentials);
    } catch (error) {
      setError("An error occurred! Please try again");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, { token })
      .then((response) => {
        // Save or remove the username and password from local storage
        localStorage.setItem("EmailAuth", email);
        if (remember) {
          localStorage.setItem("Email", email);
          localStorage.setItem("Password", btoa(password));
        } else {
          localStorage.removeItem("Email");
          localStorage.removeItem("Password");
        }

        window.open("/phoenix-soft-admin-counter", "_blank");
      })
      .catch((error) => {
        setError(identifyError(error.response?.data?.code));
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="bg-red-600 text-white py-4 px-10 fixed left-0 top-0 right-0 z-[1000]">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={Logo} alt="Company Logo" className="h-8 lg:h-10 mr-4" />
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
            <img src={loginImage} alt="login" className="w-full sm:w-[500px] mx-auto" />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="password" className="block text-xl font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>

                <div className="flex flex-row justify-between mb-4">
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                      className="accent-[#2852dd] mr-2"
                    />
                    <label htmlFor="checkbox ml-2">Remember me</label>
                  </div>
                  <div>
                    <p>
                      <a href="#forget">Forget Password?</a>
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign In
                </button>
                {error && <div className="mt-4 text-center text-red-500">{error}</div>}
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
