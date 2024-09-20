import { createBrowserRouter } from "react-router-dom"
import UnprotectedRoutes from "./Layouts/UnprotectedRoutes"
import React from "react"
import Home from "./pages/Home"
import ProtectedRoutes from "./Layouts/ProtectedRoutes"
import User from "./pages/User"
import Auth from "./pages/Auth"

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(UnprotectedRoutes),
    children: [
      {
        path: "/",
        element: React.createElement(Home),
      },
      {
        path: "/authorization",
        element: React.createElement(Auth),
      },
    ],
  },
  {
    element: React.createElement(ProtectedRoutes),
    children: [
      {
        path: "/user",
        element: React.createElement(User),
      },
    ],
  },
])
