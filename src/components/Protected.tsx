import { UseAppSelector } from "@/app/hook";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { tokens, user } = UseAppSelector((state) => state.auth);

  if (!user && !tokens) return <Navigate to="/login" replace/>;

  return children;
};
