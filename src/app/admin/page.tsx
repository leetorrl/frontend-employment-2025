"use client";
import Link from 'next/link';

export default function Home() {
    return <section>
      <div>
        <h1>관리자웹</h1>
  <Link href="/admin/users">유저관리 라우터</Link>
      </div>
    </section>;
  }
  