import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    if (!loading && (!user || !user?.email)) {
      Swal.fire({
        title: "You are not logged in! Please login first.",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    }
  },[loading,user]);
  if (loading) return <h2>Loading...</h2>;

  if (!user || !user?.email) {
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
