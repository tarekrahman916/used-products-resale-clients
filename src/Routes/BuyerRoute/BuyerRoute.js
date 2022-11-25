import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <div>Loading</div>;
  }

  if (isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default BuyerRoute;
