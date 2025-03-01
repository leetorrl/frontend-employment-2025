"use client";
import Link from 'next/link';
import { useEffect } from "react";
import useAppStore from "../../../stores/store";
export default function Home() {

  const { isDarkMode, setIsDarkMode } = useAppStore();
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

    return <section>
      <div>
        <h1 className='text-2xl font-bold'>유저관리웹</h1>
  <Link href="/" className={isDarkMode ? "text-red-500 font-bold": "link" }>홈 라우터</Link>
      </div>
    </section>;
  }
  