import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loader />;
  }

  if (isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default SellerRoute;
