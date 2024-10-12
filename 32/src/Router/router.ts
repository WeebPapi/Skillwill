import { createBrowserRouter } from "react-router-dom"
import { createElement } from "react"
import HomePage from "../Pages/HomePage"
import BeerPage from "../Pages/BeerPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(HomePage),
  },
  {
    path: "/:id",
    element: createElement(BeerPage),
  },
])
