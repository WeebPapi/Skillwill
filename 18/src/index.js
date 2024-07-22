import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Editing from "./pages/Editing/Editing";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

const LangContext = createContext(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="/Edit/:taskId" element={<Editing />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const IndexComponent = () => {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <React.StrictMode>
        <header>
          <LanguageToggle />
        </header>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LangContext.Provider>
  );
};
root.render(<IndexComponent />);

export { LangContext };
