"use client";

import { useEffect, useState } from "react";
import useAppStore from "../stores/store";
import Link from "next/link";

export default function Home() {
  const { globalCount, setGlobalCount, isDarkMode, setIsDarkMode } = useAppStore();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedCount !== null) {
      const parsedCount = Number(savedCount);
      setCount(parsedCount);
    } else {
      setCount(0);
    }

    if (savedTheme === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    if (count === null) return;

    if (count >= 5) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }

    localStorage.setItem("count", count.toString());
  }, [count, setIsDarkMode]);

  const upcount = () => {
    if (count === null || count === 10) return;
    const newCount = count + 1;
    setCount(newCount);
    setGlobalCount(newCount);
  };

  const downcount = () => {
    if (count === null || count === 0) return;
    const newCount = count - 1;
    setCount(newCount);
    setGlobalCount(newCount);
  };

  if (count === null) return null;

  return (
    <section>
      <div className="h-full flex justify-center items-center">
        <div className="">
          <h1 className="text-2xl font-bold flex justify-center items-center h-[200px]">Home</h1>
          <div>
            <h1 className={`flex justify-center items-center h-[50px] ${count >= 5 ? "text-2xl font-bold" : ""}`}>
              Count: {count}
            </h1>
            <p className="flex justify-center items-center mt-10">count가 5를 넘으면 다크모드로 전환 됩니다.</p>
            <p className="flex justify-center items-center mt-5 mb-4">(※사용전 쿠키와 로컬을 비위주시길 바랍니다.)</p>
            <div className="flex justify-center items-center">
              <button
                onClick={upcount}
                className={`min-w-[80px] px-1 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 
                  ${isDarkMode ? "bg-green-500 hover:bg-green-600 focus:ring-green-400 text-black" : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 text-white"}`}
              >
                Up!
              </button>
              <button
                onClick={downcount}
                className={`min-w-[80px] px-1 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 
                  ${isDarkMode ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 text-black" : "bg-red-500 hover:bg-red-600 focus:ring-red-400 text-white"}`}
              >
                Down!
              </button>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <Link href="/pokemons" className={isDarkMode ? "text-red-500 font-bold" : "link"}>
              포켓몬 라우터
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
