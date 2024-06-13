import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "~/context/AuthContext";
import { useContext } from "react";

const ProtectedRoutes = ({ element: Component }) => {
  const { user } = useContext(AuthContext);

  return user ? Component : <Navigate to="/" />;
};

export default ProtectedRoutes;
