import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Retrieve the email from local storage
  const email = localStorage.getItem("EmailAuth");

  // Check if the user is authenticated
  const isAuthenticated = email === "madushangroup1@gmail.com";

  // Otherwise, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
