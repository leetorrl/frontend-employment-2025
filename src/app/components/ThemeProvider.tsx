"use client";

import { useEffect } from "react";
import useAppStore from "../stores/store";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode, setIsDarkMode } = useAppStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return <>{children}</>;
}