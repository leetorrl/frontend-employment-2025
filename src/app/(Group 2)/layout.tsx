'use client';
import { ReactNode } from 'react';
import '../globals.css';
import ThemeProvider from "../components/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function Group2Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <h1>Group 2 레이아웃입니다.</h1>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}