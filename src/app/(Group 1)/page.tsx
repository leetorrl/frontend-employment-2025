'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import useAppStore from "../stores/store";

export default function Home() {
  const { globalCount, setGlobalCount, isDarkMode, setIsDarkMode } = useAppStore();
  const [count, setCount] = useState<number>(globalCount);

  const upcount = () => {
    if (count === 10) return;
    const newCount = count + 1;
    setCount(newCount);
    setGlobalCount(newCount);
  };

  const downcount = () => {
    if (count === 0) return;
    const newCount = count - 1;
    setCount(newCount);
    setGlobalCount(newCount);
  };

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedCount) {
      setCount(Number(savedCount));
    }
    if (savedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
    
    if (count >= 5) {
      setIsDarkMode(true);
      localStorage.setItem("darkMode", "true");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("darkMode", "false");
    }
  }, [count, setIsDarkMode]);

  return (
    <section>
      <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
        <h1>홈웹</h1>
        <h1>Count: {count}</h1>
        <button onClick={upcount}>up!</button>
        <button onClick={downcount}>down!</button>
        <br />
        <Link href="/pokemons" className="bg-yellow-500">
          포켓몬 라우터
        </Link>
      </div>
    </section>
  );
}
