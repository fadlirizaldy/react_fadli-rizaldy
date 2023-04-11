import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
