import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";

function ProtectedRoute() {
  const user = useSelector((state) => state.user);
  const { username } = useParams();

  if (username && username !== user.username) return <Navigate to="/forbidden" />;

  return user.accessToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
