'use client';
import { ReactNode } from 'react';
import useAppStore from '../stores/store'; 
import '../globals.css';
export default function Layout({ children }: { children: ReactNode }) {
  const { isDarkMode } = useAppStore(); 

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
        <h1>Group 1 레이아웃입니다.</h1>
        {children}
      </body>
    </html>
  );
}