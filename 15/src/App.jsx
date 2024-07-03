import "./App.css";
import { useEffect, useState } from "react";
import { useLocalStorage, useDetectDevice } from "./hooks";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode", false);
  const device = useDetectDevice();
  const stylesLight = {
    app: {
      backgroundColor: "white",
      color: "black",
    },
    button: {
      backgroundColor: "inherit",
      color: "black",
      cursor: "pointer",
    },
  };
  const stylesDark = {
    app: {
      backgroundColor: "black",
      color: "white",
    },
    button: {
      backgroundColor: "gray",
      color: "white",
      cursor: "pointer",
    },
  };
  const useDarkMode = darkMode && device === "DESKTOP";
  useEffect(() => {
    if (useDarkMode) document.getElementById("body").style.background = "black";
    else document.getElementById("body").style.background = "white";
  }, [useDarkMode]);
  return (
    <div className="App" style={useDarkMode ? stylesDark.app : stylesLight.app}>
      <h1>Count is {count}</h1>
      <button
        style={useDarkMode ? stylesDark.button : stylesLight.button}
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        style={useDarkMode ? stylesDark.button : stylesLight.button}
        type="button"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      {device === "DESKTOP" ? (
        <button
          style={useDarkMode ? stylesDark.button : stylesLight.button}
          type="button"
          onClick={() => {
            setDarkMode((prev) => !prev);
          }}
        >
          {darkMode ? "Light" : "Dark"} mode
        </button>
      ) : null}
    </div>
  );
}

export default App;
