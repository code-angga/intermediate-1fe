import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomeLayouts from "../components/template/HomeLayouts";
import DaftarSaya from "../components/organisms/daftarSaya/DaftarSaya";
import Series from "../components/organisms/series/Series";
import Film from "../components/organisms/film/Film";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/homepage",
    element: <HomeLayouts />,
  },
  {
    path: "/daftarsaya",
    element: <DaftarSaya />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/film",
    element: <Film />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
