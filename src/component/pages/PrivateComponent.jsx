import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  let auth = JSON.parse(localStorage.getItem("loggedIn")) || {};
 
  return <>{auth.email ? <Outlet /> : <Navigate to="/" replace />}</>;
};

export default PrivateComponent;
