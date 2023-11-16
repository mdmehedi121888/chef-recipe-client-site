import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLogged, loading, user } = useContext(AuthContext);
  if (loading)
    return <span className="loading loading-spinner text-primary"></span>;
  if (isLogged) return children;
  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
