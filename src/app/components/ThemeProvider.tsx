"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

  
    if (savedTheme === "true") {
      document.documentElement.classList.add("dark");
      document.cookie = "darkMode=true; path=/"; 
    } else {
      document.documentElement.classList.remove("dark");
      document.cookie = "darkMode=false; path=/"; 
    }
  }, []); 

  return <>{children}</>;
}
