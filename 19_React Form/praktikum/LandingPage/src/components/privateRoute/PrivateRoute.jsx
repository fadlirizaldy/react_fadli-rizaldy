import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../../contexts/LoginContext";

const PrivateRoute = () => {
  const { state } = useLogin();
  //   let isSignup = localStorage.getItem("isSignup");
  //   console.log(state);
  return state.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
