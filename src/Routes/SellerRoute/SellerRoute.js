import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }
  return (
    <Navigate to="/" state={{ from: location }} replace>
      {" "}
    </Navigate>
  );
};

export default SellerRoute;
