import ThemeProvider from "../components/ThemeProvider";
import { ReactNode } from "react";
import '../globals.css'
import Link from "next/link";
interface LayoutProps {
  children: ReactNode;
}

export default function Group1Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
        <header className="Group1-header w-full text-left dark:bg-red-500">
  <div className="flex justify-between items-center p-0">
    <h1>Group 1 레이아웃입니다.</h1>
    <nav className="flex gap-4">
      <Link href="/" className="text-lg">|Home|</Link>
      <Link href="/pokemons" className="text-lg">|Pokemons|</Link>
      <Link href="/sign-in" className="text-lg">|sign-in|</Link>
      <Link href="/sign-up" className="text-lg">|sign-up|</Link>
      <Link href="/admin" className="text-lg">|admin|</Link>
      <Link href="/admin/users" className="text-lg">|users|</Link>
    </nav>
  </div>
</header>
          
          <main className="flex-grow">{children}</main>

          <hr className="mt-10 mb-1 p-0" />
          <div className="Group1-footer mt-auto dark:bg-red-500">Create 2025 Lee-donghyun.</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
