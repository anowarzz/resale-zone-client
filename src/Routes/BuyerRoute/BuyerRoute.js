import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";


const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isBuyer) {
    return children;
  }
  return (
    <Navigate to="/" state={{ from: location }} replace>

    </Navigate>
  );
};

export default BuyerRoute;
