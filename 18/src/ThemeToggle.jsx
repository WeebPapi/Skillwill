import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store/theme.slice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      <p>{theme.theme === "light" ? "dark" : "light"} theme</p>
    </div>
  );
};

export default ThemeToggle;
