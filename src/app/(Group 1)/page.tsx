"use client";
import Link from "next/link";
import { useState } from "react";
export default function Home() {

  const [count, setCount] = useState(0);

  const upcount = () => {

    setCount(count+1);
  }

  return <section>
    <div>
      <h1>홈웹</h1>
      <h1>{count}</h1>
      <button onClick={upcount}>Click!!</button>

<br />
<Link href="/sign-in" className="bg-red-500">로그인 라우터</Link>
    </div>
  </section>;
}
