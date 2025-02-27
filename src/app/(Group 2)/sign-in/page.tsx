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
      <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
        <h1>로그인웹</h1>
  <Link href="/sign-up">회원가입 라우터</Link>
      </div>
    </section>;
  }
  