"use client";

import Link from "next/link";
import useCountupdown from "../stores/store";

export default function Home() {
  const count = useCountupdown((state) => state.count);
  const upcount = useCountupdown((state) => state.upcount);
  const downcount = useCountupdown((state) => state.downcount);

  if(count === 10 ){
    return;
  }


  return (
    <section>
      <div>
        <h1>홈웹</h1>
        <h1>Count: {count}</h1>
        <button onClick={upcount}>up!</button>
        <button onClick={downcount}>down!</button>
        <br />
        <Link href="/sign-in" className="bg-red-500">
          로그인 라우터
        </Link>
      </div>
    </section>
  );
}