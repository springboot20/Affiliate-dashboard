import { useAppSelector } from "@/app/hook";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const {
    data: { tokens, user },
  } = useAppSelector((state) => state.auth);

  if (!user && !tokens) return <Navigate to="/auth/login" replace />;

  return children;
};
