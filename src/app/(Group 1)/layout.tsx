import ThemeProvider from "../components/ThemeProvider";
import { ReactNode } from "react";
import '../globals.css'

interface LayoutProps {
  children: ReactNode;
}

export default function Group1Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <h1 className="Group1-header w-full text-left dark:bg-red-500">Group 1 레이아웃입니다.</h1>
          
          <main className="flex-grow">{children}</main>

          <hr className="mt-10 mb-1 p-0" />
          <div className="Group1-footer mt-auto dark:bg-red-500">Create 2025 Lee-donghyun.</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
