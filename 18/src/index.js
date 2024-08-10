import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Editing from "./pages/Editing/Editing";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { store } from "./store";
import ThemeToggle from "./ThemeToggle";

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
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <React.StrictMode>
        <header
          style={
            theme === "dark"
              ? { backgroundColor: "#242424", color: "white" }
              : { backgroundColor: "white", color: "black" }
          }
        >
          <LanguageToggle />
          <ThemeToggle />
        </header>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LangContext.Provider>
  );
};
root.render(
  <Provider store={store}>
    <IndexComponent />
  </Provider>
);

export { LangContext };
