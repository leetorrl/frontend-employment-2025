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
      <div className={isDarkMode ? "dark text-white" : "bg-white text-black"}>
        <div>
          <h1 className="text-2xl font-bold flex justify-center items-center h-[200px] ">Home</h1>
          <div className="">
          <h1 
  className={`flex justify-center items-center h-[50px] ${count >= 5 ? "text-2xl font-bold" : ""}`}
>
  Count: {count}
</h1>
          <p className="flex justify-center items-center mt-10 ">count가 5를 넘으면 다크모드로 전환 됩니다.</p>
          <p className="flex justify-center items-center mt-5 mb-4 ">(눈뽕주의)</p>
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
        <div className="flex justify-center" >
        <Link
          href="/pokemons"
          className={isDarkMode ? "text-white font-bold " : "link "}
        >
          포켓몬 라우터
        </Link>
        </div>
       </div>
        
      </div>
    </section>
  );
}
