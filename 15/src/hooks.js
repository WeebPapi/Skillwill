import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);

  return [item, setItem];
};

const breakpoints = 576;
const detectDevice = () =>
  window.innerWidth < breakpoints ? "MOBILE" : "DESKTOP";

const useDetectDevice = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(() => detectDevice());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
export { useLocalStorage, useDetectDevice };
