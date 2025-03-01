import { ReactNode } from 'react';
import '../globals.css';
import ThemeProvider from "../components/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function Group2Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <h1 className='Group2-header w-full text-left dark:bg-yellow-500'>Group 2 레이아웃입니다.</h1>

          <main className="flex-grow">{children}</main>

          <hr className='mt-10 mb-1 p-0'/>
          <div className='Group2-footer dark:bg-yellow-500'>Create 2025 Lee-donghyun.</div>
        </ThemeProvider>
      </body>
    </html>
  );
}