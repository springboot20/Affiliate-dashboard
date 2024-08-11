import { useAppSelector } from "@/app/hook";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  return children;
};
