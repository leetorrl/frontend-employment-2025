import ThemeProvider from "../components/ThemeProvider";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
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
