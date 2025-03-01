"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import useAppStore from "../../stores/store";

export default function Home() {

  const [userid, setid] = useState('')
  const [password, setpassword] = useState('');

  const userlogin = () => {
    console.log('아이디:', userid);
    console.log('비밀번호:', password);
    clicklogin( userid,password);
  }
  const clicklogin = (userid:String,password:String) => {
    alert(`안녕하세요! :\n ${userid} \n ${password}`)
  };


  const {isDarkMode, setIsDarkMode } = useAppStore();


  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);


    return (
  <section >
    <h1 className='text-2xl font-bold text-center mt-5'>로그인웹</h1>
      <div className='h-[400px] flex justify-center items-center'>
        
<div className='flex justify-center  bg-[#eee] py-10 dark:bg-gray-900'>
        <div className="flex flex-col items-center space-x-4 w-[500px] ">
      <div className=''>
      <h1 className="text-3xl mb-4 text-center p-2">Login</h1>
      <form>
        <input 
          value={userid}
          onChange={(e)=>{setid(e.target.value)}}
          className="border inline p-2 w-[300px] box-border mt-1"
          placeholder="아이디"
          type="text"
        />
        <br />
        <input
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          className="border inline p-2 w-[300px] box-border mt-1"
          placeholder="비밀번호"
          type="password"
        />
      </form>

      <div className=" float-left mt-2">
        <input className=" inline rounded-sm" type="checkbox" />
        <h1 className="inline ml-1">로그인상태유지</h1>
      </div>
      <br />
      <div
        onClick={userlogin}
        className={`cursor-pointer mt-3 text-center w-[300px] p-2 box-border text-white bg-green-500 dark:bg-yellow-500`}
      >
        로그인
      </div>
      <div className="mt-1">
        <h1 className="float-left cursor-pointer">회원가입</h1>
        <h1 className="float-right cursor-pointer">아이디 / 회원가입</h1>
      </div>
    </div>
    </div>
    </div>

 
      </div>

      <div className='text-center'>
      <Link href="/sign-up" className={isDarkMode ? "text-red-500 font-bold": "link" }>회원가입 라우터</Link>
      </div>
      
    </section>
    );
  }
  