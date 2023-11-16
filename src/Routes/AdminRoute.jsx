import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/userAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  if (user && isAdmin.admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
