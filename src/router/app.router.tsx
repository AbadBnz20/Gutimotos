import { createBrowserRouter, Navigate } from "react-router";
import ShopLayout from "../shop/layouts/ShopLayout";
import { HomePages } from "../shop/pages/HomePages";
import { SparepartsPage } from "../shop/pages/SparepartsPage";
import { lazy } from "react";
import { LoginPages } from "../auth/pages/LoginPages";

const AuthLayout = lazy(() => import("../auth/layouts/AuthLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "spareparts",
        element: <SparepartsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPages />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
