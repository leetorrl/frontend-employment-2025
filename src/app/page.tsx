"use client";
import Link from "next/link";

export default function Home() {
  return <section>
    <div>
      <h1>홈웹</h1>
<Link href="/sign-in" className="bg-red-500">로그인 라우터</Link>
    </div>
  </section>;
}
