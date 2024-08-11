import { useAppSelector } from "@/app/hook";
import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to="/" replace />;

  return children;
};
