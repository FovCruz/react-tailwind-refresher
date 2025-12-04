import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"; // <-- importante
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,   // <-- Layout con menú
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> }, // <-- aquí va Dashboard
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,   // <-- Layout de login/register
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
