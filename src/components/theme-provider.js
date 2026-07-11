"use client";

import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({
  theme: "dark",
  resolvedTheme: "dark",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    window.localStorage.setItem("readyme-theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
        resolvedTheme: "dark",
        toggleTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
