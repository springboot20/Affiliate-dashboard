import AppLayout from "@/layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";

import { Forgot } from "@/pages/forgot-password/Forgot";
import { Accounts } from "@/pages/account/Accounts";
import { CreditCards } from "@/pages/credit-cards/CreditCards";
import { OverView } from "@/pages/dashboard/OverView";
import { Investments } from "@/pages/investments/Investments";
import { Login } from "@/pages/login/login";
import { Register } from "@/pages/register/register";
import { Transactions } from "@/pages/transactions/Transactions";
import { SendEmail } from "@/pages/verify/SendMail";
import { ProtectedRoute } from "@/components/Protected";
import { PublicRoute } from "@/components/Public";
import { EmailVerification } from "@/pages/verify/EmailVerification";
import { EmailSentMessage } from "@/pages/verify/EmailSent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <OverView />,
      },

      {
        path: "/transactions",
        element: <Transactions />,
      },

      {
        path: "/accounts",
        element: <Accounts />,
      },

      {
        path: "/investments",
        element: <Investments />,
      },

      {
        path: "/credit-card",
        element: <CreditCards />,
      },
    ],
  },

  {
    path: "/auth",
    children: [
      {
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },

      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "send-email",
        element: (
          <PublicRoute>
            <SendEmail />
          </PublicRoute>
        ),
      },
      {
        path: "verify-email/:id/:token",
        element: (
          <PublicRoute>
            <EmailVerification />
          </PublicRoute>
        ),
      },
      {
        path: "email-sent-message",
        element: (
          <PublicRoute>
            <EmailSentMessage />
          </PublicRoute>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <PublicRoute>
            <Forgot />
          </PublicRoute>
        ),
      },
    ],
  },
]);
