import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { toggleTheme } from "./store/theme.slice";

const ThemeToggle = () => {
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", "light");
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(toggleTheme({ storedTheme }));
        setStoredTheme(theme.theme);
      }}
    >
      <p>{theme.theme === "light" ? "dark" : "light"} theme</p>
    </div>
  );
};

export default ThemeToggle;
