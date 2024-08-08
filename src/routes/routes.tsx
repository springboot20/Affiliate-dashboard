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
import { VerifyEmail } from "@/pages/verify/Verify";
// import { UseAppSelector } from "@/app/hook";

// const { user, tokens } = UseAppSelector((state) => state.auth);

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   children: [
  //     {
  //       path: "/",
  //       element:
  //         tokens.accessToken && user ? (
  //           <Navigate to="/" />
  //         ) : (
  //           <Navigate to="/auth/login" />
  //         ),
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <AppLayout />,
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
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify-email/:id/:token",
        element: <VerifyEmail />,
      },
      {
        path: "forgot-password",
        element: <Forgot />,
      },
    ],
  },
]);
