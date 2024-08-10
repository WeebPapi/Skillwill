import { useState, useEffect } from "react";

export const useLocalStorage = (key, fallback) => {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);

  return [item, setItem];
};
