"use client";
import Link from 'next/link';
import { useEffect } from "react";
import useAppStore from "../../stores/store";

export default function Home() {

  const {isDarkMode, setIsDarkMode } = useAppStore();
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

    return <section>
       <div className='h-[400px]'>
        <h1 className='text-2xl font-bold'>회원가입웹</h1>
  <Link href="/admin" className={isDarkMode ? "text-red-500 font-bold": "link" }>관리자 라우터</Link>
      </div>
    </section>;
  }
  