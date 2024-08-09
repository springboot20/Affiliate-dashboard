import { useAppSelector } from "@/app/hook";
import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { tokens, user } = useAppSelector((state) => state.auth);

  if (user && tokens) return <Navigate to="/" replace />;

  return children;
};
