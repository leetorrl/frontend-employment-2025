import ThemeProvider from "../components/ThemeProvider";
import { ReactNode } from "react";
import '../globals.css'
interface LayoutProps {
  children: ReactNode;
}

export default function Group1Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <h1>Group 1 레이아웃입니다.</h1>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
