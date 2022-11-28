import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
