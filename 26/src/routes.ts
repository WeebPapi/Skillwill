import React from "react"
import Layout from "./Layout"
import Home from "./Home"
import Hello from "./Hello"
import { submitAction } from "./Hello"

export const routes = [
  {
    path: "/",
    element: React.createElement(Layout),
    children: [
      {
        path: "/",
        element: React.createElement(Home),
      },
      {
        path: "/hello",
        element: React.createElement(Hello),
        loader: () => "Using Loader",
      },
      {
        path: "/submitted",
        action: submitAction,
      },
    ],
  },
]
